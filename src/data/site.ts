import type {
  CategoryLink,
  FAQItem,
  ProductShort,
  SocialFollowChannel,
  TempleShort,
  TextCuration,
  TopNotice,
} from "../types";
import { withBase } from "../utils/paths";

export { productCurations } from "./productCurations";

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
  socialProfiles: [
    "https://www.youtube.com/@buddha-moa",
    "https://www.instagram.com/buddhamoa",
    "https://www.tiktok.com/@buddhamoa",
  ],
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

export const socialFollowChannels: SocialFollowChannel[] = [
  {
    icon: "youtube",
    href: "https://www.youtube.com/@buddha-moa?sub_confirmation=1",
    label: "유튜브",
    ctaLabel: "붓다모아 유튜브 영상 보기",
  },
  {
    icon: "instagram",
    href: "https://www.instagram.com/buddhamoa",
    label: "인스타그램",
    ctaLabel: "붓다모아 인스타그램 보기",
  },
  {
    icon: "tiktok",
    href: "https://www.tiktok.com/@buddhamoa",
    label: "틱톡",
    ctaLabel: "붓다모아 틱톡 보기",
  },
];

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

const holidayNoticeHref = "https://mkt.shopping.naver.com/link/68457bd08dd273404b731bfd";

export const topNotices: TopNotice[] = [
  {
    slug: "holiday-shipping-schedule",
    image: "/images/notices/1.png",
    imageAlt: "붓다모아 휴무 안내와 배송 일정 공지",
    href: holidayNoticeHref,
  },
  {
    slug: "constitution-day-holiday",
    image: "/images/notices/2.png",
    imageAlt: "붓다모아 제헌절 휴무 안내와 배송 일정 공지",
    href: holidayNoticeHref,
  },
  {
    slug: "summer-holiday-shipping",
    image: "/images/notices/3.png",
    imageAlt: "붓다모아 여름휴가 안내와 배송 일정 공지",
    href: holidayNoticeHref,
  },
];

export const secondaryNotices: TopNotice[] = [
  {
    slug: "opening-discount",
    image: "/images/notices/secondary-1.png",
    imageAlt: "초도물량 50% 할인 이벤트 공지",
    href: siteConfig.storeUrl,
  },
  {
    slug: "same-day-shipping",
    image: "/images/notices/secondary-2.png",
    imageAlt: "평일 낮 12시까지 주문 시 롯데택배 당일 발송 공지",
    href: siteConfig.storeUrl,
  },
  {
    slug: "notification-review-benefit",
    image: "/images/notices/secondary-3.png",
    imageAlt: "알림받기 배송비 할인과 포토 및 동영상 리뷰 포인트 혜택 공지",
    href: siteConfig.storeUrl,
  },
];

