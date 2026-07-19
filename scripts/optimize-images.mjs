import { readdir, readFile, mkdir, stat } from "node:fs/promises";
import { availableParallelism } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const imagesDirectory = fileURLToPath(new URL("../public/images/", import.meta.url));
const dataDirectory = fileURLToPath(new URL("../src/data/", import.meta.url));
const targetWidths = [80, 160, 320, 480, 720];
const outputFormats = [
  ["webp", { quality: 78, effort: 4 }],
];
const rasterPattern = /\.(png|jpe?g)$/i;
const generatedOgPattern = /-og\.jpg$/i;
const curationRepresentativePattern =
  /[\\/]curation-details[\\/].+-01\.(png|jpe?g)$/i;
const curationOgSize = 1200;

const listRasterImages = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return listRasterImages(entryPath);
      }

      return rasterPattern.test(entry.name) && !generatedOgPattern.test(entry.name)
        ? [entryPath]
        : [];
    }),
  );

  return files.flat();
};

const listManualSliderRepresentativeImages = async () => {
  const entries = await readdir(dataDirectory, { withFileTypes: true });
  const representativeImages = new Set();

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".ts")) continue;

    const source = await readFile(path.join(dataDirectory, entry.name), "utf8");
    const imageBaseVariables = new Map(
      [...source.matchAll(/const\s+(\w+)\s*=\s*["'](\/images\/curation-details\/[^"']+)["'];/g)].map(
        (match) => [match[1], match[2]],
      ),
    );
    const sliderPattern = /const\s+\w*SliderImages\s*=\s*\[\s*\{\s*src:\s*([^,\n]+),/g;

    for (const match of source.matchAll(sliderPattern)) {
      const expression = match[1].trim();
      const directPath = expression.match(/^["']([^"']+)["']$/)?.[1];
      const template = expression.match(/^`([^`]+)`$/)?.[1];
      const resolvedPath =
        directPath ??
        template?.replace(/\$\{(\w+)\}/g, (_, variableName) => imageBaseVariables.get(variableName) ?? "");

      if (resolvedPath?.startsWith("/images/curation-details/")) {
        representativeImages.add(path.join(imagesDirectory, resolvedPath.replace(/^\/images\//, "")));
      }
    }
  }

  return representativeImages;
};

const shouldWrite = async (sourcePath, outputPath) => {
  try {
    const [sourceStats, outputStats] = await Promise.all([stat(sourcePath), stat(outputPath)]);
    return outputStats.mtimeMs < sourceStats.mtimeMs;
  } catch {
    return true;
  }
};

const createVariant = async (sourcePath, width, format, options) => {
  const parsedPath = path.parse(sourcePath);
  const outputPath = path.join(parsedPath.dir, `${parsedPath.name}-${width}.${format}`);

  if (!(await shouldWrite(sourcePath, outputPath))) {
    return false;
  }

  await mkdir(parsedPath.dir, { recursive: true });
  await sharp(sourcePath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .toFormat(format, options)
    .toFile(outputPath);

  return true;
};

const createCurationOgImage = async (sourcePath) => {
  const parsedPath = path.parse(sourcePath);
  const outputPath = path.join(parsedPath.dir, `${parsedPath.name}-og.jpg`);

  if (!(await shouldWrite(sourcePath, outputPath))) {
    return false;
  }

  await sharp(sourcePath)
    .rotate()
    .resize({
      width: curationOgSize,
      height: curationOgSize,
      fit: "contain",
      background: "#f7f5ef",
    })
    .flatten({ background: "#f7f5ef" })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(outputPath);

  return true;
};

const runWithLimit = async (tasks, limit) => {
  let cursor = 0;
  let completed = 0;

  const workers = Array.from({ length: limit }, async () => {
    while (cursor < tasks.length) {
      const task = tasks[cursor];
      cursor += 1;
      if (await task()) completed += 1;
    }
  });

  await Promise.all(workers);
  return completed;
};

const sourceImages = await listRasterImages(imagesDirectory);
const manualSliderRepresentativeImages = await listManualSliderRepresentativeImages();
const tasks = sourceImages.flatMap((sourcePath) =>
  targetWidths.flatMap((width) =>
    outputFormats.map(([format, options]) => () => createVariant(sourcePath, width, format, options)),
  ),
);
const curationOgTasks = sourceImages
  .filter(
    (sourcePath) =>
      curationRepresentativePattern.test(sourcePath) ||
      manualSliderRepresentativeImages.has(sourcePath),
  )
  .map((sourcePath) => () => createCurationOgImage(sourcePath));
const concurrency = Math.max(1, Math.min(4, availableParallelism()));
const generatedCount = await runWithLimit([...tasks, ...curationOgTasks], concurrency);
const totalTaskCount = tasks.length + curationOgTasks.length;

console.log(
  `Optimized image variants ready: ${generatedCount} generated, ${totalTaskCount - generatedCount} already current.`,
);
