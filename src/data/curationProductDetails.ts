import type { ProductCurationDetail } from "../types";
import {
  defineSearchSliderCurationDetail,
  normalizeCurationProductDetail,
  standardDeliveryFact,
  standardDeliveryFaq,
} from "./curationProductDetailHelpers";
import {
  compassionSymbolsDetailOverrides,
  compassionSymbolsPublishedDetailKeys,
} from "./compassionSymbolsDetails";
import {
  ksitigarbhaDetailOverrides,
  ksitigarbhaPublishedDetailKeys,
} from "./ksitigarbhaDetails";
import {
  laughingBuddhaSymbolDetailOverrides,
  laughingBuddhaSymbolPublishedDetailKeys,
} from "./laughingBuddhaSymbolDetails";
import {
  practiceSpaceBuddhaDetailOverrides,
  practiceSpaceBuddhaPublishedDetailKeys,
} from "./practiceSpaceBuddhaDetails";
import { productCurations } from "./productCurations";

export function getCurationProductDetailPath(curationSlug: string, productSlug: string) {
  return `/curations/${curationSlug}/${productSlug}/`;
}

function getCurationProductDetailKey(curationSlug: string, productSlug: string) {
  return `${curationSlug}/${productSlug}`;
}

const publishedCurationProductDetailKeys = new Set([
  "emotional-buddhist-goods/buddhist-frog",
  "emotional-buddhist-goods/buddhist-expo-goods",
  "emotional-buddhist-goods/whale-moktak",
  "emotional-buddhist-goods/praying-dog",
  "emotional-buddhist-goods/praying-cat",
  "daily-wrist-prayer-beads/buddhist-prayer-beads",
  "daily-wrist-prayer-beads/buddhist-danju",
  "daily-wrist-prayer-beads/prayer-bead-bracelet",
  "daily-wrist-prayer-beads/wooden-prayer-beads",
  "daily-wrist-prayer-beads/buddhist-bracelet",
  "finger-prayer-beads/fox-prayer-beads",
  "finger-prayer-beads/wooden-finger-prayer-beads",
  "finger-prayer-beads/cat-prayer-beads",
  "finger-prayer-beads/cat-paw",
  "finger-prayer-beads/cat-charm",
  "bold-prayer-beads/zodiac-prayer-beads",
  "bold-prayer-beads/diamond-sutra-prayer-beads",
  "bold-prayer-beads/car-prayer-beads",
  "bold-prayer-beads/chunky-prayer-beads",
  "bold-prayer-beads/large-prayer-beads",
  "desk-buddha/vairocana-buddha",
  "desk-buddha/baby-buddha",
  "desk-buddha/mini-buddha-statue",
  "desk-buddha/small-buddha-statue",
  "desk-buddha/buddha-goods",
  "home-buddha-statues/pensive-bodhisattva",
  "home-buddha-statues/home-buddha-statue",
  "home-buddha-statues/medium-buddha-statue",
  "home-buddha-statues/interior-buddha-statue",
  "home-buddha-statues/buddha-object",
  ...practiceSpaceBuddhaPublishedDetailKeys,
  ...compassionSymbolsPublishedDetailKeys,
  ...ksitigarbhaPublishedDetailKeys,
  ...laughingBuddhaSymbolPublishedDetailKeys,
]);

const buddhistFrogImageBase =
  "/images/curation-details/emotional-buddhist-goods/buddhist-frog";
const buddhistFrogSliderImages = [
  {
    src: `${buddhistFrogImageBase}/buddhist-goods-frog-01.png`,
    alt: "불교개구리 미니불상 불교굿즈 도기 소품",
    caption: "불교굿즈와 미니불상 감성을 담은 불교개구리 도기 소품",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-fair-goods-frog-02.png`,
    alt: "불교 박람회굿즈 감성 개구리 오브제",
    caption: "불교 박람회굿즈를 찾는 분께 어울리는 작은 개구리 오브제",
  },
  {
    src: `${buddhistFrogImageBase}/mini-buddhist-frog-object-03.png`,
    alt: "작은 공간에 놓는 불교개구리 미니 오브제",
    caption: "현관, 협탁, 명상 공간에 자연스럽게 놓기 좋은 미니 오브제",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-frog-desk-prop-04.png`,
    alt: "책상 위 불교굿즈 불교개구리 장식",
    caption: "업무 공간에 차분한 포인트를 더하는 불교굿즈 장식",
  },
  {
    src: `${buddhistFrogImageBase}/cute-buddhist-frog-goods-05.png`,
    alt: "귀여운 표정의 불교개구리 굿즈",
    caption: "귀여운 표정과 도기 질감이 돋보이는 불교개구리 굿즈",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-frog-meditation-prop-06.png`,
    alt: "명상 공간에 두는 불교개구리 소품",
    caption: "불상, 향, 염주와 함께 두기 좋은 작은 명상 소품",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-frog-mini-buddha-goods-07.png`,
    alt: "미니불상 옆에 어울리는 불교개구리 굿즈",
    caption: "미니불상과 함께 배치하면 부드러운 분위기를 더하는 소품",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-frog-buddha-prop-08.png`,
    alt: "부처님 소품과 함께 두는 불교개구리",
    caption: "부처님 소품이나 부처상 주변에 작은 포인트로 두기 좋습니다.",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-frog-prayer-beads-prop-09.png`,
    alt: "염주 옆에 놓기 좋은 불교개구리 불교용품",
    caption: "염주와 함께 두면 작은 불교용품 코너를 차분하게 완성합니다.",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-frog-temple-goods-10.png`,
    alt: "사찰 감성의 불교개구리 불교굿즈",
    caption: "사찰 감성을 일상 공간에 작게 담아내는 불교굿즈",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-frog-home-interior-11.png`,
    alt: "집 안 인테리어에 어울리는 불교개구리",
    caption: "거실 선반이나 침실 협탁에 부담 없이 놓을 수 있는 인테리어 소품",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-frog-small-ornament-12.png`,
    alt: "아담한 크기의 불교개구리 장식 소품",
    caption: "작은 크기라 좁은 공간에도 자연스럽게 어울리는 장식 소품",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-frog-buddhist-supplies-13.png`,
    alt: "불교용품과 함께 보는 불교개구리 도기 소품",
    caption: "불교용품을 찾는 분께 소개하기 좋은 귀여운 도기 소품",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-frog-lotus-prop-14.png`,
    alt: "연꽃 감성과 어울리는 불교개구리 소품",
    caption: "연꽃, 향, 작은 불상과 함께 연출하기 좋은 불교개구리",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-frog-cute-figure-15.png`,
    alt: "귀여운 불교개구리 피규어형 굿즈",
    caption: "부담 없이 선물하기 좋은 귀여운 피규어형 불교굿즈",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-frog-shelf-object-16.png`,
    alt: "선반 위에 놓는 불교개구리 오브제",
    caption: "선반 위 작은 자리에도 차분한 분위기를 만드는 오브제",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-frog-gift-goods-17.png`,
    alt: "선물용 불교굿즈 불교개구리",
    caption: "불교굿즈를 좋아하는 분께 가볍게 전하기 좋은 선물 소품",
  },
  {
    src: `${buddhistFrogImageBase}/buddhist-frog-collection-18.png`,
    alt: "여러 모습으로 모아보는 불교개구리 굿즈",
    caption: "여러 디자인을 함께 두면 작은 불교굿즈 컬렉션처럼 보입니다.",
  },
];
const buddhistExpoGoodsImageBase =
  "/images/curation-details/emotional-buddhist-goods/buddhist-expo-goods";
const buddhistExpoGoodsSliderImages = [
  {
    src: `${buddhistExpoGoodsImageBase}/buddhist-expo-goods-animal-moktak-set-01.png`,
    alt: "불교박람회굿즈 목탁동물 미니목탁 불교굿즈",
    caption: "연꽃 받침 위에 목탁을 든 동물 친구들이 모인 불교박람회굿즈",
  },
  {
    src: `${buddhistExpoGoodsImageBase}/buddhist-fair-goods-lotus-animal-set-02.png`,
    alt: "불교굿즈 목탁 동물 미니 장식 세트",
    caption: "불교굿즈와 미니목탁 감성을 함께 담은 동물 장식 소품",
  },
  {
    src: `${buddhistExpoGoodsImageBase}/mini-moktak-cat-buddhist-goods-03.png`,
    alt: "목탁 고양이 미니목탁 불교굿즈",
    caption: "고양이와 목탁 디테일이 돋보이는 미니 불교굿즈",
  },
  {
    src: `${buddhistExpoGoodsImageBase}/buddhist-expo-goods-lotus-set-04.png`,
    alt: "연꽃 받침 불교박람회굿즈 동물 소품",
    caption: "연꽃 위에 앉은 여러 동물 옵션을 함께 볼 수 있는 구성",
  },
  {
    src: `${buddhistExpoGoodsImageBase}/cat-moktak-buddhist-fair-goods-05.png`,
    alt: "불교고양이 목탁 고양이 불교박람회굿즈",
    caption: "불교고양이를 찾는 분께 어울리는 목탁 고양이 소품",
  },
  {
    src: `${buddhistExpoGoodsImageBase}/yellow-dog-mini-moktak-goods-06.png`,
    alt: "목탁 황구 미니목탁 불교굿즈",
    caption: "밝고 따뜻한 인상의 목탁 황구 미니 장식 소품",
  },
  {
    src: `${buddhistExpoGoodsImageBase}/black-dog-mini-moktak-goods-07.png`,
    alt: "목탁 흑구 불교굿즈 미니 소품",
    caption: "차분한 색감의 목탁 흑구 불교굿즈 옵션",
  },
  {
    src: `${buddhistExpoGoodsImageBase}/otter-mini-moktak-buddhist-goods-08.png`,
    alt: "목탁 수달 불교박람회굿즈",
    caption: "순한 표정이 매력적인 목탁 수달 미니 소품",
  },
  {
    src: `${buddhistExpoGoodsImageBase}/pig-mini-moktak-buddhist-goods-09.png`,
    alt: "목탁 돼지 불교용품 미니 장식",
    caption: "둥글고 포근한 느낌의 목탁 돼지 불교용품 소품",
  },
  {
    src: `${buddhistExpoGoodsImageBase}/buddhist-goods-animal-options-size-10.png`,
    alt: "불교박람회굿즈 동물 옵션과 크기 비교",
    caption: "고양이, 황구, 흑구, 수달, 돼지 옵션을 나란히 확인하는 이미지",
  },
  {
    src: `${buddhistExpoGoodsImageBase}/mini-buddhist-goods-size-comparison-11.png`,
    alt: "미니불상 감성의 불교굿즈 크기 비교",
    caption: "손바닥 위에 올라오는 미니 불교굿즈 크기를 보여주는 이미지",
  },
];
const whaleMoktakImageBase =
  "/images/curation-details/emotional-buddhist-goods/whale-moktak";
const whaleMoktakSliderImages = [
  {
    src: `${whaleMoktakImageBase}/whale-moktak-buddhist-goods-01.png`,
    alt: "고래목탁 미니목탁 불교굿즈 명상 도구",
    caption: "책상 위에 두고 가볍게 두드릴 수 있는 고래목탁 미니 불교굿즈",
  },
  {
    src: `${whaleMoktakImageBase}/wooden-whale-mini-moktak-02.png`,
    alt: "나무결이 보이는 고래 모양 미니목탁",
    caption: "나무결과 둥근 고래 형태가 돋보이는 미니목탁",
  },
  {
    src: `${whaleMoktakImageBase}/buddhist-fair-goods-whale-moktak-03.png`,
    alt: "불교박람회굿즈 고래 목탁 명상 도구",
    caption: "불교박람회굿즈를 찾는 분께 어울리는 고래 모양 목탁",
  },
  {
    src: `${whaleMoktakImageBase}/whale-moktak-meditation-tool-04.png`,
    alt: "명상 도구로 쓰기 좋은 고래목탁",
    caption: "잠시 호흡을 가다듬을 때 가볍게 두드리기 좋은 명상 도구",
  },
  {
    src: `${whaleMoktakImageBase}/mini-moktak-whale-buddhist-supplies-05.png`,
    alt: "불교용품 고래 미니목탁과 나무 막대",
    caption: "고래 목탁과 나무 막대가 함께 보이는 불교용품 이미지",
  },
  {
    src: `${whaleMoktakImageBase}/wood-grain-whale-moktak-06.png`,
    alt: "고래목탁 원목 나무결 디테일",
    caption: "제품마다 조금씩 다른 나무결을 확인할 수 있는 고래목탁",
  },
  {
    src: `${whaleMoktakImageBase}/whale-moktak-front-detail-07.png`,
    alt: "정면에서 본 고래목탁 미니목탁",
    caption: "둥근 얼굴과 작은 입 디테일이 보이는 고래목탁 정면",
  },
  {
    src: `${whaleMoktakImageBase}/whale-moktak-top-view-08.png`,
    alt: "위에서 본 고래목탁 목어 감성 소품",
    caption: "목어 감성을 귀여운 고래 형태로 풀어낸 상단 이미지",
  },
  {
    src: `${whaleMoktakImageBase}/whale-moktak-size-width-09.png`,
    alt: "고래목탁 너비 크기 비교 이미지",
    caption: "손안에 들어오는 고래목탁의 너비와 크기를 보여주는 이미지",
  },
  {
    src: `${whaleMoktakImageBase}/whale-moktak-size-height-10.png`,
    alt: "고래목탁 높이 크기 비교 이미지",
    caption: "작은 공간과 차량에도 부담 없는 고래목탁 높이 비교 이미지",
  },
];
const prayingDogImageBase =
  "/images/curation-details/emotional-buddhist-goods/praying-dog";
const prayingDogSliderImages = [
  {
    src: `${prayingDogImageBase}/praying-dog-buddhist-goods-01.png`,
    alt: "합장강아지 불교굿즈 명상 소원부적 미니 소품",
    caption: "두 손을 가지런히 모은 합장강아지 미니 불교굿즈",
  },
  {
    src: `${prayingDogImageBase}/praying-dog-meditation-goods-pair-02.png`,
    alt: "명상 공간에 두기 좋은 합장강아지 불교굿즈",
    caption: "책상과 명상 공간에 함께 두기 좋은 합장강아지 소품",
  },
  {
    src: `${prayingDogImageBase}/buddhist-fair-dog-goods-side-03.png`,
    alt: "불교 박람회 감성의 강아지 불교굿즈",
    caption: "불교 박람회에서 볼 법한 친근한 강아지 불교굿즈",
  },
  {
    src: `${prayingDogImageBase}/praying-dog-wish-charm-goods-04.png`,
    alt: "소원부적 감성의 합장강아지 미니 소품",
    caption: "소원이나 다짐을 떠올리게 하는 작은 합장강아지 소품",
  },
  {
    src: `${prayingDogImageBase}/praying-dog-buddha-statue-style-05.png`,
    alt: "부처 불상 감성과 어울리는 합장강아지",
    caption: "부처와 불상 주변에도 자연스럽게 어울리는 강아지 소품",
  },
  {
    src: `${prayingDogImageBase}/meditation-praying-dog-front-06.png`,
    alt: "정면에서 본 명상 합장강아지 불교굿즈",
    caption: "두 손을 모은 자세와 순한 표정이 보이는 정면 이미지",
  },
  {
    src: `${prayingDogImageBase}/praying-dog-buddhist-supplies-side-07.png`,
    alt: "불교용품과 함께 두는 합장강아지 측면",
    caption: "작은 불교용품 공간에 두기 좋은 합장강아지 측면 이미지",
  },
  {
    src: `${prayingDogImageBase}/praying-dog-small-buddha-object-08.png`,
    alt: "작은 불상 오브제처럼 놓는 합장강아지",
    caption: "불상 오브제 감성으로 책상 위에 놓기 좋은 합장강아지",
  },
  {
    src: `${prayingDogImageBase}/praying-dog-back-detail-09.png`,
    alt: "합장강아지 뒷모습 디테일",
    caption: "꼬리와 등 라인이 보이는 합장강아지 뒷모습",
  },
  {
    src: `${prayingDogImageBase}/praying-dog-top-view-10.png`,
    alt: "위에서 본 합장강아지 강아지 불교굿즈",
    caption: "작은 크기와 합장 자세를 위에서 확인하는 이미지",
  },
];
const prayingCatImageBase =
  "/images/curation-details/emotional-buddhist-goods/praying-cat";
const prayingCatSliderImages = [
  {
    src: `${prayingCatImageBase}/praying-cat-buddhist-goods-01.png`,
    alt: "합장고양이 불교굿즈 명상 소원부적 미니 소품",
    caption: "두 손을 가지런히 모은 합장고양이 미니 불교굿즈",
  },
  {
    src: `${prayingCatImageBase}/praying-cat-meditation-goods-pair-02.png`,
    alt: "명상 공간에 두기 좋은 합장고양이 불교굿즈",
    caption: "책상과 명상 공간에 함께 두기 좋은 합장고양이 소품",
  },
  {
    src: `${prayingCatImageBase}/buddhist-fair-cat-goods-side-03.png`,
    alt: "불교 박람회 감성의 고양이 불교굿즈",
    caption: "불교 박람회에서 볼 법한 친근한 고양이 불교굿즈",
  },
  {
    src: `${prayingCatImageBase}/praying-cat-wish-charm-goods-04.png`,
    alt: "소원부적 감성의 합장고양이 미니 소품",
    caption: "소원이나 다짐을 떠올리게 하는 작은 합장고양이 소품",
  },
  {
    src: `${prayingCatImageBase}/praying-cat-buddha-statue-style-05.png`,
    alt: "부처 불상 감성과 어울리는 합장고양이",
    caption: "부처와 불상 주변에도 자연스럽게 어울리는 고양이 소품",
  },
  {
    src: `${prayingCatImageBase}/meditation-praying-cat-front-06.png`,
    alt: "정면에서 본 명상 합장고양이 불교굿즈",
    caption: "두 손을 모은 자세와 순한 표정이 보이는 정면 이미지",
  },
  {
    src: `${prayingCatImageBase}/praying-cat-buddhist-supplies-side-07.png`,
    alt: "불교용품과 함께 두는 합장고양이 측면",
    caption: "작은 불교용품 공간에 두기 좋은 합장고양이 측면 이미지",
  },
  {
    src: `${prayingCatImageBase}/praying-cat-small-buddha-object-08.png`,
    alt: "작은 불상 오브제처럼 놓는 합장고양이",
    caption: "불상 오브제 감성으로 책상 위에 놓기 좋은 합장고양이",
  },
  {
    src: `${prayingCatImageBase}/praying-cat-back-detail-09.png`,
    alt: "합장고양이 뒷모습 디테일",
    caption: "무늬와 꼬리 라인이 보이는 합장고양이 뒷모습",
  },
  {
    src: `${prayingCatImageBase}/praying-cat-top-view-10.png`,
    alt: "위에서 본 합장고양이 고양이 불교굿즈",
    caption: "작은 크기와 합장 자세를 위에서 확인하는 이미지",
  },
];
const buddhistPrayerBeadsImageBase =
  "/images/curation-details/daily-wrist-prayer-beads/buddhist-prayer-beads";
const buddhistPrayerBeadsSliderImages = [
  {
    src: `${buddhistPrayerBeadsImageBase}/buddhist-prayer-beads-wooden-bracelet-01.png`,
    alt: "불교염주 나무염주 손목 염주팔찌 불교굿즈",
    caption: "짙은 나무 비즈와 보랏빛 포인트가 어우러진 불교염주",
  },
  {
    src: `${buddhistPrayerBeadsImageBase}/wooden-prayer-beads-buddhist-goods-02.png`,
    alt: "나무염주 불교용품 단주 팔찌 단독 이미지",
    caption: "손목에 자연스럽게 감기는 작은 나무염주 팔찌",
  },
  {
    src: `${buddhistPrayerBeadsImageBase}/wrist-prayer-beads-bracelet-03.png`,
    alt: "손목에 착용한 불교염주 염주팔찌",
    caption: "일상에서도 부담 없이 착용하기 좋은 손목 염주팔찌",
  },
  {
    src: `${buddhistPrayerBeadsImageBase}/buddhist-prayer-beads-hand-detail-04.png`,
    alt: "손에 올린 불교염주 나무염주 디테일",
    caption: "손에 올려 크기와 비즈 포인트를 확인할 수 있는 이미지",
  },
  {
    src: `${buddhistPrayerBeadsImageBase}/danju-prayer-beads-wrist-goods-05.png`,
    alt: "단주 팔찌 형태의 불교염주 불교굿즈",
    caption: "단주처럼 손목 가까이에 두기 좋은 불교염주",
  },
  {
    src: `${buddhistPrayerBeadsImageBase}/wooden-beads-prayer-bracelet-set-06.png`,
    alt: "여러 개를 함께 둔 나무염주 불교용품",
    caption: "여러 개를 함께 두었을 때 보이는 나무 비즈의 차분한 색감",
  },
  {
    src: `${buddhistPrayerBeadsImageBase}/buddhist-prayer-beads-purple-detail-07.png`,
    alt: "보랏빛 포인트 구슬이 있는 불교염주 디테일",
    caption: "보랏빛 구슬과 은빛 장식이 더해진 불교염주 디테일",
  },
  {
    src: `${buddhistPrayerBeadsImageBase}/wooden-prayer-beads-touch-detail-08.png`,
    alt: "손끝으로 만지는 나무염주 비즈 디테일",
    caption: "기도와 명상 중 손끝으로 비즈를 천천히 만지기 좋은 크기",
  },
  {
    src: `${buddhistPrayerBeadsImageBase}/buddhist-goods-prayer-beads-detail-09.png`,
    alt: "불교굿즈 염주팔찌 나무 비즈 질감",
    caption: "나무 비즈의 결감과 색감을 가까이 볼 수 있는 이미지",
  },
  {
    src: `${buddhistPrayerBeadsImageBase}/wooden-prayer-beads-texture-detail-10.png`,
    alt: "나무염주 비즈 질감과 색감 상세 이미지",
    caption: "나무 소재 특유의 결 차이를 확인할 수 있는 상세 이미지",
  },
];
const buddhistDanjuImageBase =
  "/images/curation-details/daily-wrist-prayer-beads/buddhist-danju";
const buddhistDanjuSliderImages = [
  {
    src: `${buddhistDanjuImageBase}/buddhist-danju-hand-detail-03.png`,
    alt: "불교단주 염주 불교염주 나무 단주 팔찌 대표 이미지",
    caption: "손에 올려 크기와 진홍빛 포인트를 확인하는 불교단주",
  },
  {
    src: `${buddhistDanjuImageBase}/wooden-danju-prayer-beads-bracelet-02.png`,
    alt: "나무 단주 팔찌 불교굿즈 단독 이미지",
    caption: "짙은 나무 비즈와 붉은 포인트가 어우러진 단주 팔찌",
  },
  {
    src: `${buddhistDanjuImageBase}/wrist-danju-prayer-beads-bracelet-05.png`,
    alt: "손목에 착용한 불교단주 염주팔찌",
    caption: "손목에 자연스럽게 착용하기 좋은 불교단주",
  },
  {
    src: `${buddhistDanjuImageBase}/hanging-buddhist-danju-prayer-bracelet-01.png`,
    alt: "손으로 든 불교염주 단주 팔찌",
    caption: "가볍게 들었을 때 전체 형태를 볼 수 있는 손목 단주",
  },
  {
    src: `${buddhistDanjuImageBase}/buddhist-danju-red-point-detail-06.png`,
    alt: "진홍빛 포인트 구슬이 있는 불교단주 디테일",
    caption: "붉은 구슬과 아이보리빛 장식이 보이는 불교단주 디테일",
  },
  {
    src: `${buddhistDanjuImageBase}/danju-red-beads-buddhist-goods-detail-08.png`,
    alt: "불교굿즈 단주 붉은 포인트 비즈 상세 이미지",
    caption: "불교굿즈 감성의 붉은 포인트 비즈를 가까이 본 이미지",
  },
  {
    src: `${buddhistDanjuImageBase}/buddhist-danju-prayer-beads-set-04.png`,
    alt: "여러 개를 함께 둔 불교단주 나무염주",
    caption: "여러 개를 함께 두었을 때 보이는 나무 단주의 차분한 색감",
  },
  {
    src: `${buddhistDanjuImageBase}/wooden-prayer-beads-touch-danju-07.png`,
    alt: "손끝으로 만지는 나무 단주 염주 비즈",
    caption: "기도와 명상 중 손끝으로 비즈를 천천히 만지기 좋은 크기",
  },
  {
    src: `${buddhistDanjuImageBase}/wooden-danju-beads-texture-detail-09.png`,
    alt: "나무 단주 비즈 결감과 색감 상세 이미지",
    caption: "나무 비즈의 결감과 색상을 가까이 확인할 수 있는 이미지",
  },
  {
    src: `${buddhistDanjuImageBase}/danju-wooden-beads-size-detail-10.png`,
    alt: "불교단주 나무 비즈 크기와 질감 디테일",
    caption: "나무 소재 특유의 결 차이를 확인할 수 있는 상세 이미지",
  },
];
const prayerBeadBraceletImageBase =
  "/images/curation-details/daily-wrist-prayer-beads/prayer-bead-bracelet";
const prayerBeadBraceletSliderImages = [
  {
    src: `${prayerBeadBraceletImageBase}/two-row-prayer-bead-bracelet-buddhist-goods-01.png`,
    alt: "염주팔찌 불교굿즈 두 줄 나무 단주 팔찌 대표 이미지",
    caption: "두 줄로 자연스럽게 감기는 검은 톤의 나무 염주팔찌",
  },
  {
    src: `${prayerBeadBraceletImageBase}/wrist-prayer-bead-bracelet-daily-style-02.png`,
    alt: "손목에 착용한 염주팔찌 불교굿즈",
    caption: "일상 외출에도 자연스럽게 착용하기 좋은 손목 염주팔찌",
  },
  {
    src: `${prayerBeadBraceletImageBase}/handheld-prayer-bead-bracelet-danju-03.png`,
    alt: "손에 올린 염주팔찌 단주 합장주 이미지",
    caption: "손에 올려 두 줄 구성과 전체 크기를 확인하는 이미지",
  },
  {
    src: `${prayerBeadBraceletImageBase}/two-row-wrist-prayer-beads-bracelet-04.png`,
    alt: "두 줄로 착용하는 손목 염주팔찌",
    caption: "손목 위에서 두 줄로 감기는 착용감을 보여주는 염주팔찌",
  },
  {
    src: `${prayerBeadBraceletImageBase}/black-wood-prayer-beads-bracelet-05.png`,
    alt: "검은 나무 염주 팔찌 불교박람회굿즈 감성",
    caption: "검은 톤 나무 비즈가 차분한 분위기를 주는 불교굿즈",
  },
  {
    src: `${prayerBeadBraceletImageBase}/prayer-bead-bracelet-hand-size-detail-06.png`,
    alt: "손바닥 위 염주팔찌 비즈 크기 상세 이미지",
    caption: "염주 알과 포인트 비즈 크기를 손바닥 위에서 확인하는 이미지",
  },
  {
    src: `${prayerBeadBraceletImageBase}/wooden-prayer-bead-bracelet-gift-07.png`,
    alt: "선물용 나무 염주팔찌 불교굿즈",
    caption: "가까운 분께 마음을 전하기 좋은 차분한 나무 염주팔찌",
  },
  {
    src: `${prayerBeadBraceletImageBase}/long-view-prayer-beads-bracelet-08.png`,
    alt: "길게 들어본 염주팔찌 단주 형태",
    caption: "손목형 단주와 긴 108염주의 형태 차이를 확인하기 좋은 이미지",
  },
  {
    src: `${prayerBeadBraceletImageBase}/buddhist-bracelet-point-beads-detail-09.png`,
    alt: "염주팔찌 포인트 비즈 오행 명상 도구 상세 이미지",
    caption: "검은 비즈와 포인트 비즈가 만든 차분한 명상 도구 감성",
  },
  {
    src: `${prayerBeadBraceletImageBase}/black-wood-prayer-bead-bracelet-flat-10.png`,
    alt: "검은 나무 염주팔찌 단독 상품 이미지",
    caption: "평평하게 놓아 전체 형태와 비즈 구성을 볼 수 있는 상품 이미지",
  },
];
const woodenPrayerBeadsImageBase =
  "/images/curation-details/daily-wrist-prayer-beads/wooden-prayer-beads";
const woodenPrayerBeadsSliderImages = [
  {
    src: `${woodenPrayerBeadsImageBase}/wooden-prayer-beads-knot-bracelet-03.png`,
    alt: "나무염주 매듭팔찌 불교팔찌 나무 비즈 염주 대표 이미지",
    caption: "작은 나무 비즈와 꽃 포인트, 노란 매듭이 어우러진 나무염주",
  },
  {
    src: `${woodenPrayerBeadsImageBase}/knot-wooden-prayer-beads-bracelet-hand-01.png`,
    alt: "손에 건 매듭팔찌 나무염주 불교팔찌",
    caption: "전통 매듭으로 여닫는 가벼운 손목형 나무염주",
  },
  {
    src: `${woodenPrayerBeadsImageBase}/wooden-bead-bracelet-knot-open-04.png`,
    alt: "펼쳐 놓은 나무 비즈 매듭팔찌 염주",
    caption: "펼쳤을 때의 길이와 나무 비즈 흐름을 볼 수 있는 이미지",
  },
  {
    src: `${woodenPrayerBeadsImageBase}/wooden-knot-bracelet-180mm-size-10.png`,
    alt: "약 180mm 길이의 나무염주 매듭팔찌 사이즈",
    caption: "자를 곁에 두어 펼친 길이를 확인하는 나무팔찌 사이즈 이미지",
  },
  {
    src: `${woodenPrayerBeadsImageBase}/wooden-beads-bracelet-size-hand-09.png`,
    alt: "손에 든 나무 비즈 염주 매듭팔찌",
    caption: "손에 들었을 때의 크기와 매듭 포인트를 확인할 수 있는 이미지",
  },
  {
    src: `${woodenPrayerBeadsImageBase}/knot-bracelet-buddhist-bracelet-set-05.png`,
    alt: "불교팔찌 감성의 매듭팔찌 나무 비즈 염주",
    caption: "불교팔찌와 패션팔찌 사이에 자연스럽게 어울리는 나무염주",
  },
  {
    src: `${woodenPrayerBeadsImageBase}/wooden-mala-bracelet-fashion-goods-06.png`,
    alt: "희망을 담아 선물하기 좋은 나무염주 패션팔찌",
    caption: "작은 희망과 평안의 마음을 전하기 좋은 가벼운 패션염주",
  },
  {
    src: `${woodenPrayerBeadsImageBase}/buddhist-fashion-bracelet-wood-beads-02.png`,
    alt: "불교팔찌 패션 매듭팔찌 나무 비즈 디테일",
    caption: "검은 손 모형 위에서 전통 매듭과 꽃 포인트가 보이는 이미지",
  },
  {
    src: `${woodenPrayerBeadsImageBase}/wooden-prayer-beads-wrist-style-07.png`,
    alt: "손목 가까이에 두는 나무염주 매듭팔찌",
    caption: "매일 손목 가까이에 두기 좋은 수수한 나무 비즈 팔찌",
  },
  {
    src: `${woodenPrayerBeadsImageBase}/buddhist-knot-bracelet-hand-detail-08.png`,
    alt: "나무염주 매듭과 꽃 장식 상세 이미지",
    caption: "꽃 장식과 노란 매듭 고리의 디테일을 확인하는 이미지",
  },
];
const buddhistBraceletImageBase =
  "/images/curation-details/daily-wrist-prayer-beads/buddhist-bracelet";
const buddhistBraceletSliderImages = [
  {
    src: `${buddhistBraceletImageBase}/black-wood-bracelet-buddhist-goods-10.png`,
    alt: "불교팔찌 염주 불교굿즈 나무 팔찌 대표 이미지",
    caption: "흑색 나무 비즈와 목탁 포인트가 어우러진 불교팔찌",
  },
  {
    src: `${buddhistBraceletImageBase}/buddhist-bracelet-black-wood-beads-prop-01.png`,
    alt: "명상 공간에 놓은 흑색 나무 불교팔찌",
    caption: "명상 도구처럼 곁에 두기 좋은 흑색 나무 비즈 팔찌",
  },
  {
    src: `${buddhistBraceletImageBase}/buddhist-bracelet-moktak-point-detail-02.png`,
    alt: "목탁 포인트 장식이 있는 불교팔찌 단주",
    caption: "목탁 모양 포인트 장식이 보이는 불교팔찌 디테일",
  },
  {
    src: `${buddhistBraceletImageBase}/buddhist-bracelet-bead-pattern-detail-03.png`,
    alt: "불교팔찌 나무 비즈 문양 디테일",
    caption: "구슬마다 새겨진 문양과 나무 비즈 질감을 가까이 확인하는 이미지",
  },
  {
    src: `${buddhistBraceletImageBase}/black-wood-buddhist-bracelet-12mm-04.png`,
    alt: "12mm 흑색 나무 비즈 불교팔찌",
    caption: "손목에 비교적 자연스럽게 감기는 12mm 옵션 느낌",
  },
  {
    src: `${buddhistBraceletImageBase}/buddhist-bracelet-15mm-beads-option-05.png`,
    alt: "15mm 나무 비즈 불교팔찌 오행 팔찌",
    caption: "존재감 있는 15mm 비즈와 오행 감성의 차분한 흑색 팔찌",
  },
  {
    src: `${buddhistBraceletImageBase}/buddhist-bracelet-hand-display-06.png`,
    alt: "손 모형에 건 불교굿즈 불교팔찌",
    caption: "손 위에 세워두었을 때 보이는 둥근 비즈와 목탁 포인트",
  },
  {
    src: `${buddhistBraceletImageBase}/black-wood-prayer-bracelet-display-07.png`,
    alt: "불교 박람회굿즈 감성의 검은 나무 팔찌",
    caption: "불교 박람회굿즈처럼 전시해도 어울리는 흑색 나무 팔찌",
  },
  {
    src: `${buddhistBraceletImageBase}/wrist-buddhist-bracelet-daily-style-08.png`,
    alt: "손목에 착용한 불교팔찌 염주팔찌",
    caption: "평소 손목에 착용했을 때의 단정한 분위기를 보여주는 이미지",
  },
  {
    src: `${buddhistBraceletImageBase}/buddhist-bracelet-wrist-fit-09.png`,
    alt: "108배 전후 착용하기 좋은 손목 단주 불교팔찌",
    caption: "기도와 108배 전후 마음을 가다듬을 때 곁에 두기 좋은 손목 단주",
  },
];
const foxPrayerBeadsImageBase =
  "/images/curation-details/finger-prayer-beads/fox-prayer-beads";
const woodenFingerPrayerBeadsImageBase =
  "/images/curation-details/finger-prayer-beads/wooden-finger-prayer-beads";
const catPrayerBeadsImageBase =
  "/images/curation-details/finger-prayer-beads/cat-prayer-beads";
const catPawImageBase = "/images/curation-details/finger-prayer-beads/cat-paw";
const catCharmImageBase = "/images/curation-details/finger-prayer-beads/cat-charm";
const zodiacPrayerBeadsImageBase =
  "/images/curation-details/bold-prayer-beads/zodiac-prayer-beads";
const diamondSutraPrayerBeadsImageBase =
  "/images/curation-details/bold-prayer-beads/diamond-sutra-prayer-beads";
const carPrayerBeadsImageBase =
  "/images/curation-details/bold-prayer-beads/car-prayer-beads";
const chunkyPrayerBeadsImageBase =
  "/images/curation-details/bold-prayer-beads/chunky-prayer-beads";
const largePrayerBeadsImageBase =
  "/images/curation-details/bold-prayer-beads/large-prayer-beads";