export const categories: CategoryLink[] = [
  {
    slug: "event",
    name: "이벤트",
    description:
      "신제품을 초도물량 한정 50% 할인으로 만나보세요. 소진 후 정상가로 전환됩니다.",
    image: "/images/categories/이벤트.png",
    imageAlt: "이벤트 카테고리 대표 이미지",
    href: "https://mkt.shopping.naver.com/link/6a35002585ab1823972bfa71",
    hrefLabel: "",
  },
  {
    slug: "buddhist-interior",
    name: "불교인테리어",
    description:
      "집, 사무실, 불단에 차분함을 더하는 불상과 불교 소품을 모았습니다.",
    image: "/images/categories/불교인테리어.png",
    imageAlt: "불교인테리어 카테고리 대표 이미지",
    href: "https://mkt.shopping.naver.com/link/68c5d8e1caef4528fc1bb5b6",
    hrefLabel: "",
  },
  {
    slug: "buddhist-accessories",
    name: "불교액세서리",
    description:
      "손목염주와 손가락염주, 불교 키링처럼 가볍게 지니는 선물용 소품입니다.",
    image: "/images/categories/불교액세서리.png",
    imageAlt: "불교액세서리 카테고리 대표 이미지",
    href: "https://mkt.shopping.naver.com/link/68c5d8fb7d07384e3ec22c85",
    hrefLabel: "",
  },
  {
    slug: "meditation-tools",
    name: "명상도구",
    description:
      "금강저, 미니목탁, 싱잉볼처럼 마음을 차분히 가다듬는 도구입니다.",
    image: "/images/categories/명상도구.png",
    imageAlt: "명상도구 카테고리 대표 이미지",
    href: "https://mkt.shopping.naver.com/link/68cf9de1156a0e2f1d6064e3",
    hrefLabel: "",
  },
  {
    slug: "buddhist-scriptures",
    name: "불교경전",
    description:
      "사경노트와 불자수첩, 선물용 경전처럼 읽고 기록하는 불교용품입니다.",
    image: "/images/categories/불교경전.png",
    imageAlt: "불교경전 카테고리 대표 이미지",
    href: "https://mkt.shopping.naver.com/link/6a3501b74e58f1369596f38a",
    hrefLabel: "",
  },
  {
    slug: "feng-shui",
    name: "풍수용품",
    description:
      "공간의 기운과 상징을 생각한 풍수 소품입니다. 집들이와 개업식 선물로 좋습니다.",
    image: "/images/categories/풍수용품.png",
    imageAlt: "풍수용품 카테고리 대표 이미지",
    href: "https://mkt.shopping.naver.com/link/68c013e10bc8f811b15f75e9",
    hrefLabel: "",
  },
];

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
  {
    slug: "vajra",
    title: "금강저",
    href: "https://youtu.be/L4f_OQftMuk?si=8xr14DWVjxmyRCQt",
    embedUrl:
      "https://www.youtube.com/embed/L4f_OQftMuk?rel=0&modestbranding=1&playsinline=1&profile_refresh=20260621",
    tags: ["#법구", "#귀신퇴치", "#명상도구"],
    storeUrl: "https://mkt.shopping.naver.com/link/686d254a1fd1ac410798b769",
  },
  {
    slug: "whale-moktak",
    title: "고래목탁",
    href: "https://youtu.be/5wk3hHb0kAY?si=uCDN0TT_qbFX25jh",
    embedUrl:
      "https://www.youtube.com/embed/5wk3hHb0kAY?rel=0&modestbranding=1&playsinline=1&profile_refresh=20260621",
    tags: ["#목탁", "#미니목탁", "#불교굿즈"],
    storeUrl: "https://mkt.shopping.naver.com/link/6853f935147acf255e8dff63",
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
    videoUrl: "https://youtu.be/dJR6KZdBitc?si=qM5p9fY1IuNTJ_RQ",
  },
  {
    slug: "hwaseong-yongjusa",
    title: "경기 화성 용주사",
    location: "경기 화성",
    templeName: "용주사",
    tags: ["#화성용주사", "#경기도절", "#화성절", "#화성사찰"],
    videoUrl: "https://youtu.be/ooedmHbqA9U?si=TxQdVPv6q5edPMEW",
  },
  {
    slug: "incheon-heungryunsa",
    title: "흥륜사",
    location: "인천",
    templeName: "흥륜사",
    tags: ["#인천흥륜사", "#대웅전", "#주련", "#쉼터"],
    videoUrl: "https://youtu.be/1p4rab_8iQk?si=2KW7AfJfQrov3RCT",
  },
  {
    slug: "ganghwa-jeondeungsa",
    title: "전등사",
    location: "인천 강화",
    templeName: "전등사",
    tags: ["#강화도", "#강화", "#인천", "#약사전"],
    videoUrl: "https://youtu.be/THZKhD7HtOk?si=hLqz5kFMmLqgm5PV",
  },
];

