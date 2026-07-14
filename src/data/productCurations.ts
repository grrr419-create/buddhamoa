import type { ProductCuration } from "../types";

const curationNames = [
  [
    "emotional-buddhist-goods",
    "요즘 찾는 감성 불교굿즈",
    "박람회에서 눈여겨본 소품을 여기서 만나보세요.",
  ],
  [
    "daily-wrist-prayer-beads",
    "매일 차기 좋은 손목염주",
    "가볍게 차기 좋아 매일 부담 없이 함께해보세요.",
  ],
  [
    "finger-prayer-beads",
    "가볍게 돌리는 손가락염주",
    "짧은 기도 시간, 손끝으로 편히 돌려보세요.",
  ],
  [
    "bold-prayer-beads",
    "묵직한 멋의 굵은염주",
    "알 크기와 상징이 돋보이는 디자인을 골라보세요.",
  ],
  [
    "daily-buddhist-keyrings",
    "매일 함께하는 불교키링",
    "가방과 열쇠에 걸어 가까이 두는 작은 불교 상징 소품을 소개합니다.",
  ],
  [
    "desk-buddha",
    "책상 위 작은 부처님",
    "책상·선반 위에 편안한 분위기를 더해보세요.",
  ],
  [
    "home-buddha-statues",
    "우리 집 분위기를 바꾸는 불상",
    "가정 불단·명상 공간에 맞는 분위기를 골라보세요.",
  ],
  [
    "practice-space-buddha",
    "신행 공간의 중심, 부처님불상",
    "기도와 명상의 중심이 되는 불상류를 신행 공간의 용도에 맞춰 살펴봅니다.",
  ],
  [
    "compassion-symbols",
    "마음을 어루만지는 자비의 상징",
    "관음, 지장, 연꽃처럼 자비와 평온의 의미가 담긴 상징 소품을 안내합니다.",
  ],
  [
    "prayer-gifts",
    "소중한 이를 위한 기도용품",
    "부모님, 지인, 초심자에게 선물하기 좋은 기도용품과 수행 소품을 모았습니다.",
  ],
  [
    "luck-and-smile-props",
    "복과 웃음을 함께 담은 소품",
    "공간에 밝은 기운을 더하는 장식 소품과 선물용 불교굿즈를 소개합니다.",
  ],
  [
    "cozy-buddhist-interior",
    "귀엽고 편안한 불교 인테리어",
    "부담스럽지 않은 크기와 표정으로 일상 공간에 잘 스며드는 불교 인테리어 소품입니다.",
  ],
  [
    "feng-shui-props",
    "좋은 기운을 들이는 풍수소품",
    "상징성과 배치감을 함께 고려하는 풍수 소품을 공간별로 살펴볼 수 있습니다.",
  ],
] as const;

type CurationSlug = (typeof curationNames)[number][0];

