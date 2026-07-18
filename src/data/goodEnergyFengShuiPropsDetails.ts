import type {
  ProductCurationDetail,
  ProductCurationDetailDescriptionSection,
  ProductCurationDetailFact,
  ProductCurationDetailImage,
} from "../types";
import {
  defineSearchSliderCurationDetail,
  standardDeliveryFact,
  standardDeliveryFaq,
} from "./curationProductDetailHelpers";

export const goodEnergyFengShuiPropsPublishedDetailKeys = [
  "good-energy-feng-shui-props/haetae-statue",
  "good-energy-feng-shui-props/three-legged-toad",
  "good-energy-feng-shui-props/pollock-talisman",
  "good-energy-feng-shui-props/mandarin-duck-set",
  "good-energy-feng-shui-props/elephant-statue",
];

type GoodEnergyFengShuiPropsDetailInput = {
  productSlug: string;
  name: string;
  subtitle: string;
  summary: string;
  imageAlt: string;
  storeUrl: string;
  imageNames: string[];
  relatedSearchTerms: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  seoTitle: string;
  seoDescription: string;
  quickFacts: ProductCurationDetailFact[];
  documentParagraphs: string[];
  faqs?: ProductCurationDetail["faqs"];
};

const curationSlug = "good-energy-feng-shui-props";
const curationName = "좋은 기운을 들이는 풍수소품";
const detailImageBase = "/images/curation-details/good-energy-feng-shui-props";

function isDescriptionHeading(paragraph: string, nextParagraph?: string) {
  return Boolean(
    nextParagraph &&
      paragraph.length <= 34 &&
      (nextParagraph.length > 42 || /[?요]$/.test(paragraph)),
  );
}

