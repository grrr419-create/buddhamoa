import type {
  ProductCurationDetail,
  ProductCurationDetailDescriptionSection,
  ProductCurationDetailFact,
  ProductCurationDetailImage,
  ProductCurationDetailSection,
} from "../types";
import { curationContentUpdatedAt } from "../config/contentFreshness.mjs";

export const standardDeliveryFact = {
  name: "배송",
  value: "평일 낮 12시까지 결제 완료 시 당일 발송 원칙, 출고 후 평균 1~3영업일",
};

export const standardDeliveryFaq = {
  question: "배송은 얼마나 걸리나요?",
  answer:
    "평일 낮 12시까지 결제가 완료된 주문은 당일 발송을 원칙으로 하며, 출고 후 배송은 보통 1~3영업일 정도 소요됩니다. 택배사 사정이나 배송 지역에 따라 달라질 수 있습니다.",
};

type SearchSliderCurationDetailOverride = Partial<ProductCurationDetail> &
  Required<
    Pick<
      ProductCurationDetail,
      | "descriptionSections"
      | "faqs"
      | "image"
      | "imageAlt"
      | "name"
      | "quickFacts"
      | "relatedSearchTerms"
      | "seo"
      | "sliderImages"
      | "summary"
    >
  >;

type SearchSliderDetailCandidate = Pick<
  ProductCurationDetail,
  "descriptionBody" | "descriptionSections" | "quickFacts" | "relatedSearchTerms" | "sliderImages"
>;

export type NumberedSearchSliderCurationDetailInput = {
  curationSlug: string;
  curationName: string;
  detailImageBase: string;
  productSlug: string;
  name: string;
  subtitle: string;
  summary: string;
  imageAlt: string;
  storeUrl: string;
  imagePrefix: string;
  imageCount: number;
  relatedSearchTerms: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  seoTitle: string;
  seoDescription: string;
  quickFacts: ProductCurationDetailFact[];
  descriptionSections: ProductCurationDetailDescriptionSection[];
  faqs?: NonNullable<ProductCurationDetail["faqs"]>;
  commonFaqs?: NonNullable<ProductCurationDetail["faqs"]>;
  additionalKeywords?: string[];
};

const quickFactNameAliases: Record<string, string> = {
  사이즈: "크기",
  소재: "재질",
  중량: "무게",
  제조국: "원산지",
  관리: "관리 방법",
  "비즈 크기": "크기",
  "구슬 크기": "크기",
  "염주 알 크기": "크기",
  길이: "크기",
  "포인트 비즈 크기": "포인트 크기",
  "착용 형태": "착용 방식",
  포인트: "특징",
  "주요 모티프": "특징",
};

const quickFactOrder = [
  "제품명",
  "상품 유형",
  "구성",
  "선택 옵션",
  "크기",
  "포인트 크기",
  "재질",
  "무게",
  "착용 방식",
  "108염주 여부",
  "표현",
  "특징",
  "추천 공간",
  "추천 용도",
  "추천 대상",
  "주의 사항",
  "관리 방법",
  "판매처",
  "수입사",
  "원산지",
  "배송",
];

function uniqueValues(values: Array<string | undefined>) {
  return [...new Set(values.map((value) => value?.trim()).filter(Boolean))] as string[];
}

function normalizeQuickFactName(name: string) {
  const trimmedName = name.trim();

  return quickFactNameAliases[trimmedName] ?? trimmedName;
}

function getQuickFactValue(
  quickFacts: ProductCurationDetailFact[],
  factNames: string[],
) {
  return quickFacts.find((fact) => factNames.includes(fact.name))?.value.trim();
}

function buildRepresentativeImageAlt(
  name: string,
  quickFacts: ProductCurationDetailFact[],
) {
  const material = getQuickFactValue(quickFacts, ["재질"]);
  const materialDescription = material ? ` ${material} 재질` : "";

  return `${name}${materialDescription} 상품 대표 이미지`;
}

