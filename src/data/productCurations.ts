import type { ProductCuration } from "../types";

const curationNames = [
  ["emotional-buddhist-goods", "요즘 찾는 감성 불교굿즈"],
  ["daily-wrist-prayer-beads", "매일 차기 좋은 손목염주"],
  ["finger-prayer-beads", "가볍게 돌리는 손가락염주"],
  ["bold-prayer-beads", "묵직한 멋의 굵은염주"],
  ["daily-buddhist-keyrings", "매일 함께하는 불교키링"],
  ["desk-buddha", "책상 위 작은 부처님"],
  ["home-buddha-statues", "우리 집 분위기를 바꾸는 불상"],
  ["practice-space-buddha", "신행 공간의 중심, 부처님불상"],
  ["compassion-symbols", "마음을 어루만지는 자비의 상징"],
  ["prayer-gifts", "소중한 이를 위한 기도용품"],
  ["luck-and-smile-props", "복과 웃음을 함께 담은 소품"],
  ["cozy-buddhist-interior", "귀엽고 편안한 불교 인테리어"],
  ["feng-shui-props", "좋은 기운을 들이는 풍수소품"],
] as const;

type CurationSlug = (typeof curationNames)[number][0];

const curationProductItems: Partial<Record<CurationSlug, ProductCuration["items"]>> = {
  "emotional-buddhist-goods": [
    {
      slug: "buddhist-frog",
      name: "불교 개구리",
      image: "/images/curations/emotional-buddhist-goods/buddhist-frog.png",
      imageAlt: "불교 개구리 불교굿즈 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/69bdf8fcfc2fa7235761439e",
    },
    {
      slug: "buddhist-expo-goods",
      name: "불교 박람회굿즈",
      image: "/images/curations/emotional-buddhist-goods/buddhist-expo-goods.png",
      imageAlt: "불교 박람회굿즈 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/68568599501108490cdcbe0f",
    },
    {
      slug: "whale-moktak",
      name: "고래 목탁",
      image: "/images/curations/emotional-buddhist-goods/whale-moktak.png",
      imageAlt: "고래 목탁 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6853f935147acf255e8dff63",
    },
    {
      slug: "praying-dog",
      name: "합장 강아지",
      image: "/images/curations/emotional-buddhist-goods/praying-dog.png",
      imageAlt: "합장 강아지 불교굿즈 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/69f62ce1b436fa3ee38f1348",
    },
    {
      slug: "praying-cat",
      name: "합장 고양이",
      image: "/images/curations/emotional-buddhist-goods/praying-cat.png",
      imageAlt: "합장 고양이 불교굿즈 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/69f6bf5329c7e176b1dad0bf",
    },
  ],
  "daily-wrist-prayer-beads": [
    {
      slug: "buddhist-prayer-beads",
      name: "불교 염주",
      image: "/images/curations/daily-wrist-prayer-beads/buddhist-prayer-beads.png",
      imageAlt: "불교 염주 손목염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a77327754881f84812041",
    },
    {
      slug: "buddhist-danju",
      name: "불교 단주",
      image: "/images/curations/daily-wrist-prayer-beads/buddhist-danju.png",
      imageAlt: "불교 단주 손목염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a7768caf98b0660e68812",
    },
    {
      slug: "prayer-bead-bracelet",
      name: "염주 팔찌",
      image: "/images/curations/daily-wrist-prayer-beads/prayer-bead-bracelet.png",
      imageAlt: "염주 팔찌 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a35268a4e58f1369596f3aa",
    },
    {
      slug: "wooden-prayer-beads",
      name: "나무 염주",
      image: "/images/curations/daily-wrist-prayer-beads/wooden-prayer-beads.png",
      imageAlt: "나무 염주 손목염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a782cb7315c7538218ac1",
    },
    {
      slug: "buddhist-bracelet",
      name: "불교 팔찌",
      image: "/images/curations/daily-wrist-prayer-beads/buddhist-bracelet.png",
      imageAlt: "불교 팔찌 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a785b456af727e1f19d79",
    },
  ],
  "finger-prayer-beads": [
    {
      slug: "fox-prayer-beads",
      name: "여우 염주",
      image: "/images/curations/finger-prayer-beads/fox-prayer-beads.png",
      imageAlt: "여우 염주 손가락염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6853fa26f53be9542b853b8f",
    },
    {
      slug: "wooden-finger-prayer-beads",
      name: "나무 염주",
      image: "/images/curations/finger-prayer-beads/wooden-finger-prayer-beads.png",
      imageAlt: "나무 염주 손가락염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/69ba7f8601c5cd3461ab32d7",
    },
    {
      slug: "cat-prayer-beads",
      name: "고양이 염주",
      image: "/images/curations/finger-prayer-beads/cat-prayer-beads.png",
      imageAlt: "고양이 염주 손가락염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6853fa91f9e84c4b21fc07ec",
    },
    {
      slug: "cat-paw",
      name: "고양이 발바닥",
      image: "/images/curations/finger-prayer-beads/cat-paw.png",
      imageAlt: "고양이 발바닥 손가락염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a79e7caf98b0660e68813",
    },
    {
      slug: "cat-charm",
      name: "고양이 장식",
      image: "/images/curations/finger-prayer-beads/cat-charm.png",
      imageAlt: "고양이 장식 손가락염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a7a22caf98b0660e68814",
    },
  ],
  "bold-prayer-beads": [
    {
      slug: "zodiac-prayer-beads",
      name: "12지신 염주",
      image: "/images/curations/bold-prayer-beads/zodiac-prayer-beads.png",
      imageAlt: "12지신 염주 굵은염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/686283f814cd9006fa2e5b1f",
    },
    {
      slug: "diamond-sutra-prayer-beads",
      name: "금강경 염주",
      image: "/images/curations/bold-prayer-beads/diamond-sutra-prayer-beads.png",
      imageAlt: "금강경 염주 굵은염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a7bb0bb1d367cca332734",
    },
    {
      slug: "car-prayer-beads",
      name: "자동차 염주",
      image: "/images/curations/bold-prayer-beads/car-prayer-beads.png",
      imageAlt: "자동차 염주 굵은염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a7bdbb7315c7538218ac3",
    },
    {
      slug: "chunky-prayer-beads",
      name: "굵은 염주",
      image: "/images/curations/bold-prayer-beads/chunky-prayer-beads.png",
      imageAlt: "굵은 염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a7bfbb7315c7538218ac4",
    },
    {
      slug: "large-prayer-beads",
      name: "큰 염주",
      image: "/images/curations/bold-prayer-beads/large-prayer-beads.png",
      imageAlt: "큰 염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a7ce832efe67a65f5d2fd",
    },
  ],
  "desk-buddha": [
    {
      slug: "vairocana-buddha",
      name: "비로자나불",
      image: "/images/curations/desk-buddha/vairocana-buddha.png",
      imageAlt: "비로자나불 책상 위 작은 부처님 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/688f00c0815d200271efe0a4",
    },
    {
      slug: "baby-buddha",
      name: "아기 부처",
      image: "/images/curations/desk-buddha/baby-buddha.png",
      imageAlt: "아기 부처 작은 불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/68b435334d569c2314bf3cd7",
    },
    {
      slug: "mini-buddha-statue",
      name: "미니 불상",
      image: "/images/curations/desk-buddha/mini-buddha-statue.png",
      imageAlt: "미니 불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a7e708f2a366044c3922e",
    },
    {
      slug: "small-buddha-statue",
      name: "소형 불상",
      image: "/images/curations/desk-buddha/small-buddha-statue.png",
      imageAlt: "소형 불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/688efe7ff6028f0734cd8324",
    },
    {
      slug: "buddha-goods",
      name: "불상 굿즈",
      image: "/images/curations/desk-buddha/buddha-goods.png",
      imageAlt: "불상 굿즈 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a7f4bcaf98b0660e68816",
    },
  ],
  "home-buddha-statues": [
    {
      slug: "pensive-bodhisattva",
      name: "반가사유상",
      image: "/images/curations/home-buddha-statues/pensive-bodhisattva.png",
      imageAlt: "반가사유상 우리 집 분위기를 바꾸는 불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/69c6702ef015fb66fad32e80",
    },
    {
      slug: "home-buddha-statue",
      name: "가정용 불상",
      image: "/images/curations/home-buddha-statues/home-buddha-statue.png",
      imageAlt: "가정용 불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/68628393f2b4da4b4aa74ff6",
    },
    {
      slug: "medium-buddha-statue",
      name: "중형 불상",
      image: "/images/curations/home-buddha-statues/medium-buddha-statue.png",
      imageAlt: "중형 불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/68c5de227d07384e3ec22c86",
    },
    {
      slug: "interior-buddha-statue",
      name: "인테리어 불상",
      image: "/images/curations/home-buddha-statues/interior-buddha-statue.png",
      imageAlt: "인테리어 불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/68b43638d657ac14f4a3a5b3",
    },
    {
      slug: "buddha-object",
      name: "불상 오브제",
      image: "/images/curations/home-buddha-statues/buddha-object.png",
      imageAlt: "불상 오브제 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/688f0191f6028f0734cd8327",
    },
  ],
};

export const productCurations: ProductCuration[] = curationNames.flatMap(([slug, name]) => {
  const items = curationProductItems[slug];

  return items ? [{ slug, name, items }] : [];
});
