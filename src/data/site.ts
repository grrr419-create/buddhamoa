import type {
  CategoryLink,
  FAQItem,
  ProductCuration,
  ProductShort,
  TempleShort,
  TopNotice,
} from "../types";
import { withBase } from "../utils/paths";

export const siteOrigin =
  import.meta.env.PUBLIC_SITE_URL || "https://buddhamoa.com";
export const siteUrl = new URL(withBase("/"), siteOrigin).toString().replace(/\/$/, "");

export const siteConfig = {
  brandName: "붓다모아",
  siteName: "불교용품은 역시 붓다모아",
  brandAssetPath: "/images/brand/앱 아이콘.png",
  brandAssetAlt: "붓다모아 BI 로고",
  description:
    "붓다모아는 불상, 염주, 목탁, 싱잉볼, 불자수첩, 불교굿즈 등 신행과 일상에 필요한 불교용품을 정성껏 소개하는 온라인 불교용품 전문 브랜드입니다.",
  shortDescription:
    "불교 정진의 작은 등불, 불교용품은 역시 붓다모아",
  homeLead:
    "불상부터 명상도구, 선물용 불교용품까지 한눈에 정리한 온라인 편집 공간입니다.",
  storeUrl: "https://mkt.shopping.naver.com/link/68457bd08dd273404b731bfd",
  logoText: "BUDDHAMOA",
  contactEmail: "steadyorder@daum.net",
  contactPhone: "010-5077-9761",
  contactHours: "평일 10:00 - 17:00",
  shippingNote:
    "상품 소개 후 스마트스토어 상세 페이지에서 옵션, 재고, 배송정책을 확인할 수 있습니다.",
  keywords: [
    "붓다모아",
    "싱잉볼",
    "염주",
    "반가사유상",
    "부적",
    "반가사유상굿즈",
    "불교굿즈",
    "불교용품",
    "불상",
    "108염주",
    "목탁",
    "국립중앙박물관굿즈",
    "금강저",
    "나무염주",
    "액막이명태차량",
    "손가락염주",
    "염주팔찌",
    "불교염주팔찌",
    "미니불상",
    "삼재부적",
    "연등",
    "차량액막이명태",
    "오색실",
    "미니목탁",
    "자동차고사완벽세트",
    "새차고사",
    "불교박람회굿즈",
    "미니싱잉볼",
    "수월관음상",
    "단주",
  ],
};

export const sellerInfo = {
  sellerType: "국내 사업자",
  businessName: "스테디오더",
  businessNumber: "518-06-01860",
  representativeName: "김주영",
  businessEntityType: "개인사업자",
  businessCategory: "도매 및 소매업",
  businessSector: "전자상거래 소매업",
  onlineSalesReportNumber: "2020-인천계양-1398",
  postalCode: "21069",
  address:
    "인천광역시 계양구 오조산로45번길 12 유연프라자 7층 705호 (계산동, 유연프라자)",
};

export const topNotices: TopNotice[] = [
  {
    slug: "opening-discount",
    image: "/images/notices/1.png",
    imageAlt: "초도물량 50% 할인 이벤트 공지",
    href: siteConfig.storeUrl,
  },
  {
    slug: "same-day-shipping",
    image: "/images/notices/2.png",
    imageAlt: "평일 낮 12시까지 주문 시 롯데택배 당일 발송 공지",
    href: siteConfig.storeUrl,
  },
  {
    slug: "notification-review-benefit",
    image: "/images/notices/3.png",
    imageAlt: "알림받기 배송비 할인과 포토 및 동영상 리뷰 포인트 혜택 공지",
    href: siteConfig.storeUrl,
  },
];