export const postTempleCurations: TextCuration[] = [
  {
    slug: "practice-space-buddha",
    name: "신행 공간의 중심 부처님",
    description: "집 안에 차분한 평온을 들여보세요.",
    items: [
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
  },
  {
    slug: "avalokitesvara-symbol",
    name: "자비의 상징 관세음보살",
    description: "온화한 얼굴에서 편안함을 느껴보세요.",
    items: [
      {
        slug: "water-moon-avalokitesvara",
        name: "수월관음상",
        image: "/images/curations/avalokitesvara-symbol/water-moon-avalokitesvara.png",
        imageAlt: "수월관음상 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/68cf9b28156a0e2f1d6064e1",
      },
      {
        slug: "avalokitesvara",
        name: "관세음보살",
        image: "/images/curations/avalokitesvara-symbol/avalokitesvara.png",
        imageAlt: "관세음보살 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a48fe39bb3426556b4195d3",
      },
      {
        slug: "avalokitesvara-statue",
        name: "관세음보살상",
        image: "/images/curations/avalokitesvara-symbol/avalokitesvara-statue.png",
        imageAlt: "관세음보살상 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a48fe56c07ae34f7540f793",
      },
      {
        slug: "avalokitesvara-buddhist-statue",
        name: "관세음보살불상",
        image: "/images/curations/avalokitesvara-symbol/avalokitesvara-buddhist-statue.png",
        imageAlt: "관세음보살불상 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/68cf9b9f34805940cb8378fd",
      },
      {
        slug: "thousand-arm-avalokitesvara",
        name: "천수관음",
        image: "/images/curations/avalokitesvara-symbol/thousand-arm-avalokitesvara.png",
        imageAlt: "천수관음 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a4902bba84c611cbff4cc5a",
      },
    ],
  },
  {
    slug: "ksitigarbha-for-loved-ones",
    name: "소중한 이를 위한 지장보살",
    description: "평안을 바라는 마음을 전해보세요.",
    items: [
      {
        slug: "ksitigarbha",
        name: "지장보살",
        image: "/images/curations/ksitigarbha-for-loved-ones/ksitigarbha.png",
        imageAlt: "지장보살 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/687392211cb140447c418a97",
      },
      {
        slug: "standing-ksitigarbha",
        name: "지장보살입상",
        image: "/images/curations/ksitigarbha-for-loved-ones/standing-ksitigarbha.png",
        imageAlt: "지장보살입상 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/69c7a368bae80b60f30cc510",
      },
      {
        slug: "ksitigarbha-buddhist-statue",
        name: "지장보살불상",
        image: "/images/curations/ksitigarbha-for-loved-ones/ksitigarbha-buddhist-statue.png",
        imageAlt: "지장보살불상 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/69e41d25aa5808771ea68e59",
      },
      {
        slug: "ksitigarbha-statue",
        name: "지장보살상",
        image: "/images/curations/ksitigarbha-for-loved-ones/ksitigarbha-statue.png",
        imageAlt: "지장보살상 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a48ffa7c07ae34f7540f794",
      },
      {
        slug: "ksitigarbha-king",
        name: "지장왕",
        image: "/images/curations/ksitigarbha-for-loved-ones/ksitigarbha-king.png",
        imageAlt: "지장왕 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a48ff56e61f7638275bccf6",
      },
    ],
  },
  {
    slug: "laughing-buddha-symbol",
    name: "복과 웃음을 담은 포대화상",
    description: "볼수록 기분 좋아지는 상징을 만나보세요.",
    items: [
      {
        slug: "laughing-buddha",
        name: "포대화상",
        image: "/images/curations/laughing-buddha-symbol/laughing-buddha.png",
        imageAlt: "포대화상 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a4901f5f89fad3874ee6121",
      },
      {
        slug: "golden-laughing-buddha",
        name: "황금포대화상",
        image: "/images/curations/laughing-buddha-symbol/golden-laughing-buddha.png",
        imageAlt: "황금포대화상 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a490637c07ae34f7540f795",
      },
      {
        slug: "laughing-buddha-statue",
        name: "포대화상불상",
        image: "/images/curations/laughing-buddha-symbol/laughing-buddha-statue.png",
        imageAlt: "포대화상불상 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a49065dc5db947f36e1260f",
      },
      {
        slug: "laughing-buddha-goods",
        name: "포대화상굿즈",
        image: "/images/curations/laughing-buddha-symbol/laughing-buddha-goods.png",
        imageAlt: "포대화상굿즈 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a49067b2f607413f52662be",
      },
      {
        slug: "budai-monk",
        name: "포대스님",
        image: "/images/curations/laughing-buddha-symbol/budai-monk.png",
        imageAlt: "포대스님 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a4906a72f607413f52662bf",
      },
    ],
  },
  {
    slug: "mind-awakening-meditation-tools",
    name: "마음을 깨우는 명상도구",
    description: "맑은 울림과 단단한 상징을 만나보세요.",
    items: [
      {
        slug: "singing-bowl",
        name: "싱잉볼",
        image: "/images/curations/mind-awakening-meditation-tools/singing-bowl.png",
        imageAlt: "싱잉볼 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/69c3bdb601c5cd3461ab419a",
      },
      {
        slug: "vajra",
        name: "금강저",
        image: "/images/curations/mind-awakening-meditation-tools/vajra.png",
        imageAlt: "금강저 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a4907d9c5db947f36e12610",
      },
      {
        slug: "mini-moktak",
        name: "미니목탁",
        image: "/images/curations/mind-awakening-meditation-tools/mini-moktak.png",
        imageAlt: "미니목탁 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a49078be61f7638275bccf7",
      },
      {
        slug: "bajra",
        name: "바즈라",
        image: "/images/curations/mind-awakening-meditation-tools/bajra.png",
        imageAlt: "바즈라 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/686d254a1fd1ac410798b769",
      },
      {
        slug: "mini-singing-bowl",
        name: "미니싱잉볼",
        image: "/images/curations/mind-awakening-meditation-tools/mini-singing-bowl.png",
        imageAlt: "미니싱잉볼 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a49075ec07ae34f7540f796",
      },
    ],
  },
  {
    slug: "good-energy-feng-shui-props",
    name: "좋은 기운을 들이는 풍수소품",
    description: "집안에 좋은 흐름을 들여보세요.",
    items: [
      {
        slug: "haetae-statue",
        name: "해태상",
        image: "/images/curations/good-energy-feng-shui-props/haetae-statue.png",
        imageAlt: "해태상 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/69de1cefc81d717af867d213",
      },
      {
        slug: "three-legged-toad",
        name: "삼족두꺼비",
        image: "/images/curations/good-energy-feng-shui-props/three-legged-toad.png",
        imageAlt: "삼족두꺼비 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a490867bb3426556b4195d5",
      },
      {
        slug: "pollock-talisman",
        name: "액막이명태",
        image: "/images/curations/good-energy-feng-shui-props/pollock-talisman.png",
        imageAlt: "액막이명태 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a490878c5db947f36e12611",
      },
      {
        slug: "mandarin-duck-set",
        name: "원앙세트",
        image: "/images/curations/good-energy-feng-shui-props/mandarin-duck-set.png",
        imageAlt: "원앙세트 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a4908afe61f7638275bccf8",
      },
      {
        slug: "elephant-statue",
        name: "코끼리조각상",
        image: "/images/curations/good-energy-feng-shui-props/elephant-statue.png",
        imageAlt: "코끼리조각상 상품 이미지",
        href: "https://mkt.shopping.naver.com/link/6a4908dcc5db947f36e12612",
      },
    ],
  },
];

export const faqs: FAQItem[] = [
  {
    question: "붓다모아는 무슨 뜻인가요?",
    answer:
      "붓다모아는 “불교용품을 다 모았다”는 의미를 담은 이름입니다. 불상, 염주, 사경노트, 경전, 명상도구, 불교굿즈까지 신행과 일상에 필요한 불교용품을 한곳에서 편하게 만날 수 있도록 준비한 불교용품 전문 쇼핑몰입니다.",
  },
  {
    question: "붓다모아 상품은 어디에서 구매할 수 있나요?",
    answer:
      "현재 붓다모아는 네이버 스마트스토어를 통해서만 상품을 판매하고 있습니다. 네이버에 ‘붓다모아’를 검색하시면 붓다모아 스마트스토어에 접속하실 수 있으며, 쿠팡 등 다른 판매처는 운영하지 않고 있으니 상품 구매 시 참고해주세요.",
  },
  {
    question: "오프라인 구매가 가능한가요?",
    answer:
      "현재 붓다모아는 오프라인 매장을 운영하지 않고 있습니다. 상품은 네이버 스마트스토어를 통한 온라인 주문으로만 구매하실 수 있습니다.",
  },
  {
    question: "불상을 집에 모셔도 되나요?",
    answer:
      "네, 불상은 사찰뿐 아니라 가정에서도 충분히 모실 수 있습니다. 중요한 것은 크기나 장소보다 정성스러운 마음입니다. 집 안의 깨끗하고 안정된 공간에 모시고, 하루를 돌아보거나 마음을 가다듬는 공간으로 활용하시면 좋습니다. 작은 미니 불상이나 인테리어 불상은 불교를 처음 접하는 분들도 편안하게 모시기 좋습니다.",
  },
  {
    question: "사경노트는 무엇부터 시작하면 좋나요?",
    answer:
      "처음 사경을 시작하신다면 『반야심경』이나 『금강경』처럼 많이 접하는 경전부터 추천드립니다. 『반야심경』은 비교적 짧아 부담 없이 시작하기 좋고, 『금강경』은 조금 더 깊이 있게 경전의 말씀을 따라 쓰고 싶은 분들이 많이 선택합니다. 처음부터 완벽하게 쓰려고 하기보다 하루 한 장, 또는 하루 몇 줄씩 차분히 써보는 것을 추천드립니다. 사경은 글씨를 잘 쓰는 것보다 경전의 말씀을 천천히 따라 쓰며 마음을 가다듬는 데 의미가 있습니다.",
  },
  {
    question: "출고지와 배송시간은 어떻게 되나요?",
    answer:
      "붓다모아 상품은 인천 계양구 출고지를 기준으로 롯데택배를 통해 발송됩니다. 평일 낮 12시 이전 결제 완료 주문은 가능한 당일 출고를 원칙으로 하며, 이후 주문은 다음 영업일에 순차 발송됩니다. 붓다모아는 아이를 키우며 운영하는 작은 쇼핑몰이라, 꼼꼼한 포장과 안정적인 발송을 위해 평일 낮 12시를 기준으로 출고를 마감하고 있습니다. 출고 후 배송은 보통 1~3영업일 정도 소요되며, 택배사 사정이나 도서산간 지역은 조금 더 걸릴 수 있습니다.",
  },
  {
    question: "파손되기 쉬운 제품은 안전하게 배송되나요?",
    answer:
      "네, 붓다모아는 파손 위험이 있는 제품의 경우 에어캡 등 완충재로 꼼꼼하게 보호 포장하여 발송합니다. 제품 수령 후 파손이나 이상이 있을 경우, 사진과 함께 문의해주시면 확인 후 안내드리겠습니다.",
  },
  {
    question: "대량구매 문의는 어떻게 하나요?",
    answer:
      "대량구매는 붓다모아 네이버톡으로 문의하시거나, 010-5077-9761로 문자 또는 카카오톡을 남겨주세요. 확인 후 순차적으로 답변드리겠습니다.",
  },
];
