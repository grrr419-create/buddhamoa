import type { ProductCurationDetail, ProductCurationDetailSection } from "../types";

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

function uniqueValues(values: Array<string | undefined>) {
  return [...new Set(values.map((value) => value?.trim()).filter(Boolean))] as string[];
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

export function defineSearchSliderCurationDetail(
  detail: SearchSliderCurationDetailOverride,
): SearchSliderCurationDetailOverride {
  return {
    ...detail,
    relatedSearchTerms: uniqueValues(detail.relatedSearchTerms),
    seo: {
      ...detail.seo,
      keywords: buildSearchSliderSeoKeywords(detail),
    },
  };
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
  if (!usesSearchSliderCurationLayout(detail)) return detail;

  return {
    ...detail,
    sections: buildSearchSliderSections(detail),
  };
}
