import { readdir, mkdir, stat } from "node:fs/promises";
import { availableParallelism } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const imagesDirectory = fileURLToPath(new URL("../public/images/", import.meta.url));
const targetWidths = [80, 160, 320, 480, 720];
const outputFormats = [
  ["webp", { quality: 78, effort: 4 }],
];
const rasterPattern = /\.(png|jpe?g)$/i;

const listRasterImages = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return listRasterImages(entryPath);
      }

      return rasterPattern.test(entry.name) ? [entryPath] : [];
    }),
  );

  return files.flat();
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
const tasks = sourceImages.flatMap((sourcePath) =>
  targetWidths.flatMap((width) =>
    outputFormats.map(([format, options]) => () => createVariant(sourcePath, width, format, options)),
  ),
);
const concurrency = Math.max(1, Math.min(4, availableParallelism()));
const generatedCount = await runWithLimit(tasks, concurrency);

console.log(
  `Optimized image variants ready: ${generatedCount} generated, ${tasks.length - generatedCount} already current.`,
);