export const categories: CategoryLink[] = [
  {
    slug: "event",
    name: "이벤트",
    description:
      "프로모션, 시즌 기획전, 한정 구성처럼 먼저 보여주고 싶은 혜택형 카테고리 자리입니다.",
    image: "/images/categories/이벤트.png",
    imageAlt: "이벤트 카테고리 대표 이미지",
    href: "https://mkt.shopping.naver.com/link/6a35002585ab1823972bfa71",
    hrefLabel: "카테고리 이동",
  },
  {
    slug: "buddhist-interior",
    name: "불교인테리어",
    description:
      "불단 주변 소품이나 공간 분위기를 정돈하는 품목을 연결할 수 있는 카테고리 자리입니다.",
    image: "/images/categories/불교인테리어.png",
    imageAlt: "불교인테리어 카테고리 대표 이미지",
    href: "https://mkt.shopping.naver.com/link/68c5d8e1caef4528fc1bb5b6",
    hrefLabel: "카테고리 이동",
  },
  {
    slug: "buddhist-accessories",
    name: "불교액세서리",
    description:
      "염주, 팔찌, 목걸이 등 일상 가까이 두는 액세서리형 불교용품 카테고리 자리입니다.",
    image: "/images/categories/불교액세서리.png",
    imageAlt: "불교액세서리 카테고리 대표 이미지",
    href: "https://mkt.shopping.naver.com/link/68c5d8fb7d07384e3ec22c85",
    hrefLabel: "카테고리 이동",
  },
  {
    slug: "meditation-tools",
    name: "명상도구",
    description:
      "명상과 수행 흐름에 맞는 싱잉볼, 목탁, 좌복 등 도구를 연결할 수 있는 카테고리 자리입니다.",
    image: "/images/categories/명상도구.png",
    imageAlt: "명상도구 카테고리 대표 이미지",
    href: "https://mkt.shopping.naver.com/link/68cf9de1156a0e2f1d6064e3",
    hrefLabel: "카테고리 이동",
  },
  {
    slug: "buddhist-scriptures",
    name: "불교경전",
    description:
      "경전, 불자수첩, 필사 관련 품목처럼 읽고 적으며 가까이 두는 카테고리 자리입니다.",
    image: "/images/categories/불교경전.png",
    imageAlt: "불교경전 카테고리 대표 이미지",
    href: "https://mkt.shopping.naver.com/link/6a3501b74e58f1369596f38a",
    hrefLabel: "카테고리 이동",
  },
  {
    slug: "feng-shui",
    name: "풍수용품",
    description:
      "공간의 기운과 상징성을 고려한 소품과 장식류를 묶어 보여줄 수 있는 카테고리 자리입니다.",
    image: "/images/categories/풍수용품.png",
    imageAlt: "풍수용품 카테고리 대표 이미지",
    href: "https://mkt.shopping.naver.com/link/68c013e10bc8f811b15f75e9",
    hrefLabel: "카테고리 이동",
  },
];

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

const curationProductItems: Record<string, ProductCuration["items"]> = {
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
};

export const productCurations: ProductCuration[] = curationNames.flatMap(([slug, name]) => {
  const items = curationProductItems[slug];

  return items ? [{ slug, name, items }] : [];
});

export const productShorts: ProductShort[] = [
  {
    slug: "little-monk",
    title: "동자승",
    href: "https://youtu.be/gDVtfdCrxKI?si=BVZ61EAaWDTlQKni",
    embedUrl:
      "https://www.youtube.com/embed/gDVtfdCrxKI?rel=0&modestbranding=1&playsinline=1&profile_refresh=20260621",
    tags: ["#동자승", "#아기스님", "#미니불상"],
    storeUrl: "https://mkt.shopping.naver.com/link/685682a922dc33661fca0383",
  },
  {
    slug: "buddhist-frog",
    title: "불교개구리",
    href: "https://youtu.be/WNiT1ImP5eM?si=gxkaVtpgmaVojGcy",
    embedUrl:
      "https://www.youtube.com/embed/WNiT1ImP5eM?rel=0&modestbranding=1&playsinline=1&profile_refresh=20260621",
    tags: ["#불교굿즈", "#불교박람회굿즈", "#불상"],
    storeUrl: "https://mkt.shopping.naver.com/link/69bdf8fcfc2fa7235761439e",
  },
  {
    slug: "three-buddhas",
    title: "삼존불",
    href: "https://youtu.be/QwL_rB425cc?si=6NBfBEToXzZxLj7L",
    embedUrl:
      "https://www.youtube.com/embed/QwL_rB425cc?rel=0&modestbranding=1&playsinline=1&profile_refresh=20260621",
    tags: ["#지장보살", "#석가모니", "#관세음보살"],
    storeUrl: "https://mkt.shopping.naver.com/link/687392211cb140447c418a97",
  },
];