const vairocanaBuddhaImageBase = "/images/curation-details/desk-buddha/vairocana-buddha";
const babyBuddhaImageBase = "/images/curation-details/desk-buddha/baby-buddha";
const miniBuddhaStatueImageBase = "/images/curation-details/desk-buddha/mini-buddha-statue";
const smallBuddhaStatueImageBase = "/images/curation-details/desk-buddha/small-buddha-statue";
const buddhaGoodsImageBase = "/images/curation-details/desk-buddha/buddha-goods";
const pensiveBodhisattvaImageBase =
  "/images/curation-details/home-buddha-statues/pensive-bodhisattva";
const homeBuddhaStatueImageBase =
  "/images/curation-details/home-buddha-statues/home-buddha-statue";
const mediumBuddhaStatueImageBase =
  "/images/curation-details/home-buddha-statues/medium-buddha-statue";
const interiorBuddhaStatueImageBase =
  "/images/curation-details/home-buddha-statues/interior-buddha-statue";
const buddhaObjectImageBase = "/images/curation-details/home-buddha-statues/buddha-object";

const curationProductDetailOverrides: Record<string, Partial<ProductCurationDetail>> = {
  ...practiceSpaceBuddhaDetailOverrides,
  ...compassionSymbolsDetailOverrides,
  ...ksitigarbhaDetailOverrides,
  ...laughingBuddhaSymbolDetailOverrides,
  "emotional-buddhist-goods/buddhist-frog": defineSearchSliderCurationDetail({
    name: "불교개구리",
    subtitle: "작고 귀여운 도기 오브제",
    summary: "책상, 선반, 현관, 명상 공간에 자연스럽게 어울리는 미니 도기 소품",
    introBody: [
      "불교개구리는 도기 특유의 따뜻한 질감과 귀여운 표정이 돋보이는 미니 소품입니다. 높이 약 3~5cm의 아담한 크기로 부담 없이 놓을 수 있고, 작은 공간에도 차분한 포인트를 더해줍니다. 둥근 형태, 은은한 광택, 개구리의 부드러운 표정이 어우러져 불교굿즈 특유의 정적인 분위기를 친근하게 느낄 수 있습니다. 과하게 무겁지 않은 인상이라 일상 공간의 인테리어 소품으로도 잘 어울립니다.",
    ],
    image: `${buddhistFrogImageBase}/buddhist-goods-frog-01.png`,
    imageAlt: "불교개구리 미니불상 불교굿즈 도기 소품 대표 이미지",
    relatedSearchTerms: [
      "불교굿즈",
      "불교",
      "박람회굿즈",
      "불상",
      "미니불상",
      "부처님",
      "부처상",
      "용품",
      "염주",
      "개구리",
    ],
    seo: {
      primaryKeyword: "불교굿즈",
      secondaryKeywords: ["불교 박람회굿즈", "불상", "미니불상", "부처님", "부처상", "용품", "염주", "개구리"],
      keywords: [
        "불교굿즈",
        "불교 박람회굿즈",
        "불상",
        "미니불상",
        "부처님",
        "부처상",
        "용품",
        "염주",
        "개구리",
        "불교개구리",
        "불교용품",
      ],
      title: "불교개구리 미니불상 | 불교굿즈 도기 소품 | 붓다모아",
      description:
        "합장·행복·여유로운 세 가지 모습의 불교개구리 도기 소품입니다. 불교굿즈, 미니불상, 부처님 소품, 염주와 함께 놓기 좋은 불교용품을 소개합니다.",
    },
    sliderImages: buddhistFrogSliderImages,
    descriptionSections: [
      {
        title: "불교개구리 미니불상, 보고 있으면 괜히 마음이 편안해져요",
        body: [
          "귀여운 인테리어 소품을 좋아하면서도, 흔하지 않은 의미 있는 물건을 찾고 계셨나요?",
          "그렇다면 붓다모아의 불교개구리 미니불상을 한번 소개해드리고 싶어요. 개구리의 친근한 모습에 합장과 미소, 여유로운 자세를 담아낸 작은 도기 소품입니다.",
          "크기는 손안에 쏙 들어올 정도로 아담하지만, 표정과 자세가 제법 섬세하게 표현되어 있어요. 책상이나 선반 한쪽에 올려두면 귀여운 장식품이 되면서도, 바라볼 때마다 잠시 마음을 쉬게 해주는 느낌이 듭니다.",
        ],
      },
      {
        title: "불교개구리라는 이름이 조금 낯설게 느껴지시나요?",
        body: [
          "불교개구리는 전통 불교에서 정해진 특정한 불상이나 보살의 모습을 뜻하는 것은 아니에요.",
          "기도와 감사, 평온처럼 불교에서 떠올릴 수 있는 따뜻한 마음을 개구리 캐릭터로 친근하게 표현한 현대적인 불교굿즈라고 생각하시면 됩니다.",
          "그래서 불교 신자분들은 물론이고, 종교와 관계없이 귀여운 소품이나 마음이 편안해지는 인테리어를 좋아하는 분들도 부담 없이 선택할 수 있어요.",
          "불교용품은 조금 어렵고 무겁게 느껴졌던 분들에게도 자연스럽게 다가갈 수 있는 소품입니다.",
        ],
      },
      {
        title: "세 마리의 개구리, 어떤 모습이 가장 마음에 드시나요?",
        body: [
          "개구리 미니불상은 모두 세 가지 모습으로 준비되어 있어요.",
          "먼저 합장하는 개구리는 두 손을 가지런히 모으고 기도하는 모습을 하고 있습니다. 감사한 마음을 떠올리거나, 하루를 차분하게 시작하고 싶은 분께 잘 어울려요. 책상이나 작은 불단, 명상 공간에 올려두면 단정하고 편안한 분위기를 만들어줍니다.",
          "행복한 개구리는 밝고 편안한 표정이 매력적인 아이예요. 바라보고 있으면 나도 모르게 입가에 미소가 생기는 친근한 모습입니다. 컴퓨터 모니터 옆이나 책장, 거실 선반처럼 자주 눈에 들어오는 곳에 두기 좋아요.",
          "마지막으로 여유로운 개구리는 느긋하게 쉬고 있는 듯한 자세를 하고 있습니다. 바쁘게 지내다 보면 아무것도 하지 않고 잠시 쉬는 것조차 어렵게 느껴질 때가 있잖아요. 그럴 때 이 개구리를 바라보면 “조금 쉬어가도 괜찮아”라고 말해주는 것 같습니다.",
          "세 가지 중에서 지금 내 마음과 가장 닮은 개구리를 골라보셔도 좋아요.",
        ],
      },
      {
        title: "하나만 놓아도 귀엽고, 함께 놓으면 더 재미있어요",
        body: [
          "상품의 기본 구성은 세 가지 중에서 선택한 개구리 미니불상 1개입니다.",
          "합장하는 개구리, 행복한 개구리, 여유로운 개구리 중에서 원하는 모습을 선택해 주세요. 세 가지를 모두 함께 놓고 싶다면 각각의 옵션을 개별적으로 선택하시면 됩니다.",
          "한 마리만 놓아도 충분히 귀엽지만, 세 마리를 나란히 배치하면 각기 다른 표정과 자세가 어우러져 작은 이야기가 만들어지는 것 같아요.",
          "기도하는 개구리 옆에서 한 마리는 활짝 웃고 있고, 다른 한 마리는 느긋하게 쉬고 있는 모습을 보면 평범한 공간에도 따뜻하고 유쾌한 분위기가 생깁니다.",
        ],
      },
      {
        title: "크기가 작아서 어디에든 부담 없이 놓을 수 있어요",
        body: [
          "이 불교개구리 미니불상은 별도의 넓은 공간이 없어도 편하게 올려둘 수 있습니다.",
          "합장하는 개구리는 약 40×50mm 크기이고 무게는 약 40g입니다. 행복한 개구리는 약 55×30mm, 약 38g이며, 여유로운 개구리는 약 65×35mm, 약 29g입니다.",
          "측정하는 위치와 방법에 따라 크기와 무게에는 약간의 차이가 있을 수 있어요.",
          "손바닥 안에 들어오는 아담한 크기라서 책상이나 책장, 침대 옆 협탁, 현관 선반처럼 작은 공간에도 잘 어울립니다.",
          "사무실 책상에 올려두면 일하다가 잠시 시선을 돌릴 수 있는 귀여운 친구가 되고, 집에서는 내가 좋아하는 물건들과 함께 작은 힐링 공간을 만들 수 있어요.",
        ],
      },
      {
        title: "도기 특유의 따뜻한 느낌이 있어요",
        body: [
          "개구리 미니불상은 도기 재질로 만들어졌습니다.",
          "도기 특유의 은은한 색감과 매끄러운 광택이 있어 플라스틱 캐릭터 소품과는 조금 다른 따뜻한 분위기가 느껴져요. 너무 화려하지 않고 단정한 모습이라 전통적인 불교용품 옆에 놓아도 자연스럽고, 일반적인 인테리어 공간에도 잘 어울립니다.",
          "붓다모아의 미니불상이나 염주, 불교 인테리어 소품과 함께 배치하면 나만의 작은 명상 공간을 꾸밀 수도 있어요.",
          "요즘에는 전통적인 불교용품뿐 아니라 일상에서 편하게 사용할 수 있는 불교굿즈를 찾는 분들이 많습니다. 불교박람회나 불교박람회굿즈를 검색하며 독특하고 친근한 소품을 찾고 계셨다면, 이 불교개구리도 재미있는 선택이 될 수 있습니다.",
        ],
      },
      {
        title: "작은 선물을 찾을 때도 잘 어울려요",
        body: [
          "가끔은 너무 거창하지 않으면서도, 받는 사람이 오래 기억할 수 있는 선물을 찾게 되잖아요.",
          "개구리 미니불상은 크기가 작고 표정이 친근해서 가볍게 마음을 전하기 좋습니다.",
          "감사와 응원의 마음을 전하고 싶다면 합장하는 개구리를, 밝은 웃음을 선물하고 싶다면 행복한 개구리를, 요즘 많이 지쳐 보이는 분에게는 여유로운 개구리를 골라보세요.",
          "부모님이나 친구, 직장 동료에게 건네는 작은 선물로도 좋고, 열심히 지내고 있는 나 자신에게 주는 소소한 선물로도 잘 어울립니다.",
        ],
      },
      {
        title: "주문 전에 이것만 확인해 주세요",
        body: [
          "제품명은 개구리 미니불상 3종이며, 합장하는 개구리와 행복한 개구리, 여유로운 개구리 중 한 가지를 선택하는 상품입니다.",
          "판매처는 붓다모아이며, 수입사는 스테디오더입니다. 원산지는 중국이고, 선택한 개구리 미니불상 1개가 발송됩니다.",
          "도기 제품은 강한 충격을 받거나 바닥에 떨어지면 파손될 수 있으니 안정적인 곳에 놓아주세요. 먼지가 묻었을 때는 부드럽고 마른 천으로 살짝 닦아주시면 됩니다.",
          "촬영 환경이나 사용하시는 모니터의 화면 설정에 따라 실제 색상이 조금 다르게 보일 수 있으며, 도기 제품의 특성상 색감이나 표면 표현에도 약간의 차이가 있을 수 있습니다.",
        ],
      },
      {
        title: "배송은 이렇게 진행돼요",
        body: [
          "평일 낮 12시까지 결제가 완료된 주문은 당일 발송을 원칙으로 하고 있습니다.",
          "배송은 휴일과 공휴일을 제외하고 평균적으로 약 1~3영업일 정도 소요됩니다. 다만 택배사 사정이나 배송 지역에 따라 평소보다 조금 더 늦어질 수 있어요.",
          "도기 제품인 만큼 배송 중 파손되지 않도록 에어캡 등 완충재로 꼼꼼하게 보호 포장하여 발송해드립니다.",
        ],
      },
      {
        title: "불교 신자가 아니어도 괜찮을까요?",
        body: [
          "물론입니다.",
          "불교개구리는 종교적인 의례에 반드시 사용해야 하는 물건이라기보다, 기도와 감사, 평온의 마음을 친근한 캐릭터로 표현한 인테리어 소품에 가깝습니다.",
          "불교 신자분은 작은 불교굿즈로 활용할 수 있고, 종교가 없는 분은 귀엽고 편안한 분위기의 도기 소품으로 즐길 수 있어요.",
          "무엇보다 바라보았을 때 내 마음이 편안하고 기분이 좋아진다면, 그것만으로도 충분합니다.",
        ],
      },
      {
        title: "일상 가까이에 작은 여유를 놓아보세요",
        body: [
          "붓다모아는 부처님을 뜻하는 ’붓다’와 다양한 불교용품을 한곳에 모은다는 의미를 담은 이름입니다.",
          "전통적인 불교용품부터 일상에서 친근하게 사용할 수 있는 불교굿즈까지, 불교를 조금 더 편안하게 만날 수 있는 상품을 소개하고 있어요.",
          "기도하는 마음이 필요한 날에는 합장하는 개구리를, 밝은 기운이 필요한 날에는 행복한 개구리를, 잠시 쉬어가고 싶은 날에는 여유로운 개구리를 곁에 두어보세요.",
          "작고 귀여운 불교개구리 미니불상이 평범한 일상에 잠깐의 미소와 여유를 더해줄 거예요.",
          "상품은 네이버에서 ‘붓다모아’를 검색하면 만나보실 수 있습니다.",
        ],
      },
    ],
    quickFacts: [
      { name: "제품명", value: "개구리 미니불상 3종" },
      { name: "상품 유형", value: "불교굿즈, 미니불상 감성의 도기 인테리어 소품" },
      { name: "선택 옵션", value: "합장하는 개구리, 행복한 개구리, 여유로운 개구리 중 1개 선택" },
      { name: "재질", value: "도기" },
      {
        name: "크기",
        value: "합장하는 개구리 약 40×50mm, 행복한 개구리 약 55×30mm, 여유로운 개구리 약 65×35mm",
      },
      { name: "추천 공간", value: "책상, 선반, 협탁, 현관, 작은 불단, 명상 공간" },
      standardDeliveryFact,
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    faqs: [
      {
        question: "불교개구리는 실제 불상인가요?",
        answer:
          "불교개구리는 전통 불교에서 정해진 특정 불상이나 보살상은 아니며, 기도와 감사, 평온의 마음을 개구리 캐릭터로 친근하게 표현한 현대적인 불교굿즈입니다.",
      },
      {
        question: "불교 신자가 아니어도 사용할 수 있나요?",
        answer:
          "네. 종교 의례에 반드시 사용하는 물건이라기보다 귀엽고 편안한 분위기의 도기 인테리어 소품에 가까워, 불교 신자가 아니어도 부담 없이 둘 수 있습니다.",
      },
      {
        question: "어떤 옵션을 선택할 수 있나요?",
        answer:
          "합장하는 개구리, 행복한 개구리, 여유로운 개구리 세 가지 모습 중 한 가지를 선택할 수 있습니다. 여러 디자인을 함께 두려면 각각의 옵션을 개별 선택하면 됩니다.",
      },
      standardDeliveryFaq,
    ],
    sections: [
      {
        title: "세 가지 모습",
        images: [
          {
            src: `${buddhistFrogImageBase}/image2.jpg`,
            alt: "합장하는 모습 행복한 모습 여유로운 모습의 불교개구리 3종",
          },
        ],
        body: [
          "불교개구리는 합장하는 모습, 행복한 모습, 여유로운 모습의 3가지 디자인으로 구성되어 있습니다. 각각의 자세와 표정이 달라 하나만 선택해도 좋고, 여러 디자인을 함께 두면 작은 세트처럼 조화롭게 연출됩니다.",
        ],
        items: [
          "합장하는 불교개구리: 두 손을 모은 자세가 특징입니다. 감사와 기도의 분위기를 차분하게 담았습니다.",
          "행복한 불교개구리: 밝고 귀여운 표정이 돋보입니다. 책상이나 선반 위에 산뜻한 포인트를 더해줍니다.",
          "여유로운 불교개구리: 편안하게 쉬는 듯한 자세가 매력적입니다. 침실, 협탁, 명상 공간처럼 조용한 공간에 잘 어울립니다.",
        ],
      },
      {
        title: "도기 질감과 디테일",
        imageGroups: [
          {
            images: [
              {
                src: `${buddhistFrogImageBase}/image3.png`,
                alt: "불교개구리 도기 질감과 표정 디테일",
              },
              {
                src: `${buddhistFrogImageBase}/image4.jpg`,
                alt: "불교개구리의 작은 눈 입 손과 발 디테일",
              },
            ],
          },
          {
            images: [
              {
                src: `${buddhistFrogImageBase}/image5.jpg`,
                alt: "손에 올린 작은 크기의 불교개구리",
              },
            ],
          },
        ],
        body: [
          "도기 재질의 표면은 은은한 광택과 자연스러운 질감을 보여줍니다. 가까이 보면 작은 눈, 입, 손과 발, 붉은 포인트까지 섬세하게 표현되어 있어 미니 소품이지만 디테일을 보는 재미가 있습니다. 손에 올려도 부담 없는 작은 크기라 좁은 공간에도 쉽게 배치할 수 있습니다. 큰 장식품이 부담스러운 분에게도 적당한 크기의 불교 인테리어 소품입니다.",
        ],
      },
      {
        title: "어울리는 공간",
        images: [
          {
            src: `${buddhistFrogImageBase}/image6.jpg`,
            alt: "선반 위에 놓인 불교개구리 도기 소품",
          },
        ],
        body: [
          "불교개구리는 책상, 선반, 현관, 협탁, 명상 공간에 잘 어울립니다. 불상, 염주, 향, 풍경 같은 불교 소품과 함께 두면 차분한 분위기를 만들 수 있고, 단독으로 두어도 귀여운 포인트가 됩니다. 세 가지 디자인을 나란히 배치하면 각기 다른 표정과 자세가 어우러져 작은 장식 세트처럼 보입니다. 공간을 많이 차지하지 않으면서도 따뜻한 인상을 남기는 제품입니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 불교개구리 3종",
          "재질: 도기",
          "구성: 불교개구리 3종 중 1EA",
          "사이즈: 합장하는 불교개구리 약 40mm x 50mm / 행복한 불교개구리 약 55mm x 30mm / 여유로운 불교개구리 약 65mm x 35mm",
          "무게: 합장하는 불교개구리 약 40g / 행복한 불교개구리 약 38g / 여유로운 불교개구리 약 29g",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  }),
  "emotional-buddhist-goods/buddhist-expo-goods": defineSearchSliderCurationDetail({
    name: "불교박람회굿즈",
    subtitle: "연꽃 위 작은 동물 친구들이 전하는 귀여운 불교 감성 소품",
    summary:
      "고양이, 황구, 흑구, 수달, 돼지 옵션으로 구성된 미니 불교 장식 소품입니다.",
    introBody: [
      "불교박람회굿즈는 연꽃 받침 위에 앉은 동물 친구들이 작은 목탁을 들고 있는 미니 장식 소품입니다. 고양이, 황구, 흑구, 수달, 돼지 옵션으로 구성되어 있으며, 귀여운 표정과 부드러운 색감이 공간에 따뜻한 포인트를 더합니다.",
      "책상, 선반, 협탁, 차량 내부, 명상 공간처럼 자주 시선이 머무는 곳에 두기 좋습니다. 작은 크기지만 한눈에 들어오는 디자인이라 일상 공간을 부담 없이 꾸미기 좋습니다.",
    ],
    image: `${buddhistExpoGoodsImageBase}/buddhist-expo-goods-animal-moktak-set-01.png`,
    imageAlt: "연꽃 받침 위 목탁동물 미니목탁 불교박람회굿즈 대표 이미지",
    relatedSearchTerms: [
      "염주",
      "불교굿즈",
      "목탁",
      "미니목탁",
      "불교박람회굿즈",
      "불상",
      "미니불상",
      "108",
      "108배",
      "단주",
      "고양이",
      "용품",
    ],
    seo: {
      primaryKeyword: "불교박람회굿즈",
      secondaryKeywords: [
        "염주",
        "불교굿즈",
        "목탁",
        "미니목탁",
        "불상",
        "미니불상",
        "108",
        "108배",
        "단주",
        "고양이",
        "용품",
      ],
      keywords: [
        "염주",
        "불교굿즈",
        "목탁",
        "미니목탁",
        "불교박람회굿즈",
        "불상",
        "미니불상",
        "108",
        "108배",
        "단주",
        "고양이",
        "용품",
        "불교고양이",
        "불교용품",
        "동물 불교굿즈",
      ],
      title: "불교박람회굿즈 목탁동물 | 미니목탁 불교굿즈 | 붓다모아",
      description:
        "연꽃 위에서 목탁을 든 고양이·강아지·수달·돼지 미니 소품입니다. 염주, 단주, 108배 용품, 불상·미니불상 주변에 어울리는 불교굿즈를 소개합니다.",
    },
    sliderImages: buddhistExpoGoodsSliderImages,
    descriptionSections: [
      {
        title: "불교고양이 목탁 소품, 보고 있으면 괜히 마음이 편안해져요",
        body: [
          "하루 종일 바쁘게 지내다 보면 잠깐 쉬는 것도 잊어버릴 때가 있잖아요.",
          "그럴 때 책상 한쪽에 놓인 귀여운 고양이를 가만히 바라보는 것만으로도 마음이 조금 부드러워질 수 있습니다.",
          "붓다모아의 동물 불교굿즈는 작은 연꽃 위에 고양이와 강아지, 수달, 돼지가 다정하게 앉아 있는 미니 장식 소품이에요. 아담한 크기지만 각각의 표정과 자세가 섬세하게 표현되어 있어, 책상이나 선반 한쪽에 올려두면 은근한 존재감을 보여줍니다.",
          "특히 고양이와 불교 감성을 함께 좋아하는 분이라면 '불교고양이'라는 표현이 잘 어울린다고 느끼실 거예요.",
        ],
      },
      {
        title: "불교고양이라는 이름이 조금 낯설게 느껴지시나요?",
        body: [
          "불교고양이는 전통 불교에서 정해진 특정한 불상이나 보살을 뜻하는 것은 아니에요.",
          "연꽃과 목탁처럼 불교를 떠올리게 하는 요소에 고양이의 귀여운 모습을 더해, 일상에서 편안하게 즐길 수 있도록 만든 현대적인 불교굿즈라고 생각하시면 됩니다.",
          "그래서 불교 신자분뿐 아니라 고양이를 좋아하는 집사님이나 귀여운 동물 소품을 모으는 분도 부담 없이 선택할 수 있어요.",
          "불교용품은 조금 어렵거나 무겁게 느껴졌던 분에게도 편안하게 다가갈 수 있는 소품입니다.",
        ],
      },
      {
        title: "고양이만 있는 건 아니에요",
        body: [
          "이 상품은 모두 다섯 가지 동물 중에서 원하는 모습을 선택할 수 있어요.",
          "먼저 목탁 고양이는 차분하게 앉아 있는 모습이 매력적입니다. 집중이 필요한 책상이나 공부 공간에 놓아두면 잘 어울려요. 고양이 특유의 고요하고 느긋한 분위기가 있어, 불교고양이를 찾는 분께 가장 먼저 소개해드리고 싶은 옵션입니다.",
          "목탁 황구는 밝고 따뜻한 인상을 가지고 있어요. 친근한 강아지의 모습을 좋아하거나, 공간에 부드러운 분위기를 더하고 싶은 분께 잘 어울립니다.",
          "목탁 흑구는 검은색 강아지 특유의 듬직하고 차분한 느낌이 있습니다. 귀여우면서도 너무 가볍게 보이지 않는 소품을 찾는 분께 추천해요.",
          "목탁 수달은 동그란 얼굴과 순한 표정이 사랑스러워요. 수달을 좋아하는 분이라면 보기만 해도 미소가 지어지는 옵션이 될 것 같습니다.",
          "마지막으로 목탁 돼지는 포근하고 넉넉한 모습이 매력적이에요. 둥글둥글한 형태 덕분에 책상이나 선반 위에 올려두었을 때 따뜻한 분위기를 더해줍니다.",
          "다섯 동물 중에서 지금 내 마음에 가장 가까운 친구를 골라보세요.",
        ],
      },
      {
        title: "한 마리만 놓아도 귀엽고, 함께 놓으면 더 재미있어요",
        body: [
          "상품의 기본 구성은 고양이, 황구, 흑구, 수달, 돼지 중에서 선택한 동물 소품 1개입니다.",
          "다섯 가지가 한꺼번에 포함된 세트 상품은 아니므로, 여러 동물을 함께 놓고 싶다면 각 옵션을 개별적으로 선택해 주세요.",
          "한 마리만 책상 한쪽에 올려두어도 충분히 귀엽지만, 서로 다른 동물을 나란히 배치하면 작은 친구들이 함께 수행하고 있는 것처럼 재미있는 장면이 완성됩니다.",
          "고양이 옆에 황구를 놓고, 그 옆에 수달과 돼지를 함께 배치하면 각기 다른 표정과 색감이 어우러져 공간이 한층 풍성해 보여요.",
        ],
      },
      {
        title: "손바닥 위에 올라오는 아담한 크기예요",
        body: [
          "제품의 높이는 약 4.3~4.8cm이고, 너비는 약 4.1cm입니다.",
          "손바닥 위에 올라오는 작은 크기라서 별도의 넓은 공간을 마련하지 않아도 돼요. 컴퓨터 모니터 옆이나 책장, 침대 옆 협탁, 현관 선반처럼 자리가 넉넉하지 않은 곳에도 부담 없이 놓을 수 있습니다.",
          "크기는 작지만 전체적인 형태가 단단하고 안정감 있게 표현되어 있어, 가까이에서 바라보면 표정과 연꽃받침의 디테일을 천천히 감상할 수 있어요.",
          "제품의 크기와 무게는 측정하는 위치와 방법에 따라 약간의 차이가 있을 수 있습니다.",
        ],
      },
      {
        title: "어디에 놓아도 자연스럽게 어울려요",
        body: [
          "사무실 책상 위에 놓으면 바쁜 업무 중 잠시 시선을 돌릴 수 있는 귀여운 친구가 되어줍니다.",
          "공부방이나 서재에 놓아두면 너무 무겁지 않은 명상 소품으로 활용할 수 있고, 거실이나 침실에서는 공간에 따뜻한 포인트를 더해줘요.",
          "차량 안에 놓고 싶다면 운전이나 에어백 작동에 방해되지 않도록 흔들리지 않는 안전한 위치에 고정해 사용해 주세요.",
          "붓다모아의 미니불상이나 염주, 명상도구와 함께 배치하면 나만의 작은 불교 인테리어 공간으로 꾸밀 수도 있습니다.",
        ],
      },
      {
        title: "불교박람회에서 만날 법한 친근한 불교굿즈",
        body: [
          "요즘에는 전통적인 불상이나 염주뿐 아니라, 일상에서 자연스럽게 사용할 수 있는 다양한 불교굿즈가 많은 사랑을 받고 있어요.",
          "불교박람회에 가보면 전통적인 불교문화에 귀여운 캐릭터와 현대적인 디자인을 더한 상품도 자주 만날 수 있습니다.",
          "붓다모아의 동물 미니소품 역시 그런 흐름과 잘 어울리는 불교박람회굿즈예요. 연꽃과 목탁의 불교적인 분위기는 담고 있지만, 귀여운 동물의 모습으로 표현되어 누구나 편안하게 바라볼 수 있습니다.",
          "특히 불교고양이나 고양이 불교굿즈를 찾고 있었다면 흔한 고양이 장식품과는 조금 다른 매력을 느낄 수 있을 거예요.",
        ],
      },
      {
        title: "선물로 건네기에도 부담이 없어요",
        body: [
          "선물을 준비할 때 너무 크거나 비싼 물건은 주는 사람도, 받는 사람도 부담스러울 수 있잖아요.",
          "이 동물 불교굿즈는 크기가 아담하고 디자인이 친근해서 가볍게 마음을 전하기 좋습니다.",
          "고양이를 좋아하는 집사님께는 목탁 고양이를, 강아지를 좋아하는 분께는 황구나 흑구를, 수달이나 돼지를 좋아하는 분께는 각각의 취향에 맞춰 골라보세요.",
          "가족이나 친구, 직장 동료에게 전하는 작은 선물은 물론, 열심히 생활하고 있는 나 자신에게 주는 소소한 선물로도 잘 어울립니다.",
        ],
      },
      {
        title: "주문하기 전에 확인해 주세요",
        body: [
          "제품명은 동물인형 불교굿즈이며, 목탁 고양이와 황구, 흑구, 수달, 돼지 중 한 가지를 선택하는 상품입니다.",
          "기본 구성은 선택한 동물 소품 1개이고, 판매처는 붓다모아입니다. 수입사는 스테디오더이며 원산지는 중국입니다.",
          "표면에 먼지가 묻었을 때는 부드럽고 마른 천으로 살짝 닦아주세요. 작은 장식 제품이므로 높은 곳이나 불안정한 선반에 놓을 경우 떨어지지 않도록 주의하는 것이 좋습니다.",
          "촬영 당시의 조명이나 사용 중인 모니터의 화면 설정에 따라 실제 색상이 조금 다르게 보일 수 있습니다. 제품마다 색감과 표면 표현에도 미세한 차이가 있을 수 있으니 상세 이미지를 충분히 확인한 뒤 선택해 주세요.",
        ],
      },
      {
        title: "배송은 이렇게 진행돼요",
        body: [
          "평일 낮 12시까지 결제가 완료된 주문은 당일 발송을 원칙으로 하고 있습니다.",
          "배송은 휴일과 공휴일을 제외하고 평균적으로 약 1~3영업일 정도 소요돼요. 다만 택배사 사정이나 배송 지역에 따라 평소보다 조금 더 늦어질 수 있습니다.",
          "제품이 배송 중 손상되지 않도록 에어캡 등 완충재로 꼼꼼하게 보호 포장하여 발송해드립니다.",
        ],
      },
      {
        title: "불교 신자가 아니어도 괜찮을까요?",
        body: [
          "물론이에요.",
          "이 상품은 종교적인 의례에 반드시 사용해야 하는 용품이라기보다, 불교적인 요소와 귀여운 동물 디자인을 함께 담은 인테리어 소품에 가깝습니다.",
          "불교 신자분은 일상에서 편안하게 즐기는 불교굿즈로 활용할 수 있고, 종교가 없는 분은 고양이나 강아지, 수달, 돼지를 표현한 귀여운 미니 장식으로 즐길 수 있어요.",
          "바라볼 때마다 기분이 좋아지고, 잠깐이라도 마음이 편안해진다면 그것만으로도 충분합니다.",
        ],
      },
      {
        title: "오늘 내 마음과 닮은 친구를 골라보세요",
        body: [
          "붓다모아는 부처님을 뜻하는 '붓다'와 다양한 불교용품을 한곳에 모았다는 의미를 담은 이름입니다.",
          "전통적인 불교용품부터 일상에서 편안하게 사용할 수 있는 불교굿즈와 명상도구까지, 불교를 조금 더 친근하게 만날 수 있는 상품을 소개하고 있어요.",
          "조용히 집중하고 싶은 날에는 목탁 고양이를, 따뜻한 위로가 필요한 날에는 황구나 돼지를, 귀여운 미소가 필요한 날에는 수달을 곁에 두어보세요.",
          "작은 연꽃 위에 앉은 동물 친구가 평범한 하루에 잠깐의 미소와 마음의 쉼표를 더해줄 거예요.",
          "상품은 네이버에서 '붓다모아'를 검색하면 만나보실 수 있습니다.",
          "불교고양이, 불교굿즈, 불교박람회, 불교박람회굿즈, 붓다모아를 찾는 분께도 잘 어울리는 소품입니다.",
        ],
      },
    ],
    quickFacts: [
      { name: "제품명", value: "동물인형 불교굿즈" },
      { name: "상품 유형", value: "연꽃 받침과 목탁 디테일을 담은 동물 미니 장식 소품" },
      { name: "선택 옵션", value: "목탁 고양이, 목탁 황구, 목탁 흑구, 목탁 수달, 목탁 돼지 중 1개 선택" },
      { name: "주요 모티프", value: "연꽃, 목탁, 동물 캐릭터" },
      { name: "재질", value: "수지재질" },
      { name: "크기", value: "높이 약 4.3~4.8cm, 너비 약 4.1cm" },
      { name: "무게", value: "약 275±15g" },
      { name: "추천 공간", value: "책상, 선반, 협탁, 현관, 공부방, 서재, 명상 공간" },
      standardDeliveryFact,
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    faqs: [
      {
        question: "불교박람회굿즈는 어떤 상품인가요?",
        answer:
          "연꽃 받침 위에 목탁을 든 고양이, 황구, 흑구, 수달, 돼지 캐릭터를 올린 미니 장식 소품입니다. 전통 불교 요소를 귀여운 동물 디자인으로 풀어낸 현대적인 불교굿즈입니다.",
      },
      {
        question: "어떤 옵션을 선택할 수 있나요?",
        answer:
          "목탁 고양이, 목탁 황구, 목탁 흑구, 목탁 수달, 목탁 돼지 중 한 가지를 선택할 수 있습니다. 여러 옵션을 함께 두려면 각각 개별 선택하면 됩니다.",
      },
      {
        question: "염주나 단주와 함께 두어도 어울리나요?",
        answer:
          "네. 연꽃과 목탁 모티프가 들어간 미니 불교굿즈라 염주, 단주, 미니불상, 명상도구와 함께 작은 불교 인테리어 공간을 꾸미기 좋습니다.",
      },
      {
        question: "불교 신자가 아니어도 사용할 수 있나요?",
        answer:
          "네. 종교 의례용 제품이라기보다 불교적인 요소와 귀여운 동물 디자인을 담은 인테리어 소품에 가까워, 종교와 관계없이 부담 없이 둘 수 있습니다.",
      },
      standardDeliveryFaq,
    ],
    sections: [
      {
        title: "연꽃 받침과 목탁 디테일",
        images: [
          {
            src: `${buddhistExpoGoodsImageBase}/image2.jpg`,
            alt: "분홍빛 연꽃 받침과 작은 목탁 디테일",
          },
        ],
        body: [
          "분홍빛 연꽃 받침과 손에 든 작은 목탁 디테일이 어우러져 불교적인 분위기를 자연스럽게 담아냅니다. 과하게 무겁지 않은 디자인이라 불교 소품을 처음 접하는 분들도 편하게 선택하기 좋습니다.",
          "둥근 얼굴, 작게 모은 손, 은은한 표정이 특징이며 가까이 두고 볼수록 아기자기한 매력이 느껴집니다.",
        ],
      },
      {
        title: "다섯 가지 선택 옵션",
        body: [
          "불교박람회굿즈는 고양이, 황구, 흑구, 수달, 돼지 중 원하는 옵션을 선택할 수 있습니다. 각 옵션은 같은 연꽃 받침과 목탁 콘셉트로 제작되어 하나만 놓아도 좋고, 여러 개를 함께 두어도 자연스럽게 어울립니다.",
        ],
      },
      {
        title: "목탁 고양이",
        images: [
          {
            src: `${buddhistExpoGoodsImageBase}/image2.jpg`,
            alt: "목탁을 든 고양이 불교박람회굿즈",
          },
        ],
        body: [
          "차분한 표정과 귀여운 얼굴이 돋보이는 기본 인기 옵션입니다. 책상이나 선반 위에 두었을 때 부담 없이 포인트를 주기 좋습니다.",
        ],
      },
      {
        title: "목탁 황구",
        images: [
          {
            src: `${buddhistExpoGoodsImageBase}/image3.jpg`,
            alt: "목탁을 든 황구 불교박람회굿즈",
          },
        ],
        body: [
          "밝고 따뜻한 인상이 느껴지는 옵션입니다. 부드러운 색감 덕분에 공간에 포근한 분위기를 더해줍니다.",
        ],
      },
      {
        title: "목탁 흑구",
        images: [
          {
            src: `${buddhistExpoGoodsImageBase}/image4.jpg`,
            alt: "목탁을 든 흑구 불교박람회굿즈",
          },
        ],
        body: [
          "또렷한 색감과 선명한 표정이 특징입니다. 작은 소품이지만 시선이 자연스럽게 머무는 포인트 장식으로 좋습니다.",
        ],
      },
      {
        title: "목탁 수달",
        images: [
          {
            src: `${buddhistExpoGoodsImageBase}/image5.jpg`,
            alt: "목탁을 든 수달 불교박람회굿즈",
          },
        ],
        body: [
          "순하고 맑은 표정이 매력적인 옵션입니다. 귀여운 동물 소품을 좋아하는 분들에게 잘 어울립니다.",
        ],
      },
      {
        title: "목탁 돼지",
        images: [
          {
            src: `${buddhistExpoGoodsImageBase}/image6.jpg`,
            alt: "목탁을 든 돼지 불교박람회굿즈",
          },
        ],
        body: [
          "둥글고 포근한 느낌이 돋보이는 옵션입니다. 사랑스럽고 부드러운 분위기의 소품을 찾는 분께 좋습니다.",
        ],
      },
      {
        title: "작지만 안정감 있는 크기",
        images: [
          {
            src: `${buddhistExpoGoodsImageBase}/image7.jpg`,
            alt: "손바닥 위에 올라오는 불교박람회굿즈 미니 사이즈",
          },
        ],
        body: [
          "높이 약 4.3~4.8cm, 너비 약 4.1cm의 손바닥 위에 올라오는 미니 사이즈입니다. 작은 공간에도 부담 없이 놓을 수 있으며, 약 275±15g의 무게감이 있어 장식 소품으로 안정감 있게 사용할 수 있습니다.",
          "측정 방법에 따라 치수와 무게에는 약간의 오차가 있을 수 있습니다.",
        ],
      },
      {
        title: "공간에 자연스럽게 어울리는 디자인",
        images: [
          {
            src: `${buddhistExpoGoodsImageBase}/image8.jpg`,
            alt: "책상과 선반에 어울리는 불교박람회굿즈",
          },
        ],
        body: [
          "은은한 색감과 둥근 형태는 다양한 공간에 자연스럽게 어울립니다. 사무실 책상 위에는 작은 힐링 포인트로, 집 안 선반이나 협탁 위에는 귀여운 장식 소품으로 두기 좋습니다.",
          "불교용품의 분위기는 살리면서도 동물 캐릭터의 친근함을 더해, 종교적인 공간뿐 아니라 일반 인테리어 소품으로도 부담 없이 활용할 수 있습니다.",
        ],
      },
      {
        title: "함께 두면 더 귀여운 구성",
        images: [
          {
            src: `${buddhistExpoGoodsImageBase}/image9.jpg`,
            alt: "여러 옵션을 함께 둔 불교박람회굿즈 구성",
          },
        ],
        body: [
          "같은 연꽃 받침과 목탁 콘셉트로 제작되어 여러 옵션을 나란히 두었을 때 조화롭게 어울립니다. 한 가지 옵션으로 포인트를 주거나, 여러 종류를 모아 작은 장식 공간을 완성할 수 있습니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 불교박람회굿즈",
          "재질: 수지재질",
          "구성: 고양이, 황구, 흑구, 수달, 돼지 중 1개 선택",
          "사이즈: 높이 약 4.3~4.8cm, 너비 약 4.1cm",
          "무게: 약 275±15g",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  }),
  "emotional-buddhist-goods/whale-moktak": defineSearchSliderCurationDetail({
    name: "고래목탁",
    subtitle: "작은 나무 소리로 마음을 정리하는 고래 모양 미니 목탁",
    summary:
      "둥근 고래 형태와 맑고 짧은 나무 소리가 어우러진 미니 목탁 소품입니다.",
    introBody: [
      "고래목탁은 둥근 고래 형태로 만든 작은 나무 목탁입니다. 부드러운 나무 결, 따뜻한 색감, 손에 쏙 들어오는 크기가 어우러져 책상 위나 선반 위에 부담 없이 두기 좋은 소품입니다.",
      "가볍게 톡 두드리면 맑고 짧은 나무 소리가 들려, 바쁜 일상 속에서 잠시 호흡을 정리하고 싶은 순간에 잘 어울립니다.",
    ],
    image: `${whaleMoktakImageBase}/whale-moktak-buddhist-goods-01.png`,
    imageAlt: "고래목탁 미니목탁 불교굿즈 명상 도구 대표 이미지",
    relatedSearchTerms: [
      "불교굿즈",
      "목탁",
      "불교박람회굿즈",
      "미니목탁",
      "명상",
      "도구",
      "차량",
      "자동차",
      "액막이",
      "용품",
      "목어",
      "고래",
    ],
    seo: {
      primaryKeyword: "불교굿즈",
      secondaryKeywords: [
        "목탁",
        "불교박람회굿즈",
        "미니목탁",
        "명상 도구",
        "차량",
        "자동차",
        "액막이",
        "용품",
        "목어",
        "고래",
      ],
      keywords: [
        "불교굿즈",
        "목탁",
        "불교박람회굿즈",
        "미니목탁",
        "명상",
        "명상 도구",
        "차량",
        "자동차",
        "액막이",
        "용품",
        "목어",
        "고래",
        "고래목탁",
        "불교용품",
      ],
      title: "고래목탁 미니목탁 | 불교굿즈 명상 도구 | 붓다모아",
      description:
        "작고 또렷한 나무 소리를 담은 고래 모양 미니목탁입니다. 목어 감성의 불교굿즈, 명상 도구, 차량·자동차 액막이 소품으로 소개합니다.",
    },
    sliderImages: whaleMoktakSliderImages,
    descriptionSections: [
      {
        title: "고래목탁, 책상 위에 올려두고 가볍게 톡 두드려보세요",
        body: [
          "하루 종일 바쁘게 움직이다 보면 잠깐 쉬는 것도 잊어버릴 때가 있잖아요.",
          "그럴 때 책상 한쪽에 놓인 작은 소품을 바라보거나, 손으로 가볍게 만져보는 것만으로도 생각의 흐름을 잠시 바꿀 수 있습니다.",
          "붓다모아의 고래목탁은 귀여운 고래의 모습을 나무로 표현한 작은 목탁이에요. 둥글고 부드러운 형태에 자연스러운 나무결이 더해져, 책상이나 선반 위에 올려두기만 해도 공간이 한층 따뜻하게 느껴집니다.",
          "크기는 아담하지만 장식용으로만 바라보는 상품은 아니에요. 함께 제공되는 나무 막대로 가볍게 두드리면 작고 또렷한 나무 소리를 들을 수 있습니다.",
        ],
      },
      {
        title: "사찰의 큰 목탁과는 조금 달라요",
        body: [
          "고래목탁이라는 이름을 들으면 사찰에서 사용하는 크고 깊은 울림의 목탁을 떠올리는 분도 계실 것 같아요.",
          "이 제품은 대형 목탁의 깊고 풍부한 울림을 그대로 재현한 상품은 아닙니다. 손안에 들어오는 미니 목탁인 만큼, 책상 위에서도 부담 없이 들을 수 있는 작고 산뜻한 나무 소리에 더 가깝습니다.",
          "가볍게 두드리면 통통 또는 톡톡 하는 소리가 또렷하게 들려요. 소리가 지나치게 크지 않아 집이나 사무실처럼 조용한 공간에서도 편하게 사용할 수 있습니다.",
          "본격적인 의식용 목탁보다는 일상에서 잠시 마음을 환기하는 미니 불교굿즈로 생각하시면 이해하기 쉬워요.",
        ],
      },
      {
        title: "마음이 복잡한 순간에 가볍게 두드려보세요",
        body: [
          "해야 할 일은 많은데 생각이 정리되지 않을 때가 있잖아요.",
          "그럴 때 고래목탁을 한두 번 가볍게 두드려보세요. 짧은 나무 소리에 귀를 기울이는 동안 잠시 멈추고, 다시 해야 할 일에 집중할 계기를 만들 수 있습니다.",
          "아침에 하루를 시작하기 전이나 책을 읽기 전, 명상이나 호흡을 시작하기 전 신호처럼 활용해도 좋아요.",
          "물론 목탁을 두드린다고 해서 복잡한 마음이 저절로 사라지는 것은 아닙니다. 다만 잠시 멈춰 호흡하고 생각을 정리하는 나만의 작은 습관을 만드는 데 활용할 수 있어요.",
        ],
      },
      {
        title: "고래 모양이라 더욱 친근해요",
        body: [
          "전통적인 불교용품은 의미가 깊은 만큼, 처음 접하는 분에게는 조금 어렵거나 무겁게 느껴질 수도 있습니다.",
          "이 고래목탁은 불교의 목탁을 귀여운 고래 모양으로 표현해 누구나 편안하게 바라볼 수 있어요. 둥근 몸통과 작은 꼬리 모양이 귀엽게 표현되어 있어, 불교 신자가 아니더라도 나무 인테리어 소품처럼 자연스럽게 즐길 수 있습니다.",
          "고래를 좋아하는 분이나 흔하지 않은 동물 소품을 모으는 분께도 재미있는 선택이 될 것 같아요.",
          "불교적인 의미는 담고 있지만 지나치게 종교적으로 보이지 않아, 집이나 사무실 어느 공간에도 부담 없이 놓을 수 있습니다.",
        ],
      },
      {
        title: "손안에 들어오는 아담한 크기예요",
        body: [
          "고래목탁의 높이는 약 4.5cm이고, 너비는 약 5.5cm입니다. 무게는 약 25±3g으로 손안에 가볍게 들어오는 크기예요.",
          "측정하는 위치와 방법에 따라 크기와 무게에는 약간의 차이가 있을 수 있습니다.",
          "별도의 넓은 공간이 필요하지 않아 컴퓨터 모니터 옆이나 책장, 침대 옆 협탁, 거실 선반처럼 작은 자리에도 편하게 놓을 수 있어요.",
          "보관하거나 이동하기에도 부담스럽지 않아 사무실 책상에 두고 사용하기에도 좋습니다.",
        ],
      },
      {
        title: "나무결이 제품마다 조금씩 달라요",
        body: [
          "고래목탁은 나무로 만들어져 제품마다 나무결과 색감, 무늬가 조금씩 다를 수 있습니다.",
          "어떤 제품은 나무결이 비교적 선명하게 보이고, 어떤 제품은 조금 더 부드럽고 단정하게 보일 수 있어요. 이는 불량이 아니라 천연 나무 소재에서 자연스럽게 나타날 수 있는 특징입니다.",
          "모든 제품이 완전히 똑같지 않다는 점이 오히려 나무 소품만의 매력이기도 해요. 내가 받은 고래목탁만의 색과 무늬를 천천히 살펴보는 재미도 느껴보세요.",
        ],
      },
      {
        title: "조금 더 편안하게 소리를 듣는 방법",
        body: [
          "고래목탁을 사용할 때는 힘을 주어 세게 치기보다 나무 막대로 가볍게 두드리는 것이 좋아요.",
          "몸통의 정중앙보다는 약간 앞쪽을 두드리면 소리가 조금 더 또렷하게 들릴 수 있습니다. 두드리는 위치와 힘에 따라 소리가 달라지므로 여러 곳을 가볍게 두드려보면서 마음에 드는 소리를 찾아보세요.",
          "딱딱한 책상 위에 바로 올려놓으면 진동이 책상에 전달되어 소리가 다소 강하게 느껴질 수 있습니다. 손바닥 위에 올리거나 부드러운 천 위에 놓고 사용하면 조금 더 차분한 소리를 들을 수 있어요.",
          "소리를 확인하기 위해 너무 강한 힘을 반복해서 가하면 제품이나 나무 막대가 손상될 수 있으니 가볍게 사용해 주세요.",
        ],
      },
      {
        title: "책상 위에서는 작은 명상도구가 되어줘요",
        body: [
          "사무실 책상 위에 놓아두면 업무를 시작하거나 마무리할 때 가볍게 두드릴 수 있는 작은 도구가 됩니다.",
          "공부방이나 서재에서는 책을 읽기 전 집중을 준비하는 신호로 활용할 수 있고, 침실이나 명상 공간에서는 잠시 호흡을 가다듬는 데 사용할 수 있어요.",
          "꼭 소리를 내지 않더라도 둥근 고래 모양과 자연스러운 나무결 덕분에 따뜻한 인테리어 소품으로 활용하기 좋습니다.",
          "붓다모아의 미니불상이나 염주, 싱잉볼 같은 명상도구와 함께 배치하면 나만의 작은 휴식 공간을 꾸밀 수도 있어요.",
        ],
      },
      {
        title: "불교박람회에서 눈길이 갈 만한 불교굿즈",
        body: [
          "최근에는 전통적인 불교용품에 현대적인 디자인과 귀여운 캐릭터를 더한 제품이 다양하게 소개되고 있어요.",
          "불교박람회에 방문하면 목탁이나 염주처럼 익숙한 불교용품을 새로운 모습으로 재해석한 상품도 만나볼 수 있습니다.",
          "고래목탁 역시 전통적인 목탁에 친근한 고래 디자인을 더한 불교박람회굿즈와 잘 어울리는 상품이에요.",
          "불교용품은 조금 어렵다고 느꼈던 분도 일상적인 인테리어 소품으로 편하게 접할 수 있고, 기존의 평범한 미니 목탁과는 다른 귀여운 매력을 느낄 수 있습니다.",
        ],
      },
      {
        title: "작은 선물로 건네기에도 좋아요",
        body: [
          "선물을 고를 때 너무 크거나 부담스러운 물건보다는, 받는 분이 편하게 사용할 수 있는 작은 소품이 필요할 때가 있잖아요.",
          "고래목탁은 손안에 들어오는 크기라 가볍게 마음을 전하기 좋습니다.",
          "불교에 관심이 있는 분이나 명상을 시작한 분, 나무 소품과 고래를 좋아하는 분께 선물해 보세요. 회사 책상에서 사용할 소소한 힐링 소품을 찾는 분에게도 잘 어울립니다.",
          "친구나 직장 동료에게 전하는 작은 선물은 물론이고, 바쁜 일상 속에서 잠깐씩 쉬어가고 싶은 나 자신에게 건네는 선물로도 괜찮아요.",
        ],
      },
      {
        title: "주문하기 전에 구성품을 확인해 주세요",
        body: [
          "제품명은 귀여운 고래 목탁이며, 기본 구성은 고래목탁 1개와 나무 막대 1개입니다.",
          "판매처는 붓다모아이고, 수입사는 스테디오더이며 원산지는 중국입니다.",
          "제품을 사용하지 않을 때는 습기가 많거나 직사광선이 강하게 닿는 곳을 피해 보관해 주세요. 표면에 먼지가 묻었을 때는 부드럽고 마른 천으로 가볍게 닦아주시면 됩니다.",
          "나무 제품을 물에 담그거나 젖은 상태로 오래 두면 변형이나 변색이 생길 수 있으므로 물세척은 피하는 것이 좋습니다.",
          "작은 제품과 나무 막대가 포함되어 있으니 어린아이가 혼자 가지고 놀거나 입에 넣지 않도록 주의해 주세요.",
        ],
      },
      {
        title: "배송은 이렇게 진행돼요",
        body: [
          "평일 낮 12시까지 결제가 완료된 주문은 당일 발송을 원칙으로 하고 있습니다.",
          "배송은 휴일과 공휴일을 제외하고 평균적으로 약 1~3영업일 정도 소요돼요. 다만 택배사 사정이나 배송 지역에 따라 평소보다 조금 더 늦어질 수 있습니다.",
          "제품이 배송 중 손상되지 않도록 에어캡 등 완충재로 꼼꼼하게 보호 포장하여 발송해드립니다.",
        ],
      },
      {
        title: "불교 신자가 아니어도 사용해도 될까요?",
        body: [
          "물론이에요.",
          "고래목탁은 종교적인 의식에 반드시 사용해야 하는 전통 법구라기보다, 목탁의 형태와 소리를 일상에서 편안하게 경험할 수 있도록 만든 미니 소품에 가깝습니다.",
          "불교 신자분은 친근한 불교굿즈나 작은 명상도구로 활용할 수 있고, 종교가 없는 분은 귀여운 고래 모양의 나무 장식품으로 즐길 수 있어요.",
          "고래 모양이 마음에 들거나, 가볍게 두드릴 수 있는 작은 나무 소품을 찾고 있었다면 종교와 관계없이 편하게 사용해 보세요.",
        ],
      },
      {
        title: "짧은 나무 소리와 함께 잠시 쉬어가세요",
        body: [
          "붓다모아는 부처님을 뜻하는 '붓다'와 다양한 불교용품을 한곳에 모았다는 의미를 담은 이름입니다.",
          "전통적인 불교용품부터 일상에서 편안하게 사용할 수 있는 불교굿즈와 명상도구까지, 불교를 조금 더 친근하게 만날 수 있는 상품을 소개하고 있어요.",
          "생각이 복잡한 날에는 고래목탁을 손바닥 위에 올리고 가볍게 톡 두드려보세요.",
          "작고 또렷한 나무 소리를 듣는 짧은 순간이 바쁜 하루에 잠깐의 쉼표를 만들어줄 거예요.",
          "상품은 네이버에서 '붓다모아'를 검색하면 만나보실 수 있습니다.",
        ],
      },
    ],
    quickFacts: [
      { name: "제품명", value: "귀여운 고래 목탁" },
      { name: "상품 유형", value: "고래 모양 미니목탁, 나무 명상 도구, 불교굿즈" },
      { name: "구성", value: "고래목탁 1개, 나무 막대 1개" },
      { name: "재질", value: "나무" },
      { name: "크기", value: "높이 약 4.5cm, 너비 약 5.5cm" },
      { name: "무게", value: "약 25±3g" },
      { name: "추천 공간", value: "책상, 선반, 협탁, 서재, 명상 공간, 안전하게 고정한 차량 내부" },
      { name: "관리 방법", value: "마른 천으로 가볍게 닦고, 물세척과 강한 직사광선은 피해주세요" },
      standardDeliveryFact,
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    faqs: [
      {
        question: "고래목탁은 실제 의식용 목탁인가요?",
        answer:
          "대형 사찰 목탁의 깊은 울림을 재현한 의식용 법구라기보다, 목탁의 형태와 소리를 일상에서 편하게 경험할 수 있도록 만든 고래 모양 미니목탁입니다.",
      },
      {
        question: "어떤 소리가 나나요?",
        answer:
          "가볍게 두드리면 통통 또는 톡톡 하는 작고 또렷한 나무 소리가 납니다. 소리가 지나치게 크지 않아 책상, 서재, 명상 공간에서 부담 없이 사용할 수 있습니다.",
      },
      {
        question: "차량이나 자동차 안에 둘 수 있나요?",
        answer:
          "작은 소품이라 차량 안에도 둘 수 있지만, 운전이나 에어백 작동에 방해되지 않도록 흔들리지 않는 안전한 위치에 고정해 사용하는 것이 좋습니다.",
      },
      {
        question: "목어와 어떤 관련이 있나요?",
        answer:
          "전통 목어를 그대로 재현한 제품은 아니지만, 물고기와 고래의 친근한 형태감을 목탁 소품으로 풀어낸 불교굿즈로 이해하면 좋습니다.",
      },
      standardDeliveryFaq,
    ],
    sections: [
      {
        title: "귀여운 고래 형태",
        images: [
          {
            src: `${whaleMoktakImageBase}/image2.jpg`,
            alt: "둥근 고래 형태와 작은 꼬리 디테일의 고래목탁",
          },
        ],
        body: [
          "고래의 둥근 몸통과 작은 꼬리, 검은 눈 디테일이 귀엽게 표현되어 있습니다. 목탁 특유의 형태를 고래 디자인으로 풀어내어 불교 소품의 느낌은 살리면서도 인테리어 소품처럼 편하게 둘 수 있습니다.",
          "함께 구성된 나무 막대까지 더해져 실제로 두드려 사용할 수 있으며, 사용하지 않을 때도 작은 장식 소품처럼 자연스럽게 어울립니다.",
        ],
      },
      {
        title: "책상 위에서 듣기 좋은 나무 소리",
        images: [
          {
            src: `${whaleMoktakImageBase}/image3.jpg`,
            alt: "나무 막대로 가볍게 두드려 사용하는 고래목탁",
          },
        ],
        body: [
          "고래목탁은 사찰에서 사용하는 대형 목탁처럼 울림이 크거나 깊은 제품은 아닙니다. 대신 가까운 거리에서 또렷하게 들리는 통통한 나무 소리가 특징입니다.",
          "업무 중 생각이 복잡할 때, 명상 전 마음을 가라앉히고 싶을 때, 짧게 멈추고 싶을 때 가볍게 두드리기 좋습니다. 강하게 치기보다 가볍게 톡톡 두드릴 때 소리가 더 깔끔하게 느껴집니다.",
        ],
      },
      {
        title: "손에 쏙 들어오는 아담한 크기",
        images: [
          {
            src: `${whaleMoktakImageBase}/image4.jpg`,
            alt: "손바닥 위에 올라오는 아담한 고래목탁 크기",
          },
        ],
        body: [
          "손바닥 위에 올라오는 작은 크기라 보관과 사용이 편합니다. 크기는 작지만 둥근 형태와 나무 질감 덕분에 책상 위에 두었을 때 존재감이 있습니다.",
          "사무실 책상, 침실 협탁, 거실 선반, 명상 공간처럼 자주 머무는 곳에 두기 좋고, 작은 선물용 소품으로도 부담이 적습니다.",
        ],
      },
      {
        title: "크기와 구성",
        images: [
          {
            src: `${whaleMoktakImageBase}/image5.jpg`,
            alt: "고래목탁과 나무 막대 구성",
          },
        ],
        body: [
          "고래목탁은 목탁 1개와 나무 막대 1개가 함께 구성된 제품입니다. 목탁 높이는 약 4.5cm, 너비는 약 5.5cm이며, 무게는 약 25±3g입니다.",
          "측정 방법에 따라 치수와 무게에는 약간의 오차가 있을 수 있습니다.",
        ],
      },
      {
        title: "나무 결이 주는 자연스러운 느낌",
        images: [
          {
            src: `${whaleMoktakImageBase}/image6.jpg`,
            alt: "고래목탁의 원목 질감과 나무 결 디테일",
          },
        ],
        body: [
          "원목 소재 특성상 나무 결, 색감, 무늬는 제품마다 조금씩 다를 수 있습니다. 이는 불량이 아니라 자연스러운 소재의 특징이며, 빛을 받을 때 은은하게 살아나는 표면이 따뜻한 분위기를 더합니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 고래목탁",
          "재질: 나무",
          "구성: 고래 목탁 1개 + 나무 막대 1개",
          "사이즈: 높이 약 4.5cm, 너비 약 5.5cm",
          "무게: 약 25±3g",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  }),
  "emotional-buddhist-goods/praying-dog": defineSearchSliderCurationDetail({
    name: "합장강아지",
    subtitle: "두 손을 모은 귀여운 강아지 미니 불교굿즈",
    summary:
      "작은 강아지의 합장 자세가 공간에 편안하고 따뜻한 분위기를 더해주는 미니 소품입니다.",
    introBody: [
      "합장강아지는 두 손을 모은 작은 강아지 모습을 담은 미니 불교굿즈입니다. 귀여운 표정과 차분한 자세가 어우러져 책상, 선반, 차량, 침실 협탁처럼 자주 시선이 머무는 공간에 자연스럽게 놓기 좋습니다.",
      "크게 눈에 띄는 장식품이라기보다, 작은 공간에 편안한 분위기를 더해주는 소품에 가깝습니다. 바라보는 순간 마음이 잠시 느려지고, 공간의 인상이 부드러워지는 것이 특징입니다.",
    ],
    image: `${prayingDogImageBase}/praying-dog-buddhist-goods-01.png`,
    imageAlt: "합장강아지 불교굿즈 명상 소원부적 미니 소품 대표 이미지",
    relatedSearchTerms: [
      "불교굿즈",
      "명상",
      "소원부적",
      "부처",
      "불상",
      "불교",
      "박람회",
      "강아지",
    ],
    seo: {
      primaryKeyword: "불교굿즈",
      secondaryKeywords: ["명상", "소원부적", "부처", "불상", "불교 박람회", "강아지"],
      keywords: [
        "불교굿즈",
        "명상",
        "소원부적",
        "부처",
        "불상",
        "불교",
        "불교 박람회",
        "박람회",
        "강아지",
        "합장강아지",
        "불교굿즈추천",
        "불교용품",
      ],
      title: "합장강아지 불교굿즈 | 명상 소원부적 미니소품 | 붓다모아",
      description:
        "두 손을 가지런히 모은 합장강아지 미니 불교굿즈입니다. 명상 공간, 소원부적 감성, 부처·불상 주변에 어울리는 작은 강아지 소품을 소개합니다.",
    },
    sliderImages: prayingDogSliderImages,
    descriptionSections: [
      {
        title: "불교굿즈추천, 부담 없이 곁에 두기 좋은 합장강아지예요",
        body: [
          "불교굿즈를 하나 골라보고 싶은데, 전통적인 불상이나 법구는 조금 어렵게 느껴질 때가 있잖아요.",
          "그럴 때는 일상적인 모습 속에 따뜻한 의미를 담은 작은 소품부터 시작해도 좋아요. 책상이나 선반 위에 자연스럽게 놓을 수 있고, 바라볼 때마다 잠시 마음을 가다듬을 수 있다면 그것만으로도 충분합니다.",
          "붓다모아의 합장강아지는 두 손을 가지런히 모은 강아지의 모습을 표현한 미니 소품이에요. 크기는 작지만 단정한 자세와 순한 표정이 눈에 들어와, 공간 한쪽에 놓아두면 은근히 마음이 부드러워집니다.",
        ],
      },
      {
        title: "작은 강아지가 두 손을 가지런히 모으고 있어요",
        body: [
          "이 제품의 가장 큰 매력은 역시 합장하고 있는 강아지의 모습이에요.",
          "귀여운 강아지가 두 손을 모으고 가만히 서 있는 모습을 보면, 무언가를 간절히 부탁한다기보다 감사한 마음으로 조용히 인사하는 것처럼 느껴집니다. 그래서 지나치게 장난스럽지도 않고, 그렇다고 너무 엄숙하지도 않아요.",
          "전통적인 불상이나 보살상을 그대로 재현한 상품은 아니며, 불교에서 익숙한 합장의 모습을 친근한 강아지 캐릭터로 표현한 현대적인 불교굿즈라고 생각하시면 됩니다.",
          "불교 신자분은 물론이고 강아지를 좋아하는 분, 귀여운 미니어처를 모으는 분도 부담 없이 선택할 수 있어요.",
        ],
      },
      {
        title: "합장은 흩어진 마음을 한곳에 모으는 동작이에요",
        body: [
          "합장은 두 손바닥을 마주 대고 마음을 가지런히 하는 동작입니다. 불교에서는 상대를 공경하고 감사하는 마음을 표현할 때 자주 볼 수 있어요.",
          "꼭 어려운 의미로 받아들이지 않아도 괜찮습니다. 바쁜 하루 중 잠깐 멈춰 두 손을 모아보는 것만으로도, 여기저기 흩어져 있던 생각을 한곳으로 모으는 계기가 될 수 있으니까요.",
          "합장강아지를 바라보면서 오늘 감사했던 일 하나를 떠올리거나, 지금 해야 할 일에 다시 집중해보세요. 작은 소품이지만 마음을 정돈하는 나만의 신호처럼 활용할 수 있습니다.",
        ],
      },
      {
        title: "불교굿즈추천을 찾는 분께 소개하고 싶은 이유",
        body: [
          "불교굿즈추천을 검색하다 보면 상품 종류가 무척 다양해서 무엇부터 골라야 할지 고민될 수 있어요.",
          "합장강아지는 크기가 작고 종교적인 분위기가 강하지 않아, 불교굿즈를 처음 접하는 분도 편안하게 사용할 수 있습니다. 별도의 불단이나 넓은 공간을 준비할 필요도 없어요.",
          "책상 위에 올려두는 장식 소품으로 시작해도 좋고, 명상이나 기도를 할 때 시선을 잠시 머무는 작은 오브제로 활용해도 좋습니다. 귀여움과 불교적인 의미를 함께 담은 상품을 찾고 있었다면 잘 어울리는 선택이에요.",
        ],
      },
      {
        title: "손바닥 위에 올라오는 정말 작은 크기예요",
        body: [
          "합장강아지의 크기는 약 4.5cm x 2.0cm이며, 무게는 약 12g±3g입니다.",
          "손가락 두세 마디 정도의 아담한 크기라서 자리를 거의 차지하지 않아요. 컴퓨터 모니터 옆이나 책장 사이, 침대 옆 협탁처럼 작은 공간에도 자연스럽게 놓을 수 있습니다.",
          "제품의 크기와 무게는 측정하는 위치와 방법에 따라 약간의 차이가 있을 수 있으니, 구매 전 상세 이미지와 표기된 크기를 함께 확인해 주세요.",
        ],
      },
      {
        title: "책상이나 집 안 한쪽에 자연스럽게 놓아보세요",
        body: [
          "사무실 책상 위에 놓아두면 바쁜 업무 중 잠시 시선을 돌릴 수 있는 작은 친구가 되어줍니다. 집중이 흐트러질 때 합장강아지를 한 번 바라보고 호흡을 고른 뒤 다시 일을 시작해도 좋아요.",
          "공부방이나 서재에서는 책을 읽기 전 마음을 가다듬는 소품으로, 거실이나 침실에서는 공간을 부드럽게 만들어주는 미니 인테리어로 활용할 수 있습니다.",
          "차량 안에 두고 싶다면 급정거나 충돌 시 움직이지 않도록 안전한 위치에 단단히 고정해 주세요. 운전자의 시야나 에어백 작동을 방해하는 자리에는 놓지 않는 것이 좋습니다.",
        ],
      },
      {
        title: "소원이나 다짐을 기억하는 작은 표식으로도 좋아요",
        body: [
          "누구나 마음속에 이루고 싶은 소원이나 지키고 싶은 다짐 하나쯤은 가지고 있잖아요.",
          "합장강아지는 특정한 효능을 보장하는 전통 부적은 아니지만, 내가 바라는 마음이나 다짐을 잊지 않도록 곁에 두는 작은 표식으로 활용할 수 있어요.",
          "시험을 준비할 때는 끝까지 성실하게 공부하겠다는 다짐을, 새로운 일을 시작할 때는 조급해하지 않고 차근차근 나아가겠다는 마음을 떠올려보세요. 중요한 것은 소품 자체보다 그것을 바라보며 다시 한번 마음을 다잡는 순간입니다.",
        ],
      },
      {
        title: "작고 부담 없는 선물을 찾을 때도 잘 어울려요",
        body: [
          "선물을 고를 때 너무 크거나 값비싼 물건은 주는 사람도, 받는 사람도 부담스러울 수 있잖아요.",
          "합장강아지는 크기가 작고 표정이 친근해서 가볍게 마음을 전하기 좋습니다. 강아지를 좋아하는 친구나 직장 동료, 작은 불교소품을 모으는 분께 건네기 좋아요.",
          "시험이나 새로운 출발을 앞둔 분에게는 응원의 마음을, 요즘 많이 지쳐 보이는 분에게는 잠시 쉬어가라는 마음을 담아 선물해 보세요. 열심히 지내고 있는 나 자신에게 주는 소소한 선물로도 괜찮습니다.",
        ],
      },
      {
        title: "불교박람회굿즈의 친근한 감성을 좋아한다면",
        body: [
          "요즘에는 전통적인 불상과 염주뿐 아니라, 불교의 의미를 귀여운 캐릭터와 현대적인 디자인으로 풀어낸 불교굿즈도 많이 소개되고 있어요.",
          "불교박람회나 불교박람회굿즈를 찾아보며 일상에서 편하게 사용할 수 있는 상품을 좋아하셨다면, 합장강아지도 자연스럽게 마음에 들 수 있습니다.",
          "합장이라는 불교적인 요소는 분명하게 담겨 있지만 귀여운 강아지 모습으로 표현되어, 집이나 사무실의 일반적인 인테리어와도 잘 어울려요. 전통과 친근함 사이의 균형이 이 상품의 매력입니다.",
        ],
      },
      {
        title: "주문하기 전에 상품 정보를 확인해 주세요",
        body: [
          "제품명은 합장강아지 불교굿즈이며, 재질은 수지입니다. 기본 구성은 합장강아지 1개예요.",
          "판매처는 붓다모아이고, 수입사는 스테디오더이며 원산지는 중국입니다.",
          "수지 제품은 비교적 가볍지만 높은 곳에서 떨어지거나 강한 충격을 받으면 파손될 수 있습니다. 평평하고 안정적인 곳에 놓아주시고, 어린아이나 반려동물이 입에 넣지 않도록 주의해 주세요.",
          "촬영 환경이나 사용하시는 모니터의 화면 설정에 따라 실제 색상이 조금 다르게 보일 수 있으며, 제품마다 표면 표현이나 도색에 미세한 차이가 있을 수 있습니다.",
        ],
      },
      {
        title: "오래 두고 보려면 이렇게 관리해 주세요",
        body: [
          "표면에 먼지가 묻었을 때는 부드럽고 마른 천이나 작은 솔로 살짝 닦아주세요.",
          "강한 세정제를 사용하거나 물에 오래 담가두면 표면이 손상될 수 있으므로 물세척은 피하는 것이 좋습니다. 직사광선이 오랫동안 닿거나 습기가 많은 장소도 피해 보관해 주세요.",
        ],
      },
      {
        title: "배송은 이렇게 진행돼요",
        body: [
          "평일 낮 12시까지 결제가 완료된 주문은 당일 발송을 원칙으로 하고 있습니다.",
          "배송은 휴일과 공휴일을 제외하고 평균적으로 약 1~3영업일 정도 소요돼요. 다만 택배사 사정이나 배송 지역에 따라 평소보다 조금 더 늦어질 수 있습니다.",
          "제품이 배송 중 손상되지 않도록 에어캡 등 완충재로 꼼꼼하게 보호 포장하여 발송해드립니다.",
        ],
      },
      {
        title: "오늘은 잠시 멈춰 마음을 한곳에 모아보세요",
        body: [
          "붓다모아는 부처님을 뜻하는 '붓다'와 다양한 불교용품을 한곳에 모았다는 의미를 담은 이름입니다.",
          "전통적인 불교용품부터 일상에서 편안하게 사용할 수 있는 불교굿즈까지, 불교를 조금 더 친근하게 만날 수 있는 상품을 소개하고 있어요.",
          "불교굿즈추천을 찾고 있었다면, 두 손을 가지런히 모은 작은 강아지를 일상 가까이에 놓아보세요. 불교박람회와 불교박람회굿즈에서 느꼈던 따뜻하고 현대적인 감성을 집이나 사무실에서도 편안하게 즐길 수 있습니다.",
          "바쁜 날에는 합장강아지를 바라보며 잠시 숨을 고르고, 오늘 감사한 일이나 앞으로 지키고 싶은 다짐을 하나 떠올려보세요.",
          "작은 소품 하나가 평범한 하루에 짧지만 따뜻한 마음의 쉼표를 더해줄 거예요.",
          "상품은 네이버에서 '붓다모아'를 검색하면 만나보실 수 있습니다.",
        ],
      },
    ],
    quickFacts: [
      { name: "제품명", value: "합장강아지 불교굿즈" },
      { name: "상품 유형", value: "두 손을 모은 강아지 미니 소품, 명상 오브제, 불교굿즈" },
      { name: "구성", value: "합장강아지 1개" },
      { name: "재질", value: "수지" },
      { name: "크기", value: "약 4.5cm x 2.0cm" },
      { name: "무게", value: "약 12g±3g" },
      { name: "추천 공간", value: "책상, 선반, 협탁, 공부방, 서재, 명상 공간, 안전하게 고정한 차량 내부" },
      { name: "관리 방법", value: "마른 천이나 작은 솔로 닦고, 물세척과 강한 직사광선은 피해주세요" },
      standardDeliveryFact,
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    faqs: [
      {
        question: "합장강아지는 한 개가 배송되는 상품인가요?",
        answer: "네. 기본 구성은 합장강아지 불교굿즈 1개입니다.",
      },
      {
        question: "불교 신자가 아니어도 괜찮을까요?",
        answer:
          "네. 종교적인 의례에 반드시 사용해야 하는 용품이라기보다 합장의 의미를 친근한 강아지 캐릭터로 표현한 미니 소품이므로, 종교와 관계없이 편하게 활용할 수 있습니다.",
      },
      {
        question: "소원부적으로 사용할 수 있나요?",
        answer:
          "특정한 효능을 보장하는 전통 부적은 아닙니다. 다만 나의 소원이나 목표, 감사한 마음을 떠올리게 하는 작은 기념 소품으로 곁에 둘 수 있습니다.",
      },
      {
        question: "부처나 불상 주변에 함께 두어도 어울리나요?",
        answer:
          "네. 작은 크기와 차분한 합장 자세 덕분에 부처님 소품, 불상, 미니불상, 명상 공간 주변에 부담 없이 함께 둘 수 있습니다.",
      },
      standardDeliveryFaq,
    ],
    sections: [
      {
        title: "두 손을 모은 작은 모습",
        images: [
          {
            src: `${prayingDogImageBase}/image2.jpg`,
            alt: "앞발을 가지런히 모은 합장강아지 정면 디테일",
          },
        ],
        body: [
          "합장강아지의 가장 큰 매력은 앞발을 가지런히 모은 자세입니다. 합장하는 모습이 단정하게 표현되어 있어 귀여움 속에서도 차분한 느낌이 살아납니다.",
          "작은 얼굴 표정과 몸통의 털 결 표현까지 더해져 가까이 볼수록 디테일이 느껴집니다. 불교 소품의 의미를 부담스럽지 않게 담고 있어 일상 공간에도 잘 어울립니다.",
        ],
      },
      {
        title: "손에 쏙 들어오는 아담한 크기",
        images: [
          {
            src: `${prayingDogImageBase}/image3.jpg`,
            alt: "손에 가볍게 들어오는 합장강아지 크기",
          },
        ],
        body: [
          "합장강아지는 약 4.5cm x 2.0cm 크기의 작은 미니 소품입니다. 손에 가볍게 들어오며 책상 한쪽, 모니터 옆, 선반 위, 차량 내부처럼 좁은 공간에도 부담 없이 배치할 수 있습니다.",
          "무게는 약 12g 내외로 가볍지만, 수지 소재 특유의 단정한 형태감이 있어 작은 크기에도 존재감이 느껴집니다.",
        ],
      },
      {
        title: "어디에 두어도 자연스러운 분위기",
        images: [
          {
            src: `${prayingDogImageBase}/image4.jpg`,
            alt: "옆에서 본 합장강아지의 둥근 실루엣",
          },
        ],
        body: [
          "옆에서 보아도 둥근 실루엣과 차분한 자세가 잘 드러납니다. 나무색에 가까운 따뜻한 색감 덕분에 원목 책상, 베이지톤 인테리어, 식물 소품과도 자연스럽게 어울립니다.",
          "책상 위에 두면 바쁜 순간에도 시선이 잠시 머물고, 집 안 한 켠에 두면 공간이 조금 더 부드러워집니다. 명상 공간이나 작은 불교 소품 존을 꾸밀 때 함께 배치하기에도 좋습니다.",
        ],
      },
      {
        title: "뒷모습까지 귀여운 디테일",
        images: [
          {
            src: `${prayingDogImageBase}/image5.jpg`,
            alt: "꼬리와 등 라인이 보이는 합장강아지 뒷모습",
          },
        ],
        body: [
          "합장강아지는 정면뿐 아니라 뒷모습의 꼬리와 등 라인까지 귀엽게 표현되어 있습니다. 어느 방향에서 보아도 작은 강아지의 형태가 자연스럽게 느껴지도록 만들어진 제품입니다.",
          "작은 소품일수록 전체적인 형태와 마감이 중요합니다. 합장강아지는 정면, 측면, 후면 모두 부담 없이 감상할 수 있어 장식용으로 활용하기 좋습니다.",
        ],
      },
      {
        title: "함께 두면 더 따뜻한 느낌",
        images: [
          {
            src: `${prayingDogImageBase}/image6.jpg`,
            alt: "여러 개를 함께 둔 합장강아지 구성",
          },
        ],
        body: [
          "합장강아지는 하나만 두어도 충분히 귀엽지만, 여러 개를 함께 배치하면 더욱 따뜻한 분위기를 만들 수 있습니다. 나란히 놓았을 때 함께 기도하는 듯한 느낌이 살아납니다.",
          "작은 선물용 소품으로도 부담이 적고, 불교굿즈나 귀여운 강아지 소품을 좋아하는 분에게 자연스럽게 어울립니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 합장강아지",
          "재질: 수지재질",
          "구성: 합장강아지 1EA",
          "사이즈: 약 4.5cm x 2.0cm",
          "무게: 약 12g ±3g",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  }),
  "emotional-buddhist-goods/praying-cat": defineSearchSliderCurationDetail({
    name: "합장고양이",
    subtitle: "두 손을 모은 귀여운 고양이 미니 불교굿즈",
    summary:
      "작은 고양이의 합장 자세가 명상 공간과 일상 공간에 편안한 분위기를 더해주는 미니 불교굿즈입니다.",
    introBody: [
      "합장고양이는 두 손을 가지런히 모은 고양이 모습을 담은 미니 불교굿즈입니다. 작은 크기와 부드러운 표정이 어우러져 책상, 선반, 차량, 침실 협탁처럼 자주 시선이 머무는 공간에 자연스럽게 놓기 좋습니다.",
      "전통적인 불상이나 법구가 조금 어렵게 느껴질 때, 합장의 의미를 친근한 고양이 캐릭터로 풀어낸 작은 소품부터 시작해보세요. 바라보는 순간 마음을 잠시 가다듬게 해주는 것이 특징입니다.",
    ],
    image: `${prayingCatImageBase}/praying-cat-buddhist-goods-01.png`,
    imageAlt: "합장고양이 불교굿즈 명상 소원부적 미니 소품 대표 이미지",
    relatedSearchTerms: [
      "불교굿즈",
      "명상",
      "소원부적",
      "부처",
      "불상",
      "불교",
      "박람회",
      "고양이",
    ],
    seo: {
      primaryKeyword: "불교굿즈",
      secondaryKeywords: ["명상", "소원부적", "부처", "불상", "불교 박람회", "고양이"],
      keywords: [
        "불교굿즈",
        "명상",
        "소원부적",
        "부처",
        "불상",
        "불교",
        "불교 박람회",
        "박람회",
        "고양이",
        "합장고양이",
        "불교용품추천",
        "불교용품",
      ],
      title: "합장고양이 불교굿즈 | 명상 소원부적 미니소품 | 붓다모아",
      description:
        "두 손을 가지런히 모은 합장고양이 미니 불교굿즈입니다. 명상 공간, 소원부적 감성, 부처·불상 주변에 어울리는 작은 고양이 소품을 소개합니다.",
    },
    sliderImages: prayingCatSliderImages,
    descriptionSections: [
      {
        title: "불교용품추천, 처음이라면 합장고양이처럼 친근한 소품부터 시작해보세요",
        body: [
          "불교용품을 하나 곁에 두고 싶지만, 전통적인 불상이나 법구는 조금 어렵게 느껴질 때가 있잖아요.",
          "그럴 때는 일상적인 모습 안에 따뜻한 의미를 담은 작은 소품부터 시작해도 좋아요. 책상이나 선반 한쪽에 자연스럽게 놓을 수 있고, 볼 때마다 잠시 마음을 가다듬게 해준다면 그것만으로도 충분합니다.",
          "붓다모아의 합장고양이는 두 손을 가지런히 모은 고양이의 모습을 표현한 미니 불교굿즈예요. 크기는 아주 작지만 단정한 자세와 순한 표정이 눈에 들어와, 공간 한쪽에 두면 은근히 마음이 부드러워집니다.",
        ],
      },
      {
        title: "작은 고양이가 두 손을 모으고 조용히 인사해요",
        body: [
          "이 제품의 가장 큰 매력은 역시 합장하고 있는 고양이의 모습이에요.",
          "귀여운 고양이가 두 손을 가슴 앞에 모으고 가만히 서 있는 모습을 보면, 무언가를 간절히 부탁하기보다 감사한 마음으로 조용히 인사하는 것처럼 느껴집니다. 그래서 지나치게 장난스럽지도 않고, 그렇다고 너무 엄숙하지도 않아요.",
          "전통적인 불상이나 보살상을 그대로 재현한 상품은 아닙니다. 불교에서 익숙한 합장의 모습을 친근한 고양이 캐릭터로 표현한 현대적인 불교굿즈라고 생각하시면 이해하기 쉬워요.",
          "불교 신자분은 물론이고 고양이를 좋아하는 집사님, 작은 미니어처를 모으는 분도 부담 없이 선택할 수 있습니다.",
        ],
      },
      {
        title: "합장은 흩어진 마음을 한곳에 모으는 동작이에요",
        body: [
          "합장은 두 손바닥을 마주 대고 몸과 마음을 가지런히 하는 동작입니다. 불교에서는 상대를 공경하거나 감사한 마음을 표현할 때 자연스럽게 볼 수 있어요.",
          "꼭 어렵고 거창한 의미로 받아들이지 않아도 괜찮습니다. 바쁜 하루 중 잠깐 멈춰 두 손을 모아보는 것만으로도 여기저기 흩어져 있던 생각을 한곳으로 모으는 계기가 될 수 있으니까요.",
          "합장고양이를 바라보며 오늘 감사했던 일 하나를 떠올리거나, 지금 해야 할 일에 다시 집중해보세요. 작은 소품이지만 마음을 정돈하는 나만의 신호처럼 활용할 수 있습니다.",
        ],
      },
      {
        title: "불교용품추천을 찾는 분께 소개하고 싶은 이유",
        body: [
          "불교용품추천을 검색하다 보면 불상, 염주, 목탁, 경전처럼 종류가 무척 다양해서 무엇부터 골라야 할지 고민될 수 있어요.",
          "합장고양이는 크기가 작고 종교적인 분위기가 강하지 않아 불교용품을 처음 접하는 분도 편안하게 사용할 수 있습니다. 별도의 불단이나 넓은 공간을 마련할 필요도 없어요.",
          "책상 위에 올려두는 귀여운 장식 소품으로 시작해도 좋고, 명상이나 기도를 할 때 잠시 시선을 머무는 작은 오브제로 활용해도 좋습니다. 고양이의 친근함과 합장의 의미를 함께 담은 상품을 찾고 있었다면 잘 어울리는 선택이에요.",
        ],
      },
      {
        title: "손가락 두세 마디 정도의 아담한 크기예요",
        body: [
          "합장고양이의 크기는 약 4.5cm x 2.0cm이며, 무게는 약 14g±3g입니다.",
          "손가락 두세 마디 정도의 작은 크기라 자리를 거의 차지하지 않아요. 컴퓨터 모니터 옆이나 책장 사이, 침대 옆 협탁처럼 작은 공간에도 자연스럽게 놓을 수 있습니다.",
          "제품의 크기와 무게는 측정하는 위치와 방법에 따라 약간의 차이가 있을 수 있으니, 구매 전 상세 이미지와 표기된 크기를 함께 확인해 주세요.",
        ],
      },
      {
        title: "책상과 집 안 한쪽에 자연스럽게 스며들어요",
        body: [
          "사무실 책상 위에 놓아두면 바쁜 업무 중 잠시 시선을 돌릴 수 있는 작은 친구가 되어줍니다. 일이 잘 풀리지 않을 때 합장고양이를 한 번 바라보고 호흡을 고른 뒤 다시 시작해도 좋아요.",
          "공부방이나 서재에서는 책을 읽기 전 마음을 가다듬는 소품으로, 거실이나 침실에서는 공간을 부드럽게 만들어주는 미니 인테리어로 활용할 수 있습니다.",
          "차량 안에 두고 싶다면 급정거나 충돌 시 움직이지 않도록 안전한 위치에 단단히 고정해 주세요. 운전자의 시야나 에어백 작동을 방해하는 자리에는 놓지 않는 것이 좋습니다.",
        ],
      },
      {
        title: "소원이나 다짐을 기억하는 작은 표식으로도 좋아요",
        body: [
          "누구나 마음속에 이루고 싶은 소원이나 끝까지 지키고 싶은 다짐 하나쯤은 가지고 있잖아요.",
          "합장고양이는 특정한 효능을 보장하는 전통 부적은 아니지만, 내가 바라는 마음이나 다짐을 잊지 않도록 곁에 두는 작은 표식으로 활용할 수 있어요.",
          "시험을 준비할 때는 끝까지 성실하게 공부하겠다는 다짐을, 새로운 일을 시작할 때는 조급해하지 않고 차근차근 나아가겠다는 마음을 떠올려보세요. 중요한 것은 소품 자체보다 그것을 바라보며 다시 한번 마음을 다잡는 순간입니다.",
        ],
      },
      {
        title: "고양이를 좋아하는 분께 건네는 작은 선물",
        body: [
          "고양이를 좋아하는 분께 선물을 고를 때는 흔한 캐릭터 제품보다 조금 더 의미 있는 소품을 찾게 될 때가 있잖아요.",
          "합장고양이는 크기가 작고 표정이 친근해 가볍게 마음을 전하기 좋습니다. 고양이 집사님이나 직장 동료, 작은 불교소품을 모으는 분께 건네기 좋아요.",
          "시험이나 새로운 출발을 앞둔 분에게는 응원의 마음을, 요즘 많이 지쳐 보이는 분에게는 잠시 쉬어가라는 마음을 담아 선물해 보세요. 열심히 지내고 있는 나 자신에게 주는 소소한 선물로도 잘 어울립니다.",
        ],
      },
      {
        title: "불교박람회굿즈의 친근한 감성을 좋아한다면",
        body: [
          "요즘에는 전통적인 불상과 염주뿐 아니라, 불교의 의미를 귀여운 캐릭터와 현대적인 디자인으로 풀어낸 불교굿즈도 다양하게 소개되고 있어요.",
          "불교박람회나 불교박람회굿즈를 찾아보며 일상에서 편하게 사용할 수 있는 상품을 좋아하셨다면, 합장고양이도 자연스럽게 마음에 들 수 있습니다.",
          "합장이라는 불교적인 요소는 분명하게 담겨 있지만 귀여운 고양이 모습으로 표현되어 집이나 사무실의 일반적인 인테리어와도 잘 어울려요. 전통과 친근함 사이의 균형이 이 상품의 매력입니다.",
        ],
      },
      {
        title: "주문하기 전에 상품 정보를 확인해 주세요",
        body: [
          "제품명은 합장고양이 불교굿즈이며, 재질은 수지입니다. 기본 구성은 합장고양이 1개예요.",
          "판매처는 붓다모아이고, 수입사는 스테디오더이며 원산지는 중국입니다.",
          "수지 제품은 비교적 가볍지만 높은 곳에서 떨어지거나 강한 충격을 받으면 파손될 수 있습니다. 평평하고 안정적인 곳에 놓아주시고, 어린아이나 반려동물이 입에 넣지 않도록 주의해 주세요.",
          "촬영 환경이나 사용하시는 모니터의 화면 설정에 따라 실제 색상이 조금 다르게 보일 수 있으며, 제품마다 표면 표현이나 도색에 미세한 차이가 있을 수 있습니다.",
        ],
      },
      {
        title: "오래 두고 보려면 이렇게 관리해 주세요",
        body: [
          "표면에 먼지가 묻었을 때는 부드럽고 마른 천이나 작은 솔로 살짝 닦아주세요.",
          "강한 세정제를 사용하거나 물에 오래 담가두면 표면이 손상될 수 있으므로 물세척은 피하는 것이 좋습니다. 직사광선이 오랫동안 닿거나 습기가 많은 장소도 피해 보관해 주세요.",
        ],
      },
      {
        title: "배송은 이렇게 진행돼요",
        body: [
          "평일 낮 12시까지 결제가 완료된 주문은 당일 발송을 원칙으로 하고 있습니다.",
          "배송은 휴일과 공휴일을 제외하고 평균적으로 약 1~3영업일 정도 소요돼요. 다만 택배사 사정이나 배송 지역에 따라 평소보다 조금 더 늦어질 수 있습니다.",
          "제품이 배송 중 손상되지 않도록 에어캡 등 완충재로 꼼꼼하게 보호 포장하여 발송해드립니다.",
        ],
      },
      {
        title: "오늘은 잠시 멈춰 마음을 한곳에 모아보세요",
        body: [
          "붓다모아는 부처님을 뜻하는 '붓다'와 다양한 불교용품을 한곳에 모았다는 의미를 담은 이름입니다.",
          "전통적인 불교용품부터 일상에서 편안하게 사용할 수 있는 불교굿즈까지, 불교를 조금 더 친근하게 만날 수 있는 상품을 소개하고 있어요.",
          "불교용품추천을 찾고 있었다면, 두 손을 가지런히 모은 작은 고양이를 일상 가까이에 놓아보세요. 불교박람회와 불교박람회굿즈에서 느꼈던 따뜻하고 현대적인 감성을 집이나 사무실에서도 편안하게 즐길 수 있습니다.",
          "바쁜 날에는 합장고양이를 바라보며 잠시 숨을 고르고, 오늘 감사한 일이나 앞으로 지키고 싶은 다짐을 하나 떠올려보세요.",
          "작은 소품 하나가 평범한 하루에 짧지만 따뜻한 마음의 쉼표를 더해줄 거예요.",
          "상품은 네이버에서 '붓다모아'를 검색하면 만나보실 수 있습니다.",
        ],
      },
    ],
    quickFacts: [
      { name: "제품명", value: "합장고양이 불교굿즈" },
      { name: "상품 유형", value: "두 손을 모은 고양이 미니 소품, 명상 오브제, 불교굿즈" },
      { name: "구성", value: "합장고양이 1개" },
      { name: "재질", value: "수지" },
      { name: "크기", value: "약 4.5cm x 2.0cm" },
      { name: "무게", value: "약 14g±3g" },
      { name: "추천 공간", value: "책상, 선반, 협탁, 공부방, 서재, 명상 공간, 안전하게 고정한 차량 내부" },
      { name: "관리 방법", value: "마른 천이나 작은 솔로 닦고, 물세척과 강한 직사광선은 피해주세요" },
      standardDeliveryFact,
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    faqs: [
      {
        question: "합장고양이는 한 개가 배송되는 상품인가요?",
        answer: "네. 기본 구성은 합장고양이 불교굿즈 1개입니다.",
      },
      {
        question: "불교 신자가 아니어도 괜찮을까요?",
        answer:
          "네. 종교적인 의례에 반드시 사용해야 하는 용품이라기보다 합장의 의미를 친근한 고양이 캐릭터로 표현한 미니 소품이므로, 종교와 관계없이 편하게 활용할 수 있습니다.",
      },
      {
        question: "소원부적으로 사용할 수 있나요?",
        answer:
          "특정한 효능을 보장하는 전통 부적은 아닙니다. 다만 나의 소원이나 목표, 감사한 마음을 떠올리게 하는 작은 기념 소품으로 곁에 둘 수 있습니다.",
      },
      {
        question: "부처나 불상 주변에 함께 두어도 어울리나요?",
        answer:
          "네. 작은 크기와 차분한 합장 자세 덕분에 부처님 소품, 불상, 미니불상, 명상 공간 주변에 부담 없이 함께 둘 수 있습니다.",
      },
      standardDeliveryFaq,
    ],
    sections: [
      {
        title: "두 손을 모은 작은 모습",
        images: [
          {
            src: `${prayingCatImageBase}/praying-cat-buddhist-goods-01.png`,
            alt: "앞발을 모은 합장고양이 정면 디테일",
          },
        ],
        body: [
          "합장고양이의 가장 큰 매력은 앞발을 모은 단정한 자세입니다. 작은 얼굴의 표정과 귀, 몸통의 무늬가 함께 표현되어 가까이 볼수록 귀여운 디테일이 살아납니다.",
          "합장 자세가 주는 차분한 느낌 덕분에 불교 소품의 분위기를 부담스럽지 않게 담을 수 있습니다. 일상 공간에 두어도 과하지 않고 자연스럽게 어울립니다.",
        ],
      },
      {
        title: "손에 쏙 들어오는 아담한 크기",
        images: [
          {
            src: `${prayingCatImageBase}/praying-cat-meditation-goods-pair-02.png`,
            alt: "손에 가볍게 들어오는 합장고양이 크기",
          },
        ],
        body: [
          "합장고양이는 약 4.5cm x 2.0cm 크기의 작은 미니 소품입니다. 손에 가볍게 들어오는 사이즈로, 모니터 옆이나 책상 한쪽처럼 좁은 공간에도 부담 없이 배치할 수 있습니다.",
          "무게는 약 14g 내외로 가볍지만, 수지 소재 특유의 단정한 형태감이 있어 작은 크기에도 귀여운 존재감이 느껴집니다.",
        ],
      },
      {
        title: "어디에 두어도 자연스러운 분위기",
        images: [
          {
            src: `${prayingCatImageBase}/buddhist-fair-cat-goods-side-03.png`,
            alt: "옆에서 본 합장고양이의 둥근 실루엣",
          },
        ],
        body: [
          "옆에서 보아도 둥근 실루엣과 합장 자세가 잘 드러납니다. 흰색 바탕에 노랑과 검정 무늬가 더해져 밝고 따뜻한 인상을 줍니다.",
          "책상 위에 두면 바쁜 순간에도 시선이 한 번 머물고, 집 안 한 켠에 두면 공간이 조금 더 부드러워집니다. 명상 공간이나 작은 불교 소품 존을 꾸밀 때 함께 배치하기에도 좋습니다.",
        ],
      },
      {
        title: "뒷모습까지 귀여운 디테일",
        images: [
          {
            src: `${prayingCatImageBase}/praying-cat-back-detail-09.png`,
            alt: "무늬와 꼬리 라인이 보이는 합장고양이 뒷모습",
          },
        ],
        body: [
          "합장고양이는 정면뿐 아니라 뒷모습의 무늬와 꼬리 라인까지 귀엽게 표현되어 있습니다. 어느 방향에서 보아도 작은 고양이의 형태가 자연스럽게 느껴집니다.",
          "작은 소품일수록 전체적인 형태와 마감이 중요합니다. 합장고양이는 정면, 측면, 후면 모두 부담 없이 감상할 수 있어 장식용으로 활용하기 좋습니다.",
        ],
      },
      {
        title: "함께 두면 더 따뜻한 느낌",
        images: [
          {
            src: `${prayingCatImageBase}/praying-cat-wish-charm-goods-04.png`,
            alt: "여러 개를 함께 둔 합장고양이 구성",
          },
        ],
        body: [
          "합장고양이는 하나만 두어도 충분히 귀엽지만, 여러 개를 함께 배치하면 더욱 따뜻한 분위기를 만들 수 있습니다. 나란히 놓았을 때 함께 마음을 모으는 듯한 느낌이 살아납니다.",
          "작은 선물용 소품으로도 부담이 적고, 불교굿즈나 귀여운 고양이 소품을 좋아하는 분에게 자연스럽게 어울립니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 합장고양이",
          "재질: 수지재질",
          "구성: 합장고양이 1EA",
          "사이즈: 약 4.5cm x 2.0cm",
          "무게: 약 14g ±3g",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  }),
  "daily-wrist-prayer-beads/buddhist-prayer-beads": defineSearchSliderCurationDetail({
    name: "불교염주",
    subtitle: "평소에도 부담 없이 착용하기 좋은 보랏빛 포인트 나무염주",
    summary:
      "짙은 갈색 나무 비즈와 보랏빛 포인트가 어우러진 손목용 불교염주입니다.",
    introBody: [
      "불교염주는 짙은 갈색 나무 비즈 사이에 보랏빛 구슬과 은빛 장식을 더한 손목용 나무염주입니다. 기도와 명상을 할 때 곁에 둘 수 있으면서, 일상에서는 단정한 염주팔찌처럼 편하게 착용할 수 있습니다.",
    ],
    image: `${buddhistPrayerBeadsImageBase}/buddhist-prayer-beads-wooden-bracelet-01.png`,
    imageAlt: "불교염주 나무염주 손목 염주팔찌 불교굿즈 대표 이미지",
    relatedSearchTerms: [
      "나무염주",
      "불교용품",
      "불교굿즈",
      "염주",
      "단주",
      "팔찌",
      "108",
      "108배",
      "합장주",
      "손목",
    ],
    seo: {
      primaryKeyword: "나무염주",
      secondaryKeywords: ["불교용품", "불교굿즈", "염주", "단주", "팔찌", "108", "108배", "합장주", "손목"],
      keywords: [
        "나무염주",
        "불교용품",
        "불교굿즈",
        "염주",
        "단주",
        "팔찌",
        "108",
        "108배",
        "합장주",
        "손목",
        "불교염주",
        "손목염주",
        "염주팔찌",
        "불교팔찌",
        "기도용품",
        "명상도구",
      ],
      title: "불교염주 나무염주 | 손목 염주팔찌 불교굿즈 | 붓다모아",
      description:
        "짙은 갈색 나무 비즈와 보랏빛 포인트가 어우러진 불교염주입니다. 나무염주, 불교용품, 불교굿즈, 단주, 팔찌, 108배와 합장주를 찾는 분께 손목 염주팔찌를 소개합니다.",
    },
    sliderImages: buddhistPrayerBeadsSliderImages,
    descriptionSections: [
      {
        title: "불교염주, 평소에도 부담 없이 착용하고 싶다면",
        body: [
          "염주를 하나 장만하고 싶어도 너무 크거나 종교적인 분위기가 강하면 평소에 착용하기 조금 망설여질 때가 있잖아요.",
          "그럴 때는 손목에 자연스럽게 어울리는 작은 나무염주부터 시작해도 좋아요. 기도나 명상을 할 때 곁에 둘 수 있으면서, 일상에서는 단정한 염주팔찌처럼 편하게 착용할 수 있으니까요.",
          "붓다모아의 보랏빛 포인트 염주는 짙은 갈색 나무 비즈 사이에 보랏빛 구슬과 은빛 장식을 더한 손목용 불교염주예요. 전통적인 나무의 편안함은 살리고, 포인트 색상으로 은은한 개성을 더했습니다.",
        ],
      },
      {
        title: "손목에 자연스럽게 감기는 6mm 나무 비즈",
        body: [
          "염주를 착용할 때는 구슬의 크기가 생각보다 중요해요. 비즈가 너무 크면 손목에서 존재감이 강하고, 너무 작으면 손으로 굴리거나 만질 때 아쉽게 느껴질 수 있습니다.",
          "이 나무염주는 지름 약 6mm의 비즈로 만들어졌어요. 손목에 착용했을 때 지나치게 크지 않고, 손끝으로 한 알씩 가볍게 만지기에도 편안한 크기입니다.",
          "측정하는 위치와 방법에 따라 비즈 크기에는 약간의 차이가 있을 수 있으니, 구매 전 상세 이미지와 표기된 크기를 함께 확인해 주세요.",
        ],
      },
      {
        title: "짙은 나무색에 보랏빛 포인트를 더했어요",
        body: [
          "전체적으로는 짙은 갈색 나무 비즈가 이어져 있어 차분하고 단정한 느낌이에요. 여기에 중앙의 보랏빛 구슬과 은빛 장식이 더해져 너무 평범하지 않으면서도 부담스럽지 않은 포인트가 됩니다.",
          "보랏빛은 깊고 차분한 분위기를 떠올리게 하는 색이라 나무의 따뜻한 색감과 잘 어울려요. 불교적인 의미를 중요하게 생각하는 분은 마음을 가다듬는 상징처럼 받아들일 수 있고, 일상에서는 세련된 색상 포인트로 즐길 수 있습니다.",
          "전통적인 불교염주의 분위기는 유지하면서도 평소 옷차림에 자연스럽게 어울리는 디자인을 찾고 있었다면 잘 맞는 선택이에요.",
        ],
      },
      {
        title: "108염주와 염주팔찌는 어떻게 다를까요?",
        body: [
          "염주를 알아보다 보면 108염주, 단주, 손목 염주팔찌처럼 여러 이름을 만나게 됩니다.",
          "108염주는 일반적으로 여러 구슬을 길게 꿰어 염불이나 절 수행을 할 때 사용하는 형태를 떠올리면 이해하기 쉬워요. 반면 염주팔찌는 손목에 착용하기 좋은 길이로 만들어져 일상에서 편하게 사용할 수 있습니다.",
          "이 제품은 긴 108염주가 아니라 손목에 착용하는 염주팔찌형 나무염주예요. 구슬 수를 세며 108배 수행에 사용하는 전용 108염주를 찾는 분이라면 상품의 형태와 구성을 꼭 구분해서 선택해 주세요.",
          "기도와 수행의 의미를 가까이 두면서도 평소 손목에 자연스럽게 착용하고 싶은 분께 잘 어울리는 제품입니다.",
        ],
      },
      {
        title: "기도할 때도, 일상에서도 편안하게 사용할 수 있어요",
        body: [
          "불교염주는 꼭 특별한 날에만 사용하는 물건은 아니에요. 아침에 하루를 시작하기 전 잠시 마음을 가다듬거나, 기도와 명상을 할 때 손끝으로 비즈를 천천히 만져보세요.",
          "생각이 복잡한 날에는 구슬의 나무결과 감촉에 잠깐 집중하는 것만으로도 빠르게 흘러가던 생각을 멈추는 계기를 만들 수 있습니다.",
          "물론 염주 자체가 고민을 해결하거나 특정한 결과를 보장하는 것은 아니에요. 중요한 것은 염주를 바라보고 만지는 짧은 순간에 내가 어떤 마음을 떠올리는지입니다.",
          "감사한 일을 하나 생각하거나, 오늘 지키고 싶은 다짐을 조용히 되새기는 나만의 작은 습관으로 활용해 보세요.",
        ],
      },
      {
        title: "옷차림에 자연스럽게 어울리는 나무염주",
        body: [
          "짙은 갈색 나무 비즈는 색상이 차분해 계절이나 옷차림에 크게 구애받지 않아요. 캐주얼한 옷에는 따뜻한 포인트가 되고, 단정한 셔츠나 니트와 함께 착용하면 차분한 분위기를 더해줍니다.",
          "보랏빛 포인트가 크지 않아 다른 팔찌나 시계와 함께 착용해도 지나치게 복잡해 보이지 않아요. 다만 장식이 서로 부딪혀 표면에 흠집이 생길 수 있으므로, 단단한 금속 팔찌나 시계와 겹쳐 착용할 때는 조금 여유를 두는 것이 좋습니다.",
          "불교용품이라는 의미를 드러내고 싶을 때도 좋고, 평소에는 나무 액세서리처럼 자연스럽게 착용할 수 있는 염주팔찌입니다.",
        ],
      },
      {
        title: "나무 비즈마다 결이나 색감이 조금씩 달라요",
        body: [
          "나무로 만든 구슬은 제품마다 결의 방향과 색감, 무늬가 조금씩 다를 수 있어요.",
          "어떤 비즈는 결이 선명하게 보이고, 어떤 비즈는 조금 더 부드럽고 균일하게 보일 수 있습니다. 이는 불량이라기보다 나무 소재에서 자연스럽게 나타날 수 있는 특징이에요.",
          "모든 비즈가 기계적으로 똑같지 않다는 점이 오히려 나무염주만의 따뜻한 매력입니다. 내가 받은 염주의 결을 천천히 살펴보는 재미도 느껴보세요.",
        ],
      },
      {
        title: "처음 염주를 고르는 분께도 부담이 적어요",
        body: [
          "불교염주를 처음 구매할 때는 어떤 크기와 형태를 골라야 할지 고민될 수 있어요.",
          "보랏빛 포인트 염주는 손목에 착용하는 익숙한 형태이고, 비즈 크기도 약 6mm로 아담해 처음 염주를 접하는 분도 부담 없이 사용할 수 있습니다.",
          "기도를 위해 마련해도 좋고, 불교적인 마음가짐을 일상 가까이에 두고 싶을 때 선택해도 좋아요. 나무 소재와 차분한 색상을 좋아하는 분이라면 종교와 관계없이 편안한 팔찌로 활용할 수도 있습니다.",
        ],
      },
      {
        title: "마음을 전하는 작은 선물로도 잘 어울려요",
        body: [
          "염주는 크기가 크지 않으면서도 마음을 담아 건네기 좋은 선물이에요.",
          "기도나 명상을 시작한 분, 불교에 관심이 있는 분, 차분한 나무 액세서리를 좋아하는 분께 보랏빛 포인트 염주를 선물해 보세요.",
          "새로운 일을 앞둔 분에게는 흔들리지 않고 차근차근 나아가길 바라는 마음을, 바쁜 일상을 보내는 분에게는 잠시 마음을 쉬어가라는 뜻을 담아 전할 수 있습니다.",
          "가족이나 친구에게 건네는 선물은 물론이고, 꾸준한 수행이나 새로운 다짐을 시작하는 나 자신에게 주는 염주팔찌로도 잘 어울려요.",
        ],
      },
      {
        title: "주문하기 전에 상품 정보를 확인해 주세요",
        body: [
          "제품명은 보랏빛 포인트 염주이며, 재질은 나무 외 소재로 구성되어 있습니다. 나무 비즈의 지름은 약 6mm이고, 기본 구성은 보랏빛 포인트 염주 1개예요.",
          "판매처는 붓다모아이고, 수입사는 스테디오더이며 원산지는 중국입니다.",
          "이 제품은 손목에 착용하는 염주팔찌형 상품이며, 긴 형태의 108염주가 아닙니다. 구슬 수나 손목 둘레는 첨부된 상품 정보에 별도로 표기되어 있지 않으므로, 구매 전 상세 이미지와 옵션 안내를 충분히 확인해 주세요.",
          "촬영 환경이나 사용하시는 모니터의 화면 설정에 따라 실제 색상이 조금 다르게 보일 수 있으며, 나무 비즈의 결이나 색감, 장식의 표면 표현에도 미세한 차이가 있을 수 있습니다.",
        ],
      },
      {
        title: "오래 착용하려면 물과 강한 충격을 피해 주세요",
        body: [
          "나무염주는 물과 습기에 오래 노출되면 색이 변하거나 비즈의 표면이 거칠어질 수 있어요. 샤워나 수영, 운동처럼 땀이 많이 나는 활동 전에는 잠시 벗어두는 것이 좋습니다.",
          "향수나 화장품, 세정제가 비즈와 장식에 직접 닿지 않도록 주의해 주세요. 사용 후에는 부드럽고 마른 천으로 가볍게 닦아 통풍이 잘되는 곳에 보관하면 좋습니다.",
          "염주를 지나치게 잡아당기거나 강한 힘으로 늘리면 연결 부분이 손상될 수 있으니 손목에 착용하거나 벗을 때는 천천히 다뤄주세요.",
        ],
      },
      {
        title: "배송은 이렇게 진행돼요",
        body: [
          "평일 낮 12시까지 결제가 완료된 주문은 당일 발송을 원칙으로 하고 있습니다.",
          "배송은 휴일과 공휴일을 제외하고 평균적으로 약 1~3영업일 정도 소요돼요. 다만 택배사 사정이나 배송 지역에 따라 평소보다 조금 더 늦어질 수 있습니다.",
          "상품이 배송 중 손상되지 않도록 에어캡 등 완충재로 꼼꼼하게 보호 포장하여 발송해드립니다.",
        ],
      },
      {
        title: "매일 손목 가까이에서 마음을 돌아보세요",
        body: [
          "붓다모아는 부처님을 뜻하는 '붓다'와 다양한 불교용품을 한곳에 모았다는 의미를 담은 이름입니다.",
          "기도와 수행에 사용하는 전통적인 108염주부터 일상에서 편하게 착용할 수 있는 나무염주와 염주팔찌까지, 각자의 생활에 잘 어울리는 불교용품을 소개하고 있어요.",
          "불교염주를 찾고 있었다면, 짙은 나무색과 은은한 보랏빛이 어우러진 염주를 손목 가까이에 두어보세요.",
          "바쁜 순간에는 비즈를 가볍게 만지며 호흡을 고르고, 기도할 때는 오늘 감사한 일이나 앞으로 지키고 싶은 다짐을 천천히 떠올려보세요.",
          "화려하지 않지만 오래 곁에 두기 좋은 나무염주가 평범한 하루에 조용한 마음의 중심을 더해줄 거예요.",
          "상품은 네이버에서 '붓다모아'를 검색하면 만나보실 수 있습니다.",
        ],
      },
    ],
    quickFacts: [
      { name: "제품명", value: "보랏빛 포인트 불교염주" },
      { name: "상품 유형", value: "나무염주, 손목 염주팔찌, 단주형 불교굿즈" },
      { name: "구성", value: "불교염주 1개" },
      { name: "재질", value: "나무 외" },
      { name: "비즈 크기", value: "지름 약 6mm" },
      { name: "착용 형태", value: "손목에 착용하는 염주팔찌형 상품" },
      { name: "108염주 여부", value: "긴 수행용 108염주가 아닌 손목 착용형 나무염주" },
      { name: "추천 용도", value: "기도, 명상, 108배 전후 마음 정리, 일상 손목 팔찌" },
      { name: "관리 방법", value: "물과 땀, 강한 충격을 피하고 마른 천으로 가볍게 닦아주세요" },
      standardDeliveryFact,
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    faqs: [
      {
        question: "108개의 구슬로 이루어진 108염주인가요?",
        answer:
          "아니에요. 이 상품은 손목에 착용하는 염주팔찌형 나무염주이며, 긴 수행용 108염주와는 형태가 다릅니다.",
      },
      {
        question: "나무 비즈의 크기는 어느 정도인가요?",
        answer:
          "나무 비즈의 지름은 약 6mm입니다. 측정하는 위치와 방법에 따라 약간의 차이가 있을 수 있어요.",
      },
      {
        question: "불교 신자가 아니어도 착용할 수 있나요?",
        answer:
          "물론이에요. 불교 신자분은 기도와 명상을 위한 불교염주로 사용할 수 있고, 종교가 없는 분은 차분한 나무 소재의 염주팔찌로 편하게 착용할 수 있습니다.",
      },
      {
        question: "물에 닿아도 괜찮나요?",
        answer:
          "나무와 장식의 변색이나 손상을 줄이기 위해 물과 땀에 오래 노출하지 않는 것이 좋습니다. 샤워나 수영 전에는 벗어두고, 젖었을 때는 마른 천으로 가볍게 닦아주세요.",
      },
      {
        question: "선물용으로도 괜찮을까요?",
        answer:
          "네. 디자인이 차분하고 손목에 부담 없이 착용할 수 있어 불교에 관심 있는 분이나 나무 액세서리를 좋아하는 분께 건네기 좋은 작은 선물입니다.",
      },
      standardDeliveryFaq,
    ],
  }),
  "daily-wrist-prayer-beads/buddhist-danju": defineSearchSliderCurationDetail({
    name: "불교단주",
    subtitle: "매일 손목 가까이에 두기 좋은 진홍빛 포인트 나무 단주",
    summary:
      "짙은 나무 비즈와 진홍빛 포인트가 어우러진 손목용 불교단주입니다.",
    introBody: [
      "불교단주는 짙은 나무 비즈 사이에 붉은 구슬과 아이보리빛 포인트를 더한 손목용 나무염주입니다. 기도하거나 마음을 가다듬을 때 곁에 둘 수 있으면서, 일상에서는 단정한 염주팔찌처럼 편하게 사용할 수 있습니다.",
    ],
    image: `${buddhistDanjuImageBase}/buddhist-danju-hand-detail-03.png`,
    imageAlt: "불교단주 염주 불교염주 나무 단주 팔찌 불교굿즈 대표 이미지",
    relatedSearchTerms: [
      "염주",
      "불교염주",
      "불교굿즈",
      "나무",
      "단주",
      "팔찌",
      "108",
      "108배",
      "합장주",
      "손목",
    ],
    seo: {
      primaryKeyword: "염주",
      secondaryKeywords: ["불교염주", "불교굿즈", "나무", "단주", "팔찌", "108", "108배", "합장주", "손목"],
      keywords: [
        "염주",
        "불교염주",
        "불교굿즈",
        "나무",
        "단주",
        "팔찌",
        "108",
        "108배",
        "합장주",
        "손목",
        "불교단주",
        "나무염주",
        "손목염주",
        "염주팔찌",
        "불교팔찌",
        "기도용품",
        "명상도구",
      ],
      title: "불교단주 염주 | 나무 단주 팔찌 불교굿즈 | 붓다모아",
      description:
        "짙은 나무 비즈와 진홍빛 포인트가 어우러진 불교단주입니다. 염주, 불교염주, 불교굿즈, 나무 단주, 팔찌, 108배와 합장주를 찾는 분께 손목 염주팔찌를 소개합니다.",
    },
    sliderImages: buddhistDanjuSliderImages,
    descriptionSections: [
      {
        title: "불교단주, 매일 손목 가까이에 두고 싶다면",
        body: [
          "염주를 하나 마련하고 싶어도 길이가 길거나 구슬이 크면 평소에 자주 착용하기는 조금 부담스러울 수 있잖아요.",
          "그럴 때는 손목에 자연스럽게 착용할 수 있는 불교단주부터 시작해도 좋아요. 기도하거나 마음을 가다듬을 때 곁에 둘 수 있으면서, 일상에서는 단정한 염주팔찌처럼 편하게 사용할 수 있으니까요.",
          "붓다모아의 진홍빛 포인트 염주는 짙은 나무 비즈 사이에 붉은 구슬과 아이보리빛 포인트를 더한 손목용 나무염주예요. 차분한 원목의 느낌은 그대로 살리고, 중심 부분에 또렷한 색을 넣어 단정하면서도 기억에 남는 디자인으로 완성했습니다.",
        ],
      },
      {
        title: "6mm 나무 비즈라서 단정한 인상이 나요",
        body: [
          "염주를 고를 때는 구슬의 재질뿐 아니라 크기도 함께 살펴보는 것이 좋아요. 같은 나무염주라도 비즈가 크면 묵직한 존재감이 느껴지고, 작으면 조금 더 가볍고 섬세한 분위기가 납니다.",
          "이 불교단주는 지름 약 6mm의 나무 비즈로 만들어졌어요. 손목에 착용했을 때 지나치게 크지 않고, 손끝으로 한 알씩 가볍게 만져보기에도 편안한 크기입니다.",
          "제품을 측정하는 위치와 방법에 따라 비즈 크기에는 약간의 차이가 있을 수 있어요. 착용감 역시 손목 둘레와 밴드의 장력에 따라 다르게 느껴질 수 있으니, 구매 전 상세 이미지를 충분히 확인해 주세요.",
        ],
      },
      {
        title: "짙은 나무색 사이로 진홍빛이 또렷하게 보여요",
        body: [
          "전체적인 바탕은 짙은 갈색의 나무 비즈라서 차분하고 편안한 느낌이에요. 그 사이에 들어간 진홍빛 구슬 두 알은 작지만 시선이 자연스럽게 머무는 포인트가 됩니다.",
          "붉은색은 따뜻함과 생동감을 떠올리게 하고, 주변의 아이보리빛 구슬은 색의 강도를 부드럽게 이어줘요. 특별한 효능을 의미한다고 단정하기보다는, 흔들리는 순간에 다시 마음을 돌아보게 하는 개인적인 상징으로 받아들여도 좋습니다.",
          "전통적인 불교염주의 차분한 분위기와 현대적인 색상 포인트가 함께 있어, 기도할 때뿐 아니라 평소 옷차림에도 자연스럽게 어울려요.",
        ],
      },
      {
        title: "불교단주와 108염주는 어떻게 다를까요?",
        body: [
          "염주를 알아보다 보면 불교단주, 108염주, 합장주, 염주팔찌처럼 여러 이름을 만나게 됩니다.",
          "108염주는 일반적으로 여러 구슬을 길게 꿰어 염불이나 108배 수행에 사용하는 형태를 떠올리면 이해하기 쉬워요. 반면 불교단주는 손목에 착용할 수 있도록 짧게 만든 염주를 뜻하며, 일상에서는 염주팔찌라고 부르기도 합니다.",
          "이 제품은 긴 형태의 108염주가 아니라 손목에 착용하는 불교단주예요. 108개의 구슬을 세며 수행할 수 있는 전용 108염주를 찾고 계신다면 상품의 형태와 구성을 구분해서 선택해 주세요.",
          "기도와 수행의 마음을 일상 가까이에 두면서도, 평소 손목에 자연스럽게 착용하고 싶은 분께 잘 어울립니다.",
        ],
      },
      {
        title: "기도할 때도, 평소 생활할 때도 편하게 사용할 수 있어요",
        body: [
          "불교단주는 꼭 법회나 특별한 기도 시간에만 사용하는 물건은 아니에요. 아침에 하루를 시작하기 전 잠시 마음을 가다듬거나, 생각이 복잡할 때 손끝으로 나무 비즈를 천천히 만져보세요.",
          "구슬의 둥근 형태와 나무의 감촉에 잠깐 집중하는 것만으로도 빠르게 이어지던 생각을 멈추고 호흡을 돌아보는 계기를 만들 수 있습니다.",
          "물론 염주 자체가 고민을 해결하거나 원하는 결과를 보장하는 것은 아니에요. 중요한 것은 염주를 바라보는 짧은 순간에 오늘의 마음과 행동을 스스로 돌아보는 일입니다.",
          "감사한 일을 하나 떠올리거나, 오늘 지키고 싶은 다짐을 조용히 되새기는 나만의 작은 습관으로 활용해 보세요.",
        ],
      },
      {
        title: "옷차림을 크게 가리지 않는 나무염주예요",
        body: [
          "짙은 나무색은 계절이나 옷차림에 크게 구애받지 않아 평소에도 편하게 착용할 수 있어요. 캐주얼한 옷에는 따뜻한 포인트가 되고, 셔츠나 니트처럼 단정한 옷과 함께 착용하면 차분한 분위기를 더해줍니다.",
          "진홍빛과 아이보리빛 구슬이 작은 부분에만 배치되어 있어 전체적으로 지나치게 화려해 보이지 않아요. 불교용품의 의미는 담고 있으면서도 일반적인 나무 액세서리처럼 자연스럽게 착용할 수 있는 염주팔찌입니다.",
          "시계나 다른 팔찌와 함께 착용할 때는 단단한 장식끼리 계속 부딪히지 않도록 약간 간격을 두는 것이 좋아요. 반복적인 마찰은 나무 비즈나 포인트 장식에 작은 흠집을 만들 수 있습니다.",
        ],
      },
      {
        title: "나무 비즈마다 결이나 색감이 조금씩 달라요",
        body: [
          "나무로 만든 구슬은 제품마다 결의 방향과 색감, 무늬가 조금씩 다를 수 있습니다.",
          "어떤 비즈는 나뭇결이 선명하게 보이고, 어떤 비즈는 조금 더 부드럽고 균일하게 보일 수 있어요. 이는 불량이라기보다 나무 소재에서 자연스럽게 나타나는 특징입니다.",
          "모든 비즈가 기계적으로 똑같지 않다는 점이 오히려 나무염주만의 따뜻한 매력이에요. 내가 받은 단주의 결이나 색상을 천천히 살펴보는 재미도 느껴보세요.",
        ],
      },
      {
        title: "처음 불교염주를 고르는 분께도 부담이 적어요",
        body: [
          "처음 염주를 구매할 때는 구슬 수와 크기, 착용 형태가 다양해서 어떤 제품을 골라야 할지 고민될 수 있어요.",
          "진홍빛 포인트 불교단주는 손목에 착용하는 익숙한 형태이고, 비즈 크기도 약 6mm로 아담해 처음 염주를 접하는 분도 비교적 편하게 사용할 수 있습니다.",
          "기도를 위해 마련해도 좋고, 불교적인 마음가짐을 일상 가까이에 두고 싶을 때 선택해도 좋아요. 종교와 관계없이 차분한 나무 소재와 붉은 포인트가 마음에 든다면 일상용 염주팔찌로 활용할 수도 있습니다.",
        ],
      },
      {
        title: "마음을 담아 건네는 작은 선물로도 좋아요",
        body: [
          "염주는 크기가 크지 않으면서도 마음을 담아 전하기 좋은 선물이에요.",
          "기도나 명상을 시작한 분, 불교에 관심이 있는 분, 나무 액세서리를 좋아하는 분께 진홍빛 포인트 단주를 건네보세요.",
          "새로운 일을 앞둔 분에게는 흔들리지 않고 꾸준히 나아가길 바라는 마음을, 바쁜 일상을 보내는 분에게는 잠시 호흡을 고르라는 뜻을 담아 전할 수 있습니다.",
          "가족이나 친구에게 주는 선물은 물론, 새로운 수행이나 다짐을 시작하는 나 자신에게 마련하는 불교단주로도 잘 어울려요.",
        ],
      },
      {
        title: "주문하기 전에 상품 정보를 확인해 주세요",
        body: [
          "제품명은 진홍빛 포인트 염주이며, 재질은 나무 외 소재로 구성되어 있습니다. 나무 비즈의 지름은 약 6mm이고, 기본 구성은 진홍빛 포인트 염주 1개예요.",
          "판매처는 붓다모아이고, 수입사는 스테디오더이며 원산지는 중국입니다.",
          "이 제품은 손목에 착용하는 불교단주이자 염주팔찌형 상품이며, 긴 형태의 108염주는 아닙니다. 첨부된 상품 정보에는 전체 구슬 수와 손목 둘레가 별도로 표기되어 있지 않으므로, 구매 전 상세 이미지와 옵션 안내를 충분히 확인해 주세요.",
          "촬영 환경이나 사용하시는 화면 설정에 따라 실제 색상이 조금 다르게 보일 수 있으며, 나무 비즈의 결이나 색감, 포인트 장식의 표면 표현에도 미세한 차이가 있을 수 있습니다.",
        ],
      },
      {
        title: "오래 착용하려면 물과 강한 마찰을 피해 주세요",
        body: [
          "나무염주는 물이나 습기에 오래 노출되면 색이 변하거나 표면이 거칠어질 수 있어요. 샤워나 수영, 운동처럼 땀이 많이 나는 활동 전에는 잠시 벗어두는 것이 좋습니다.",
          "향수나 화장품, 세정제가 비즈와 장식에 직접 닿지 않도록 주의해 주세요. 사용한 뒤에는 부드럽고 마른 천으로 가볍게 닦아 통풍이 잘되는 곳에 보관하면 좋습니다.",
          "단주를 지나치게 잡아당기거나 강한 힘으로 늘리면 연결 부분이 손상될 수 있으니, 손목에 착용하거나 벗을 때는 천천히 다뤄주세요.",
        ],
      },
      {
        title: "배송은 이렇게 진행돼요",
        body: [
          "평일 낮 12시까지 결제가 완료된 주문은 당일 발송을 원칙으로 하고 있습니다.",
          "배송은 휴일과 공휴일을 제외하고 평균적으로 약 1~3영업일 정도 소요돼요. 다만 택배사 사정이나 배송 지역에 따라 평소보다 조금 더 늦어질 수 있습니다.",
          "상품이 배송 중 손상되지 않도록 에어캡 등 완충재로 꼼꼼하게 보호 포장하여 발송해드립니다.",
        ],
      },
      {
        title: "매일 손목 가까이에서 마음을 돌아보세요",
        body: [
          "붓다모아는 부처님을 뜻하는 '붓다'와 다양한 불교용품을 한곳에 모았다는 의미를 담은 이름입니다.",
          "기도와 수행에 사용하는 전통적인 108염주부터 일상에서 편하게 착용할 수 있는 불교단주, 나무염주, 염주팔찌까지 각자의 생활에 잘 어울리는 불교용품을 소개하고 있어요.",
          "손목에 자연스럽게 착용할 수 있는 염주를 찾고 있었다면, 짙은 나무색과 진홍빛 포인트가 어우러진 단주를 가까이에 두어보세요.",
          "바쁜 순간에는 비즈를 가볍게 만지며 호흡을 고르고, 기도할 때는 오늘 감사한 일이나 앞으로 지키고 싶은 다짐을 천천히 떠올려보세요.",
          "화려하지 않지만 오래 곁에 두기 좋은 나무염주가 평범한 하루에 조용한 마음의 중심을 더해줄 거예요.",
          "상품은 네이버에서 '붓다모아'를 검색하면 만나보실 수 있습니다.",
        ],
      },
    ],
    quickFacts: [
      { name: "제품명", value: "진홍빛 포인트 불교단주" },
      { name: "상품 유형", value: "불교염주, 나무 단주, 손목 염주팔찌, 불교굿즈" },
      { name: "구성", value: "불교단주 1개" },
      { name: "재질", value: "나무 외" },
      { name: "비즈 크기", value: "지름 약 6mm" },
      { name: "착용 형태", value: "손목에 착용하는 단주형 염주팔찌" },
      { name: "108염주 여부", value: "긴 수행용 108염주가 아닌 손목 착용형 불교단주" },
      { name: "추천 용도", value: "기도, 명상, 108배 전후 마음 정리, 일상 손목 팔찌" },
      { name: "관리 방법", value: "물과 땀, 강한 마찰을 피하고 마른 천으로 가볍게 닦아주세요" },
      standardDeliveryFact,
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    faqs: [
      {
        question: "108개의 구슬로 이루어진 108염주인가요?",
        answer:
          "아니에요. 이 상품은 손목에 착용하는 불교단주이며, 긴 수행용 108염주와는 형태가 다릅니다.",
      },
      {
        question: "나무 비즈의 크기는 어느 정도인가요?",
        answer:
          "나무 비즈의 지름은 약 6mm입니다. 측정하는 위치와 방법에 따라 약간의 차이가 있을 수 있어요.",
      },
      {
        question: "불교 신자가 아니어도 착용할 수 있나요?",
        answer:
          "물론이에요. 불교 신자분은 기도와 명상을 위한 불교단주로 사용할 수 있고, 종교가 없는 분은 차분한 나무 소재의 염주팔찌로 편하게 착용할 수 있습니다.",
      },
      {
        question: "물에 닿아도 괜찮나요?",
        answer:
          "나무와 장식의 변색이나 손상을 줄이려면 물과 땀에 오래 노출하지 않는 것이 좋아요. 샤워나 수영 전에는 벗어두고, 젖었을 때는 마른 천으로 가볍게 닦아주세요.",
      },
      {
        question: "선물용으로도 괜찮을까요?",
        answer:
          "네. 디자인이 차분하면서도 진홍빛 포인트가 있어, 불교에 관심 있는 분이나 나무 액세서리를 좋아하는 분께 건네기 좋은 작은 선물입니다.",
      },
      standardDeliveryFaq,
    ],
  }),
  "daily-wrist-prayer-beads/prayer-bead-bracelet": defineSearchSliderCurationDetail({
    name: "염주팔찌",
    subtitle: "두 줄 나무 비즈로 손목 위에 차분한 포인트를 더하는 불교 감성 팔찌",
    summary:
      "검은 톤의 나무 구슬이 두 줄로 자연스럽게 감기는 손목형 염주팔찌입니다.",
    introBody: [
      "염주팔찌는 검은 톤의 나무 구슬을 두 줄로 구성한 손목형 염주입니다. 화려하게 눈에 띄기보다 차분하고 단정한 분위기를 전해, 기도할 때는 물론 출근이나 외출처럼 평범한 일상에도 편하게 착용할 수 있습니다.",
    ],
    image: `${prayerBeadBraceletImageBase}/two-row-prayer-bead-bracelet-buddhist-goods-01.png`,
    imageAlt: "염주팔찌 불교굿즈 두 줄 나무 단주 팔찌 대표 이미지",
    relatedSearchTerms: [
      "염주",
      "불교굿즈",
      "108염주",
      "불교박람회굿즈",
      "팔찌",
      "오행",
      "108배",
      "단주",
      "합장주",
      "명상",
      "도구",
      "용품",
    ],
    seo: {
      primaryKeyword: "염주",
      secondaryKeywords: [
        "불교굿즈",
        "108염주",
        "불교박람회굿즈",
        "팔찌",
        "오행",
        "108배",
        "단주",
        "합장주",
        "명상 도구",
        "용품",
      ],
      keywords: [
        "염주",
        "불교굿즈",
        "108염주",
        "불교박람회굿즈",
        "팔찌",
        "오행",
        "108배",
        "단주",
        "합장주",
        "명상",
        "도구",
        "용품",
        "염주팔찌",
        "두줄 나무 염주",
        "나무염주",
        "손목염주",
        "불교용품",
        "명상도구",
      ],
      title: "염주팔찌 불교굿즈 | 108염주와 다른 손목 단주 | 붓다모아",
      description:
        "두 줄 검은 나무 구슬로 만든 염주팔찌입니다. 불교굿즈, 불교박람회굿즈, 108염주와 비교해 손목에 착용하기 좋은 단주, 합장주, 명상 도구 용품을 소개합니다.",
    },
    sliderImages: prayerBeadBraceletSliderImages,
    descriptionSections: [
      {
        title: "두 줄이라 더 자연스럽게 예쁜 염주팔찌",
        body: [
          "한 줄 팔찌는 깔끔하지만, 손목에 착용했을 때 조금 허전하게 느껴지는 날도 있잖아요. 그럴 때 두 줄로 자연스럽게 감기는 염주팔찌는 별도의 장신구를 더하지 않아도 손목 위에 은근한 존재감을 만들어줍니다.",
          "붓다모아의 두줄 나무 염주는 검은 톤의 나무 구슬을 두 줄로 구성한 손목형 염주입니다. 화려하게 눈에 띄기보다 차분하고 단정한 분위기를 전해, 기도할 때는 물론 출근이나 외출처럼 평범한 일상에도 편하게 착용할 수 있어요.",
        ],
      },
      {
        title: "검은 톤의 나무 구슬이라 오래 보아도 질리지 않아요",
        body: [
          "이 염주팔찌의 가장 큰 매력은 검은 톤의 나무 구슬이에요. 밝은 옷에는 차분한 포인트가 되고, 어두운 옷에는 자연스럽게 어우러져 전체적인 인상을 깔끔하게 정리해줍니다.",
          "금속 팔찌처럼 차갑고 날카로운 느낌보다는 나무염주 특유의 부드럽고 편안한 분위기가 살아 있어요. 불교용품이라는 의미는 담고 있지만 디자인이 지나치게 전통적이거나 무겁지 않아, 평소 팔찌를 자주 착용하는 분도 자연스럽게 활용할 수 있습니다.",
        ],
      },
      {
        title: "두 줄로 착용하면 손목이 조금 더 풍성해 보여요",
        body: [
          "두줄 나무 염주는 한 줄짜리 단주보다 손목을 조금 더 풍성하게 감싸줍니다. 그렇다고 구슬이 지나치게 크거나 장식이 화려한 제품은 아니어서, 팔찌 하나만 착용해도 부담스럽지 않은 포인트가 돼요.",
          "기본 염주 알은 지름 약 8mm이고, 포인트 비즈는 지름 약 10mm입니다. 작은 구슬과 조금 더 큰 포인트 비즈가 함께 배치되어 있어 전체 모습이 단조롭지 않고, 가까이에서 보았을 때 은근한 리듬감이 느껴집니다.",
        ],
      },
      {
        title: "기도하는 날에도, 평범한 외출에도 잘 어울려요",
        body: [
          "염주는 꼭 법회나 기도 시간에만 사용하는 물건은 아니에요. 평소 손목에 착용해두고 바쁜 순간마다 잠시 바라보며 호흡을 가다듬는 작은 계기로 삼을 수도 있습니다.",
          "출근길이나 산책, 가벼운 외출에도 일반 팔찌처럼 자연스럽게 착용할 수 있어요. 불교적인 의미를 일상 가까이에 두고 싶지만 전통적인 장식이 부담스러웠던 분께 특히 잘 어울리는 염주팔찌입니다.",
        ],
      },
      {
        title: "108염주를 찾고 계셨다면 구성 차이를 먼저 확인해 주세요",
        body: [
          "검색하다 보면 108염주와 손목 염주팔찌를 함께 비교하게 되는 경우가 많아요. 108염주는 일반적으로 108개의 염주알을 갖춘 긴 형태의 염주를 뜻하며, 독송이나 108배, 염불 수행 등에 활용됩니다.",
          "이번에 소개하는 두줄 나무 염주는 108알로 구성된 긴 108염주가 아니라, 손목에 착용하는 팔찌형 단주입니다. 긴 염주를 찾는 분보다는 일상에서 편하게 착용할 수 있는 나무염주나 염주팔찌를 찾는 분께 더 잘 맞아요. 상품을 선택하기 전에 용도와 형태를 꼭 확인해 주세요.",
        ],
      },
      {
        title: "손목에 부담을 줄이면서도 존재감은 충분해요",
        body: [
          "제품의 무게는 약 18±2g으로, 두 줄 구성임에도 지나치게 묵직하지 않은 편입니다. 염주 알의 크기가 적당해 손목 위에서 형태가 잘 보이면서도, 일상적인 옷차림에 자연스럽게 어울려요.",
          "다만 손목 둘레와 착용감은 사람마다 다르게 느껴질 수 있습니다. 구매 전 상세 이미지에서 전체 크기와 두 줄이 감기는 모습을 충분히 확인해 주세요. 제품의 크기와 무게는 측정 방법에 따라 약간의 차이가 생길 수 있습니다.",
        ],
      },
      {
        title: "가까운 분께 마음을 전하는 선물로도 좋아요",
        body: [
          "염주는 상대방의 평안과 건강한 일상을 바라는 마음을 담아 건네기 좋은 선물이에요. 두줄 나무 염주는 색감이 차분하고 디자인이 부담스럽지 않아 어머니나 아내, 친구처럼 가까운 분께 가볍게 전하기 좋습니다.",
          "종교적인 의미를 소중하게 생각하는 분께는 불교 염주로, 평소 나무 소재의 팔찌를 좋아하는 분께는 차분한 액세서리로 소개할 수 있어요. 거창한 선물보다는 매일 곁에 두고 착용할 수 있는 작은 마음의 선물을 찾고 있다면 잘 어울리는 선택입니다.",
        ],
      },
      {
        title: "주문 전에 상품 정보를 확인해 주세요",
        body: [
          "제품명은 두줄 나무 염주이며, 기본 구성은 두줄 나무 염주 1개입니다. 염주 알의 지름은 약 8mm이고 포인트 비즈의 지름은 약 10mm이며, 무게는 약 18±2g입니다.",
          "판매처는 붓다모아, 수입사는 스테디오더이며 원산지는 중국입니다. 나무 소재의 특성상 구슬마다 결이나 색감, 표면 표현이 조금씩 다를 수 있습니다. 이러한 차이는 자연 소재에서 나타날 수 있는 특징이므로 상세 이미지를 충분히 확인한 뒤 선택해 주세요.",
        ],
      },
      {
        title: "오래 사용하려면 이렇게 관리해 주세요",
        body: [
          "나무염주는 물과 습기에 오래 노출되면 색상이나 형태가 달라질 수 있어요. 손을 씻거나 샤워할 때는 가급적 벗어두고, 물에 젖었다면 부드럽고 마른 천으로 닦은 뒤 통풍이 잘되는 그늘에서 충분히 말려주세요.",
          "향수나 화장품, 땀이 장시간 묻은 상태로 보관하지 않는 것이 좋습니다. 사용하지 않을 때는 직사광선과 습기가 많은 장소를 피해 보관하면 나무 구슬의 자연스러운 느낌을 더 오래 유지할 수 있어요.",
        ],
      },
      {
        title: "배송은 이렇게 진행돼요",
        body: [
          "평일 낮 12시까지 결제가 완료된 주문은 당일 발송을 원칙으로 합니다.",
          "배송은 휴일과 공휴일을 제외하고 평균 약 1~3영업일 정도 소요되며, 택배사 사정이나 배송 지역에 따라 조금 더 늦어질 수 있습니다.",
          "제품이 배송 중 손상되지 않도록 에어캡 등 완충재로 꼼꼼하게 보호 포장하여 발송해드립니다.",
        ],
      },
      {
        title: "불교 신자가 아니어도 착용해도 될까요?",
        body: [
          "물론이에요. 염주는 기도와 수행에 활용하는 불교용품이지만, 착용하는 사람의 마음과 용도에 따라 일상적인 팔찌로도 사용할 수 있습니다.",
          "불교 신자분은 손목 가까이에 두는 단주로 활용하고, 종교가 없는 분은 검은 톤의 차분한 나무 팔찌로 착용해도 괜찮아요. 무엇보다 매일 편하게 착용할 수 있고, 바라볼 때마다 잠시 마음을 돌아보게 해준다면 그 자체로 충분한 의미가 있습니다.",
        ],
      },
      {
        title: "매일 손목 가까이에 두는 차분한 염주",
        body: [
          "붓다모아는 부처님을 뜻하는 '붓다'와 다양한 불교용품을 한곳에 모았다는 의미를 담은 이름입니다. 전통적인 108염주부터 일상에서 편하게 착용할 수 있는 나무염주와 염주팔찌까지, 불교를 조금 더 자연스럽게 만날 수 있는 상품을 소개하고 있어요.",
          "기도할 때는 마음을 모으는 단주로, 평범한 외출에서는 차분한 팔찌로 착용해 보세요. 두 줄로 자연스럽게 감기는 검은 나무 구슬이 손목 위에 단정한 분위기를 더해줄 거예요.",
          "상품은 네이버에서 '붓다모아'를 검색하면 만나보실 수 있습니다.",
        ],
      },
    ],
    quickFacts: [
      { name: "제품명", value: "두줄 나무 염주" },
      { name: "상품 유형", value: "염주팔찌, 손목형 단주, 불교굿즈, 명상 도구 용품" },
      { name: "구성", value: "염주팔찌 1개" },
      { name: "재질", value: "나무 외" },
      { name: "염주 알 크기", value: "지름 약 8mm" },
      { name: "포인트 비즈 크기", value: "지름 약 10mm" },
      { name: "무게", value: "약 18±2g" },
      { name: "착용 형태", value: "손목에 두 줄로 감기는 팔찌형 단주" },
      { name: "108염주 여부", value: "108알 긴 염주가 아닌 손목 착용형 염주팔찌" },
      { name: "추천 용도", value: "기도, 명상, 108배 전후 마음 정리, 일상 손목 팔찌" },
      { name: "관리 방법", value: "물과 습기, 직사광선을 피하고 마른 천으로 가볍게 닦아주세요" },
      standardDeliveryFact,
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    faqs: [
      {
        question: "이 염주팔찌는 108염주인가요?",
        answer:
          "아니에요. 이 상품은 108개의 염주알로 구성된 긴 108염주가 아니라, 손목에 착용하는 팔찌형 단주입니다.",
      },
      {
        question: "염주 알과 포인트 비즈 크기는 어느 정도인가요?",
        answer:
          "기본 염주 알은 지름 약 8mm이고, 포인트 비즈는 지름 약 10mm입니다. 측정 방법에 따라 약간의 차이가 있을 수 있습니다.",
      },
      {
        question: "불교 신자가 아니어도 착용해도 될까요?",
        answer:
          "물론이에요. 불교 신자분은 손목 가까이에 두는 단주로 활용하고, 종교가 없는 분은 검은 톤의 차분한 나무 팔찌로 착용해도 괜찮습니다.",
      },
      {
        question: "명상이나 108배 전후에 사용할 수 있나요?",
        answer:
          "네. 긴 수행용 108염주는 아니지만, 기도나 명상 전후에 손목 가까이에 두고 마음을 가다듬는 작은 도구로 활용할 수 있습니다.",
      },
      {
        question: "오래 사용하려면 어떻게 관리하면 좋나요?",
        answer:
          "나무 소재는 물과 습기에 오래 노출되면 변형될 수 있어요. 손을 씻거나 샤워할 때는 벗어두고, 물에 젖었다면 마른 천으로 닦아 그늘에서 말려주세요.",
      },
      standardDeliveryFaq,
    ],
  }),
  "daily-wrist-prayer-beads/wooden-prayer-beads": defineSearchSliderCurationDetail({
    name: "나무염주",
    subtitle: "전통 매듭으로 가볍게 착용하는 나무 비즈 패션염주",
    summary:
      "작은 나무 비즈와 전통 여닫이 매듭으로 만든 가벼운 손목형 나무염주입니다.",
    introBody: [
      "나무염주는 작은 나무 비즈를 이어 만들고, 고무줄 대신 전통적인 여닫이 매듭으로 마무리한 손목형 염주입니다. 평소 팔찌처럼 자연스럽게 착용하면서도 불교적인 의미를 가까이에 두고 싶은 분께 잘 어울립니다.",
    ],
    image: `${woodenPrayerBeadsImageBase}/wooden-prayer-beads-knot-bracelet-03.png`,
    imageAlt: "나무염주 매듭팔찌 불교팔찌 나무 비즈 염주 대표 이미지",
    relatedSearchTerms: ["매듭팔찌", "불교팔찌", "나무", "비즈", "염주", "희망", "패션"],
    seo: {
      primaryKeyword: "매듭팔찌",
      secondaryKeywords: ["불교팔찌", "나무 비즈", "염주", "희망", "패션"],
      keywords: [
        "매듭팔찌",
        "불교팔찌",
        "나무",
        "비즈",
        "나무 비즈",
        "염주",
        "희망",
        "패션",
        "나무염주",
        "패션염주",
        "나무팔찌",
        "염주팔찌",
        "손목염주",
        "불교굿즈",
        "불교용품",
      ],
      title: "나무염주 매듭팔찌 | 불교팔찌 나무 비즈 패션염주 | 붓다모아",
      description:
        "작은 나무 비즈와 전통 여닫이 매듭으로 만든 나무염주입니다. 매듭팔찌, 불교팔찌, 희망을 담은 패션 염주를 찾는 분께 가벼운 손목형 나무팔찌를 소개합니다.",
    },
    sliderImages: woodenPrayerBeadsSliderImages,
    descriptionSections: [
      {
        title: "나무팔찌, 전통 매듭으로 가볍게 착용해 보세요",
        body: [
          "염주를 매일 착용하고 싶지만 구슬이 크거나 무거운 제품은 조금 부담스럽게 느껴질 때가 있잖아요. 평소 팔찌처럼 자연스럽게 착용하면서도 불교적인 의미를 가까이에 두고 싶다면, 가볍고 담백한 매듭형 나무팔찌가 잘 어울립니다.",
          "붓다모아의 매듭팔찌 패션염주는 작은 나무 비즈를 이어 만들고, 고무줄 대신 전통적인 여닫이 매듭으로 마무리한 손목형 염주입니다. 눈에 띄게 화려하기보다 수수하고 단정한 분위기가 있어 출근이나 외출처럼 평범한 일상에도 편하게 착용할 수 있어요.",
        ],
      },
      {
        title: "작은 나무 비즈라 담백하고 편안해요",
        body: [
          "이 나무팔찌는 크고 장식적인 구슬보다 작고 가벼운 나무 비즈를 사용해 전체적인 인상이 깔끔합니다. 나무 소재 특유의 편안한 색감이 있어 밝은 옷에는 은근한 포인트가 되고, 어두운 옷에는 자연스럽게 어우러져요.",
          "금속 장신구처럼 차갑거나 화려한 느낌이 적고, 오래 바라보아도 부담스럽지 않은 것이 나무염주의 매력입니다. 불교용품으로 착용해도 좋고, 수수한 나무팔찌를 좋아하는 분이라면 일상적인 패션 소품으로 활용해도 자연스러워요.",
        ],
      },
      {
        title: "고무줄이 아닌 여닫이 매듭 방식이에요",
        body: [
          "일반적인 염주팔찌는 고무줄처럼 늘어나는 방식이 많지만, 이 제품은 고리를 열고 닫아 착용하는 매듭 방식입니다. 매듭과 고리가 함께 보여 전통적인 느낌이 살아 있고, 흔한 밴드형 팔찌와는 조금 다른 차분한 분위기를 전해요.",
          "처음 매듭을 열고 닫을 때는 조금 빡빡하게 느껴질 수 있습니다. 쉽게 풀리지 않도록 단단하게 만들어진 부분이므로, 매듭을 무리하게 잡아당기기보다 고리 부분을 천천히 움직여 착용해 주세요.",
        ],
      },
      {
        title: "사이즈는 구매 전에 꼭 확인해 주세요",
        body: [
          "제품을 펼쳤을 때의 전체 길이는 약 180mm입니다. 다만 고무줄처럼 늘어나는 제품이 아니기 때문에, 같은 길이라도 손목 둘레와 착용 습관에 따라 느낌이 달라질 수 있어요.",
          "평소 잘 맞는 팔찌의 안쪽 길이를 재어 비교하거나, 끈을 손목에 둘러 원하는 여유를 확인한 뒤 선택하는 것이 좋습니다. 손목에 딱 맞는 착용을 좋아하는지, 조금 여유 있게 착용하는지를 함께 고려해 주세요.",
        ],
      },
      {
        title: "무게가 약 3g이라 부담이 적어요",
        body: [
          "매듭팔찌 패션염주의 무게는 약 3g으로 매우 가벼운 편입니다. 손목에 묵직하게 감기는 염주보다 가볍게 착용할 수 있어, 평소 팔찌를 오래 차고 있는 분도 부담을 덜 느낄 수 있어요.",
          "크고 화려한 장식 없이 나무 비즈와 매듭으로 간결하게 구성되어 있어 다른 팔찌나 시계와 함께 착용해도 지나치게 복잡해 보이지 않습니다. 단독으로 착용하면 수수하고 단정한 분위기를 즐길 수 있어요.",
        ],
      },
      {
        title: "염주의 의미와 일상적인 디자인을 함께 담았어요",
        body: [
          "염주는 기도와 수행 중 마음을 모으는 데 사용하는 불교용품이지만, 요즘에는 일상에서 편하게 착용할 수 있도록 다양한 형태로 만들어지고 있습니다.",
          "이 제품도 염주의 의미는 간직하면서 일반적인 나무팔찌처럼 코디하기 쉽도록 디자인된 패션염주예요. 기도할 때 손목 가까이에 두는 단주로 활용해도 좋고, 평소에는 편안한 염주팔찌로 착용할 수 있습니다.",
        ],
      },
      {
        title: "108염주와는 형태와 용도가 달라요",
        body: [
          "염주를 검색하다 보면 108염주와 손목형 팔찌를 함께 보게 되는 경우가 많아요. 108염주는 보통 108개의 염주알을 갖춘 긴 형태로, 독송이나 염불, 108배와 같은 수행에 활용됩니다.",
          "이번에 소개하는 매듭팔찌는 108알로 구성된 긴 108염주가 아니라 손목에 착용하는 가벼운 염주팔찌입니다. 수행용 장염주를 찾는 분보다는 일상에서 편하게 착용할 수 있는 나무염주나 나무팔찌를 찾는 분께 더 잘 맞아요. 구매 전에 원하는 형태와 사용 목적을 꼭 확인해 주세요.",
        ],
      },
      {
        title: "그날의 옷차림에 맞춰 자연스럽게 착용해 보세요",
        body: [
          "차분한 나무 비즈는 캐주얼한 복장부터 단정한 출근복까지 비교적 폭넓게 어울립니다. 셔츠나 니트처럼 깔끔한 옷에는 작은 포인트가 되고, 편안한 일상복에는 꾸민 듯 꾸미지 않은 자연스러운 느낌을 더해줘요.",
          "그날의 기분에 따라 다른 염주와 번갈아 착용하거나, 시계와 함께 가볍게 매치해도 좋습니다. 불교적인 의미를 지나치게 드러내지 않으면서도 마음에 두고 싶은 상징을 손목 가까이에 둘 수 있어요.",
        ],
      },
      {
        title: "부담 없는 작은 선물로도 잘 어울려요",
        body: [
          "크고 값비싼 선물보다 매일 편하게 사용할 수 있는 작은 물건이 더 반가울 때가 있잖아요. 이 매듭형 나무팔찌는 가볍고 디자인이 수수해 가족이나 친구, 직장 동료에게 부담 없이 건네기 좋습니다.",
          "불교에 관심이 있는 분에게는 일상용 염주로, 나무 소재의 소품을 좋아하는 분에게는 차분한 패션팔찌로 소개할 수 있어요. 평안한 마음과 희망을 전하고 싶을 때 가볍게 선택하기 좋은 선물입니다.",
        ],
      },
      {
        title: "주문 전에 상품 정보를 확인해 주세요",
        body: [
          "제품명은 매듭팔찌 패션염주이며, 기본 구성은 매듭팔찌 패션염주 1개입니다. 제품을 펼쳤을 때의 길이는 약 180mm이고, 무게는 약 3g입니다. 측정 위치와 방법에 따라 크기와 무게에는 약간의 차이가 있을 수 있어요.",
          "판매처는 붓다모아, 수입사는 스테디오더이며 원산지는 중국입니다. 나무 비즈의 색감과 결, 표면 표현은 제품마다 조금씩 다를 수 있으며, 이는 나무 소재에서 자연스럽게 나타나는 특징입니다.",
        ],
      },
      {
        title: "오래 착용하려면 이렇게 관리해 주세요",
        body: [
          "나무팔찌는 물과 습기에 오래 노출되면 색상이나 형태가 달라질 수 있습니다. 손을 씻거나 샤워할 때는 가급적 벗어두고, 물에 젖었다면 부드럽고 마른 천으로 닦은 뒤 통풍이 잘되는 그늘에서 충분히 말려주세요.",
          "매듭 부분을 강하게 잡아당기거나 고리를 억지로 벌리면 손상될 수 있어요. 착용하거나 벗을 때는 고리와 매듭을 천천히 움직이고, 사용하지 않을 때는 직사광선과 습기가 많은 장소를 피해 보관해 주세요.",
        ],
      },
      {
        title: "배송은 이렇게 진행돼요",
        body: [
          "평일 낮 12시까지 결제가 완료된 주문은 당일 발송을 원칙으로 합니다.",
          "배송은 휴일과 공휴일을 제외하고 평균 약 1~3영업일 정도 소요되며, 택배사 사정이나 배송 지역에 따라 조금 더 늦어질 수 있습니다.",
          "제품이 배송 중 손상되지 않도록 에어캡 등 완충재로 꼼꼼하게 보호 포장하여 발송해드립니다.",
        ],
      },
      {
        title: "불교 신자가 아니어도 착용해도 될까요?",
        body: [
          "물론이에요. 염주는 불교의 기도와 수행에 사용되는 물건이지만, 착용하는 분의 마음과 용도에 따라 일상적인 팔찌로도 활용할 수 있습니다.",
          "불교 신자분은 손목 가까이에 두는 단주로 착용하고, 종교가 없는 분은 가벼운 나무팔찌나 매듭팔찌로 즐겨도 괜찮아요. 매일 편하게 착용하면서 잠시 마음을 돌아보는 계기가 된다면 그 자체로 충분한 의미가 있습니다.",
        ],
      },
      {
        title: "매일 손목 가까이에 두기 좋은 가벼운 나무팔찌",
        body: [
          "붓다모아는 전통적인 108염주부터 일상에서 편하게 착용할 수 있는 나무염주와 염주팔찌까지, 다양한 불교용품을 친근하게 소개하고 있습니다.",
          "기도하는 순간에는 마음을 모으는 염주로, 평범한 외출에서는 수수한 패션팔찌로 착용해 보세요. 작은 나무 비즈와 단정한 매듭이 손목 위에 자연스럽고 편안한 분위기를 더해줄 거예요.",
          "상품은 네이버에서 '붓다모아'를 검색하면 만나보실 수 있습니다.",
        ],
      },
    ],
    quickFacts: [
      { name: "제품명", value: "매듭팔찌 패션염주" },
      { name: "상품 유형", value: "나무염주, 매듭팔찌, 불교팔찌, 패션팔찌" },
      { name: "구성", value: "나무염주 1개" },
      { name: "재질", value: "나무 외" },
      { name: "길이", value: "펼쳤을 때 약 180mm" },
      { name: "무게", value: "약 3g" },
      { name: "착용 방식", value: "고무줄형이 아닌 여닫이 매듭 방식" },
      { name: "108염주 여부", value: "108알 긴 염주가 아닌 손목 착용형 매듭팔찌" },
      { name: "추천 용도", value: "기도, 일상 패션, 가벼운 선물, 희망과 평안의 마음 전달" },
      { name: "관리 방법", value: "물과 습기, 직사광선을 피하고 매듭을 무리하게 잡아당기지 마세요" },
      standardDeliveryFact,
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    faqs: [
      {
        question: "나무염주는 고무줄처럼 늘어나는 팔찌인가요?",
        answer:
          "아니에요. 이 제품은 고무줄처럼 늘어나는 방식이 아니라, 고리를 열고 닫아 착용하는 여닫이 매듭 방식입니다.",
      },
      {
        question: "사이즈는 어느 정도인가요?",
        answer:
          "제품을 펼쳤을 때의 전체 길이는 약 180mm입니다. 손목 둘레와 착용 습관에 따라 느낌이 다를 수 있으니 구매 전 길이를 확인해 주세요.",
      },
      {
        question: "108염주인가요?",
        answer:
          "아니에요. 이 상품은 108알로 구성된 긴 108염주가 아니라 손목에 착용하는 가벼운 매듭팔찌형 나무염주입니다.",
      },
      {
        question: "불교 신자가 아니어도 착용해도 될까요?",
        answer:
          "물론이에요. 불교 신자분은 손목 가까이에 두는 단주로, 종교가 없는 분은 가벼운 나무팔찌나 패션팔찌로 편하게 착용할 수 있습니다.",
      },
      {
        question: "오래 착용하려면 어떻게 관리하면 좋나요?",
        answer:
          "물과 습기에 오래 노출되지 않도록 하고, 매듭 부분을 강하게 잡아당기지 않는 것이 좋습니다. 젖었을 때는 마른 천으로 닦아 그늘에서 말려주세요.",
      },
      standardDeliveryFaq,
    ],
  }),
  "daily-wrist-prayer-beads/buddhist-bracelet": defineSearchSliderCurationDetail({
    name: "불교팔찌",
    subtitle: "검은 톤 나무 구슬과 목탁 포인트가 어우러진 손목 단주",
    summary:
      "검은 톤의 나무 구슬과 목탁 모양 포인트가 어우러진 손목형 불교팔찌입니다.",
    introBody: [
      "염주를 손목에 착용하고 싶지만 너무 화려하거나 가벼운 패션팔찌처럼 보이는 제품은 아쉽게 느껴질 때가 있습니다. 짙은 색의 나무 구슬과 단정한 문양이 어우러진 불교팔찌는 일상적인 옷차림에도 자연스럽게 어울리면서, 염주가 가진 의미도 함께 간직할 수 있는 손목형 단주입니다.",
    ],
    image: `${buddhistBraceletImageBase}/black-wood-bracelet-buddhist-goods-10.png`,
    imageAlt: "불교팔찌 염주 불교굿즈 나무 팔찌 대표 이미지",
    relatedSearchTerms: [
      "염주",
      "불교굿즈",
      "108염주",
      "불교",
      "박람회굿즈",
      "오행",
      "나무",
      "팔찌",
      "108배",
      "단주",
      "합장주",
    ],
    seo: {
      primaryKeyword: "염주",
      secondaryKeywords: [
        "불교굿즈",
        "108염주",
        "불교 박람회굿즈",
        "오행",
        "나무 팔찌",
        "108배",
        "단주",
        "합장주",
      ],
      keywords: [
        "염주",
        "불교굿즈",
        "108염주",
        "불교",
        "박람회굿즈",
        "불교 박람회굿즈",
        "불교박람회굿즈",
        "오행",
        "나무",
        "팔찌",
        "나무 팔찌",
        "108배",
        "단주",
        "합장주",
        "불교팔찌",
        "손목염주",
        "염주팔찌",
        "불교용품",
      ],
      title: "불교팔찌 나무염주 | 목탁 포인트 손목 단주 12mm·15mm | 붓다모아",
      description:
        "검은 톤의 나무 구슬과 목탁 모양 포인트가 어우러진 불교팔찌입니다. 12mm와 15mm 중 취향과 손목에 맞춰 선택하고, 기도와 명상은 물론 일상에서도 자연스럽게 착용해 보세요.",
    },
    sliderImages: buddhistBraceletSliderImages,
    descriptionSections: [
      {
        title: "불교팔찌, 손목 가까이에 두는 차분한 나무염주",
        body: [
          "붓다모아의 나무 염주 불교팔찌는 어두운 흑색 계열의 나무 구슬을 사용하고, 가운데 목탁을 닮은 포인트 장식을 더한 손목형 단주입니다. 구슬마다 새겨진 문양이 은근한 멋을 더해주어 기도할 때는 물론 출근이나 외출처럼 평범한 하루에도 편하게 착용할 수 있습니다.",
        ],
      },
      {
        title: "검은 톤의 나무 구슬이라 차분한 분위기가 있어요",
        body: [
          "이 팔찌는 밝고 화려한 색보다 짙고 차분한 나무 구슬이 중심입니다. 검은색이나 짙은 갈색 계열의 옷에는 자연스럽게 어우러지고, 흰 셔츠나 밝은 니트에는 단정한 포인트가 되어줍니다.",
          "나무 소재 특유의 부드러운 인상이 있어 금속 팔찌처럼 차갑게 느껴지지 않고, 오래 보아도 부담스럽지 않습니다. 불교용품으로 착용해도 좋고, 평소 수수한 나무팔찌를 좋아하는 분이라면 일상적인 장신구로도 활용하기 좋습니다.",
        ],
      },
      {
        title: "목탁 모양 포인트가 은근하게 눈에 들어와요",
        body: [
          "가운데에는 목탁을 떠올리게 하는 포인트 장식이 자리하고 있습니다. 전체가 같은 구슬로만 이어진 팔찌보다 시선이 머무는 중심이 생겨, 단순하지만 밋밋하지 않은 느낌을 줍니다.",
          "구슬마다 표현된 문양도 가까이에서 보면 제품의 분위기를 조금 더 깊게 만들어줍니다. 과하게 장식적이지 않으면서도 일반적인 나무팔찌와는 다른 불교적인 인상을 느낄 수 있습니다.",
        ],
      },
      {
        title: "12mm와 15mm, 원하는 분위기에 맞춰 선택하세요",
        body: [
          "이 불교팔찌는 구슬 크기에 따라 12mm와 15mm 두 가지로 준비되어 있습니다. 12mm는 비교적 단정하고 부담이 적은 느낌이고, 15mm는 구슬이 더 크게 보여 손목 위에서 존재감이 분명한 편입니다.",
          "성별보다 손목 둘레와 평소 선호하는 구슬 크기를 기준으로 고르는 것이 좋습니다. 아담하고 가벼운 느낌을 원한다면 12mm를, 굵고 묵직한 스타일을 좋아한다면 15mm를 살펴보세요.",
        ],
      },
      {
        title: "크기에 따라 무게감도 조금 달라요",
        body: [
          "12mm 제품의 무게는 약 32g이고, 15mm 제품은 약 40g입니다. 15mm가 구슬이 더 큰 만큼 손목에서 느껴지는 존재감과 무게도 조금 더 분명할 수 있습니다.",
          "평소 가벼운 팔찌를 오래 착용하는 분이라면 12mm가 편하게 느껴질 수 있고, 구슬이 굵은 염주를 선호한다면 15mm가 잘 맞을 수 있습니다. 크기와 무게는 측정 방법에 따라 약간의 차이가 생길 수 있으니 상세 이미지를 함께 확인해 주세요.",
        ],
      },
      {
        title: "기도할 때도, 평범한 외출에도 자연스럽게 착용해요",
        body: [
          "염주는 법회나 기도 시간에만 사용하는 물건이라고 생각하기 쉽지만, 손목형 염주팔찌는 평소에도 편하게 착용할 수 있습니다. 아침에 하루를 시작할 때, 중요한 일을 앞두고 마음을 가다듬을 때, 잠시 손목의 염주를 바라보며 호흡을 고르는 작은 계기로 삼아보세요.",
          "검은 톤의 디자인이라 정장이나 셔츠에도 크게 튀지 않고, 편안한 캐주얼 복장에도 잘 어울립니다. 불교적인 의미는 가까이에 두면서도 일상적인 팔찌처럼 활용하고 싶은 분께 잘 맞는 제품입니다.",
        ],
      },
      {
        title: "108염주와는 형태가 달라요",
        body: [
          "염주를 찾다 보면 108염주와 손목형 단주를 함께 비교하게 되는 경우가 많습니다. 108염주는 일반적으로 108개의 염주알로 구성된 긴 형태로, 독송이나 염불, 108배 같은 수행에 활용됩니다.",
          "이번에 소개하는 제품은 긴 108염주가 아니라 손목에 착용하는 나무염주이자 불교팔찌입니다. 수행용 장염주를 찾는 분보다는 일상에서 편하게 착용할 수 있는 염주팔찌나 손목 단주를 찾는 분께 더 잘 맞습니다. 구매 전 원하는 형태와 용도를 꼭 확인해 주세요.",
        ],
      },
      {
        title: "가까운 분께 마음을 전하는 선물로도 괜찮아요",
        body: [
          "염주는 상대방의 평안과 좋은 마음을 바라는 뜻을 담아 건네기 좋은 선물입니다. 검은 톤의 나무 구슬은 유행을 크게 타지 않고, 12mm와 15mm 중 취향에 맞춰 고를 수 있어 가족이나 지인에게 전하기도 좋습니다.",
          "불교에 관심이 있는 분께는 손목 단주로, 평소 나무 소재의 액세서리를 좋아하는 분께는 차분한 나무팔찌로 소개해 보세요. 매일 곁에 두고 착용할 수 있어 부담스럽지 않은 마음 선물이 되어줍니다.",
        ],
      },
      {
        title: "주문 전에 상품 정보를 확인해 주세요",
        body: [
          "제품명은 나무 염주 불교팔찌이며, 기본 구성은 선택한 크기의 불교팔찌 1개입니다. 구슬 크기는 12mm와 15mm 중 선택할 수 있고, 무게는 12mm가 약 32g, 15mm가 약 40g입니다.",
          "판매처는 붓다모아, 수입사는 스테디오더이며 원산지는 중국입니다. 나무 소재의 특성상 구슬마다 색감과 나뭇결, 문양의 표현이 조금씩 다를 수 있습니다. 이러한 차이는 자연 소재와 제작 과정에서 나타날 수 있는 특징이므로 상세 이미지를 충분히 확인한 뒤 선택해 주세요.",
        ],
      },
      {
        title: "오래 착용하려면 물과 습기를 피해 주세요",
        body: [
          "나무염주는 물과 습기에 오래 노출되면 색감이나 형태가 달라질 수 있습니다. 손을 씻거나 샤워할 때는 가급적 벗어두고, 물에 젖었다면 부드럽고 마른 천으로 닦은 뒤 그늘에서 충분히 말려주세요.",
          "향수나 화장품, 땀이 장시간 묻은 상태로 보관하지 않는 것이 좋습니다. 사용하지 않을 때는 직사광선이 강한 곳이나 습기가 많은 장소를 피해 보관하면 나무 구슬의 자연스러운 느낌을 더 오래 유지할 수 있습니다.",
        ],
      },
      {
        title: "배송은 이렇게 진행돼요",
        body: [
          "평일 낮 12시까지 결제가 완료된 주문은 당일 발송을 원칙으로 하고 있습니다.",
          "배송은 휴일과 공휴일을 제외하고 평균적으로 약 1~3영업일 정도 소요됩니다. 다만 택배사 사정이나 배송 지역에 따라 평소보다 조금 더 늦어질 수 있습니다.",
          "제품이 배송 중 손상되지 않도록 에어캡 등 완충재로 꼼꼼하게 보호 포장하여 발송해드립니다.",
        ],
      },
      {
        title: "불교 신자가 아니어도 착용해도 될까요?",
        body: [
          "물론입니다. 염주는 불교의 기도와 수행에 활용되는 물건이지만, 착용하는 분의 마음과 용도에 따라 일상적인 팔찌로도 사용할 수 있습니다.",
          "불교 신자분은 손목 가까이에 두는 단주로 착용하고, 종교가 없는 분은 검은 톤의 나무팔찌로 즐겨도 괜찮습니다. 매일 편하게 착용하면서 잠시 마음을 돌아보는 계기가 된다면 그 자체로 충분한 의미가 있습니다.",
        ],
      },
      {
        title: "매일 손목 가까이에 두는 나무염주",
        body: [
          "붓다모아는 전통적인 108염주부터 일상에서 편하게 착용할 수 있는 나무염주와 염주팔찌까지, 다양한 불교용품을 친근하게 소개하고 있습니다.",
          "기도하는 순간에는 마음을 모으는 염주로, 평범한 외출에서는 차분한 불교팔찌로 착용해 보세요. 짙은 나무 구슬과 목탁 모양의 포인트가 손목 위에 단정하고 편안한 분위기를 더해줄 거예요.",
          "상품은 네이버에서 '붓다모아'를 검색하면 만나보실 수 있습니다.",
        ],
      },
    ],
    quickFacts: [
      { name: "제품명", value: "나무 염주 불교팔찌" },
      { name: "상품 유형", value: "나무염주, 염주팔찌, 손목형 단주, 불교굿즈" },
      { name: "구성", value: "선택한 크기의 불교팔찌 1개" },
      { name: "재질", value: "나무 외" },
      { name: "구슬 크기", value: "12mm / 15mm 중 선택" },
      { name: "무게", value: "12mm 약 32g / 15mm 약 40g" },
      { name: "포인트", value: "목탁 모양 장식과 문양이 새겨진 흑색 나무 비즈" },
      { name: "108염주 여부", value: "긴 수행용 108염주가 아닌 손목 착용형 불교팔찌" },
      { name: "추천 용도", value: "기도, 명상, 108배 전후 마음 정리, 일상 나무팔찌, 선물" },
      { name: "관리 방법", value: "물과 습기, 직사광선을 피하고 마른 천으로 가볍게 닦아주세요" },
      standardDeliveryFact,
      { name: "판매처", value: "붓다모아" },
      { name: "수입사", value: "스테디오더" },
      { name: "원산지", value: "중국" },
    ],
    faqs: [
      {
        question: "불교팔찌는 108염주인가요?",
        answer:
          "아니에요. 이 상품은 108개의 염주알로 구성된 긴 108염주가 아니라, 손목에 착용하는 팔찌형 단주입니다.",
      },
      {
        question: "12mm와 15mm는 어떻게 선택하면 좋나요?",
        answer:
          "12mm는 비교적 아담하고 가벼운 느낌을 선호하는 분께, 15mm는 구슬의 존재감과 묵직한 분위기를 더 원하는 분께 잘 어울립니다. 성별보다 손목 둘레와 평소 선호하는 구슬 크기를 기준으로 고르는 것이 좋습니다.",
      },
      {
        question: "목탁 포인트 장식이 있나요?",
        answer:
          "네. 흑색 나무 비즈에 목탁 모양 포인트 장식이 더해져 불교굿즈의 분위기를 자연스럽게 살립니다.",
      },
      {
        question: "108배나 명상할 때 사용할 수 있나요?",
        answer:
          "긴 수행용 108염주는 아니지만, 108배 전후나 명상 시간에 손목 가까이에 두고 마음을 가다듬는 작은 도구로 활용할 수 있습니다.",
      },
      {
        question: "오래 착용하려면 어떻게 관리하면 좋나요?",
        answer:
          "나무 비즈는 물과 습기에 오래 노출되지 않도록 하고, 사용 후에는 부드럽고 마른 천으로 가볍게 닦아 보관해 주세요.",
      },
      {
        question: "불교 신자가 아니어도 착용해도 될까요?",
        answer:
          "네. 불교 신자분은 손목 가까이에 두는 단주로 착용하고, 종교가 없는 분은 차분한 나무팔찌로 편하게 착용할 수 있습니다.",
      },
      standardDeliveryFaq,
    ],
  }),
  "finger-prayer-beads/fox-prayer-beads": {
    name: "여우염주",
    subtitle: "손끝으로 굴리기 좋은 네 가지 컬러의 미니 염주",
    summary:
      "손가락에 끼우거나 손에 쥐고 천천히 굴리기 좋은 컬러 손가락 염주입니다.",
    introBody: [
      "여우염주는 손가락에 끼우거나 손에 쥐고 천천히 굴리기 좋은 미니 염주입니다. 작은 크기지만 손끝에 안정적으로 잡히고, 은은한 컬러감이 더해져 일상 속 소품으로도 자연스럽게 어울립니다.",
      "가방, 차 안, 책상, 지갑처럼 가까운 곳에 두기 좋고, 생각이 복잡할 때 잠시 손끝으로 굴리며 마음을 정리하기에도 좋습니다.",
    ],
    image: `${foxPrayerBeadsImageBase}/image1.jpg`,
    imageAlt: "네 가지 컬러로 구성된 여우염주 대표 이미지",
    sections: [
      {
        title: "리뷰가 말해주는 만족도",
        images: [
          {
            src: `${foxPrayerBeadsImageBase}/image2.jpg`,
            alt: "후기와 평점을 확인할 수 있는 여우염주 상품 이미지",
          },
        ],
        body: [
          "631개의 후기와 4.94점의 평점으로 만족도가 높은 제품입니다. 실제 구매자들은 색감, 그립감, 휴대성에 대해 좋은 반응을 남기고 있습니다. 2026년 5월 3일 기준입니다.",
        ],
      },
      {
        title: "손끝에서 전해지는 편안함",
        images: [
          {
            src: `${foxPrayerBeadsImageBase}/image3.jpg`,
            alt: "손끝으로 굴리기 좋은 크기의 여우염주",
          },
        ],
        body: [
          "내경 약 2.5cm, 외경 약 4.5cm의 크기로 손가락에 자연스럽게 걸리며, 손에 쥐었을 때 적당한 묵직함이 느껴집니다. 굴릴 때 나는 작은 소리와 손끝의 움직임이 복잡한 생각을 가라앉히는 데 도움을 줍니다.",
        ],
      },
      {
        title: "네 가지 컬러 옵션",
        body: [
          "여우염주는 화이트, 애플 그린, 아쿠아 블루, 라일락 네 가지 컬러로 구성되어 있습니다. 색마다 분위기가 달라 취향에 따라 고르는 재미가 있고, 여러 컬러를 함께 두어도 조화롭게 어울립니다.",
        ],
      },
      {
        title: "선택1. 화이트",
        images: [
          {
            src: `${foxPrayerBeadsImageBase}/image4.jpg`,
            alt: "화이트 컬러 여우염주",
          },
        ],
        body: [
          "화이트는 가장 깔끔하고 단정한 분위기의 컬러입니다. 밝고 맑은 느낌이 있어 부담 없이 사용하기 좋고, 선물용으로도 무난하게 어울립니다.",
        ],
      },
      {
        title: "선택2. 애플 그린",
        images: [
          {
            src: `${foxPrayerBeadsImageBase}/image5.jpg`,
            alt: "애플 그린 컬러 여우염주",
          },
        ],
        body: [
          "애플 그린은 부드러운 연두빛이 돋보이는 컬러입니다. 산뜻한 색감 덕분에 손에 쥐었을 때 기분 좋은 포인트가 되고, 차분하면서도 맑은 느낌을 줍니다.",
        ],
      },
      {
        title: "선택3. 아쿠아 블루",
        images: [
          {
            src: `${foxPrayerBeadsImageBase}/image6.jpg`,
            alt: "아쿠아 블루 컬러 여우염주",
          },
        ],
        body: [
          "아쿠아 블루는 시원하고 청량한 분위기의 컬러입니다. 은은하게 빛나는 푸른빛이 깨끗한 느낌을 주며, 작은 소품 하나로도 밝은 포인트가 됩니다.",
        ],
      },
      {
        title: "선택4. 라일락",
        images: [
          {
            src: `${foxPrayerBeadsImageBase}/image7.jpg`,
            alt: "라일락 컬러 여우염주",
          },
        ],
        body: [
          "라일락은 은은한 보랏빛이 매력적인 컬러입니다. 부드럽고 신비로운 분위기가 있어 차분한 감성을 좋아하는 분들에게 잘 어울립니다.",
        ],
      },
      {
        title: "가까이에 두기 좋은 작은 염주",
        body: [
          "여우염주는 크기가 작아 휴대하기 쉽고, 책상 위나 차 안에 두어도 공간을 많이 차지하지 않습니다. 장식용으로도 자연스럽고, 손이 자주 닿는 곳에 두면 짧은 휴식의 루틴을 만들기 좋습니다.",
          "과하지 않은 디자인과 은은한 색감 덕분에 불교용품으로는 물론, 마음을 전하는 작은 선물로도 부담 없이 선택할 수 있습니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 여우염주",
          "재질: 유리 외",
          "구성: 여우염주 4종 중 1EA",
          "사이즈: 내경 약 2.5cm, 외경 약 4.5cm",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "finger-prayer-beads/wooden-finger-prayer-beads": {
    name: "연꽃염주",
    subtitle: "손가락에 쏙 들어오는 작은 나무 염주",
    summary:
      "작은 나무 구슬과 연꽃 장식이 어우러진 손가락 염주입니다.",
    introBody: [
      "연꽃염주는 작은 나무 구슬과 연꽃 장식이 어우러진 손가락 염주입니다. 손목에 착용하는 염주와 달리 손에 가볍게 쥐거나 손가락에 걸어 사용할 수 있어, 짧은 휴식이나 명상 시간에 자연스럽게 어울립니다.",
      "크기는 작지만 연꽃 장식이 포인트가 되어 존재감이 있고, 따뜻한 나무 색감이 차분한 분위기를 전해줍니다. 책상 위, 가방 속, 차량 안처럼 가까운 곳에 두기 좋은 불교 소품입니다.",
    ],
    image: `${woodenFingerPrayerBeadsImageBase}/image1.jpg`,
    imageAlt: "연꽃 장식이 달린 나무 손가락 염주 대표 이미지",
    sections: [
      {
        title: "손가락에 쏙 들어오는 작은 크기",
        images: [
          {
            src: `${woodenFingerPrayerBeadsImageBase}/image2.jpg`,
            alt: "손가락에 들어오는 작은 크기의 연꽃염주",
          },
        ],
        body: [
          "내경 약 2.5cm, 외경 약 4.0cm의 아담한 크기로 손에 부담 없이 들어옵니다. 손끝으로 천천히 굴리기 좋아 짧은 시간에도 마음을 가볍게 정리하는 데 도움이 됩니다.",
        ],
      },
      {
        title: "연꽃 장식이 주는 차분한 포인트",
        images: [
          {
            src: `${woodenFingerPrayerBeadsImageBase}/image3.jpg`,
            alt: "연꽃 장식이 돋보이는 연꽃염주 디테일",
          },
        ],
        body: [
          "단정한 나무 구슬에 연꽃 장식이 더해져 심플하면서도 의미 있는 분위기를 완성합니다. 연꽃은 진흙 속에서도 맑게 피어나는 상징을 지니고 있어, 작은 염주 하나에도 인내와 정진의 메시지를 담아줍니다.",
        ],
      },
      {
        title: "가까이에 두고 사용하기 좋은 염주",
        images: [
          {
            src: `${woodenFingerPrayerBeadsImageBase}/image4.jpg`,
            alt: "책상이나 차량에 두기 좋은 작은 연꽃염주",
          },
        ],
        body: [
          "가볍고 작은 크기라 가방, 책상, 차량 등 어디에 두어도 부담이 적습니다. 이동 중이나 잠깐의 쉬는 시간에도 손에 쥐기 좋아, 일상 속에서 자연스럽게 명상과 기도의 순간을 만들 수 있습니다.",
        ],
      },
      {
        title: "나무 비즈의 따뜻한 질감",
        images: [
          {
            src: `${woodenFingerPrayerBeadsImageBase}/image5.jpg`,
            alt: "나무 비즈의 질감이 보이는 연꽃염주",
          },
        ],
        body: [
          "나무 비즈 특유의 자연스러운 결이 살아 있어 차갑지 않고 부드러운 인상을 줍니다. 제품마다 나무 무늬와 색감은 조금씩 다를 수 있으며, 이러한 차이는 원목 소재가 가진 자연스러운 특징입니다.",
        ],
      },
      {
        title: "부담 없이 전하기 좋은 작은 선물",
        images: [
          {
            src: `${woodenFingerPrayerBeadsImageBase}/image6.jpg`,
            alt: "선물용으로도 좋은 작은 연꽃염주",
          },
        ],
        body: [
          "연꽃염주는 크기가 작고 의미가 담겨 있어 선물용으로도 잘 어울립니다. 손목 염주와는 다른 색다른 형태의 불교 소품을 찾는 분, 가까운 곳에 두고 사용할 작은 염주를 찾는 분께 추천하기 좋습니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 연꽃염주",
          "재질: 나무 외",
          "구성: 연꽃염주 1EA",
          "사이즈: 내경 약 2.5cm, 외경 약 4.0cm",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "finger-prayer-beads/cat-prayer-beads": {
    name: "고양이염주",
    subtitle: "고양이 발바닥 장식이 달린 여섯 가지 컬러 손가락 염주",
    summary:
      "귀여운 고양이 발바닥 장식과 다양한 컬러가 어우러진 손가락 염주입니다.",
    introBody: [
      "고양이염주는 귀여운 고양이 발바닥 장식이 달린 손가락 염주입니다. 일반적인 손목 염주보다 작은 크기로 손에 쥐거나 손가락에 걸기 좋고, 가방이나 책상, 차 안에 두어도 부담 없이 어울립니다.",
      "작은 구슬을 천천히 굴리다 보면 손끝에 리듬이 생기고, 바쁜 하루 속에서도 잠시 마음을 가다듬는 시간을 만들 수 있습니다.",
    ],
    image: `${catPrayerBeadsImageBase}/image1.jpg`,
    imageAlt: "고양이 발바닥 장식이 달린 고양이염주 대표 이미지",
    sections: [
      {
        title: "손가락에 쏙 들어오는 작은 염주",
        images: [
          {
            src: `${catPrayerBeadsImageBase}/image2.jpg`,
            alt: "손가락에 걸기 좋은 작은 크기의 고양이염주",
          },
        ],
        body: [
          "내경 약 2.0cm, 외경 약 4.3cm의 미니 사이즈로 제작되어 손가락에 자연스럽게 걸리며, 손에 쥐었을 때도 안정감이 있습니다. 휴대성이 좋아 외출 중이나 이동 중에도 가까이에 두기 좋습니다.",
        ],
      },
      {
        title: "여섯 가지 컬러 옵션",
        body: [
          "고양이염주는 애플 그린, 라일락, 스카이 블루, 화이트, 레드, 핑크 총 여섯 가지 색상으로 구성되어 있습니다. 색상마다 분위기가 달라 취향이나 계절, 그날의 기분에 맞춰 선택하기 좋습니다.",
        ],
      },
      {
        title: "선택1. 애플 그린",
        images: [
          {
            src: `${catPrayerBeadsImageBase}/image3.jpg`,
            alt: "애플 그린 컬러 고양이염주",
          },
        ],
        body: [
          "애플 그린은 맑고 산뜻한 분위기가 느껴지는 컬러입니다. 은은한 그린빛과 투명한 장식이 어우러져 손끝에 밝은 포인트를 더해줍니다.",
        ],
      },
      {
        title: "선택2. 라일락",
        images: [
          {
            src: `${catPrayerBeadsImageBase}/image4.jpg`,
            alt: "라일락 컬러 고양이염주",
          },
        ],
        body: [
          "라일락은 부드러운 보랏빛이 매력적인 컬러입니다. 차분하면서도 사랑스러운 느낌이 있어 은은한 색감을 좋아하는 분들에게 잘 어울립니다.",
        ],
      },
      {
        title: "선택3. 스카이 블루",
        images: [
          {
            src: `${catPrayerBeadsImageBase}/image5.jpg`,
            alt: "스카이 블루 컬러 고양이염주",
          },
        ],
        body: [
          "스카이 블루는 깨끗하고 시원한 분위기의 컬러입니다. 맑은 하늘빛이 손끝에 가볍게 머물러 밝고 청량한 인상을 줍니다.",
        ],
      },
      {
        title: "선택4. 화이트",
        images: [
          {
            src: `${catPrayerBeadsImageBase}/image6.jpg`,
            alt: "화이트 컬러 고양이염주",
          },
        ],
        body: [
          "화이트는 가장 단정하고 깔끔한 분위기의 컬러입니다. 과하지 않아 누구에게나 잘 어울리고, 선물용으로도 부담 없이 선택하기 좋습니다.",
        ],
      },
      {
        title: "선택5. 레드",
        images: [
          {
            src: `${catPrayerBeadsImageBase}/image7.jpg`,
            alt: "레드 컬러 고양이염주",
          },
        ],
        body: [
          "레드는 선명한 색감이 돋보이는 컬러입니다. 작은 염주이지만 손에 쥐었을 때 존재감이 있고, 활기 있는 포인트를 원하는 분들에게 잘 어울립니다.",
        ],
      },
      {
        title: "선택6. 핑크",
        images: [
          {
            src: `${catPrayerBeadsImageBase}/image8.jpg`,
            alt: "핑크 컬러 고양이염주",
          },
        ],
        body: [
          "핑크는 부드럽고 따뜻한 느낌을 주는 컬러입니다. 귀여운 고양이 발바닥 장식과 잘 어울려 사랑스러운 분위기를 더해줍니다.",
        ],
      },
      {
        title: "가까이에 두기 좋은 이유",
        body: [
          "고양이염주는 크기가 작아 휴대하기 쉽고, 색감이 예뻐 장식용으로도 자연스럽습니다. 손에 쥐고 굴리거나 가까운 곳에 걸어두면 일상 속에서 자주 시선이 머무는 작은 소품이 됩니다.",
          "귀여운 고양이 발바닥 장식과 다양한 컬러 덕분에 불교용품으로는 물론, 의미 있는 작은 선물로도 잘 어울립니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 고양이염주",
          "재질: 유리 외",
          "구성: 고양이염주 6종 중 1EA",
          "사이즈: 내경 약 2.0cm, 외경 약 4.3cm",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "finger-prayer-beads/cat-paw": {
    name: "고양이발바닥염주",
    subtitle: "손에 쥐는 순간, 마음이 조용해지는 염주",
    summary:
      "고양이 발바닥 포인트와 손끝 사용감이 돋보이는 작은 손가락 염주입니다.",
    introBody: [
      "고양이발바닥염주는 손가락으로 가볍게 굴리며 사용할 수 있는 작은 염주입니다. 바쁘게 흘러가는 하루 속에서 잠깐 멈추고 싶을 때, 손끝에서 천천히 굴려주면 복잡했던 생각을 정리하는 데 도움이 됩니다. 작고 부담 없는 크기라 책상 위, 가방 속, 차 안처럼 가까운 곳에 두고 사용하기 좋습니다.",
    ],
    image: `${catPawImageBase}/image1.jpg`,
    imageAlt: "고양이 발바닥 포인트가 달린 손가락 염주 대표 이미지",
    sections: [
      {
        title: "손끝으로 사용하는 현실적인 명상 도구",
        images: [
          {
            src: `${catPawImageBase}/image2.jpg`,
            alt: "손끝으로 굴리며 사용하는 고양이발바닥염주",
          },
        ],
        body: [
          "이 염주는 단순히 바라보는 장식품보다 손으로 직접 사용하는 제품에 가깝습니다. 손가락에 걸거나 손바닥 안에서 굴리며 집중을 돕고, 짧은 시간이라도 나를 정리하는 루틴을 만들 수 있습니다. 명상을 거창하게 시작하지 않아도, 손에 쥐고 천천히 움직이는 것만으로도 작은 휴식의 시간이 만들어집니다.",
        ],
      },
      {
        title: "고양이 발바닥 포인트가 주는 귀여운 분위기",
        images: [
          {
            src: `${catPawImageBase}/image3.jpg`,
            alt: "고양이 발바닥 장식이 돋보이는 염주",
          },
        ],
        body: [
          "동글동글한 구슬 아래 달린 고양이 발바닥 포인트가 이 제품의 가장 큰 매력입니다. 따뜻한 색감의 구슬과 귀여운 장식이 어우러져 불교용품의 의미는 살리면서도 일상 소품처럼 편안하게 사용할 수 있습니다. 너무 무겁거나 과하지 않은 디자인이라 선물용으로도 부담이 적습니다.",
        ],
      },
      {
        title: "휴대와 보관까지 편한 작은 크기",
        images: [
          {
            src: `${catPawImageBase}/image4.jpg`,
            alt: "전용 파우치와 함께 보관하기 좋은 고양이발바닥염주",
          },
        ],
        body: [
          "지름 12mm 구슬 8알 구성으로 손에 쥐었을 때 자연스럽고, 가볍게 돌리기 좋은 균형감을 갖추었습니다. 전용 파우치와 함께 보관하면 가방 안에서도 깔끔하게 휴대할 수 있습니다. 파우치는 조기 소진될 수 있으므로 구성은 구매 시점에 따라 달라질 수 있습니다.",
        ],
      },
      {
        title: "작게 시작하는 나만의 시간",
        images: [
          {
            src: `${catPawImageBase}/image5.jpg`,
            alt: "일상 속 작은 명상 소품으로 사용하는 고양이발바닥염주",
          },
        ],
        body: [
          "고양이발바닥염주는 크지 않지만 손에 쥐었을 때 존재감이 분명한 제품입니다. 생각이 많을 때, 집중이 흐트러질 때, 잠깐 숨을 고르고 싶을 때 가까이에 두고 사용하기 좋습니다. 귀여운 디자인과 손에 잡히는 사용감이 함께 느껴지는 작은 명상 소품입니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 고양이발바닥염주",
          "재질: 보리근 가공 소재 외",
          "구성: 고양이발바닥염주 1EA",
          "사이즈: 염주 알 지름 12mm x 8EA",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "finger-prayer-beads/cat-charm": {
    name: "고양이장식염주",
    subtitle: "고양이 포인트 장식이 있는 작은 손가락 염주",
    summary:
      "손에 쥐고 천천히 굴리기 좋은 고양이 장식 손가락 염주입니다.",
    introBody: [
      "고양이장식염주는 손에 쥐고 천천히 굴리기 좋은 작은 손가락 염주입니다. 지름 12mm 구슬 8알로 구성되어 한 손에 자연스럽게 잡히며, 바쁜 하루 중 짧게 마음을 가다듬고 싶을 때 부담 없이 사용할 수 있습니다.",
    ],
    image: `${catCharmImageBase}/image1.jpg`,
    imageAlt: "고양이 포인트 장식이 달린 손가락 염주 대표 이미지",
    sections: [
      {
        title: "손끝에서 편안하게 굴러가는 염주",
        images: [
          {
            src: `${catCharmImageBase}/image2.jpg`,
            alt: "손안에서 굴리기 좋은 크기의 고양이장식염주",
          },
        ],
        body: [
          "손가락에 걸거나 손안에서 굴리기 좋은 크기라 이동 중, 책상 앞, 차 안, 잠깐의 휴식 시간에도 쉽게 사용할 수 있습니다. 크기는 작지만 손에 쥐었을 때 안정감이 있어 생각을 정리하는 작은 루틴으로 활용하기 좋습니다.",
        ],
      },
      {
        title: "고양이 포인트가 주는 귀여운 분위기",
        images: [
          {
            src: `${catCharmImageBase}/image3.jpg`,
            alt: "고양이 포인트 장식이 보이는 고양이장식염주",
          },
        ],
        body: [
          "고양이 포인트 장식이 제품의 귀여운 인상을 완성합니다. 보리근 특유의 따뜻한 색감을 살린 가공 소재와 부드러운 색 조합이 어우러져 차분하면서도 사랑스러운 느낌을 줍니다.",
        ],
      },
      {
        title: "작지만 분명한 존재감",
        images: [
          {
            src: `${catCharmImageBase}/image4.jpg`,
            alt: "손끝에 닿는 구슬 질감이 돋보이는 고양이장식염주",
          },
        ],
        body: [
          "구슬 하나하나가 손끝에 닿을 때 부드러운 감각을 전해주며, 가볍게 돌리기 좋은 균형감을 갖추고 있습니다. 명상을 거창하게 시작하지 않아도, 손에 쥐고 천천히 움직이는 것만으로도 잠시 멈추는 시간을 만들 수 있습니다.",
        ],
      },
      {
        title: "보관과 휴대가 편한 구성",
        images: [
          {
            src: `${catCharmImageBase}/image5.jpg`,
            alt: "보관과 휴대가 편한 고양이장식염주 구성",
          },
        ],
        body: [
          "작은 크기라 가방, 파우치, 책상 위에 두기 좋고 필요할 때 꺼내 쓰기 편합니다. 전용 파우치와 함께 보관하면 외출할 때도 부담 없이 챙길 수 있습니다. 파우치는 조기 소진될 수 있습니다.",
        ],
      },
      {
        title: "부담 없이 가까이에 두기 좋은 소품",
        images: [
          {
            src: `${catCharmImageBase}/image6.jpg`,
            alt: "일상 속에서 가까이에 두기 좋은 고양이장식염주",
          },
        ],
        body: [
          "고양이장식염주는 불교용품의 의미와 귀여운 디자인을 함께 담은 작은 염주입니다. 손에 쥐는 순간의 편안함, 고양이 장식의 포인트, 휴대하기 좋은 크기 덕분에 일상 속에서 자연스럽게 함께하기 좋습니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 고양이장식염주",
          "재질: 보리근 가공 소재 외",
          "구성: 고양이장식염주 1EA",
          "사이즈: 염주 알 지름 12mm x 8EA",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "bold-prayer-beads/zodiac-prayer-beads": {
    name: "12지신염주",
    subtitle: "차량 안에 두기 좋은 12지신 나무 염주",
    summary:
      "큼직한 구슬과 12지신 문양이 돋보이는 차량용 굵은 나무 염주입니다.",
    introBody: [
      "12지신염주는 차량 안에 두기 좋은 나무 염주로, 큼직한 구슬과 12지신 문양이 돋보이는 제품입니다. 운전석 가까이에 두면 차량 내부에 차분한 포인트를 더해주고, 이동하는 시간마다 마음을 한 번 정리하게 해주는 작은 상징이 됩니다.",
    ],
    image: `${zodiacPrayerBeadsImageBase}/image1.jpg`,
    imageAlt: "차량 안에 두기 좋은 12지신염주 대표 이미지",
    sections: [
      {
        title: "운전석에 머무는 든든한 포인트",
        images: [
          {
            src: `${zodiacPrayerBeadsImageBase}/image2.jpg`,
            alt: "운전석 가까이에 둔 12지신염주",
          },
        ],
        body: [
          "12지신염주는 단순한 차량 장식품보다 의미 있는 불교 소품에 가깝습니다. 기어봉 주변이나 차량 내부에 두기 좋고, 바쁜 일상 속에서도 안전운전과 차분한 마음을 떠올리게 해줍니다.",
        ],
      },
      {
        title: "12지신 문양이 담긴 나무 구슬",
        images: [
          {
            src: `${zodiacPrayerBeadsImageBase}/image3.jpg`,
            alt: "12지신 문양이 새겨진 나무 구슬",
          },
        ],
        body: [
          "쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양, 원숭이, 닭, 개, 돼지를 상징하는 12지신 문양이 구슬 하나하나에 표현되어 있습니다. 열두 동물의 상징성이 더해져 차량 안에서도 든든하고 안정적인 분위기를 만들어줍니다.",
        ],
      },
      {
        title: "굵은 구슬이 주는 존재감",
        images: [
          {
            src: `${zodiacPrayerBeadsImageBase}/image4.jpg`,
            alt: "지름 약 20mm의 굵은 12지신염주 구슬",
          },
        ],
        body: [
          "구슬 지름은 약 20mm이며 총 12개의 나무 구슬로 구성되어 있습니다. 일반적인 염주보다 큼직한 편이라 차량 내부에서도 존재감이 분명하고, 손에 닿았을 때 묵직한 안정감이 느껴집니다.",
        ],
      },
      {
        title: "기어봉에 잘 어울리는 차량용 염주",
        images: [
          {
            src: `${zodiacPrayerBeadsImageBase}/image5.jpg`,
            alt: "기어봉에 자연스럽게 어울리는 12지신 차량용 염주",
          },
        ],
        body: [
          "12지신염주는 차량용 기어봉 염주로 사용하기 좋은 형태입니다. 기어봉에 자연스럽게 걸어두면 운전석 분위기를 해치지 않으면서 은은한 장식 포인트가 됩니다. 나무 소재 특유의 질감이 차량 내부와 부드럽게 어우러집니다.",
        ],
      },
      {
        title: "조롱박 장식의 작은 포인트",
        images: [
          {
            src: `${zodiacPrayerBeadsImageBase}/image6.jpg`,
            alt: "조롱박 장식이 달린 12지신염주",
          },
        ],
        body: [
          "염주 끝에는 조롱박 장식이 함께 매듭지어져 있어 단조롭지 않고 고급스러운 느낌을 더해줍니다. 12지신 문양과 조롱박 장식이 함께 어우러져 선물용으로도 부담 없이 선택하기 좋습니다.",
          "차량을 운전하는 가족, 지인, 동료에게 마음을 담아 선물하기 좋은 제품입니다. 안전운전을 바라는 마음을 전하기에도 좋고, 불교 소품이나 차량 장식을 좋아하는 분께도 의미 있는 선물이 될 수 있습니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 12지신염주",
          "재질: 나무 외",
          "구성: 12지신염주 1EA",
          "사이즈: 구슬 지름 약 20mm x 12EA",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "bold-prayer-beads/diamond-sutra-prayer-beads": {
    name: "금강경염주",
    subtitle: "금강경이 새겨진 굵은 나무 염주",
    summary:
      "금강경 문구가 새겨진 20mm 굵은 나무 구슬 12개로 구성된 불교 소품입니다.",
    introBody: [
      "금강경염주는 지름 약 20mm의 굵은 나무 구슬 12개로 구성된 염주입니다. 구슬 하나하나에 금강경 문구가 새겨져 있어 단순한 장식품을 넘어 차분한 마음가짐을 떠올리게 하는 불교 소품으로 활용하기 좋습니다.",
    ],
    image: `${diamondSutraPrayerBeadsImageBase}/image1.jpg`,
    imageAlt: "금강경 문구가 새겨진 굵은 나무 염주 대표 이미지",
    sections: [
      {
        title: "금강경이 새겨진 나무 구슬",
        images: [
          {
            src: `${diamondSutraPrayerBeadsImageBase}/image2.jpg`,
            alt: "금강경 문구가 조각된 나무 구슬",
          },
        ],
        body: [
          "각 구슬에는 금강경 문구가 조각되어 있어 가까이 볼수록 섬세한 디테일이 돋보입니다. 나무의 따뜻한 색감과 경전 문구의 정갈한 분위기가 어우러져 차분하고 고급스러운 인상을 줍니다.",
        ],
      },
      {
        title: "굵은 구슬이 주는 안정감",
        images: [
          {
            src: `${diamondSutraPrayerBeadsImageBase}/image3.jpg`,
            alt: "지름 약 20mm 금강경염주 구슬",
          },
        ],
        body: [
          "구슬 지름은 약 20mm로, 일반적인 염주보다 굵은 편입니다. 손에 쥐었을 때 존재감이 분명하고, 차량 안이나 책상 위에 두어도 가볍게 보이지 않아 안정적인 분위기를 만들어줍니다.",
        ],
      },
      {
        title: "차량용 염주로도 좋은 구성",
        images: [
          {
            src: `${diamondSutraPrayerBeadsImageBase}/image4.jpg`,
            alt: "차량용 염주로 활용하기 좋은 금강경염주",
          },
        ],
        body: [
          "금강경염주는 자동차 기어봉 주변에 두기 좋은 크기와 무게감을 갖춘 제품입니다. 운전 중 자주 시선이 머무는 곳에 두면 안전운전과 차분한 마음을 떠올리게 하는 작은 상징이 되어줍니다.",
        ],
      },
      {
        title: "나무 소재 특유의 따뜻한 분위기",
        images: [
          {
            src: `${diamondSutraPrayerBeadsImageBase}/image5.jpg`,
            alt: "나무 소재 특유의 따뜻한 색감이 보이는 금강경염주",
          },
        ],
        body: [
          "나무 구슬은 자연스러운 결감과 은은한 색감이 특징입니다. 금속 장식처럼 차갑게 보이지 않고, 차량 내부나 실내 공간에 부담 없이 어울리는 따뜻한 분위기를 더해줍니다.",
        ],
      },
      {
        title: "선물하기 좋은 불교 소품",
        images: [
          {
            src: `${diamondSutraPrayerBeadsImageBase}/image6.jpg`,
            alt: "선물하기 좋은 금강경염주 구성",
          },
        ],
        body: [
          "신차를 구매한 분이나 운전을 자주 하는 분께 마음을 담아 선물하기 좋습니다. 무사고와 평온한 이동을 바라는 마음을 전하기에도 적합하며, 불교 소품을 좋아하는 분께도 의미 있는 선물이 될 수 있습니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 금강경염주",
          "재질: 나무 외",
          "구성: 금강경염주 1EA",
          "사이즈: 구슬 지름 약 20mm x 12EA",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "bold-prayer-beads/car-prayer-beads": {
    name: "자동차염주",
    subtitle: "차 안에 차분한 분위기를 더해주는 굵은 나무 염주",
    summary:
      "운전석 가까이에 두기 좋은 20mm 굵은 나무 구슬 차량용 염주입니다.",
    introBody: [
      "자동차염주는 차량 안에 두기 좋은 굵은 나무 염주입니다. 운전 중 자주 시선이 머무는 기어봉 주변에 두면 차 안의 분위기가 한층 차분해지고, 바쁜 이동 시간 속에서도 잠시 마음을 가다듬는 작은 포인트가 됩니다. 단순한 장식품보다는 안전운전의 마음을 떠올리게 하는 불교 감성 소품에 가깝습니다.",
    ],
    image: `${carPrayerBeadsImageBase}/image1.jpg`,
    imageAlt: "차 안에 두기 좋은 자동차염주 대표 이미지",
    sections: [
      {
        title: "운전석 가까이에 두기 좋은 염주",
        images: [
          {
            src: `${carPrayerBeadsImageBase}/image2.jpg`,
            alt: "운전석 가까이에 둔 자동차염주",
          },
        ],
        body: [
          "자동차염주는 차량 안에 두기 좋은 굵은 나무 염주입니다. 운전 중 자주 시선이 머무는 기어봉 주변에 두면 차 안의 분위기가 한층 차분해지고, 바쁜 이동 시간 속에서도 잠시 마음을 가다듬는 작은 포인트가 됩니다.",
        ],
      },
      {
        title: "20mm 구슬 12개의 묵직한 존재감",
        images: [
          {
            src: `${carPrayerBeadsImageBase}/image3.jpg`,
            alt: "20mm 구슬 12개로 구성된 자동차염주",
          },
        ],
        body: [
          "구슬은 지름 약 20mm의 큰 사이즈로 구성되어 있습니다. 총 12개의 굵은 구슬이 이어져 있어 일반적인 작은 염주보다 존재감이 분명하고, 차량 내부에서도 안정감 있게 보입니다. 너무 가볍거나 얇아 보이지 않아 기어봉 장식으로도 잘 어울립니다.",
        ],
      },
      {
        title: "나무 소재가 주는 편안한 분위기",
        images: [
          {
            src: `${carPrayerBeadsImageBase}/image4.jpg`,
            alt: "흑색 나무 구슬의 자동차염주",
          },
        ],
        body: [
          "흑색 나무 구슬은 차분하고 단정한 인상을 줍니다. 표면의 은은한 광택과 나무 특유의 무늬가 어우러져 과하게 튀지 않으면서도 고급스러운 분위기를 만듭니다. 차량 내부의 어두운 색감과도 자연스럽게 어울려 데일리 차량 소품으로 사용하기 좋습니다.",
        ],
      },
      {
        title: "조롱박 장식이 더하는 포인트",
        images: [
          {
            src: `${carPrayerBeadsImageBase}/image5.jpg`,
            alt: "조롱박 장식 2개가 달린 자동차염주",
          },
        ],
        body: [
          "염주에는 작은 조롱박 장식 2개가 함께 매듭지어져 있습니다. 단순한 원형 염주에 포인트를 더해주며, 전체 디자인을 조금 더 전통적이고 의미 있게 완성해줍니다. 조롱박 장식은 복과 좋은 기운을 떠올리게 하는 요소로, 차량용 선물에도 잘 어울립니다.",
        ],
      },
      {
        title: "차량 기어봉에 자연스럽게 어울리는 디자인",
        images: [
          {
            src: `${carPrayerBeadsImageBase}/image6.jpg`,
            alt: "차량 기어봉 주변에 어울리는 자동차염주",
          },
        ],
        body: [
          "자동차염주는 차량 기어봉 주변에 두었을 때 자연스럽게 어울리는 디자인입니다. 운전석 분위기를 해치지 않으면서도 은은한 불교 소품의 느낌을 더해줍니다. 새 차를 구매한 가족이나 지인에게 무사고와 안전운전의 마음을 담아 선물하기에도 부담 없는 제품입니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 자동차염주",
          "재질: 나무 외",
          "구성: 자동차염주 1EA",
          "사이즈: 구슬 지름 약 20mm x 12EA",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "bold-prayer-beads/chunky-prayer-beads": {
    name: "굵은염주",
    subtitle: "알록달록한 구슬과 전통 매듭 장식의 나무 염주",
    summary:
      "지름 약 20mm의 큼직한 구슬과 전통 매듭 장식이 돋보이는 굵은 나무 염주입니다.",
    introBody: [
      "굵은염주는 지름 약 20mm의 큼직한 구슬 12개로 구성된 나무 염주입니다. 알록달록한 구슬과 전통 매듭 장식이 어우러져 손에 쥐었을 때도, 차량 안에 두었을 때도 분명한 존재감을 전해줍니다.",
    ],
    image: `${chunkyPrayerBeadsImageBase}/image1.jpg`,
    imageAlt: "알록달록한 구슬과 전통 매듭 장식의 굵은염주 대표 이미지",
    sections: [
      {
        title: "큼직한 구슬이 주는 존재감",
        images: [
          {
            src: `${chunkyPrayerBeadsImageBase}/image2.jpg`,
            alt: "큼직한 구슬이 돋보이는 굵은염주",
          },
        ],
        body: [
          "일반적인 작은 염주보다 구슬이 굵어 한눈에 들어오는 힘이 있습니다. 구슬 하나하나의 색감과 무늬가 달라 단조롭지 않고, 가까이 볼수록 나무 소재 특유의 따뜻한 분위기가 느껴집니다.",
        ],
      },
      {
        title: "알록달록한 색감의 조화",
        images: [
          {
            src: `${chunkyPrayerBeadsImageBase}/image3.jpg`,
            alt: "알록달록한 구슬 색감이 조화로운 굵은염주",
          },
        ],
        body: [
          "굵은염주는 서로 다른 톤의 구슬이 함께 연결되어 있어 장식용으로도 보기 좋습니다. 차분한 색과 포인트 컬러가 함께 어우러져 차량 내부, 책상, 선반 등 다양한 공간에 자연스럽게 놓기 좋습니다.",
        ],
      },
      {
        title: "전통 매듭 장식 포인트",
        images: [
          {
            src: `${chunkyPrayerBeadsImageBase}/image4.jpg`,
            alt: "전통 매듭 장식이 달린 굵은염주",
          },
        ],
        body: [
          "전통적인 느낌의 매듭 장식이 더해져 불교 소품다운 분위기를 살려줍니다. 매듭 부분은 단순한 연결 장식이 아니라 제품 전체의 분위기를 정리해주는 포인트로, 염주의 완성도를 높여줍니다.",
        ],
      },
      {
        title: "차량용 염주로 활용하기 좋은 구성",
        images: [
          {
            src: `${chunkyPrayerBeadsImageBase}/image5.jpg`,
            alt: "차량용 염주로 활용하기 좋은 굵은염주",
          },
        ],
        body: [
          "굵은염주는 차량 기어봉 주변에 두거나 차량 내부 장식으로 활용하기 좋습니다. 큰 구슬의 무게감과 전통 매듭 장식이 어우러져 운전석 주변에 차분한 포인트를 더해줍니다.",
        ],
      },
      {
        title: "조롱박 장식이 더하는 의미",
        images: [
          {
            src: `${chunkyPrayerBeadsImageBase}/image6.jpg`,
            alt: "조롱박 장식이 달린 굵은염주",
          },
        ],
        body: [
          "염주 끝에는 조롱박 장식이 함께 달려 있어 단조로움을 덜어줍니다. 조롱박은 좋은 기운과 복을 상징하는 장식으로 여겨져, 차량을 새로 마련한 분이나 가까운 지인에게 선물하기에도 잘 어울립니다.",
          "신차를 구매한 가족이나 지인, 차량용 불교 소품을 찾는 분께 부담 없이 전하기 좋은 제품입니다. 크기가 작아도 의미는 분명하고, 차량 안에 두었을 때 매일 자연스럽게 눈길이 머무는 소품이 되어줍니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 굵은염주",
          "재질: 나무 외",
          "구성: 굵은염주 1EA",
          "사이즈: 구슬 약 20mm x 12EA",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "bold-prayer-beads/large-prayer-beads": {
    name: "큰염주",
    subtitle: "묵직한 안정감이 느껴지는 굵은 나무 염주",
    summary:
      "지름 약 20mm의 굵은 나무 구슬 12개로 구성된 차량용 불교 소품입니다.",
    introBody: [
      "큰염주는 지름 약 20mm의 굵은 나무 구슬 12개로 구성된 염주입니다. 손에 쥐었을 때 묵직한 안정감이 느껴지고, 차량 안에 두었을 때도 차분한 포인트가 되어주는 불교 소품입니다.",
    ],
    image: `${largePrayerBeadsImageBase}/image1.jpg`,
    imageAlt: "묵직한 안정감이 느껴지는 큰염주 대표 이미지",
    sections: [
      {
        title: "굵은 구슬이 주는 안정감",
        images: [
          {
            src: `${largePrayerBeadsImageBase}/image2.jpg`,
            alt: "굵은 나무 구슬이 돋보이는 큰염주",
          },
        ],
        body: [
          "작은 염주보다 구슬이 큼직해 한눈에 존재감이 느껴집니다. 손에 올렸을 때도 안정적으로 잡히며, 단단한 나무 구슬의 질감이 차분한 분위기를 전해줍니다.",
        ],
      },
      {
        title: "나무 구슬의 자연스러운 결감",
        images: [
          {
            src: `${largePrayerBeadsImageBase}/image3.jpg`,
            alt: "나무 구슬의 자연스러운 결감이 보이는 큰염주",
          },
        ],
        body: [
          "구슬마다 나무 특유의 결, 색감, 무늬가 조금씩 달라 자연스러운 멋이 있습니다. 밝고 따뜻한 갈색 톤이 부담스럽지 않아 차량 내부나 생활 공간에 두어도 잘 어울립니다.",
        ],
      },
      {
        title: "조롱박 장식이 더하는 포인트",
        images: [
          {
            src: `${largePrayerBeadsImageBase}/image4.jpg`,
            alt: "조롱박 장식이 달린 큰염주",
          },
        ],
        body: [
          "염주 끝에는 조롱박 장식이 함께 달려 있어 단조로움을 덜어줍니다. 조롱박은 좋은 기운과 복을 떠올리게 하는 장식으로, 제품 전체에 의미 있는 포인트를 더합니다.",
        ],
      },
      {
        title: "차량용 기어봉 염주로 활용하기 좋습니다",
        images: [
          {
            src: `${largePrayerBeadsImageBase}/image5.jpg`,
            alt: "차량용 기어봉 염주로 활용하기 좋은 큰염주",
          },
        ],
        body: [
          "큰염주는 차량 기어봉 주변에 두기 좋은 크기와 디자인을 갖추고 있습니다. 운전석 가까이에 두면 차량 인테리어를 해치지 않으면서도 차분하고 안정적인 분위기를 만들어줍니다.",
        ],
      },
      {
        title: "선물하기 좋은 불교 소품",
        images: [
          {
            src: `${largePrayerBeadsImageBase}/image6.jpg`,
            alt: "선물하기 좋은 큰염주 구성",
          },
        ],
        body: [
          "새 차를 구매한 가족이나 지인, 운전을 자주 하는 분께 마음을 담아 선물하기 좋은 제품입니다. 무사고와 안전운전을 바라는 마음을 부담 없이 전할 수 있는 불교 소품입니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 큰염주",
          "재질: 나무 외",
          "구성: 큰염주 1EA",
          "사이즈: 구슬 약 20mm x 12EA",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "desk-buddha/vairocana-buddha": {
    name: "비로자나불",
    subtitle: "작은 크기 안에 담긴 차분한 부처님",
    summary:
      "모든 부처님의 근원과 우주의 진리를 상징하는 비로자나불 미니불상입니다.",
    introBody: [
      "비로자나불은 모든 부처님의 근원과 우주의 진리를 상징하는 부처님입니다. 이 미니불상은 작은 크기 안에 차분한 표정과 단정한 자세를 담아, 책상 위나 명상 공간에 두기 좋은 불교 소품입니다.",
    ],
    image: `${vairocanaBuddhaImageBase}/image1.jpg`,
    imageAlt: "책상 위나 명상 공간에 두기 좋은 비로자나불 미니불상 대표 이미지",
    sections: [
      {
        title: "작지만 깊은 존재감",
        images: [
          {
            src: `${vairocanaBuddhaImageBase}/image2.jpg`,
            alt: "손에 올릴 수 있는 작은 크기의 비로자나불",
          },
        ],
        body: [
          "높이 약 3.3cm의 아담한 크기지만 손에 올렸을 때 단단한 무게감이 느껴집니다. 공간을 크게 차지하지 않으면서도 시선이 머무는 곳에 조용한 중심을 만들어줍니다.",
        ],
      },
      {
        title: "황동 특유의 묵직한 질감",
        images: [
          {
            src: `${vairocanaBuddhaImageBase}/image3.jpg`,
            alt: "황동 소재의 금빛 질감이 보이는 비로자나불",
          },
        ],
        body: [
          "황동 소재가 주는 은은한 금빛과 묵직한 감촉이 제품의 안정감을 높여줍니다. 빛이 닿는 방향에 따라 표면의 질감과 조각의 입체감이 자연스럽게 살아납니다.",
        ],
      },
      {
        title: "앞뒤로 살핀 섬세한 형태",
        images: [
          {
            src: `${vairocanaBuddhaImageBase}/image4.jpg`,
            alt: "정면과 뒷면의 형태가 보이는 비로자나불",
          },
        ],
        body: [
          "정면의 합장한 손과 단정한 좌대, 뒷면의 둥근 선까지 작은 크기 안에 세부 형태가 안정적으로 표현되어 있습니다. 가까이 두고 볼수록 미니불상의 섬세함이 느껴집니다.",
        ],
      },
      {
        title: "두기 좋은 작은 크기",
        images: [
          {
            src: `${vairocanaBuddhaImageBase}/image5.jpg`,
            alt: "작은 공간에 두기 좋은 비로자나불 미니불상",
          },
        ],
        body: [
          "책상, 선반, 차량 내부, 침실 한켠처럼 작은 공간에도 자연스럽게 놓을 수 있습니다. 큰 불상을 두기 부담스러운 공간에서도 비로자나불의 차분한 분위기를 가까이 느낄 수 있습니다.",
        ],
      },
      {
        title: "묵직함이 전하는 안정감",
        images: [
          {
            src: `${vairocanaBuddhaImageBase}/image6.jpg`,
            alt: "작지만 묵직한 안정감이 느껴지는 비로자나불",
          },
        ],
        body: [
          "약 45g의 무게로 작은 크기에 비해 안정감 있게 느껴집니다. 손에 올려두었을 때 가볍게 흩어지는 느낌보다 단단하게 머무는 느낌이 있어, 소장용이나 선물용으로도 잘 어울립니다.",
          "본 제품은 초미니 상품입니다. 어린아이가 실수로 삼킬 수 있으니 아이의 손이 닿지 않는 곳에 보관하고, 전시하거나 이동할 때는 떨어뜨리지 않도록 주의해 주세요.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 비로자나불",
          "재질: 황동",
          "구성: 비로자나불 1EA",
          "사이즈: 높이 약 3.3cm / 너비 약 2.5cm",
          "무게: 약 45g ±5g",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "desk-buddha/baby-buddha": {
    name: "아기부처",
    subtitle: "맑은 유리 질감이 전하는 작은 평온",
    summary:
      "투명하고 맑은 유리 재질이 돋보이는 책상 위 미니 불상입니다.",
    introBody: [
      "아기부처는 투명하고 맑은 유리 재질이 돋보이는 미니 불상입니다. 매끈한 마감과 온화한 표정이 어우러져 책상, 선반, 침실, 명상 공간에 자연스럽게 놓기 좋습니다. 작은 크기지만 공간에 차분한 분위기를 더해주고, 바라보는 순간 마음을 한 번 쉬어가게 해줍니다.",
    ],
    image: `${babyBuddhaImageBase}/image1.jpg`,
    imageAlt: "맑은 유리 질감의 아기부처 미니 불상 대표 이미지",
    sections: [
      {
        title: "손안에 들어오는 미니 불상",
        images: [
          {
            src: `${babyBuddhaImageBase}/image2.jpg`,
            alt: "손안에 들어오는 크기의 아기부처 미니 불상",
          },
        ],
        body: [
          "높이 약 8.5cm의 아담한 크기로 부담 없이 두기 좋은 미니 불상입니다. 작은 선반이나 책상 위에도 자연스럽게 어울리며, 공간을 크게 차지하지 않으면서도 분명한 존재감을 전합니다.",
        ],
      },
      {
        title: "유리 재질의 맑은 분위기",
        images: [
          {
            src: `${babyBuddhaImageBase}/image3.jpg`,
            alt: "투명한 질감과 하얀 색감의 아기부처",
          },
        ],
        body: [
          "투명한 질감과 하얀 색감이 부드럽게 어우러져 밝고 깨끗한 인상을 줍니다. 빛을 받을 때 은은하게 달라지는 표정과 질감이 매력적이며, 단순한 장식 이상의 차분한 분위기를 만들어줍니다.",
        ],
      },
      {
        title: "선택1. 투명색",
        images: [
          {
            src: `${babyBuddhaImageBase}/image4.jpg`,
            alt: "투명색 아기부처 미니 불상",
          },
        ],
        body: [
          "투명색은 맑고 깨끗한 느낌이 돋보이는 옵션입니다. 빛을 머금은 듯한 유리 질감이 공간을 밝게 만들어주고, 작은 명상 공간이나 인테리어 포인트로 활용하기 좋습니다.",
        ],
      },
      {
        title: "선택2. 하얀색",
        images: [
          {
            src: `${babyBuddhaImageBase}/image5.jpg`,
            alt: "하얀색 아기부처 미니 불상",
          },
        ],
        body: [
          "하얀색은 부드럽고 단정한 분위기가 특징입니다. 과하지 않은 색감 덕분에 주변 소품과 자연스럽게 어울리며, 침실이나 책상 위에 두었을 때 차분한 인상을 전합니다.",
        ],
      },
      {
        title: "뒤태와 디테일까지 자연스럽게",
        images: [
          {
            src: `${babyBuddhaImageBase}/image6.jpg`,
            alt: "아기부처의 정면 뒷모습 옆모습 디테일",
          },
        ],
        body: [
          "정면뿐 아니라 뒷모습과 옆모습까지 둥글고 부드럽게 마감되어 어느 방향에서 보아도 편안한 느낌을 줍니다. 투명색과 하얀색 모두 각기 다른 분위기를 지니고 있어 취향에 따라 선택하기 좋습니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 아기부처",
          "재질: 유리",
          "구성: 아기부처 투명색, 하얀색 중 1EA",
          "사이즈: 약 5.3cm x 8.5cm",
          "무게: 약 165g ±5g",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "desk-buddha/mini-buddha-statue": {
    name: "미니불상",
    subtitle: "작은 공간에 두기 좋은 인테리어 미니불상",
    summary:
      "책상과 선반, 침실 한켠, 명상 공간에 부담 없이 놓기 좋은 도기 미니불상입니다.",
    introBody: [
      "미니불상은 높이 약 8cm의 아담한 크기로, 책상과 선반, 침실 한켠, 명상 공간에 부담 없이 놓기 좋은 인테리어 소품입니다. 작은 크기지만 부처님의 차분한 표정과 부드러운 색감이 공간에 고요한 분위기를 더해줍니다.",
      "크게 눈에 띄기보다 자연스럽게 곁에 머무는 불상을 찾는 분들께 잘 어울립니다. 자주 시선이 머무는 곳에 두면 하루 중 잠시 마음을 가다듬는 작은 기준점이 되어줍니다.",
    ],
    image: `${miniBuddhaStatueImageBase}/image1.jpg`,
    imageAlt: "책상과 선반에 두기 좋은 도기 미니불상 대표 이미지",
    sections: [
      {
        title: "작은 공간에 두기 좋은 불상",
        images: [
          {
            src: `${miniBuddhaStatueImageBase}/image2.jpg`,
            alt: "작은 공간에 두기 좋은 미니불상",
          },
        ],
        body: [
          "미니불상은 크기가 부담스럽지 않아 넓은 불단이 없어도 편하게 둘 수 있습니다. 책상 위에서는 집중을 돕는 차분한 오브제가 되고, 선반 위에서는 공간의 분위기를 부드럽게 정리해주는 포인트가 됩니다.",
          "불교 인테리어 소품을 처음 들이는 분들도 어렵지 않게 선택할 수 있는 크기와 디자인입니다. 단정한 색감과 안정적인 형태 덕분에 집 안 분위기와 자연스럽게 어우러집니다.",
        ],
      },
      {
        title: "4가지 모습으로 선택하는 미니불상",
        images: [
          {
            src: `${miniBuddhaStatueImageBase}/image3.jpg`,
            alt: "단정상 단충상 기복상 단의상 4가지 미니불상",
          },
        ],
        body: [
          "미니불상은 단정상, 단충상, 기복상, 단의상 4가지 옵션으로 구성되어 있습니다. 같은 크기의 미니불상이지만 각기 다른 자세와 분위기를 담고 있어, 놓는 공간이나 선호하는 느낌에 따라 선택할 수 있습니다.",
          "하나만 두어도 좋고, 여러 종류를 함께 배치하면 작은 불교 인테리어 공간처럼 조화로운 느낌을 만들 수 있습니다.",
        ],
      },
      {
        title: "선택1. 단정상",
        images: [
          {
            src: `${miniBuddhaStatueImageBase}/image4.jpg`,
            alt: "단정상 미니불상",
          },
        ],
        body: [
          "단정상은 고요한 표정과 안정감 있는 자세가 돋보이는 옵션입니다. 차분하게 정돈된 분위기를 좋아하는 분께 잘 어울리며, 책상이나 선반 위에 두었을 때 부드러운 존재감을 전해줍니다.",
        ],
      },
      {
        title: "선택2. 단충상",
        images: [
          {
            src: `${miniBuddhaStatueImageBase}/image5.jpg`,
            alt: "단충상 미니불상",
          },
        ],
        body: [
          "단충상은 부드러운 색감과 단정한 형태가 조화를 이루는 옵션입니다. 작은 공간에 두어도 과하지 않고, 일상 속에서 자연스럽게 마음을 가라앉히는 분위기를 만들어줍니다.",
        ],
      },
      {
        title: "선택3. 기복상",
        images: [
          {
            src: `${miniBuddhaStatueImageBase}/image6.jpg`,
            alt: "기복상 미니불상",
          },
        ],
        body: [
          "기복상은 두 손을 모은 듯한 모습이 인상적인 옵션입니다. 소망과 기도의 분위기를 담고 있어, 마음을 모으고 싶은 공간이나 조용한 명상 공간에 잘 어울립니다.",
        ],
      },
      {
        title: "선택4. 단의상",
        images: [
          {
            src: `${miniBuddhaStatueImageBase}/image7.jpg`,
            alt: "단의상 미니불상",
          },
        ],
        body: [
          "단의상은 손의 수인이 시선을 끄는 옵션입니다. 작지만 표정과 자세의 디테일이 살아 있어, 가까이 볼수록 미니불상 특유의 섬세한 매력을 느낄 수 있습니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 미니불상",
          "재질: 도기",
          "구성: 인테리어용 미니불상 4종 중 1EA",
          "사이즈: 높이 약 8cm / 너비 약 4cm",
          "무게: 약 75g",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "desk-buddha/small-buddha-statue": {
    name: "소형불상",
    subtitle: "작은 공간에 차분한 분위기를 더하는 연꽃 불상",
    summary:
      "책상 위나 선반, 차량 내부, 명상 공간에 자연스럽게 놓기 좋은 아담한 소형불상입니다.",
    introBody: [
      "소형불상은 높이 약 5cm, 너비 약 4cm의 아담한 미니 불상입니다. 석가모니불의 고요한 표정과 연꽃을 감싼 수인이 함께 어우러져, 책상 위나 선반, 차량 내부, 명상 공간에 자연스럽게 놓기 좋습니다.",
      "부담스럽지 않은 크기지만 불상 특유의 차분한 존재감이 있어, 일상 공간에 작은 평온의 포인트를 더해줍니다.",
    ],
    image: `${smallBuddhaStatueImageBase}/image1.jpg`,
    imageAlt: "연꽃을 품은 소형불상 대표 이미지",
    sections: [
      {
        title: "작은 크기 속에 담긴 고요함",
        images: [
          {
            src: `${smallBuddhaStatueImageBase}/image2.jpg`,
            alt: "한 손에 들어오는 작은 크기의 소형불상",
          },
        ],
        body: [
          "수지 재질로 제작된 소형불상은 한 손에 들어오는 크기이지만, 정면에서 보았을 때의 안정감이 분명합니다. 부처님의 온화한 표정과 단정한 자세가 공간을 차분하게 정돈해 줍니다.",
          "작은 불상을 처음 모시는 분도 부담 없이 선택하기 좋고, 기존 불상이나 염주, 향, 명상 소품과 함께 배치하기에도 잘 어울립니다.",
        ],
      },
      {
        title: "연꽃을 품은 단정한 수인",
        images: [
          {
            src: `${smallBuddhaStatueImageBase}/image3.jpg`,
            alt: "연꽃을 감싼 수인이 돋보이는 소형불상",
          },
        ],
        body: [
          "연꽃은 불교에서 청정함과 깨달음을 상징하는 이미지로 자주 사용됩니다. 이 소형불상은 연꽃을 감싼 듯한 손 모양이 인상적이며, 작은 조형 안에서도 부드럽고 단정한 분위기를 전합니다.",
          "가까이에서 바라보면 석가모니불의 표정과 손 모양, 좌상 형태가 조화롭게 어우러져 작은 명상 공간의 중심이 되어줍니다.",
        ],
      },
      {
        title: "어디에 두어도 자연스러운 불교 인테리어",
        images: [
          {
            src: `${smallBuddhaStatueImageBase}/image4.jpg`,
            alt: "책상 선반 차량 내부에 두기 좋은 소형불상",
          },
        ],
        body: [
          "소형불상은 크기가 작아 공간을 많이 차지하지 않습니다. 책상 한편, 침실 협탁, 현관 선반, 차량 내부처럼 자주 시선이 머무는 곳에 두기 좋습니다.",
          "중후한 색감과 클래식한 조형미가 있어 불교 인테리어 소품으로도 자연스럽고, 마음을 가다듬고 싶은 순간에 조용히 바라보기 좋은 제품입니다.",
        ],
      },
      {
        title: "뒷모습까지 단정한 조형감",
        images: [
          {
            src: `${smallBuddhaStatueImageBase}/image5.jpg`,
            alt: "정면 측면 뒷모습이 단정한 소형불상",
          },
        ],
        body: [
          "정면뿐 아니라 측면과 뒷모습에서도 불상의 형태가 단정하게 이어집니다. 선반이나 책상 위처럼 다양한 각도에서 보이는 공간에 두어도 어색하지 않습니다.",
          "작은 크기이지만 전체적인 균형감이 있어, 단독으로 두어도 좋고 여러 불교 소품과 함께 배치해도 차분한 분위기를 유지합니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 소형불상",
          "재질: 수지",
          "구성: 소형 연꽃 불상 1EA",
          "사이즈: 높이 약 5.0cm, 너비 약 4.0cm",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "desk-buddha/buddha-goods": {
    name: "불상굿즈",
    subtitle: "도자기 미니불상 2종",
    summary:
      "좌상과 와상 두 가지 타입으로 구성된 도자기 미니 불상 소품입니다.",
    introBody: [
      "불상굿즈는 도자기 특유의 맑고 부드러운 색감이 돋보이는 미니 불상 소품입니다. 좌상과 와상 두 가지 타입으로 구성되어, 책상·선반·TV장·명상 공간처럼 자주 시선이 머무는 곳에 자연스럽게 어울립니다.",
    ],
    image: `${buddhaGoodsImageBase}/image1.jpg`,
    imageAlt: "좌상과 와상으로 구성된 도자기 미니불상 2종 대표 이미지",
    sections: [
      {
        title: "고급스러운 도자기 불상",
        images: [
          {
            src: `${buddhaGoodsImageBase}/image2.jpg`,
            alt: "작은 공간에도 자연스럽게 어울리는 도자기 미니 불상",
          },
        ],
        body: [
          "작은 크기지만 단정한 형태와 은은한 색감이 공간에 차분한 분위기를 더해줍니다. 과하게 눈에 띄는 장식이 아니라, 가까운 곳에 두고 볼수록 편안하게 스며드는 불교 소품입니다.",
          "집 안의 선반, 책상 위, 침실 한쪽, 명상 공간에 두기 좋으며, 불교 인테리어를 처음 시작하는 분도 부담 없이 선택할 수 있습니다.",
        ],
      },
      {
        title: "선택1. 좌상",
        images: [
          {
            src: `${buddhaGoodsImageBase}/image3.jpg`,
            alt: "도자기 미니불상 좌상",
          },
        ],
        body: [
          "좌상은 반듯하게 앉은 모습이 특징입니다. 두 손을 모은 단정한 자세가 안정적인 인상을 주며, 책상이나 선반 위에 두었을 때 차분한 중심감을 만들어줍니다.",
          "높이 약 8.5cm, 너비 약 5.5cm의 아담한 크기라 일상 공간 가까이에 두기 좋습니다.",
        ],
      },
      {
        title: "선택2. 와상",
        images: [
          {
            src: `${buddhaGoodsImageBase}/image4.jpg`,
            alt: "도자기 미니불상 와상",
          },
        ],
        body: [
          "와상은 편안히 누운 형태가 돋보이는 타입입니다. 부드러운 곡선과 여유로운 자세가 공간에 한층 편안한 분위기를 더해줍니다.",
          "높이 약 6.0cm, 너비 약 8.8cm로, 낮고 안정적인 형태라 선반이나 협탁 위에 자연스럽게 배치하기 좋습니다.",
        ],
      },
      {
        title: "두 가지 타입으로 완성하는 공간 포인트",
        images: [
          {
            src: `${buddhaGoodsImageBase}/image5.jpg`,
            alt: "좌상과 와상 크기 비교",
          },
        ],
        body: [
          "좌상과 와상은 각각 단독으로 두어도 좋고, 함께 배치하면 더 풍성한 분위기를 연출할 수 있습니다. 취향에 따라 하나를 선택하거나, 두 가지 형태를 나란히 두어 작은 불교 인테리어 공간을 만들 수 있습니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 불상굿즈",
          "재질: 도자기",
          "구성: 불상굿즈 2종 중 1EA (좌상 / 와상)",
          "사이즈: 좌상 높이 약 8.5cm, 너비 약 5.5cm / 와상 높이 약 6.0cm, 너비 약 8.8cm",
          "무게: 좌상 약 93g / 와상 약 114g",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "home-buddha-statues/pensive-bodhisattva": {
    name: "반가사유상",
    subtitle: "공간에 고요한 사유의 분위기를 더하는 불상 소품",
    summary:
      "깊은 생각에 잠긴 듯한 자세와 차분한 표정이 돋보이는 반가사유상입니다.",
    introBody: [
      "반가사유상은 깊은 생각에 잠긴 듯한 자세와 차분한 표정이 돋보이는 불상입니다. 정교한 조각선과 은은한 사암 느낌의 표면 질감이 어우러져, 바라보는 것만으로도 공간에 고요한 분위기를 더해줍니다.",
    ],
    image: `${pensiveBodhisattvaImageBase}/image1.jpg`,
    imageAlt: "공간에 고요한 사유의 분위기를 더하는 반가사유상 대표 이미지",
    sections: [
      {
        title: "정교한 조각감과 차분한 질감",
        images: [
          {
            src: `${pensiveBodhisattvaImageBase}/image2.jpg`,
            alt: "사암을 연상시키는 질감과 정교한 조각감의 반가사유상",
          },
        ],
        body: [
          "수지 재질로 제작되었으며, 사암을 연상시키는 거친 입자감과 자연스러운 명암이 표현되어 있습니다. 얼굴, 옷 주름, 장식 디테일까지 섬세하게 살아 있어 작은 공간에서도 안정감 있는 존재감을 느낄 수 있습니다.",
        ],
      },
      {
        title: "옆모습까지 살아있는 입체감",
        images: [
          {
            src: `${pensiveBodhisattvaImageBase}/image3.jpg`,
            alt: "측면에서 본 반가사유상의 유려한 자세",
          },
        ],
        body: [
          "정면뿐 아니라 측면에서 보아도 반가사유상의 유려한 자세가 자연스럽게 이어집니다. 한쪽 다리를 올리고 사유하는 듯한 조형은 차분한 분위기를 만들며, 선반이나 책상 위에 두었을 때 인테리어 포인트가 됩니다.",
        ],
      },
      {
        title: "뒷모습까지 자연스러운 조형",
        images: [
          {
            src: `${pensiveBodhisattvaImageBase}/image4.jpg`,
            alt: "후면과 옆선의 조각 흐름이 이어지는 반가사유상",
          },
        ],
        body: [
          "후면과 옆선에도 조각의 흐름이 이어져 어느 방향에서 보아도 어색하지 않습니다. 단순한 장식품보다 조금 더 깊이 있는 분위기의 불상 소품을 찾는 분께 잘 어울립니다.",
        ],
      },
      {
        title: "얼굴과 손의 세밀한 디테일",
        images: [
          {
            src: `${pensiveBodhisattvaImageBase}/image5.jpg`,
            alt: "얼굴 광배와 손 표현이 섬세한 반가사유상",
          },
        ],
        body: [
          "얼굴 주변의 광배와 손의 표현, 잔잔한 표정은 이 제품의 분위기를 완성하는 핵심 요소입니다. 가까이에서 보았을 때도 조각의 세부 표현이 잘 드러나며, 명상 공간이나 개인 책상 위에 두기 좋습니다.",
        ],
      },
      {
        title: "하단 장식과 받침 질감",
        images: [
          {
            src: `${pensiveBodhisattvaImageBase}/image6.jpg`,
            alt: "하단 장식과 받침 질감이 표현된 반가사유상",
          },
        ],
        body: [
          "하단 장식과 받침 부분에도 사암 느낌의 질감이 표현되어 있습니다. 과하게 화려하지 않고, 은은하게 공간과 어우러지는 색감이 특징입니다.",
        ],
      },
      {
        title: "가정 공간에 두기 좋은 크기",
        images: [
          {
            src: `${pensiveBodhisattvaImageBase}/image7.jpg`,
            alt: "가정 공간에 두기 좋은 크기의 반가사유상",
          },
        ],
        body: [
          "높이 약 19.5cm, 너비 약 10.5cm의 크기로 책상, 선반, 협탁, 명상 공간에 놓기 좋습니다. 너무 작아 보이지 않으면서도 가정 공간에 부담 없이 둘 수 있는 사이즈입니다.",
        ],
      },
      {
        title: "공간의 중심이 되는 무게감",
        images: [
          {
            src: `${pensiveBodhisattvaImageBase}/image8.jpg`,
            alt: "안정감 있게 놓을 수 있는 반가사유상",
          },
        ],
        body: [
          "무게는 약 332g 내외로, 가볍게 이동할 수 있으면서도 놓았을 때 안정감이 있습니다. 공간을 차분하게 정리하고 싶을 때 중심 소품으로 활용하기 좋습니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 반가사유상",
          "재질: 수지재질",
          "구성: 반가사유상 1EA",
          "사이즈: 높이 약 19.5cm / 너비 약 10.5cm",
          "무게: 약 332g ±20g",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "home-buddha-statues/home-buddha-statue": {
    name: "가정용불상",
    subtitle: "화려한 모자이크 무늬가 돋보이는 중형 불상",
    summary:
      "전통적인 불상의 고요함에 현대적인 모자이크 무늬를 더한 인테리어 불상입니다.",
    introBody: [
      "가정용불상은 전통적인 불상의 고요함에 현대적인 모자이크 무늬를 더한 인테리어 불상입니다. 높이 약 20cm의 중형 사이즈로 책상, 선반, 거실장, 명상 공간에 놓기 좋고, 화려한 색감이 공간에 분명한 포인트를 만들어줍니다.",
    ],
    image: `${homeBuddhaStatueImageBase}/image1.jpg`,
    imageAlt: "화려한 모자이크 무늬가 돋보이는 가정용불상 대표 이미지",
    sections: [
      {
        title: "화려한 모자이크 무늬",
        images: [
          {
            src: `${homeBuddhaStatueImageBase}/image2.jpg`,
            alt: "모자이크 무늬와 알록달록한 색감의 가정용불상",
          },
        ],
        body: [
          "표면의 모자이크 무늬와 알록달록한 색감이 일반적인 불상과는 다른 분위기를 전합니다. 클래식한 부처님 형상에 빈티지한 장식성이 더해져, 집 안에서도 자연스럽게 시선을 끄는 소품으로 활용하기 좋습니다.",
        ],
      },
      {
        title: "섬세한 얼굴과 차분한 자세",
        images: [
          {
            src: `${homeBuddhaStatueImageBase}/image3.jpg`,
            alt: "섬세한 얼굴과 차분한 자세의 가정용불상",
          },
        ],
        body: [
          "지그시 눈을 감은 듯한 표정과 고요한 자세가 제품의 분위기를 완성합니다. 가까이에서 보았을 때도 얼굴선과 옷 주름, 표면 장식이 살아 있어 장식용 불상으로서의 완성도가 느껴집니다.",
        ],
      },
      {
        title: "어느 방향에서도 자연스러운 조형감",
        images: [
          {
            src: `${homeBuddhaStatueImageBase}/image4.jpg`,
            alt: "정면 옆모습 뒷모습이 자연스러운 가정용불상",
          },
        ],
        body: [
          "정면뿐 아니라 옆모습과 뒷모습까지 입체적으로 표현되어 있습니다. 책상 위나 선반 위에 두었을 때 어느 방향에서 보아도 어색하지 않고, 공간에 차분하면서도 개성 있는 분위기를 더해줍니다.",
        ],
      },
      {
        title: "중형 사이즈의 안정감",
        images: [
          {
            src: `${homeBuddhaStatueImageBase}/image5.jpg`,
            alt: "중형 사이즈로 안정감 있게 놓이는 가정용불상",
          },
        ],
        body: [
          "높이 약 20cm, 너비 약 15cm의 중형 사이즈로 작은 미니 불상보다 존재감이 분명합니다. 너무 과하게 크지 않아 가정 공간에 부담 없이 놓을 수 있고, 명상 공간이나 인테리어 선반의 중심 소품으로 활용하기 좋습니다.",
        ],
      },
      {
        title: "묵직하게 자리 잡는 무게감",
        images: [
          {
            src: `${homeBuddhaStatueImageBase}/image6.jpg`,
            alt: "묵직한 무게감으로 자리 잡는 가정용불상",
          },
        ],
        body: [
          "무게는 약 642g으로, 놓았을 때 안정감 있게 자리 잡습니다. 가벼운 장식품과 달리 묵직한 느낌이 있어 선반, 거실장, 협탁 위에서도 차분한 분위기를 만들어줍니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 가정용불상",
          "재질: 수지재질",
          "구성: 가정용불상 1EA",
          "사이즈: 높이 약 20cm / 너비 약 15cm",
          "무게: 약 642g",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "home-buddha-statues/medium-buddha-statue": {
    name: "중형불상",
    subtitle: "가정용 불단과 선반에 어울리는 석가모니 중형 불상",
    summary:
      "높이 약 24cm의 안정감 있는 크기로 집 안 공간에 부담스럽지 않게 어울리는 가정용 불상입니다.",
    introBody: [
      "중형불상은 석가모니 부처님의 고요한 형상을 빈티지한 수지 재질로 표현한 가정용 불상입니다. 높이 약 24cm의 안정감 있는 크기로, 작은 미니불상보다 존재감이 분명하면서도 집 안 공간에 부담스럽지 않게 어울립니다.",
    ],
    image: `${mediumBuddhaStatueImageBase}/image1.jpg`,
    imageAlt: "가정용 불단과 선반에 어울리는 석가모니 중형불상 대표 이미지",
    sections: [
      {
        title: "수지 재질의 빈티지한 마감",
        images: [
          {
            src: `${mediumBuddhaStatueImageBase}/image2.jpg`,
            alt: "빈티지한 마감이 느껴지는 중형불상",
          },
        ],
        body: [
          "세월의 흔적이 느껴지는 듯한 거친 마감이 특징입니다. 표면의 질감과 은은한 색감이 조화를 이루어, 새것처럼 반짝이는 느낌보다 차분하고 깊이 있는 분위기를 전합니다.",
        ],
      },
      {
        title: "석가모니불의 차분한 조형미",
        images: [
          {
            src: `${mediumBuddhaStatueImageBase}/image3.jpg`,
            alt: "석가모니불의 얼굴과 법의 흐름이 표현된 중형불상",
          },
        ],
        body: [
          "부처님의 얼굴, 법의의 흐름, 좌상의 자세가 단정하게 표현되어 있습니다. 가까이에서 보면 세부 조각이 살아 있어 불교 인테리어 소품으로도 충분한 완성도를 느낄 수 있습니다.",
        ],
      },
      {
        title: "중형 사이즈의 안정감",
        images: [
          {
            src: `${mediumBuddhaStatueImageBase}/image4.jpg`,
            alt: "높이 약 24cm의 중형불상 크기감",
          },
        ],
        body: [
          "높이 약 24cm, 너비 약 16cm의 중형 크기로 책상, 선반, 거실 장식장, 가정용 불단에 두기 좋습니다. 작은 소품보다 시선이 잘 머물고, 공간의 중심을 차분하게 잡아주는 역할을 합니다.",
        ],
      },
      {
        title: "공간에 자연스럽게 스며드는 불상",
        images: [
          {
            src: `${mediumBuddhaStatueImageBase}/image5.jpg`,
            alt: "가정 공간에 자연스럽게 어울리는 중형불상",
          },
        ],
        body: [
          "가정에서 조용히 명상하는 공간을 만들고 싶을 때, 또는 불교적인 분위기의 인테리어 포인트가 필요할 때 잘 어울립니다. 과하게 화려하지 않아 주변 소품과도 자연스럽게 조화됩니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 중형불상",
          "재질: 수지재질",
          "구성: 중형불상 1EA",
          "사이즈: 높이 약 24cm / 너비 약 16cm",
          "무게: 약 560g ±20g",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "home-buddha-statues/interior-buddha-statue": {
    name: "인테리어불상",
    subtitle: "빈티지한 질감과 섬세한 형상이 어우러진 중형 불상",
    summary:
      "섬세한 형상과 거칠게 표현된 표면 질감이 어우러진 빈티지 스타일의 부처님 불상입니다.",
    introBody: [
      "인테리어불상은 수지 재질로 제작된 빈티지 스타일의 부처님 불상입니다. 섬세한 형상과 거칠게 표현된 표면 질감이 어우러져, 종교적 의미와 인테리어 소품의 분위기를 함께 느낄 수 있습니다.",
    ],
    image: `${interiorBuddhaStatueImageBase}/image1.jpg`,
    imageAlt: "빈티지한 질감과 섬세한 형상이 어우러진 인테리어불상 대표 이미지",
    sections: [
      {
        title: "공간에 차분하게 스며드는 불상",
        images: [
          {
            src: `${interiorBuddhaStatueImageBase}/image2.jpg`,
            alt: "공간에 차분하게 스며드는 중형 인테리어불상",
          },
        ],
        body: [
          "높이 약 28cm의 중형 사이즈로 책상, 선반, 거실장, 명상 공간 등에 두기 좋습니다. 너무 작아 존재감이 약하지 않고, 너무 커서 부담스럽지도 않아 가정용 불상이나 불교 인테리어 소품으로 자연스럽게 어울립니다.",
        ],
      },
      {
        title: "빈티지한 마감과 고요한 분위기",
        images: [
          {
            src: `${interiorBuddhaStatueImageBase}/image3.jpg`,
            alt: "빈티지한 표면 마감의 인테리어불상",
          },
        ],
        body: [
          "표면에는 오래된 조각상처럼 자연스러운 빈티지 질감이 표현되어 있습니다. 은은한 색감과 부드러운 선이 함께 어우러져 공간을 차분하게 만들고, 바라보는 것만으로도 마음을 가라앉히는 분위기를 전합니다.",
        ],
      },
      {
        title: "섬세하게 표현된 얼굴과 장식",
        images: [
          {
            src: `${interiorBuddhaStatueImageBase}/image4.jpg`,
            alt: "얼굴과 장식이 섬세하게 표현된 인테리어불상",
          },
        ],
        body: [
          "얼굴의 표정, 머리 장식, 손을 모은 자세가 정교하게 표현되어 있습니다. 가까이 보았을 때 디테일이 살아 있어 단순한 장식품보다 깊이 있는 인상을 주며, 불교적 분위기를 자연스럽게 더해줍니다.",
        ],
      },
      {
        title: "질감이 살아 있는 수지 재질",
        images: [
          {
            src: `${interiorBuddhaStatueImageBase}/image5.jpg`,
            alt: "수지 재질의 질감이 살아 있는 인테리어불상",
          },
        ],
        body: [
          "수지 재질 특유의 가벼운 관리성과 조형 표현력이 돋보이는 제품입니다. 표면의 거친 질감과 색감이 빈티지한 느낌을 살려주며, 일반적인 매끈한 장식품과 다른 분위기를 만들어줍니다.",
        ],
      },
      {
        title: "중형 불상의 사이즈",
        images: [
          {
            src: `${interiorBuddhaStatueImageBase}/image6.jpg`,
            alt: "높이 약 28cm 너비 약 11cm의 인테리어불상",
          },
        ],
        body: [
          "높이 약 28.0cm, 너비 약 11.0cm의 중형 불상입니다. 집 안에서 눈에 잘 띄는 위치에 두기 좋고, 단독으로 배치해도 안정적인 존재감을 보여줍니다.",
        ],
      },
      {
        title: "선반과 책상 위에 두기 좋은 무게감",
        images: [
          {
            src: `${interiorBuddhaStatueImageBase}/image7.jpg`,
            alt: "선반과 책상 위에 안정감 있게 놓이는 인테리어불상",
          },
        ],
        body: [
          "무게는 약 572g으로, 가정용 장식 소품으로 두었을 때 안정감 있게 자리합니다. 선반이나 책상 위에 올려두기 좋은 크기와 무게감을 갖추고 있습니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 인테리어불상",
          "재질: 수지재질",
          "구성: 빈티지 부처님 불상 1EA",
          "사이즈: 높이 약 28.0cm / 너비 약 11.0cm",
          "무게: 약 572g",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "home-buddha-statues/buddha-object": {
    name: "불상오브제",
    subtitle: "블랙 바디와 황금빛 장식이 어우러진 인테리어 석가모니불",
    summary:
      "차분한 블랙 바디와 황금빛 장식, 청록 포인트가 어우러진 인테리어 석가모니불입니다.",
    introBody: [
      "불상오브제는 차분한 블랙 바디와 황금빛 장식, 청록 포인트가 어우러진 인테리어 석가모니불입니다.",
      "불상 특유의 고요한 분위기는 살리면서도 오브제처럼 두기 좋은 디자인입니다. 책상·선반·명상 공간에 자연스럽게 어울립니다.",
    ],
    image: `${buddhaObjectImageBase}/image1.jpg`,
    imageAlt: "블랙 바디와 황금빛 장식이 어우러진 불상오브제 대표 이미지",
    sections: [
      {
        title: "공간에 차분함을 더하는 디자인",
        images: [
          {
            src: `${buddhaObjectImageBase}/image2.jpg`,
            alt: "공간에 차분함을 더하는 블랙 불상오브제",
          },
        ],
        body: [
          "불상오브제는 단순한 장식품처럼 보이면서도, 가까이서 보면 섬세한 문양과 합장한 자세가 주는 고요함이 느껴지는 제품입니다.",
          "어두운 색감의 바디가 공간을 차분하게 잡아주고, 금빛과 청록 장식이 은은한 포인트가 되어줍니다.",
        ],
      },
      {
        title: "합장 수인이 전하는 평온한 인상",
        images: [
          {
            src: `${buddhaObjectImageBase}/image3.jpg`,
            alt: "합장 수인이 표현된 불상오브제",
          },
        ],
        body: [
          "두 손을 모은 합장 수인은 바라보는 사람에게 자연스럽게 마음을 가라앉히는 느낌을 줍니다.",
          "눈에 띄게 화려하기보다 묵직하고 단정한 분위기를 지니고 있어, 불단뿐 아니라 거실 선반이나 개인 명상 공간에도 부담 없이 배치할 수 있습니다.",
        ],
      },
      {
        title: "블랙 바디 위에 더해진 섬세한 포인트",
        images: [
          {
            src: `${buddhaObjectImageBase}/image4.jpg`,
            alt: "황금빛 나뭇잎 문양과 청록 장식이 더해진 불상오브제",
          },
        ],
        body: [
          "검은 바탕 위에 더해진 황금빛 나뭇잎 문양과 청록색 장식은 제품의 분위기를 더욱 깊게 만들어줍니다.",
          "가까이서 보았을 때 디테일이 살아 있어, 작은 공간에서도 존재감 있는 불교 인테리어 소품으로 활용하기 좋습니다.",
        ],
      },
      {
        title: "책상·선반·명상 공간에 어울리는 불상",
        images: [
          {
            src: `${buddhaObjectImageBase}/image5.jpg`,
            alt: "책상 선반 명상 공간에 어울리는 불상오브제",
          },
        ],
        body: [
          "높이 약 20cm, 너비 약 14cm의 크기로 가정에서 두기 좋은 사이즈입니다.",
          "너무 작아 존재감이 약하지 않고, 너무 커서 부담스럽지도 않아 일상 공간에 자연스럽게 놓을 수 있습니다.",
          "수지 재질로 제작되어 형태감이 안정적이고, 오랫동안 곁에 두기 좋은 불상입니다.",
        ],
      },
      {
        title: "뒷모습까지 이어지는 장식감",
        images: [
          {
            src: `${buddhaObjectImageBase}/image6.jpg`,
            alt: "뒷모습까지 장식감이 이어지는 불상오브제",
          },
        ],
        body: [
          "앞모습뿐 아니라 측면과 뒷모습에서도 장식의 흐름이 이어져 어느 방향에서 보아도 완성도 있는 인상을 줍니다.",
          "공간 한쪽에 세워두었을 때도 자연스럽고, 여러 불교 소품과 함께 배치하면 더욱 조화로운 분위기를 만들 수 있습니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 불상오브제",
          "재질: 수지재질",
          "구성: 인테리어 석가모니불 1EA",
          "사이즈: 높이 약 20.0cm, 너비 약 14.0cm",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
};

export function hasCurationProductDetail(curationSlug: string, productSlug: string) {
  const detailKey = getCurationProductDetailKey(curationSlug, productSlug);

  return publishedCurationProductDetailKeys.has(detailKey) && detailKey in curationProductDetailOverrides;
}

const allCurationProductDetails: ProductCurationDetail[] = productCurations.flatMap(
  (curation) =>
    curation.items.flatMap((item) => {
      const override = curationProductDetailOverrides[getCurationProductDetailKey(curation.slug, item.slug)];

      if (!override) return [];

      const detail: ProductCurationDetail = {
        curationSlug: curation.slug,
        curationName: curation.name,
        productSlug: item.slug,
        name: item.name,
        summary: `${curation.name} 큐레이션에서 소개하는 ${item.name}입니다.`,
        introBody: [],
        image: item.image,
        imageAlt: item.imageAlt,
        storeUrl: item.href,
        sections: [
          {
            title: "상세 설명 준비 중",
            body: [
              "Word 원본을 반영하면 이 영역에 상품의 특징, 사용 장면, 구매 전 확인할 내용을 블로그 글처럼 정리합니다.",
              "현재는 상세 페이지 이동과 구매 버튼 흐름을 확인하기 위한 테스트용 기본 문구입니다.",
            ],
          },
        ],
      };

      const mergedDetail: ProductCurationDetail = { ...detail, ...override };

      return [normalizeCurationProductDetail(mergedDetail)];
    }),
);

export const curationProductDetails = allCurationProductDetails.filter((detail) =>
  publishedCurationProductDetailKeys.has(
    getCurationProductDetailKey(detail.curationSlug, detail.productSlug),
  ),
);