function buildSliderImageAlt(name: string, index: number) {
  return index === 0
    ? `${name} 상품 대표 이미지`
    : `${name} 상품 상세 이미지 ${index + 1}`;
}

function buildNaturalSliderImageAlt(
  name: string,
  image: ProductCurationDetailImage,
  index: number,
) {
  if (index === 0) return buildSliderImageAlt(name, index);

  const caption = image.caption?.trim();
  const genericCaption = `${name} 상품 디테일 ${index + 1}`;

  if (!caption || caption === genericCaption) return buildSliderImageAlt(name, index);

  const description = caption.includes(name) ? caption : `${name} ${caption}`;

  return /(?:이미지|사진)$/.test(description) ? description : `${description} 이미지`;
}

export function normalizeCurationProductQuickFacts(
  quickFacts?: ProductCurationDetailFact[],
): ProductCurationDetailFact[] | undefined {
  if (!quickFacts?.length) return undefined;

  const factsByName = new Map<string, { fact: ProductCurationDetailFact; index: number }>();

  quickFacts.forEach((fact, index) => {
    const name = normalizeQuickFactName(fact.name);
    const value = fact.value.trim();

    if (!name || !value) return;

    factsByName.set(name, {
      fact: { name, value },
      index,
    });
  });

  return [...factsByName.values()]
    .sort((a, b) => {
      const aOrder = quickFactOrder.indexOf(a.fact.name);
      const bOrder = quickFactOrder.indexOf(b.fact.name);
      const deliveryOrder = quickFactOrder.indexOf("배송");
      const normalizedAOrder = aOrder >= 0 ? aOrder : deliveryOrder - 0.5;
      const normalizedBOrder = bOrder >= 0 ? bOrder : deliveryOrder - 0.5;

      return normalizedAOrder - normalizedBOrder || a.index - b.index;
    })
    .map(({ fact }) => fact);
}

function buildSearchSliderSeoKeywords(detail: SearchSliderCurationDetailOverride) {
  return uniqueValues([
    detail.name,
    detail.seo.primaryKeyword,
    ...(detail.seo.secondaryKeywords ?? []),
    ...(detail.relatedSearchTerms ?? []),
    ...(detail.seo.keywords ?? []),
  ]);
}

function buildSearchSliderSeoDescription(detail: SearchSliderCurationDetailOverride) {
  const currentDescription = detail.seo.description?.trim();
  const summary = detail.summary.trim();
  const normalizedSummary = /[.!?]$/.test(summary) ? summary : `${summary}.`;
  const isTemplateDescription = Boolean(
    currentDescription && /찾는 분께|소개합니다/.test(currentDescription),
  );

  return !currentDescription || isTemplateDescription
    ? normalizedSummary
    : currentDescription;
}

export function defineSearchSliderCurationDetail(
  detail: SearchSliderCurationDetailOverride,
): SearchSliderCurationDetailOverride {
  const quickFacts = normalizeCurationProductQuickFacts(detail.quickFacts) ?? [];

  return {
    ...detail,
    imageAlt: buildRepresentativeImageAlt(detail.name, quickFacts),
    quickFacts,
    relatedSearchTerms: uniqueValues(detail.relatedSearchTerms),
    sliderImages: detail.sliderImages.map((image, index) => ({
      ...image,
      alt: buildNaturalSliderImageAlt(detail.name, image, index),
    })),
    seo: {
      ...detail.seo,
      description: buildSearchSliderSeoDescription(detail),
      keywords: buildSearchSliderSeoKeywords(detail),
    },
  };
}

const redundantDescriptionTitlePatterns = [
  /배송|발송/,
  /(?:상품|제품) 정보/,
  /(?:주문|구매).*(?:상품|제품|옵션).*확인/,
  /불교 신자가 아니어도/,
];

