import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { curationContentUpdatedAt } from "../src/config/contentFreshness.mjs";

const detailRoot = path.resolve("dist/curations");
const minimumDetailCount = 60;
const requiredFactNames = [
  "제품명",
  "상품 유형",
  "구성",
  "크기",
  "판매처",
  "수입사",
  "원산지",
  "배송",
];
const redundantDescriptionTitlePatterns = [
  /배송|발송/,
  /(?:상품|제품) 정보/,
  /(?:주문|구매).*(?:상품|제품|옵션).*확인/,
  /불교 신자가 아니어도/,
];
const casualEditorialTonePattern =
  /(?:있어요|없어요|좋아요|괜찮아요|않아요|어울려요|보여요|느껴져요|거예요|아니에요|이에요|예요|해요|돼요|으니까요|줘요|같아요|들려요|있지요|많지요|렸어요|했어요|인데요)(?=[<.!?\s])/;

function countMatches(text, pattern) {
  return [...text.matchAll(pattern)].length;
}

function decodeHtml(text) {
  return text
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function readTagContent(html, pattern) {
  return decodeHtml(html.match(pattern)?.[1]?.trim() ?? "");
}

function collectSchemaTypes(html) {
  const types = new Set();
  const scriptPattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;

  for (const match of html.matchAll(scriptPattern)) {
    let schema;

    try {
      schema = JSON.parse(match[1]);
    } catch {
      continue;
    }

    const visit = (value) => {
      if (Array.isArray(value)) {
        value.forEach(visit);
        return;
      }

      if (!value || typeof value !== "object") return;

      const type = value["@type"];
      if (Array.isArray(type)) type.forEach((item) => types.add(item));
      if (typeof type === "string") types.add(type);
      Object.values(value).forEach(visit);
    };

    visit(schema);
  }

  return types;
}

async function findDetailFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findDetailFiles(entryPath)));
    } else if (entry.name === "index.html") {
      files.push(entryPath);
    }
  }

  return files;
}

async function validateDetailPage(html, filePath) {
  const relativePath = path.relative(path.resolve("dist"), filePath);
  const errors = [];
  const title = readTagContent(html, /<title>([\s\S]*?)<\/title>/);
  const description = readTagContent(
    html,
    /<meta name="description" content="([^"]*)"\s*\/?>/,
  );
  const descriptionSectionCount = countMatches(
    html,
    /class="curation-detail-description__section"/g,
  );
  const sliderCount = countMatches(html, /data-curation-slider-slide/g);
  const sliderStoreLinkCount = countMatches(html, /data-curation-slider-store-link/g);
  const faqBlock = html.match(/<section id="faq"[\s\S]*?<\/section>/)?.[0] ?? "";
  const faqCount = countMatches(faqBlock, /<article>/g);
  const factNames = [...html.matchAll(/<dt>(.*?)<\/dt>/g)].map((match) =>
    decodeHtml(match[1].trim()),
  );
  const descriptionTitles = [
    ...html.matchAll(
      /class="curation-detail-description__section"[\s\S]*?<h2>(.*?)<\/h2>/g,
    ),
  ].map((match) => decodeHtml(match[1].trim()));
  const descriptionBlock =
    html.match(/<div id="product-description"[\s\S]*?<\/div>/)?.[0] ?? "";
  const schemaTypes = collectSchemaTypes(html);
  const ogImage = readTagContent(
    html,
    /<meta property="og:image" content="([^"]*)"\s*\/?>/,
  );
  const ogImageWidth = readTagContent(
    html,
    /<meta property="og:image:width" content="([^"]*)"\s*\/?>/,
  );
  const ogImageHeight = readTagContent(
    html,
    /<meta property="og:image:height" content="([^"]*)"\s*\/?>/,
  );
  const ogImageAlt = readTagContent(
    html,
    /<meta property="og:image:alt" content="([^"]*)"\s*\/?>/,
  );
  const metaKeywords = readTagContent(
    html,
    /<meta name="keywords" content="([^"]*)"\s*\/?>/,
  )
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  if (!html.includes("curation-detail__article--sample")) {
    errors.push("공통 검색형 상세 레이아웃이 없습니다.");
  }
  if (!html.includes('aria-label="관련 검색어"')) {
    errors.push("관련 검색어 영역이 없습니다.");
  }
  if (sliderCount < 2) errors.push(`슬라이더 이미지가 부족합니다: ${sliderCount}개`);
  if (sliderStoreLinkCount !== sliderCount) {
    errors.push(`스토어 이미지 링크 수가 슬라이드 수와 다릅니다: ${sliderStoreLinkCount}/${sliderCount}`);
  }
  if (descriptionSectionCount < 5 || descriptionSectionCount > 7) {
    errors.push(`본문 섹션은 5~7개여야 합니다: ${descriptionSectionCount}개`);
  }
  if (faqCount < 4 || faqCount > 6) {
    errors.push(`FAQ는 4~6개여야 합니다: ${faqCount}개`);
  }
  if (!html.includes("1~3영업일")) errors.push("표준 배송 문구가 없습니다.");

  for (const factName of requiredFactNames) {
    if (!factNames.includes(factName)) errors.push(`상품 정보 필드가 없습니다: ${factName}`);
  }

  for (const sectionTitle of descriptionTitles) {
    if (redundantDescriptionTitlePatterns.some((pattern) => pattern.test(sectionTitle))) {
      errors.push(`본문에 중복 안내 섹션이 있습니다: ${sectionTitle}`);
    }
  }

  if (casualEditorialTonePattern.test(descriptionBlock)) {
    errors.push("본문 또는 소제목에 구어체 종결 표현이 남아 있습니다.");
  }

  for (const schemaType of ["Product", "Article", "FAQPage", "BreadcrumbList"]) {
    if (!schemaTypes.has(schemaType)) errors.push(`구조화 데이터가 없습니다: ${schemaType}`);
  }

  if (!title) errors.push("SEO 제목이 없습니다.");
  if (!description) errors.push("메타 설명이 없습니다.");
  if (title.length > 40) errors.push(`SEO 제목이 너무 깁니다: ${title.length}자`);
  if (/찾는 분께 소개합니다|소개합니다/.test(description)) {
    errors.push("메타 설명에 반복형 소개 문구가 남아 있습니다.");
  }
  if (metaKeywords.length > 12) {
    errors.push(`메타 키워드가 너무 많습니다: ${metaKeywords.length}개`);
  }
  if (!html.includes('<meta name="robots" content="index,follow')) {
    errors.push("검색 노출 robots 설정이 없습니다.");
  }
  if (!ogImage) errors.push("OG 이미지가 없습니다.");
  if (!ogImage.endsWith("-og.jpg")) errors.push("압축 OG 이미지가 연결되지 않았습니다.");
  if (ogImageWidth !== "1200" || ogImageHeight !== "1200") {
    errors.push(`OG 이미지 규격이 올바르지 않습니다: ${ogImageWidth}×${ogImageHeight}`);
  }
  if (!ogImageAlt.endsWith("상품 대표 이미지")) {
    errors.push("OG 이미지 설명이 표준 형식이 아닙니다.");
  }

  if (ogImage) {
    try {
      const ogImagePath = path.resolve(
        "dist",
        decodeURI(new URL(ogImage).pathname).replace(/^\/+/, ""),
      );
      const ogImageStats = await stat(ogImagePath);

      if (ogImageStats.size < 5_000 || ogImageStats.size > 500_000) {
        errors.push(`OG 이미지 용량이 기준을 벗어납니다: ${ogImageStats.size} bytes`);
      }
    } catch {
      errors.push("OG 이미지 파일을 찾을 수 없습니다.");
    }
  }

  const imageObjectCount = countMatches(html, /"@type":"ImageObject"/g);
  if (imageObjectCount > 3) {
    errors.push(`구조화 데이터 이미지가 너무 많습니다: ${imageObjectCount}개`);
  }
  if (html.includes('"@type":"Offer"')) {
    errors.push("실시간 가격·재고가 없는 Offer 구조화 데이터가 남아 있습니다.");
  }
  if (html.includes('"@type":"DefinedTermSet"')) {
    errors.push("키워드 나열형 DefinedTermSet이 남아 있습니다.");
  }
  if (!html.includes(`"dateModified":"${curationContentUpdatedAt}"`)) {
    errors.push("구조화 데이터 수정일이 없습니다.");
  }

  return { description, errors, relativePath, title };
}

