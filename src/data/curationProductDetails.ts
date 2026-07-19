import type { ProductCurationDetail } from "../types";
import {
  boldPrayerBeadsDetailOverrides,
  boldPrayerBeadsPublishedDetailKeys,
} from "./boldPrayerBeadsDetails";
import {
  normalizeCurationProductDetail,
} from "./curationProductDetailHelpers";
import {
  dailyWristPrayerBeadsDetailOverrides,
  dailyWristPrayerBeadsPublishedDetailKeys,
} from "./dailyWristPrayerBeadsDetails";
import {
  compassionSymbolsDetailOverrides,
  compassionSymbolsPublishedDetailKeys,
} from "./compassionSymbolsDetails";
import {
  deskBuddhaDetailOverrides,
  deskBuddhaPublishedDetailKeys,
} from "./deskBuddhaDetails";
import {
  emotionalBuddhistGoodsDetailOverrides,
  emotionalBuddhistGoodsPublishedDetailKeys,
} from "./emotionalBuddhistGoodsDetails";
import {
  fingerPrayerBeadsDetailOverrides,
  fingerPrayerBeadsPublishedDetailKeys,
} from "./fingerPrayerBeadsDetails";
import {
  goodEnergyFengShuiPropsDetailOverrides,
  goodEnergyFengShuiPropsPublishedDetailKeys,
} from "./goodEnergyFengShuiPropsDetails";
import {
  homeBuddhaStatueDetailOverrides,
  homeBuddhaStatuePublishedDetailKeys,
} from "./homeBuddhaStatueDetails";
import {
  ksitigarbhaDetailOverrides,
  ksitigarbhaPublishedDetailKeys,
} from "./ksitigarbhaDetails";
import {
  laughingBuddhaSymbolDetailOverrides,
  laughingBuddhaSymbolPublishedDetailKeys,
} from "./laughingBuddhaSymbolDetails";
import {
  mindAwakeningMeditationToolsDetailOverrides,
  mindAwakeningMeditationToolsPublishedDetailKeys,
} from "./mindAwakeningMeditationToolsDetails";
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
  ...emotionalBuddhistGoodsPublishedDetailKeys,
  ...dailyWristPrayerBeadsPublishedDetailKeys,
  ...fingerPrayerBeadsPublishedDetailKeys,
  ...boldPrayerBeadsPublishedDetailKeys,
  ...deskBuddhaPublishedDetailKeys,
  ...homeBuddhaStatuePublishedDetailKeys,
  ...practiceSpaceBuddhaPublishedDetailKeys,
  ...compassionSymbolsPublishedDetailKeys,
  ...ksitigarbhaPublishedDetailKeys,
  ...laughingBuddhaSymbolPublishedDetailKeys,
  ...mindAwakeningMeditationToolsPublishedDetailKeys,
  ...goodEnergyFengShuiPropsPublishedDetailKeys,
]);

const curationProductDetailOverrides: Record<string, Partial<ProductCurationDetail>> = {
  ...emotionalBuddhistGoodsDetailOverrides,
  ...dailyWristPrayerBeadsDetailOverrides,
  ...practiceSpaceBuddhaDetailOverrides,
  ...compassionSymbolsDetailOverrides,
  ...ksitigarbhaDetailOverrides,
  ...laughingBuddhaSymbolDetailOverrides,
  ...mindAwakeningMeditationToolsDetailOverrides,
  ...goodEnergyFengShuiPropsDetailOverrides,
  ...fingerPrayerBeadsDetailOverrides,
  ...boldPrayerBeadsDetailOverrides,
  ...deskBuddhaDetailOverrides,
  ...homeBuddhaStatueDetailOverrides,
};

export function hasCurationProductDetail(curationSlug: string, productSlug: string) {
  const detailKey = getCurationProductDetailKey(curationSlug, productSlug);

  return (
    publishedCurationProductDetailKeys.has(detailKey) &&
    detailKey in curationProductDetailOverrides
  );
}

const allCurationProductDetails: ProductCurationDetail[] = productCurations.flatMap(
  (curation) =>
    curation.items.flatMap((item) => {
      const override =
        curationProductDetailOverrides[getCurationProductDetailKey(curation.slug, item.slug)];

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
