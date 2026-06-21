import type {
  CategoryLink,
  ChannelLink,
  FAQItem,
  TempleShort,
  TopNotice,
} from "../types";

export const siteUrl =
  import.meta.env.PUBLIC_SITE_URL || "https://buddhamoa.example";

export const siteConfig = {
  brandName: "붓다모아",
  siteName: "불교용품은 역시, 붓다모아",
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
    "불교용품",
    "법당용품",
    "기도용품",
    "선물용 불교용품",
    "붓다모아",
    "불교 염주 선물",
    "가정용 향로",
    "불교팔찌",
    "목탁",
    "싱잉볼",
    "불자수첩",
    "불교굿즈",
    "명상용품",
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
    tags: ["#붓다모아", "#신상품", "#50% 할인"],
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
    tags: ["#불상", "#불교굿즈", "#불교박람회"],
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
    tags: ["#염주", "#키링", "#목걸이"],
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
    tags: ["#싱잉볼", "#목탁", "#금강저"],
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
    tags: ["#사경노트", "#불자수첩", "#불교경전"],
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
    tags: ["#해태", "#삼족두꺼비", "#풍수인테리어"],
    href: "https://mkt.shopping.naver.com/link/68c013e10bc8f811b15f75e9",
    hrefLabel: "카테고리 이동",
  },
];

export const templeShorts: TempleShort[] = [
  {
    slug: "paju-bogwangsa",
    title: "경기 파주 보광사",
    location: "경기 파주",
    templeName: "보광사",
    tags: ["#파주보광사", "#파주절보광사", "#경기도사찰", "#파주사찰"],
    youtubeUrl: "https://youtu.be/Sq7DIo2N8aU?si=9QOBBlKu4wRsAXyx",
  },
  {
    slug: "suwon-bongnyeongsa",
    title: "경기 수원 봉녕사",
    location: "경기 수원",
    templeName: "봉녕사",
    tags: ["#수원봉녕사", "#봉녕사절", "#봉녕사수원", "#수원사찰"],
    youtubeUrl: "https://youtu.be/ExGxzuj4jW0?si=VFQoMeBLBVhJC4sy",
  },
  {
    slug: "hwaseong-yongjusa",
    title: "경기 화성 용주사",
    location: "경기 화성",
    templeName: "용주사",
    tags: ["#화성용주사", "#경기도절", "#화성절", "#화성사찰"],
    youtubeUrl: "https://youtu.be/ATc5-f5VvwM?si=ADi0cDkGjmHEOV3U",
  },
];

export const channels: ChannelLink[] = [
  {
    label: "스마트스토어",
    href: siteConfig.storeUrl,
    handle: "mkt.shopping.naver.com/link/68457bd08dd273404b731bfd",
    description: "최종 구매와 상세 옵션 확인은 스마트스토어에서 진행합니다.",
    icon: "store",
  },
  {
    label: "네이버블로그",
    href: "https://blog.naver.com/buddha-moa",
    handle: "blog.naver.com/buddha-moa",
    description: "불교용품의 의미와 사용법, 선물용 추천 포인트를 차분하게 전하기 좋은 채널입니다.",
    icon: "blog",
  },
  {
    label: "유튜브",
    href: "https://youtube.com/@buddha-moa?si=OhePAHTcPUNL7lcg",
    handle: "@buddha-moa",
    description: "상품 소개와 분위기 있는 짧은 영상을 연결할 수 있습니다.",
    icon: "youtube",
  },
  {
    label: "인스타그램",
    href: "https://www.instagram.com/buddhamoa",
    handle: "@buddhamoa",
    description: "신상품 이미지와 감도 있는 장면을 빠르게 보여주기 좋습니다.",
    icon: "instagram",
  },
  {
    label: "틱톡",
    href: "https://www.tiktok.com/@buddhamoa",
    handle: "@buddhamoa",
    description: "짧은 숏폼으로 제품 분위기와 사용 장면을 전개할 수 있습니다.",
    icon: "tiktok",
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