const detailFiles = await findDetailFiles(detailRoot);
const results = await Promise.all(
  detailFiles.map(async (filePath) =>
    validateDetailPage(await readFile(filePath, "utf8"), filePath),
  ),
);
const failures = results.filter((result) => result.errors.length > 0);

if (detailFiles.length < minimumDetailCount) {
  failures.unshift({
    relativePath: "curations",
    errors: [`상세페이지가 기준보다 적습니다: ${detailFiles.length}/${minimumDetailCount}`],
  });
}

for (const field of ["title", "description"]) {
  const values = new Map();

  for (const result of results) {
    const value = result[field];
    if (!value) continue;
    const paths = values.get(value) ?? [];
    paths.push(result.relativePath);
    values.set(value, paths);
  }

  for (const [value, paths] of values) {
    if (paths.length > 1) {
      failures.push({
        relativePath: paths.join(", "),
        errors: [`중복 ${field}: ${value}`],
      });
    }
  }
}

const sitemap = await readFile(path.resolve("dist/sitemap-0.xml"), "utf8");
const curationSitemapEntries = [
  ...sitemap.matchAll(/<url><loc>[^<]*\/curations\/[^<]+<\/loc>([\s\S]*?)<\/url>/g),
];
const staleSitemapEntries = curationSitemapEntries.filter(
  (entry) => !entry[1].includes(`<lastmod>${curationContentUpdatedAt}`),
);

if (curationSitemapEntries.length < minimumDetailCount || staleSitemapEntries.length > 0) {
  failures.push({
    relativePath: "sitemap-0.xml",
    errors: [
      `큐레이션 수정일 누락: ${staleSitemapEntries.length}개, 전체 ${curationSitemapEntries.length}개`,
    ],
  });
}

if (failures.length > 0) {
  console.error(`\n큐레이션 상세페이지 검증 실패 (${failures.length}건)`);
  failures.forEach((failure) => {
    console.error(`\n- ${failure.relativePath}`);
    failure.errors.forEach((error) => console.error(`  ${error}`));
  });
  process.exitCode = 1;
} else {
  console.log(`큐레이션 상세페이지 ${detailFiles.length}개 검증 완료`);
}