const formalToneReplacements: Array<[RegExp, string]> = [
  [/있잖아요/g, "있습니다"],
  [/진행돼요/g, "진행됩니다"],
  [/소요돼요/g, "소요됩니다"],
  [/자연스러워요/g, "자연스럽습니다"],
  [/편안해져요/g, "편안해집니다"],
  [/만들어졌어요/g, "만들어졌습니다"],
  [/만들어줘요/g, "만들어줍니다"],
  [/되어줘요/g, "되어줍니다"],
  [/더해줘요/g, "더해줍니다"],
  [/어우러져요/g, "어우러집니다"],
  [/어울려요/g, "어울립니다"],
  [/느껴져요/g, "느껴집니다"],
  [/들어와요/g, "들어옵니다"],
  [/보여요/g, "보입니다"],
  [/크기예요/g, "크기입니다"],
  [/제품이에요/g, "제품입니다"],
  [/선택이에요/g, "선택입니다"],
  [/미니불상이에요/g, "미니불상입니다"],
  [/나무염주예요/g, "나무염주입니다"],
  [/불교단주예요/g, "불교단주입니다"],
  [/불교염주예요/g, "불교염주입니다"],
  [/패션염주예요/g, "패션염주입니다"],
  [/불교박람회굿즈예요/g, "불교박람회굿즈입니다"],
  [/조각상이에요/g, "조각상입니다"],
  [/소품이에요/g, "소품입니다"],
  [/선물이에요/g, "선물입니다"],
  [/느낌이에요/g, "느낌입니다"],
  [/모습이에요/g, "모습입니다"],
  [/동작이에요/g, "동작입니다"],
  [/특징이에요/g, "특징입니다"],
  [/구슬이에요/g, "구슬입니다"],
  [/방식이에요/g, "방식입니다"],
  [/매력이에요/g, "매력입니다"],
  [/물론이에요/g, "물론입니다"],
  [/편이에요/g, "편입니다"],
  [/개예요/g, "개입니다"],
  [/말이에요/g, "말입니다"],
  [/거예요/g, "것입니다"],
  [/아니에요/g, "아닙니다"],
  [/있어요/g, "있습니다"],
  [/없어요/g, "없습니다"],
  [/좋아요/g, "좋습니다"],
  [/괜찮아요/g, "괜찮습니다"],
  [/않아요/g, "않습니다"],
  [/적어요/g, "적습니다"],
  [/많아요/g, "많습니다"],
  [/맞아요/g, "맞습니다"],
  [/달라요/g, "다릅니다"],
  [/쉬워요/g, "쉽습니다"],
  [/싶어요/g, "싶습니다"],
  [/중요해요/g, "중요합니다"],
  [/편안해요/g, "편안합니다"],
  [/충분해요/g, "충분합니다"],
  [/추천해요/g, "추천합니다"],
  [/사랑스러워요/g, "사랑스럽습니다"],
  [/매력적이에요/g, "매력적입니다"],
  [/더했어요/g, "더했습니다"],
  [/담았어요/g, "담았습니다"],
  [/제작되었어요/g, "제작되었습니다"],
  [/왔어요/g, "왔습니다"],
  [/게 되잖아요/g, "게 됩니다"],
  [/있으니까요/g, "있기 때문입니다"],
  [/것 같아요/g, "것 같습니다"],
  [/들려요/g, "들립니다"],
  [/이어줘요/g, "이어줍니다"],
  [/줘요/g, "줍니다"],
  [/있지요/g, "있습니다"],
  [/많지요/g, "많습니다"],
  [/살렸어요/g, "살렸습니다"],
  [/표현했어요/g, "표현했습니다"],
  [/경우도 있는데요/g, "경우도 있습니다"],
  [/이에요/g, "입니다"],
  [/예요/g, "입니다"],
  [/해요/g, "합니다"],
  [/돼요/g, "됩니다"],
];

function normalizeEditorialTone(text: string) {
  return formalToneReplacements.reduce(
    (normalized, [pattern, replacement]) => normalized.replace(pattern, replacement),
    text.trim(),
  );
}