const curationProductItems: Partial<Record<CurationSlug, ProductCuration["items"]>> = {
  "emotional-buddhist-goods": [
    {
      slug: "buddhist-frog",
      name: "불교개구리",
      image: "/images/curations/emotional-buddhist-goods/buddhist-frog.png",
      imageAlt: "불교개구리 불교굿즈 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/69bdf8fcfc2fa7235761439e",
    },
    {
      slug: "buddhist-expo-goods",
      name: "불교박람회굿즈",
      image: "/images/curations/emotional-buddhist-goods/buddhist-expo-goods.png",
      imageAlt: "불교박람회굿즈 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/68568599501108490cdcbe0f",
    },
    {
      slug: "whale-moktak",
      name: "고래목탁",
      image: "/images/curations/emotional-buddhist-goods/whale-moktak.png",
      imageAlt: "고래목탁 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6853f935147acf255e8dff63",
    },
    {
      slug: "praying-dog",
      name: "합장강아지",
      image: "/images/curations/emotional-buddhist-goods/praying-dog.png",
      imageAlt: "합장강아지 불교굿즈 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/69f62ce1b436fa3ee38f1348",
    },
    {
      slug: "praying-cat",
      name: "합장고양이",
      image: "/images/curations/emotional-buddhist-goods/praying-cat.png",
      imageAlt: "합장고양이 불교굿즈 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/69f6bf5329c7e176b1dad0bf",
    },
  ],
  "daily-wrist-prayer-beads": [
    {
      slug: "buddhist-prayer-beads",
      name: "불교염주",
      image: "/images/curations/daily-wrist-prayer-beads/buddhist-prayer-beads.png",
      imageAlt: "불교염주 손목염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a77327754881f84812041",
    },
    {
      slug: "buddhist-danju",
      name: "불교단주",
      image: "/images/curations/daily-wrist-prayer-beads/buddhist-danju.png",
      imageAlt: "불교단주 손목염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a7768caf98b0660e68812",
    },
    {
      slug: "prayer-bead-bracelet",
      name: "염주팔찌",
      image: "/images/curations/daily-wrist-prayer-beads/prayer-bead-bracelet.png",
      imageAlt: "염주팔찌 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a35268a4e58f1369596f3aa",
    },
    {
      slug: "wooden-prayer-beads",
      name: "나무염주",
      image: "/images/curations/daily-wrist-prayer-beads/wooden-prayer-beads.png",
      imageAlt: "나무염주 손목염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a782cb7315c7538218ac1",
    },
    {
      slug: "buddhist-bracelet",
      name: "불교팔찌",
      image: "/images/curations/daily-wrist-prayer-beads/buddhist-bracelet.png",
      imageAlt: "불교팔찌 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a785b456af727e1f19d79",
    },
  ],
  "finger-prayer-beads": [
    {
      slug: "fox-prayer-beads",
      name: "여우염주",
      image: "/images/curations/finger-prayer-beads/fox-prayer-beads.png",
      imageAlt: "여우염주 손가락염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6853fa26f53be9542b853b8f",
    },
    {
      slug: "wooden-finger-prayer-beads",
      name: "연꽃염주",
      image: "/images/curations/finger-prayer-beads/wooden-finger-prayer-beads.png",
      imageAlt: "연꽃염주 손가락염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/69ba7f8601c5cd3461ab32d7",
    },
    {
      slug: "cat-prayer-beads",
      name: "고양이염주",
      image: "/images/curations/finger-prayer-beads/cat-prayer-beads.png",
      imageAlt: "고양이염주 손가락염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6853fa91f9e84c4b21fc07ec",
    },
    {
      slug: "cat-paw",
      name: "고양이발바닥",
      image: "/images/curations/finger-prayer-beads/cat-paw.png",
      imageAlt: "고양이발바닥 손가락염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a79e7caf98b0660e68813",
    },
    {
      slug: "cat-charm",
      name: "고양이장식",
      image: "/images/curations/finger-prayer-beads/cat-charm.png",
      imageAlt: "고양이장식 손가락염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a7a22caf98b0660e68814",
    },
  ],
  "bold-prayer-beads": [
    {
      slug: "zodiac-prayer-beads",
      name: "12지신염주",
      image: "/images/curations/bold-prayer-beads/zodiac-prayer-beads.png",
      imageAlt: "12지신염주 굵은염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/686283f814cd9006fa2e5b1f",
    },
    {
      slug: "diamond-sutra-prayer-beads",
      name: "금강경염주",
      image: "/images/curations/bold-prayer-beads/diamond-sutra-prayer-beads.png",
      imageAlt: "금강경염주 굵은염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a7bb0bb1d367cca332734",
    },
    {
      slug: "car-prayer-beads",
      name: "자동차염주",
      image: "/images/curations/bold-prayer-beads/car-prayer-beads.png",
      imageAlt: "자동차염주 굵은염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a7bdbb7315c7538218ac3",
    },
    {
      slug: "chunky-prayer-beads",
      name: "굵은염주",
      image: "/images/curations/bold-prayer-beads/chunky-prayer-beads.png",
      imageAlt: "굵은염주 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a7bfbb7315c7538218ac4",
    },
    {
      slug: "large-prayer-beads",
      name: "큰염주",
      image: "/images/curations/bold-prayer-beads/large-prayer-beads.png",
      imageAlt: "큰염주 상품 이미지",
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
      name: "아기부처",
      image: "/images/curations/desk-buddha/baby-buddha.png",
      imageAlt: "아기부처 작은 불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/68b435334d569c2314bf3cd7",
    },
    {
      slug: "mini-buddha-statue",
      name: "미니불상",
      image: "/images/curations/desk-buddha/mini-buddha-statue.png",
      imageAlt: "미니불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a3a7e708f2a366044c3922e",
    },
    {
      slug: "small-buddha-statue",
      name: "소형불상",
      image: "/images/curations/desk-buddha/small-buddha-statue.png",
      imageAlt: "소형불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/688efe7ff6028f0734cd8324",
    },
    {
      slug: "buddha-goods",
      name: "불상굿즈",
      image: "/images/curations/desk-buddha/buddha-goods.png",
      imageAlt: "불상굿즈 상품 이미지",
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
      name: "가정용불상",
      image: "/images/curations/home-buddha-statues/home-buddha-statue.png",
      imageAlt: "가정용불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/68628393f2b4da4b4aa74ff6",
    },
    {
      slug: "medium-buddha-statue",
      name: "중형불상",
      image: "/images/curations/home-buddha-statues/medium-buddha-statue.png",
      imageAlt: "중형불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/68c5de227d07384e3ec22c86",
    },
    {
      slug: "interior-buddha-statue",
      name: "인테리어불상",
      image: "/images/curations/home-buddha-statues/interior-buddha-statue.png",
      imageAlt: "인테리어불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/68b43638d657ac14f4a3a5b3",
    },
    {
      slug: "buddha-object",
      name: "불상오브제",
      image: "/images/curations/home-buddha-statues/buddha-object.png",
      imageAlt: "불상오브제 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/688f0191f6028f0734cd8327",
    },
  ],
  "practice-space-buddha": [
    {
      slug: "buddha-statue",
      name: "부처상",
      image: "/images/curations/practice-space-buddha/buddha-statue.png",
      imageAlt: "부처상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/69dcd533a8076a338797cb47",
    },
    {
      slug: "medicine-buddha",
      name: "약사여래불",
      image: "/images/curations/practice-space-buddha/medicine-buddha.png",
      imageAlt: "약사여래불 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a48fc81a84c611cbff4cc59",
    },
    {
      slug: "buddha-statue-figure",
      name: "부처님불상",
      image: "/images/curations/practice-space-buddha/buddha-statue-figure.png",
      imageAlt: "부처님불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a48fd92f89fad3874ee6120",
    },
    {
      slug: "amitabha-buddha",
      name: "아미타불",
      image: "/images/curations/practice-space-buddha/amitabha-buddha.png",
      imageAlt: "아미타불 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/6a48fcb1bb3426556b4195d2",
    },
    {
      slug: "shakyamuni-buddha",
      name: "석가모니불상",
      image: "/images/curations/practice-space-buddha/shakyamuni-buddha.png",
      imageAlt: "석가모니불상 상품 이미지",
      href: "https://mkt.shopping.naver.com/link/69d9b2cba8076a338797c877",
    },
  ],
};

export const productCurations: ProductCuration[] = curationNames.flatMap(([slug, name, description]) => {
  const items = curationProductItems[slug];

  return items ? [{ slug, name, description, items }] : [];
});