export const templeShorts: TempleShort[] = [
  {
    slug: "paju-bogwangsa",
    title: "경기 파주 보광사",
    location: "경기 파주",
    templeName: "보광사",
    tags: ["#파주보광사", "#파주절보광사", "#경기도사찰", "#파주사찰"],
    videoUrl: "https://youtu.be/Sq7DIo2N8aU?si=9QOBBlKu4wRsAXyx",
  },
  {
    slug: "suwon-bongnyeongsa",
    title: "경기 수원 봉녕사",
    location: "경기 수원",
    templeName: "봉녕사",
    tags: ["#수원봉녕사", "#봉녕사절", "#봉녕사수원", "#수원사찰"],
    videoUrl: "https://www.tiktok.com/@buddhamoa/video/7632312467825249557?is_from_webapp=1&sender_device=pc",
  },
  {
    slug: "hwaseong-yongjusa",
    title: "경기 화성 용주사",
    location: "경기 화성",
    templeName: "용주사",
    tags: ["#화성용주사", "#경기도절", "#화성절", "#화성사찰"],
    videoUrl: "https://www.instagram.com/reel/DHBFIo0zHet/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "붓다모아는 어떤 불교용품을 주로 소개하나요?",
    answer:
      "붓다모아는 불상, 염주, 불교팔찌, 목탁, 싱잉볼, 불자수첩, 불교굿즈 등 일상 속 신행과 명상에 필요한 다양한 불교용품을 중심으로 소개합니다.",
  },
  {
    question: "붓다모아는 어떤 분위기의 불교용품 쇼핑몰인가요?",
    answer:
      "붓다모아는 단순히 물건만 판매하는 곳이 아니라, 불자님들의 마음 가까이에 머무는 작은 신행 공간을 지향합니다. 평온함과 정갈함, 일상 활용성을 함께 생각하며 상품을 소개합니다.",
  },
  {
    question: "랜딩 페이지에서 바로 결제할 수 있나요?",
    answer:
      "이 사이트는 상품을 이해하기 쉽게 소개하는 편집샵형 랜딩입니다. 실제 결제와 옵션 선택은 네이버 스마트스토어 상품 페이지에서 진행됩니다.",
  },
  {
    question: "불교용품을 처음 접하는 사람도 편하게 볼 수 있나요?",
    answer:
      "네. 상품의 의미, 사용 방법, 선물용 추천 포인트를 쉽게 설명해 처음 고르는 분도 부담 없이 살펴볼 수 있도록 구성했습니다.",
  },
  {
    question: "선물용 불교용품이나 마음의 쉼표가 필요한 분에게도 잘 맞나요?",
    answer:
      "그렇습니다. 붓다모아는 불자님뿐 아니라 조용한 위로와 평온을 찾는 분도 편하게 둘러볼 수 있도록 선물용 불교용품과 명상용품을 함께 소개합니다.",
  },
  {
    question: "AI 검색이나 일반 검색에서 붓다모아를 찾기 쉬운 이유는 무엇인가요?",
    answer:
      "상품 설명, FAQ, 구조화 데이터, 사이트맵을 함께 구성해 검색엔진과 AI가 붓다모아의 불교용품 정보 구조를 더 정확히 이해하도록 설계했기 때문입니다.",
  },
];