function isRedundantDescriptionSection(section: ProductCurationDetailDescriptionSection) {
  const title = section.title?.trim() ?? "";

  return redundantDescriptionTitlePatterns.some((pattern) => pattern.test(title));
}

function selectEditorialDescriptionSections(
  sections: ProductCurationDetailDescriptionSection[],
) {
  const normalizedSections = sections
    .filter((section) => section.body.some((paragraph) => paragraph.trim()))
    .filter((section) => !isRedundantDescriptionSection(section))
    .map((section) => ({
      ...section,
      title: section.title ? normalizeEditorialTone(section.title) : undefined,
      body: section.body.map(normalizeEditorialTone).filter(Boolean),
    }));

  if (normalizedSections.length <= 7) return normalizedSections;

  const selectedIndexes = new Set<number>([0, 1, 2, 3, 4]);
  const preferredPatterns = [/관리|보관|주의|포장/, /선물|추천/];

  preferredPatterns.forEach((pattern) => {
    const index = normalizedSections.findIndex(
      (section, sectionIndex) =>
        !selectedIndexes.has(sectionIndex) && pattern.test(section.title ?? ""),
    );

    if (index >= 0) selectedIndexes.add(index);
  });

  for (let index = 5; selectedIndexes.size < 7 && index < normalizedSections.length; index += 1) {
    selectedIndexes.add(index);
  }

  return [...selectedIndexes]
    .sort((a, b) => a - b)
    .map((index) => normalizedSections[index]);
}

function ensureDeliveryFact(quickFacts: ProductCurationDetailFact[]) {
  return quickFacts.some((fact) => normalizeQuickFactName(fact.name) === "배송")
    ? quickFacts
    : [...quickFacts, standardDeliveryFact];
}

function normalizeFaqs(faqs: NonNullable<ProductCurationDetail["faqs"]>) {
  const uniqueFaqs = faqs.filter(
    (faq, index, list) =>
      list.findIndex((candidate) => candidate.question.trim() === faq.question.trim()) === index,
  );
  const withoutDelivery = uniqueFaqs.filter(
    (faq) => faq.question.trim() !== standardDeliveryFaq.question,
  );

  return [...withoutDelivery.slice(0, 5), standardDeliveryFaq];
}

export function createSearchSliderCurationDetail(
  detail: SearchSliderCurationDetailOverride,
): SearchSliderCurationDetailOverride {
  return defineSearchSliderCurationDetail({
    ...detail,
    descriptionSections: selectEditorialDescriptionSections(detail.descriptionSections),
    quickFacts: ensureDeliveryFact(detail.quickFacts),
    faqs: normalizeFaqs(detail.faqs),
  });
}

export function buildDocumentDescriptionSections(
  paragraphs: string[],
): ProductCurationDetailDescriptionSection[] {
  const [firstTitle, ...rest] = paragraphs;

  if (!firstTitle) return [];

  const sections: ProductCurationDetailDescriptionSection[] = [];
  let currentSection: ProductCurationDetailDescriptionSection = {
    title: firstTitle,
    body: [],
  };

  rest.forEach((paragraph, index) => {
    const nextParagraph = rest[index + 1];
    const isHeading = Boolean(
      nextParagraph &&
        paragraph.length <= 34 &&
        (nextParagraph.length > 42 || /[?요]$/.test(paragraph)),
    );

    if (currentSection.body.length > 0 && isHeading) {
      sections.push(currentSection);
      currentSection = { title: paragraph, body: [] };
      return;
    }

    currentSection.body.push(paragraph);
  });

  if (currentSection.title && currentSection.body.length > 0) {
    sections.push(currentSection);
  }

  return sections;
}