function buildDescriptionSections(paragraphs: string[]): ProductCurationDetailDescriptionSection[] {
  const [firstTitle, ...rest] = paragraphs;
  const sections: ProductCurationDetailDescriptionSection[] = [];
  let currentSection: ProductCurationDetailDescriptionSection = {
    title: firstTitle,
    body: [],
  };

  rest.forEach((paragraph, index) => {
    const nextParagraph = rest[index + 1];

    if (currentSection.body.length > 0 && isDescriptionHeading(paragraph, nextParagraph)) {
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

function buildImageNames(prefix: string, count: number, extension = "png") {
  return Array.from(
    { length: count },
    (_, index) => prefix + "-" + String(index + 1).padStart(2, "0") + "." + extension,
  );
}

function buildSliderImages(input: GoodEnergyFengShuiPropsDetailInput): ProductCurationDetailImage[] {
  return input.imageNames.map((imageName, index) => ({
    src: detailImageBase + "/" + input.productSlug + "/" + imageName,
    alt: input.name + " " + input.relatedSearchTerms.slice(0, 4).join(" ") + " 상세 이미지 " + String(index + 1),
    caption: index === 0 ? input.name + " 대표 이미지" : input.name + " 상품 디테일 " + String(index + 1),
  }));
}

function createGoodEnergyFengShuiPropsDetail(input: GoodEnergyFengShuiPropsDetailInput) {
  const sliderImages = buildSliderImages(input);

  return defineSearchSliderCurationDetail({
    curationSlug,
    curationName,
    productSlug: input.productSlug,
    name: input.name,
    subtitle: input.subtitle,
    summary: input.summary,
    introBody: input.documentParagraphs.slice(1, 3),
    image: sliderImages[0].src,
    imageAlt: input.imageAlt,
    storeUrl: input.storeUrl,
    relatedSearchTerms: input.relatedSearchTerms,
    sliderImages,
    descriptionSections: buildDescriptionSections(input.documentParagraphs),
    quickFacts: [...input.quickFacts, standardDeliveryFact],
    faqs: [
      ...(input.faqs ?? []),
      {
        question: input.name + "은 실제 풍수 효과를 보장하나요?",
        answer:
          "풍수지리, 액막이, 복, 사업운 같은 표현은 전통적·상징적 의미로 안내합니다. 실제 결과나 특정 효능을 보장하는 제품이 아니라, 좋은 마음과 의미를 담아 공간에 두는 장식 소품으로 이해해 주세요.",
      },
      {
        question: "선물용으로 준비해도 괜찮을까요?",
        answer:
          "집들이, 개업, 이사, 결혼처럼 새로운 시작을 축하하는 선물로 어울립니다. 다만 상징이 담긴 소품이므로 받는 분의 취향과 공간 분위기를 함께 고려하는 것이 좋습니다.",
      },
      {
        question: "어디에 두면 좋을까요?",
        answer:
          "현관장, 거실 선반, 사무실 책상, 매장 카운터처럼 깨끗하고 안정적인 자리에 두기 좋습니다. 차량에 두는 제품은 운전 시야와 에어백 작동을 방해하지 않는 위치에 고정해 주세요.",
      },
      standardDeliveryFaq,
    ],
    seo: {
      primaryKeyword: input.primaryKeyword,
      secondaryKeywords: input.secondaryKeywords,
      keywords: [
        ...input.relatedSearchTerms,
        input.name,
        "붓다모아",
        "좋은 기운을 들이는 풍수소품",
        "풍수소품",
        "전통소품",
        "인테리어소품",
      ],
      title: input.seoTitle,
      description: input.seoDescription,
    },
    sections: [],
  });
}

export const goodEnergyFengShuiPropsDetailOverrides: Record<
  string,
  Partial<ProductCurationDetail>
> = {
  "good-energy-feng-shui-props/haetae-statue": createGoodEnergyFengShuiPropsDetail({
    productSlug: "haetae-statue",
    name: "해태상",
    subtitle: "궁궐의 수호 이미지를 담은 작은 인테리어 해태상",
    summary:
      "해태 2조각 1세트로 구성된 인테리어 해태석상입니다. 해태상, 해태조각상, 풍수지리동물, 조형물, 장식품을 찾는 분께 전통적인 수호 상징을 차분하게 소개합니다.",
    imageAlt: "해태상 해태조각상 풍수지리동물 조형물 장식품 대표 이미지",
    storeUrl: "https://mkt.shopping.naver.com/link/69de1cefc81d717af867d213",
    imageNames: [
      "haetae-statue-01.png",
      "haetae-statue-02.png",
      "haetae-statue-03.jpg",
      "haetae-statue-04.jpg",
      "haetae-statue-05.jpg",
      "haetae-statue-06.jpg",
      "haetae-statue-07.jpg",
      "haetae-statue-08.jpg",
      "haetae-statue-09.png",
      "haetae-statue-10.png",
      "haetae-statue-11.png",
    ],
    relatedSearchTerms: [
      "해태상",
      "해태조각상",
      "풍수지리동물",
      "조형물",
      "장식품",
      "인테리어",
      "석상",
      "인형",
      "장식",
    ],
    primaryKeyword: "해태상",
    secondaryKeywords: [
      "해태조각상",
      "풍수지리동물",
      "조형물",
      "장식품",
      "인테리어",
      "석상",
      "해태조각",
      "전통소품",
      "풍수소품",
    ],
    seoTitle: "해태상 | 해태조각상 풍수지리동물 인테리어 석상 | 붓다모아",
    seoDescription:
      "해태 2조각 1세트로 구성된 인테리어 해태석상입니다. 해태상, 해태조각상, 풍수지리동물, 조형물, 장식품, 인테리어 석상을 찾는 분께 소개합니다.",
    quickFacts: [
      { name: "제품명", value: "인테리어 해태석상" },
      { name: "상품 유형", value: "해태상, 해태조각상, 풍수지리동물, 인테리어 석상" },
      { name: "구성", value: "인테리어 해태석상 2조각 1세트" },
      { name: "선택 옵션", value: "선택 1 해태 2조각 1세트, 선택 2 회색 해태 2조각 1세트" },
      { name: "크기", value: "선택 1 높이 약 5.7cm, 너비 약 2.4cm / 선택 2 높이 약 8.7cm, 너비 약 3.6cm, 모두 1조각 기준" },
      { name: "재질", value: "수지" },
      { name: "무게", value: "선택 1 약 50g ±3g / 선택 2 약 185g ±5g, 모두 1조각 기준" },
      { name: "추천 공간", value: "현관장, 거실 선반, 사무실 책상, 매장 카운터" },
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    documentParagraphs: [
      "궁궐의 수호 이미지를 담은 작은 해태상",
      "집 안이나 사무실에 작은 포인트가 하나만 생겨도 공간의 인상이 달라질 때가 있습니다. 너무 화려하지 않으면서도 의미가 있는 인테리어 소품을 찾고 계셨다면, 붓다모아의 인테리어 해태상은 좋은 선택이 될 수 있습니다.",
      "해태는 사자와 비슷한 모습으로 표현되는 상상의 동물입니다. 전통적으로 바르지 못한 것을 가려내고, 재앙을 막아주는 상징으로 여겨져 궁궐 주변 장식에도 사용되었습니다. 그래서 해태조각상은 단순한 장식품이라기보다 공간에 안정감과 의미를 더해주는 상징적인 오브제에 가깝습니다.",
      "해태, 전통적인 상징을 현대 공간에 담다",
      "해태는 오래전부터 정의와 수호의 이미지를 가진 동물로 알려져 있습니다. 불을 먹는 상상의 동물이라는 이야기도 전해지며, 화재와 같은 재앙을 막는 의미로 궁궐 주변에 조각해 두었다고 합니다.",
      "물론 작은 해태상이 실제로 재앙을 막아준다고 단정할 수는 없습니다. 다만 해태가 가진 상징을 알고 공간에 두면, 장식품 하나에도 조금 더 깊은 의미를 담을 수 있습니다. 그래서 해태상은 집들이 선물이나 개업 선물처럼 좋은 뜻을 전하고 싶은 자리에도 잘 어울립니다.",
      "석상 느낌은 살리고, 부담은 줄인 수지 재질",
      "제품명은 인테리어 해태석상이지만, 실제 제품은 수지 재질로 제작된 조각상입니다. 석상처럼 묵직하고 차분한 분위기는 살리면서도, 가정이나 사업장에 부담 없이 둘 수 있도록 구성된 인테리어 소품입니다.",
      "작은 크기임에도 해태 특유의 형태가 또렷하게 살아 있어 선반 위에 올려두었을 때 존재감이 있습니다. 전통적인 상징물은 자칫 무겁게 느껴질 수 있지만, 이 해태조각은 미니 조각상 느낌으로 공간에 자연스럽게 스며드는 편입니다.",
      "취향과 공간에 맞게 고르는 두 가지 옵션",
      "붓다모아 인테리어 해태상은 두 가지 옵션으로 준비되어 있습니다. 두 옵션 모두 해태 2조각 1세트 구성으로, 한 쌍의 해태조각상을 나란히 배치할 수 있습니다.",
      "선택 1은 1조각 기준 높이 약 5.7cm, 너비 약 2.4cm, 무게 약 50±3g입니다. 선택 2는 회색 해태 2조각 1세트로, 1조각 기준 높이 약 8.7cm, 너비 약 3.6cm, 무게 약 185±5g입니다.",
      "이런 공간에 추천드립니다",
      "해태상은 공간의 첫인상을 만들어주는 자리에 특히 잘 어울립니다. 현관에 두면 들어오는 순간 전통적인 수호의 이미지를 느낄 수 있고, 거실 선반에 두면 단정한 포인트 소품이 됩니다. 사무실이나 매장 카운터에 두면 개업 선물이나 사업장 인테리어 소품으로도 부담이 없습니다.",
      "붓다모아에서 직접 검수 후 정성껏 발송합니다",
      "해태, 해태상, 해태조각상, 해태조각을 찾고 계시다면 붓다모아의 인테리어 해태상을 천천히 살펴보세요. 작은 조각상이라도 배송 중 손상되지 않도록 에어캡으로 꼼꼼히 감싸 포장합니다.",
      "주문 및 배송 안내",
      "붓다모아는 평일 낮 12시까지 결제 완료된 상품을 당일 발송하고 있습니다. 평균 배송기간은 약 1~3영업일이며, 휴일과 공휴일은 제외됩니다. 택배사 사정에 따라 평균 배송기간보다 시일이 더 소요될 수 있습니다.",
    ],
  }),
  "good-energy-feng-shui-props/three-legged-toad": createGoodEnergyFengShuiPropsDetail({
    productSlug: "three-legged-toad",
    name: "삼족두꺼비",
    subtitle: "귀엽고 복스럽게 다가오는 삼족두꺼비 장식품",
    summary:
      "높이 약 9.5cm, 너비 약 10.5cm, 무게 약 377g의 삼족 두꺼비 조각상입니다. 복두꺼비, 삼족두꺼비, 두꺼비상, 개업·이사 선물을 찾는 분께 어울립니다.",
    imageAlt: "복두꺼비 삼족두꺼비 두꺼비상 장식품 개업 이사 선물 대표 이미지",
    storeUrl: "https://mkt.shopping.naver.com/link/6a490867bb3426556b4195d5",
    imageNames: buildImageNames("three-legged-toad", 10),
    relatedSearchTerms: [
      "복두꺼비",
      "삼족두꺼비",
      "두꺼비상",
      "인형",
      "장식품",
      "장식",
      "사업운",
      "장식용",
      "개업",
      "이사",
      "선물",
    ],
    primaryKeyword: "삼족두꺼비",
    secondaryKeywords: [
      "복두꺼비",
      "두꺼비상",
      "두꺼비인형",
      "장식품",
      "사업운",
      "개업선물",
      "이사선물",
      "풍수소품",
      "인테리어소품",
    ],
    seoTitle: "삼족두꺼비 | 복두꺼비 두꺼비상 개업 이사 선물 | 붓다모아",
    seoDescription:
      "높이 약 9.5cm, 너비 약 10.5cm의 삼족 두꺼비 조각상입니다. 복두꺼비, 삼족두꺼비, 두꺼비상, 장식품, 개업·이사 선물을 찾는 분께 소개합니다.",
    quickFacts: [
      { name: "제품명", value: "삼족 두꺼비 조각상" },
      { name: "상품 유형", value: "삼족두꺼비, 복두꺼비, 두꺼비상, 풍수 장식품" },
      { name: "구성", value: "삼족 두꺼비 조각상 1EA" },
      { name: "크기", value: "높이 약 9.5cm, 너비 약 10.5cm" },
      { name: "무게", value: "약 377g" },
      { name: "추천 공간", value: "책상, 현관 선반, 매장 카운터, 사업장 장식 공간" },
      { name: "주의 사항", value: "재물복과 사업운 표현은 전통적·상징적 의미이며 실제 효과를 보장하지 않습니다" },
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    documentParagraphs: [
      "귀엽고 복스럽게 다가오는 삼족두꺼비",
      "공간에 작은 포인트 하나만 더해도 분위기가 달라질 때가 있습니다. 특히 책상 위, 현관 선반, 매장 카운터처럼 매일 눈길이 닿는 곳에는 단순히 예쁜 소품보다 의미까지 함께 담긴 장식품이 더 오래 기억에 남습니다.",
      "붓다모아에서 소개하는 삼족 두꺼비 조각상은 귀엽고 복스러운 인상에 엽전과 황금색 포인트를 더한 두꺼비상입니다. 삼족두꺼비, 복두꺼비, 두꺼비인형 같은 키워드로 귀여운 풍수 인테리어 소품을 찾고 계셨다면 부담 없이 살펴보기 좋은 제품입니다.",
      "입에 문 엽전과 황금색 포인트",
      "이 삼족 두꺼비 조각상은 입에 엽전을 물고 있는 모습으로 제작되었습니다. 엽전은 재물과 풍요를 떠올리게 하는 대표적인 상징 요소이기 때문에, 개업을 앞둔 분이나 새로운 시작을 준비하는 분께 선물하기에도 좋은 인상을 줍니다.",
      "물론 재물복을 보장한다는 식의 표현보다는, 좋은 시작을 응원하고 복스러운 마음을 담아 전하는 상징적인 선물로 이해하시면 좋습니다.",
      "부담 없이 두기 좋은 사이즈와 무게감",
      "제품 크기는 높이 약 9.5cm, 너비 약 10.5cm입니다. 너무 크지 않아 가정의 선반, 책상, 현관 쪽 장식 공간, 매장 계산대 등에 놓기 좋습니다. 무게는 약 377g으로, 장식했을 때 어느 정도의 안정감이 느껴지는 편입니다.",
      "이런 분께 추천드립니다",
      "삼족두꺼비, 복두꺼비, 두꺼비상 키워드로 의미 있는 인테리어 소품을 찾는 분, 개업 선물이나 집들이 선물처럼 좋은 뜻을 담은 선물을 고민하는 분께 잘 어울립니다.",
      "주문 전 확인해주세요",
      "본 제품은 장식용 조각상입니다. 떨어뜨리거나 강한 충격을 줄 경우 파손될 수 있으므로 안정적인 곳에 놓아 사용해 주세요. 화면 밝기나 촬영 환경에 따라 실제 색상과 느낌은 조금 다르게 보일 수 있습니다.",
      "배송 안내",
      "붓다모아는 평일 낮 12시까지 결제 완료된 상품을 당일 발송하고 있습니다. 평균 배송기간은 약 1~3영업일이며, 휴일과 공휴일은 제외됩니다.",
      "삼족두꺼비는 화려한 장식보다 좋은 의미와 복스러운 분위기를 함께 담고 싶은 분께 잘 어울리는 소품입니다. 네이버에서 '붓다모아'를 검색해 주세요.",
    ],
  }),
  "good-energy-feng-shui-props/pollock-talisman": createGoodEnergyFengShuiPropsDetail({
    productSlug: "pollock-talisman",
    name: "액막이명태",
    subtitle: "작은 장식 하나로 평안의 마음을 전하는 액막이 나무 명태",
    summary:
      "명태 2개 1SET로 구성된 액막이 나무 명태입니다. 높이 약 5.5cm, 너비 약 20.5cm로 현관, 차량, 개업·이사 선물에 어울리는 전통 상징 소품입니다.",
    imageAlt: "액막이명태 액막이북어 차량용명태 인형 집들이 나무 명주실 대표 이미지",
    storeUrl: "https://mkt.shopping.naver.com/link/6a490878c5db947f36e12611",
    imageNames: buildImageNames("pollock-talisman", 10),
    relatedSearchTerms: [
      "액막이명태",
      "액막이북어",
      "차량용명태",
      "인형",
      "집들이",
      "나무",
      "명주실",
      "개업",
      "현관",
      "걸이",
      "모형",
      "이사",
      "고사",
    ],
    primaryKeyword: "액막이명태",
    secondaryKeywords: [
      "액막이북어",
      "차량용명태",
      "명태인형",
      "집들이선물",
      "나무명태",
      "현관걸이",
      "개업선물",
      "이사선물",
      "고사소품",
    ],
    seoTitle: "액막이명태 | 액막이북어 차량용명태 현관 걸이 | 붓다모아",
    seoDescription:
      "명태 2개 1SET 구성의 액막이 나무 명태입니다. 액막이명태, 액막이북어, 차량용명태, 현관 걸이, 집들이·개업·이사 선물을 찾는 분께 소개합니다.",
    quickFacts: [
      { name: "제품명", value: "액막이 나무 명태" },
      { name: "상품 유형", value: "액막이명태, 액막이북어, 차량용명태, 전통 장식 소품" },
      { name: "구성", value: "액막이 나무 명태 2개 1SET" },
      { name: "크기", value: "높이 약 5.5cm, 너비 약 20.5cm, 명태 2개 기준" },
      { name: "재질", value: "나무" },
      { name: "무게", value: "약 105g ±20g, 명태 2개 기준" },
      { name: "추천 공간", value: "현관, 가게 카운터, 사무실 책상, 차량 실내" },
      { name: "주의 사항", value: "액막이 표현은 민속적·상징적 의미이며 특정 효능을 보장하지 않습니다" },
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    documentParagraphs: [
      "액막이명태, 작은 장식 하나로 전하는 평안의 마음",
      "집 안이나 가게, 차량 안에 작은 상징물 하나를 두고 싶을 때가 있습니다. 새로 이사한 집, 처음 시작하는 사업장, 매일 오가는 차량 안에 좋은 기운이 머물렀으면 좋겠다는 마음을 담는 것만으로도 공간의 분위기는 조금 달라집니다.",
      "붓다모아 액막이 나무 명태는 그런 마음을 부담 없이 담아둘 수 있는 인테리어 소품입니다. 전통적으로 액막이명태는 나쁜 기운을 멀리하고 평안을 기원하는 상징물로 여겨져 왔습니다.",
      "나무로 만든 액막이 명태 2개 1세트",
      "제품명은 액막이 나무 명태이며 구성은 명태 2개 1SET입니다. 사이즈는 명태 2개 기준 높이 약 5.5cm, 너비 약 20.5cm이며, 무게는 약 105±20g입니다.",
      "왜 명태가 액막이 소품으로 쓰일까요",
      "전통적인 민속 문화에서는 명태나 북어가 고사상과 제례, 액막이 의미를 담은 상징물로 쓰이기도 했습니다. 그래서 액막이명태는 새로운 시작과 평안을 바라는 마음을 담은 소품으로 받아들여집니다.",
      "현관, 사업장, 차량까지 자연스럽게",
      "현관 근처나 출입문 주변에 두면 방문객을 맞이하는 첫인상에 작은 포인트가 됩니다. 차량용명태를 찾는 분이라면 차량 실내 장식으로도 고려할 수 있지만, 운전 시야와 에어백 작동을 방해하지 않는 위치에 안전하게 고정해 주세요.",
      "선물하기 좋은 이유",
      "이 제품은 좋은 기운이 함께하길 바란다, 새 출발을 응원한다, 평안하게 지내길 바란다는 마음을 담아 전하기 좋습니다. 이사한 지인, 가게를 새로 여는 분, 새 차를 마련한 분께 자연스럽게 어울립니다.",
      "배송 안내",
      "붓다모아는 평일 낮 12시까지 결제 완료된 상품을 당일 발송하고 있습니다. 평균 배송기간은 약 1~3영업일이며, 휴일과 공휴일은 제외됩니다.",
      "액막이명태는 내가 머무는 공간에 작은 의미를 더하는 일에 가깝습니다. 네이버에서 '붓다모아'를 검색하시면 더 다양한 불교용품과 전통 소품을 만나보실 수 있습니다.",
    ],
  }),
  "good-energy-feng-shui-props/mandarin-duck-set": createGoodEnergyFengShuiPropsDetail({
    productSlug: "mandarin-duck-set",
    name: "원앙세트",
    subtitle: "좋은 마음을 담아 전하기 좋은 나무 원앙 2P 선물세트",
    summary:
      "나무로 조각한 원앙새 두 마리 구성의 원앙세트입니다. 높이 약 10.0cm, 너비 약 15.0cm의 목각 인테리어 소품으로 결혼·집들이·부부 선물에 어울립니다.",
    imageAlt: "원앙세트 원앙새 목각 기러기 원앙 선물 세트 나무 인형 대표 이미지",
    storeUrl: "https://mkt.shopping.naver.com/link/6a4908afe61f7638275bccf8",
    imageNames: buildImageNames("mandarin-duck-set", 14),
    relatedSearchTerms: [
      "원앙세트",
      "원앙새",
      "목각",
      "기러기",
      "원앙",
      "선물",
      "세트",
      "나무",
      "인형",
      "한쌍",
      "오리",
      "목기러기",
      "전통공예",
      "소품",
    ],
    primaryKeyword: "원앙세트",
    secondaryKeywords: [
      "원앙새",
      "목각기러기",
      "목기러기",
      "원앙선물",
      "나무인형",
      "전통공예",
      "결혼선물",
      "집들이선물",
      "부부선물",
    ],
    seoTitle: "원앙세트 | 원앙새 목각기러기 나무 인형 선물 | 붓다모아",
    seoDescription:
      "나무로 조각한 원앙새 두 마리 구성의 원앙세트입니다. 원앙세트, 원앙새, 목각기러기, 나무 인형, 결혼·집들이 선물을 찾는 분께 소개합니다.",
    quickFacts: [
      { name: "제품명", value: "원앙 2P 선물세트" },
      { name: "상품 유형", value: "원앙세트, 원앙새, 목각 장식품, 전통공예 소품" },
      { name: "구성", value: "나무 원앙 2마리 1세트" },
      { name: "크기", value: "높이 약 10.0cm, 너비 약 15.0cm, 1마리 기준" },
      { name: "재질", value: "나무" },
      { name: "무게", value: "약 115g ±10g, 1마리 기준" },
      { name: "추천 용도", value: "결혼 선물, 집들이 선물, 부부 선물, 전통 인테리어 소품" },
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    documentParagraphs: [
      "좋은 마음을 담아 전하기 좋은 원앙세트",
      "선물을 고를 때 가장 어려운 부분은 예쁘기만 한 물건보다, 받는 분에게 좋은 의미까지 함께 전할 수 있는 물건을 찾는 일입니다. 붓다모아의 원앙 2P 선물세트는 나무로 조각된 원앙새 두 마리를 한 세트로 구성한 인테리어 소품입니다.",
      "원앙은 한국 전통 문화에서 부부의 사랑과 화목함을 떠올리게 하는 상징으로 자주 이야기되어 왔습니다. 그래서 원앙세트는 단순한 장식품이라기보다, 두 사람이 오래도록 서로를 아끼고 함께하길 바라는 마음을 담아 전하기 좋은 선물입니다.",
      "원앙새가 가진 따뜻한 상징",
      "원앙새는 예로부터 부부간의 사랑, 충실함, 화목함을 상징하는 동물로 여겨졌습니다. 전통 혼례에서 목각기러기나 목기러기가 부부의 신의와 백년해로를 상징하는 물건으로 쓰였던 것처럼, 원앙 역시 좋은 인연과 다정한 관계를 떠올리게 하는 상징물로 받아들여집니다.",
      "나무로 조각한 원앙 2마리 1세트",
      "붓다모아 원앙세트는 나무를 조각해 만든 원앙 2마리로 구성되어 있습니다. 서로 마주 보게 놓거나 나란히 배치하면 공간에 안정감 있고 부드러운 분위기를 더할 수 있습니다.",
      "높이 약 10.0cm, 너비 약 15.0cm로 실내 어느 곳에 두어도 부담스럽지 않은 크기입니다. 거실 장식장, 침실 협탁, 사무실 책상, 현관 콘솔 위에 올려두면 원앙 특유의 따뜻한 상징과 목각 소품의 자연스러운 질감이 잘 어우러집니다.",
      "이런 분께 추천드립니다",
      "결혼을 앞둔 분께, 신혼부부 집들이 선물로, 부모님이나 지인 선물로, 목각기러기와 원앙새처럼 한국적인 상징을 담은 장식품을 찾는 분께 소개하기 좋습니다.",
      "배송과 포장 안내",
      "평일 낮 12시까지 결제 완료된 상품은 당일 발송을 기준으로 준비하고 있습니다. 평균 배송기간은 약 1~3영업일이며, 휴일과 공휴일은 제외됩니다.",
      "원앙세트는 화려한 장식보다 오래 두고 볼 수 있는 의미 있는 소품을 찾는 분께 잘 어울립니다. 네이버에서 '붓다모아'를 검색하시면 원앙, 원앙세트, 목각기러기 느낌의 전통 인테리어 소품을 만나보실 수 있습니다.",
    ],
  }),
  "good-energy-feng-shui-props/elephant-statue": createGoodEnergyFengShuiPropsDetail({
    productSlug: "elephant-statue",
    name: "코끼리조각상",
    subtitle: "집들이와 개업 선물로 좋은 흰색 코끼리조각상",
    summary:
      "높이 약 19.0cm, 너비 약 23.5cm, 무게 약 525g ±25g의 흰색 코끼리 모형입니다. 집들이선물, 개업선물, 풍수지리 인테리어 장식을 찾는 분께 어울립니다.",
    imageAlt: "집들이선물 개업선물 코끼리조각 코끼리모형 흰색 풍수지리 대표 이미지",
    storeUrl: "https://mkt.shopping.naver.com/link/6a4908dcc5db947f36e12612",
    imageNames: buildImageNames("elephant-statue", 12),
    relatedSearchTerms: [
      "집들이선물",
      "개업선물",
      "코끼리조각",
      "코끼리모형",
      "흰색",
      "흰",
      "풍수지리",
      "장식",
      "인형",
      "인테리어",
    ],
    primaryKeyword: "코끼리조각상",
    secondaryKeywords: [
      "집들이선물",
      "개업선물",
      "코끼리조각",
      "코끼리모형",
      "흰색코끼리",
      "풍수지리",
      "장식인형",
      "인테리어소품",
      "풍수소품",
    ],
    seoTitle: "코끼리조각상 | 집들이선물 개업선물 흰색 코끼리모형 | 붓다모아",
    seoDescription:
      "높이 약 19.0cm, 너비 약 23.5cm의 흰색 코끼리 모형입니다. 코끼리조각상, 집들이선물, 개업선물, 코끼리조각, 풍수지리 인테리어 소품을 찾는 분께 소개합니다.",
    quickFacts: [
      { name: "제품명", value: "흰색 코끼리 모형" },
      { name: "상품 유형", value: "코끼리조각상, 코끼리모형, 풍수지리 인테리어 소품" },
      { name: "구성", value: "흰색 코끼리 모형 1EA" },
      { name: "크기", value: "높이 약 19.0cm, 너비 약 23.5cm" },
      { name: "재질", value: "수지" },
      { name: "무게", value: "약 525g ±25g, 1개 기준" },
      { name: "추천 용도", value: "집들이 선물, 개업 선물, 현관·거실·사무실 인테리어" },
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    documentParagraphs: [
      "흰색 코끼리조각상, 공간에 좋은 의미를 더하다",
      "집 안이나 사무실에 작은 인테리어 소품 하나를 놓는 것만으로도 공간의 분위기는 꽤 달라집니다. 특히 선물용 소품을 고를 때는 디자인도 중요하지만, 그 안에 담긴 의미까지 함께 보게 됩니다.",
      "붓다모아의 흰색 코끼리 모형은 코끼리조각상 특유의 든든한 느낌과 흰색이 주는 단정한 분위기가 함께 어우러져, 집들이선물이나 개업선물로 부담 없이 전하기 좋은 제품입니다.",
      "흰색이라 더 깔끔한 코끼리조각",
      "흰색 코끼리조각상은 거실장, 선반, 현관, 사무실 데스크, 카운터 위에 두어도 비교적 자연스럽게 어울립니다. 높이 약 19.0cm, 너비 약 23.5cm의 사이즈로 존재감은 있으면서도 지나치게 부담스럽지 않습니다.",
      "집들이선물과 개업선물로 좋은 이유",
      "코끼리는 예로부터 행운, 장수, 재물, 지혜와 관련된 좋은 상징으로 여겨져 왔습니다. 실제 효과를 보장하기보다, 새로운 시작을 축하하는 좋은 의미가 담긴 인테리어 소품으로 이해하시면 좋습니다.",
      "제품 기본 정보",
      "제품명은 흰색 코끼리 모형이며, 수지 재질로 제작되었습니다. 크기는 높이 약 19.0cm, 너비 약 23.5cm이고 무게는 약 525±25g입니다. 구성은 흰색 코끼리 모형 1EA입니다.",
      "이런 분께 추천드립니다",
      "좋은 의미를 담은 집들이선물을 찾는 분, 새로 사업을 시작한 분께 전할 개업선물을 고민하는 분, 거실·현관·사무실·카운터에 둘 코끼리조각을 찾는 분께 어울립니다.",
      "배송 안내",
      "붓다모아는 평일 낮 12시까지 결제 완료된 상품을 당일 발송하고 있습니다. 평균 배송기간은 약 1~3영업일이며, 휴일과 공휴일은 제외됩니다.",
      "코끼리조각상은 단순한 장식품을 넘어 좋은 마음을 담아 전하기 좋은 선물입니다. 네이버에서 '붓다모아'를 검색하시면 다양한 불교용품과 의미 있는 인테리어 소품을 함께 만나보실 수 있습니다.",
    ],
  }),
};