export function buildCurationSliderImages({
  detailImageBase,
  productSlug,
  name,
  relatedSearchTerms,
  imageNames,
}: {
  detailImageBase: string;
  productSlug: string;
  name: string;
  relatedSearchTerms: string[];
  imageNames: string[];
}): ProductCurationDetailImage[] {
  return imageNames.map((imageName, index) => ({
    src: `${detailImageBase}/${productSlug}/${imageName}`,
    alt: buildSliderImageAlt(name, index),
    caption: index === 0 ? `${name} 대표 이미지` : `${name} 상품 디테일 ${index + 1}`,
  }));
}

function buildNumberedSliderImages(
  input: NumberedSearchSliderCurationDetailInput,
): ProductCurationDetailImage[] {
  return Array.from({ length: input.imageCount }, (_, index) => {
    const imageNumber = String(index + 1).padStart(2, "0");

    return {
      src: `${input.detailImageBase}/${input.productSlug}/${input.imagePrefix}-${imageNumber}.png`,
      alt: buildSliderImageAlt(input.name, index),
      caption:
        index === 0 ? `${input.name} 대표 이미지` : `${input.name} 상품 디테일 ${index + 1}`,
    };
  });
}

export function createNumberedSearchSliderCurationDetail(
  input: NumberedSearchSliderCurationDetailInput,
): SearchSliderCurationDetailOverride {
  const sliderImages = buildNumberedSliderImages(input);

  return createSearchSliderCurationDetail({
    curationSlug: input.curationSlug,
    curationName: input.curationName,
    productSlug: input.productSlug,
    name: input.name,
    subtitle: input.subtitle,
    summary: input.summary,
    introBody: input.descriptionSections[0]?.body.slice(0, 2) ?? [],
    image: sliderImages[0].src,
    imageAlt: input.imageAlt,
    storeUrl: input.storeUrl,
    relatedSearchTerms: input.relatedSearchTerms,
    sliderImages,
    descriptionSections: input.descriptionSections,
    quickFacts: input.quickFacts,
    faqs: [...(input.faqs ?? []), ...(input.commonFaqs ?? [])],
    seo: {
      primaryKeyword: input.primaryKeyword,
      secondaryKeywords: input.secondaryKeywords,
      keywords: [
        ...input.relatedSearchTerms,
        input.name,
        "붓다모아",
        input.curationName,
        ...(input.additionalKeywords ?? []),
      ],
      title: input.seoTitle,
      description: input.seoDescription,
    },
    sections: [],
  });
}

export function usesSearchSliderCurationLayout(detail: SearchSliderDetailCandidate) {
  const hasDescription = Boolean(detail.descriptionSections?.length || detail.descriptionBody?.length);

  return Boolean(detail.relatedSearchTerms?.length && detail.sliderImages?.length && hasDescription);
}

function buildSearchSliderSections(detail: ProductCurationDetail): ProductCurationDetailSection[] {
  const descriptionSections =
    detail.descriptionSections?.length
      ? detail.descriptionSections
      : detail.descriptionBody?.length
        ? [{ title: `${detail.name} 상세 설명`, body: detail.descriptionBody }]
        : [];
  const contentSections = descriptionSections.map((section, index) => ({
    title: section.title?.trim() || `${detail.name} 상세 설명 ${index + 1}`,
    body: [section.body.join(" ")],
  }));
  const factSection = detail.quickFacts?.length
    ? [
        {
          title: "제품 정보",
          body: [],
          items: detail.quickFacts.map((fact) => `${fact.name}: ${fact.value}`),
        },
      ]
    : [];

  return [...contentSections, ...factSection];
}

export function normalizeCurationProductDetail(detail: ProductCurationDetail): ProductCurationDetail {
  const quickFacts = normalizeCurationProductQuickFacts(detail.quickFacts);
  const normalizedDetail = {
    ...detail,
    updatedAt: detail.updatedAt ?? curationContentUpdatedAt,
    ...(quickFacts ? { quickFacts } : {}),
  };

  if (!usesSearchSliderCurationLayout(normalizedDetail)) return normalizedDetail;

  return {
    ...normalizedDetail,
    sections: buildSearchSliderSections(normalizedDetail),
  };
}
