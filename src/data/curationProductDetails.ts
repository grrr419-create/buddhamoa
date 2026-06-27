import type { ProductCurationDetail } from "../types";
import { productCurations } from "./productCurations";

export function getCurationProductDetailPath(curationSlug: string, productSlug: string) {
  return `/curations/${curationSlug}/${productSlug}/`;
}

const buddhistFrogImageBase =
  "/images/curation-details/emotional-buddhist-goods/buddhist-frog";
const buddhistExpoGoodsImageBase =
  "/images/curation-details/emotional-buddhist-goods/buddhist-expo-goods";
const whaleMoktakImageBase =
  "/images/curation-details/emotional-buddhist-goods/whale-moktak";
const prayingDogImageBase =
  "/images/curation-details/emotional-buddhist-goods/praying-dog";
const prayingCatImageBase =
  "/images/curation-details/emotional-buddhist-goods/praying-cat";
const buddhistPrayerBeadsImageBase =
  "/images/curation-details/daily-wrist-prayer-beads/buddhist-prayer-beads";
const buddhistDanjuImageBase =
  "/images/curation-details/daily-wrist-prayer-beads/buddhist-danju";
const prayerBeadBraceletImageBase =
  "/images/curation-details/daily-wrist-prayer-beads/prayer-bead-bracelet";
const woodenPrayerBeadsImageBase =
  "/images/curation-details/daily-wrist-prayer-beads/wooden-prayer-beads";
const buddhistBraceletImageBase =
  "/images/curation-details/daily-wrist-prayer-beads/buddhist-bracelet";
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
  "emotional-buddhist-goods/buddhist-frog": {
    name: "불교 개구리",
    subtitle: "작고 귀여운 도기 오브제",
    summary: "책상, 선반, 현관, 명상 공간에 자연스럽게 어울리는 미니 도기 소품",
    introBody: [
      "불교 개구리는 도기 특유의 따뜻한 질감과 귀여운 표정이 돋보이는 미니 소품입니다. 높이 약 3~5cm의 아담한 크기로 부담 없이 놓을 수 있고, 작은 공간에도 차분한 포인트를 더해줍니다. 둥근 형태, 은은한 광택, 개구리의 부드러운 표정이 어우러져 불교굿즈 특유의 정적인 분위기를 친근하게 느낄 수 있습니다. 과하게 무겁지 않은 인상이라 일상 공간의 인테리어 소품으로도 잘 어울립니다.",
    ],
    image: `${buddhistFrogImageBase}/image1.jpg`,
    imageAlt: "불교 개구리 도기 오브제 대표 이미지",
    sections: [
      {
        title: "세 가지 모습",
        images: [
          {
            src: `${buddhistFrogImageBase}/image2.jpg`,
            alt: "합장하는 모습 행복한 모습 여유로운 모습의 불교 개구리 3종",
          },
        ],
        body: [
          "불교 개구리는 합장하는 모습, 행복한 모습, 여유로운 모습의 3가지 디자인으로 구성되어 있습니다. 각각의 자세와 표정이 달라 하나만 선택해도 좋고, 여러 디자인을 함께 두면 작은 세트처럼 조화롭게 연출됩니다.",
        ],
        items: [
          "합장하는 불교 개구리: 두 손을 모은 자세가 특징입니다. 감사와 기도의 분위기를 차분하게 담았습니다.",
          "행복한 불교 개구리: 밝고 귀여운 표정이 돋보입니다. 책상이나 선반 위에 산뜻한 포인트를 더해줍니다.",
          "여유로운 불교 개구리: 편안하게 쉬는 듯한 자세가 매력적입니다. 침실, 협탁, 명상 공간처럼 조용한 공간에 잘 어울립니다.",
        ],
      },
      {
        title: "도기 질감과 디테일",
        imageGroups: [
          {
            images: [
              {
                src: `${buddhistFrogImageBase}/image3.png`,
                alt: "불교 개구리 도기 질감과 표정 디테일",
              },
              {
                src: `${buddhistFrogImageBase}/image4.jpg`,
                alt: "불교 개구리의 작은 눈 입 손과 발 디테일",
              },
            ],
          },
          {
            images: [
              {
                src: `${buddhistFrogImageBase}/image5.jpg`,
                alt: "손에 올린 작은 크기의 불교 개구리",
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
            alt: "선반 위에 놓인 불교 개구리 도기 소품",
          },
        ],
        body: [
          "불교 개구리는 책상, 선반, 현관, 협탁, 명상 공간에 잘 어울립니다. 불상, 염주, 향, 풍경 같은 불교 소품과 함께 두면 차분한 분위기를 만들 수 있고, 단독으로 두어도 귀여운 포인트가 됩니다. 세 가지 디자인을 나란히 배치하면 각기 다른 표정과 자세가 어우러져 작은 장식 세트처럼 보입니다. 공간을 많이 차지하지 않으면서도 따뜻한 인상을 남기는 제품입니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 불교 개구리 3종",
          "재질: 도기",
          "구성: 불교 개구리 3종 중 1EA",
          "사이즈: 합장하는 불교 개구리 약 40mm x 50mm / 행복한 불교 개구리 약 55mm x 30mm / 여유로운 불교 개구리 약 65mm x 35mm",
          "무게: 합장하는 불교 개구리 약 40g / 행복한 불교 개구리 약 38g / 여유로운 불교 개구리 약 29g",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "emotional-buddhist-goods/buddhist-expo-goods": {
    name: "불교박람회굿즈",
    subtitle: "연꽃 위 작은 동물 친구들이 전하는 귀여운 불교 감성 소품",
    summary:
      "고양이, 황구, 흑구, 수달, 돼지 옵션으로 구성된 미니 불교 장식 소품입니다.",
    introBody: [
      "불교박람회굿즈는 연꽃 받침 위에 앉은 동물 친구들이 작은 목탁을 들고 있는 미니 장식 소품입니다. 고양이, 황구, 흑구, 수달, 돼지 옵션으로 구성되어 있으며, 귀여운 표정과 부드러운 색감이 공간에 따뜻한 포인트를 더합니다.",
      "책상, 선반, 협탁, 차량 내부, 명상 공간처럼 자주 시선이 머무는 곳에 두기 좋습니다. 작은 크기지만 한눈에 들어오는 디자인이라 일상 공간을 부담 없이 꾸미기 좋습니다.",
    ],
    image: `${buddhistExpoGoodsImageBase}/image1.jpg`,
    imageAlt: "연꽃 받침 위 동물 친구들이 목탁을 든 불교박람회굿즈 대표 이미지",
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
  },
  "emotional-buddhist-goods/whale-moktak": {
    name: "고래목탁",
    subtitle: "작은 나무 소리로 마음을 정리하는 고래 모양 미니 목탁",
    summary:
      "둥근 고래 형태와 맑고 짧은 나무 소리가 어우러진 미니 목탁 소품입니다.",
    introBody: [
      "고래목탁은 둥근 고래 형태로 만든 작은 나무 목탁입니다. 부드러운 나무 결, 따뜻한 색감, 손에 쏙 들어오는 크기가 어우러져 책상 위나 선반 위에 부담 없이 두기 좋은 소품입니다.",
      "가볍게 톡 두드리면 맑고 짧은 나무 소리가 들려, 바쁜 일상 속에서 잠시 호흡을 정리하고 싶은 순간에 잘 어울립니다.",
    ],
    image: `${whaleMoktakImageBase}/image1.jpg`,
    imageAlt: "고래 모양 미니 나무 목탁 대표 이미지",
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
  },
  "emotional-buddhist-goods/praying-dog": {
    name: "합장강아지",
    subtitle: "두 손을 모은 귀여운 강아지 미니 불교굿즈",
    summary:
      "작은 강아지의 합장 자세가 공간에 편안하고 따뜻한 분위기를 더해주는 미니 소품입니다.",
    introBody: [
      "합장강아지는 두 손을 모은 작은 강아지 모습을 담은 미니 불교굿즈입니다. 귀여운 표정과 차분한 자세가 어우러져 책상, 선반, 차량, 침실 협탁처럼 자주 시선이 머무는 공간에 자연스럽게 놓기 좋습니다.",
      "크게 눈에 띄는 장식품이라기보다, 작은 공간에 편안한 분위기를 더해주는 소품에 가깝습니다. 바라보는 순간 마음이 잠시 느려지고, 공간의 인상이 부드러워지는 것이 특징입니다.",
    ],
    image: `${prayingDogImageBase}/image1.jpg`,
    imageAlt: "두 손을 모은 합장강아지 미니 불교굿즈 대표 이미지",
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
  },
  "emotional-buddhist-goods/praying-cat": {
    name: "합장고양이",
    subtitle: "두 손을 모은 귀여운 고양이 미니 불교굿즈",
    summary:
      "고양이의 귀여움과 합장 자세의 단정함을 함께 담은 작은 불교굿즈입니다.",
    introBody: [
      "합장고양이는 두 손을 가지런히 모은 고양이 모습을 담은 미니 불교굿즈입니다. 작은 크기와 부드러운 표정이 어우러져 책상, 선반, 차량, 침실 협탁처럼 자주 시선이 머무는 공간에 자연스럽게 놓기 좋습니다.",
      "강하게 눈에 띄는 장식품보다는 작은 공간에 차분한 분위기를 더해주는 소품에 가깝습니다. 고양이 특유의 귀여움과 합장 자세의 단정함이 함께 느껴지는 제품입니다.",
    ],
    image: `${prayingCatImageBase}/image1.jpg`,
    imageAlt: "두 손을 모은 합장고양이 미니 불교굿즈 대표 이미지",
    sections: [
      {
        title: "두 손을 모은 작은 모습",
        images: [
          {
            src: `${prayingCatImageBase}/image2.jpg`,
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
            src: `${prayingCatImageBase}/image3.jpg`,
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
            src: `${prayingCatImageBase}/image4.jpg`,
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
            src: `${prayingCatImageBase}/image5.jpg`,
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
            src: `${prayingCatImageBase}/image6.jpg`,
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
  },
  "daily-wrist-prayer-beads/buddhist-prayer-beads": {
    name: "불교염주",
    subtitle: "손목에 자연스럽게 머무는 나무 염주",
    summary:
      "짙은 나무 비즈와 은은한 보랏빛 포인트가 조화를 이루는 데일리 손목 염주입니다.",
    introBody: [
      "불교염주는 짙은 나무 비즈와 은은한 보랏빛 포인트가 조화를 이루는 손목 염주입니다. 작은 비즈가 손목을 따라 자연스럽게 감기며, 기도와 명상은 물론 일상 착용에도 부담 없이 어울립니다.",
    ],
    image: `${buddhistPrayerBeadsImageBase}/image1.jpg`,
    imageAlt: "짙은 나무 비즈와 보랏빛 포인트가 있는 불교염주 대표 이미지",
    sections: [
      {
        title: "정갈한 나뭇결이 주는 차분함",
        images: [
          {
            src: `${buddhistPrayerBeadsImageBase}/image2.jpg`,
            alt: "정갈한 나뭇결이 보이는 불교염주 비즈",
          },
        ],
        body: [
          "나무 비즈는 자연스러운 결감과 따뜻한 색감을 지니고 있습니다. 손끝에 닿는 촉감이 가볍고 부드러워 오래 착용해도 부담이 적으며, 차분한 분위기의 팔찌형 염주로 활용하기 좋습니다.",
        ],
      },
      {
        title: "보랏빛 포인트와 실버 장식",
        images: [
          {
            src: `${buddhistPrayerBeadsImageBase}/image3.jpg`,
            alt: "보랏빛 포인트와 실버 장식이 있는 불교염주",
          },
        ],
        body: [
          "중앙의 보랏빛 구슬은 전체 디자인에 은은한 포인트를 더해줍니다. 짙은 나무색, 보랏빛 장식, 실버 포인트가 함께 어우러져 불교용품의 의미는 살리면서도 일상적인 코디에 자연스럽게 맞습니다.",
        ],
      },
      {
        title: "손목에 편안하게 감기는 크기",
        images: [
          {
            src: `${buddhistPrayerBeadsImageBase}/image4.jpg`,
            alt: "손목에 편안하게 감기는 불교염주 착용감",
          },
        ],
        body: [
          "나무 비즈는 지름 약 6mm 크기로 제작되어 손목 위에서 과하게 튀지 않습니다. 얇고 가벼운 느낌의 염주를 찾는 분, 매일 착용하기 좋은 단정한 염주를 원하는 분께 잘 어울립니다.",
        ],
      },
      {
        title: "기도와 명상, 일상 착용까지",
        images: [
          {
            src: `${buddhistPrayerBeadsImageBase}/image5.jpg`,
            alt: "기도와 명상 일상 착용에 어울리는 불교염주",
          },
        ],
        body: [
          "불교염주는 기도할 때 손끝에 두기 좋고, 명상 전 마음을 가라앉히는 작은 도구로도 활용할 수 있습니다. 책상 위에 두거나 손목에 착용하면 바쁜 하루 속에서도 잠시 마음을 모으는 느낌을 줍니다.",
        ],
      },
      {
        title: "여러 개를 함께 두어도 좋은 디자인",
        images: [
          {
            src: `${buddhistPrayerBeadsImageBase}/image6.jpg`,
            alt: "여러 개를 함께 둔 불교염주 구성",
          },
        ],
        body: [
          "여러 개를 나란히 두면 나무 비즈의 색감과 보랏빛 포인트가 더욱 풍성하게 보입니다. 불교굿즈를 좋아하는 분께는 의미 있는 선물로, 차분한 손목 장식을 찾는 분께는 부담 없는 데일리 아이템으로 추천할 수 있습니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 불교염주",
          "재질: 나무 외",
          "구성: 불교염주 1EA",
          "사이즈: 나무 비즈 지름 약 6mm",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "daily-wrist-prayer-beads/buddhist-danju": {
    name: "불교단주",
    subtitle: "손목에 차분하게 머무는 나무 단주",
    summary:
      "나무 비즈의 자연스러운 결감과 진홍빛 포인트가 어우러진 손목 단주입니다.",
    introBody: [
      "불교단주는 나무 비즈의 자연스러운 결감과 진홍빛 포인트가 조화를 이루는 손목 단주입니다. 작고 단정한 비즈가 손목을 따라 편안하게 감기며, 기도와 명상은 물론 일상 착용에도 자연스럽게 어울립니다.",
    ],
    image: `${buddhistDanjuImageBase}/image1.jpg`,
    imageAlt: "나무 비즈와 진홍빛 포인트가 있는 불교단주 대표 이미지",
    sections: [
      {
        title: "정갈한 나무 비즈의 따뜻한 질감",
        images: [
          {
            src: `${buddhistDanjuImageBase}/image2.jpg`,
            alt: "정갈한 나무 비즈 질감이 보이는 불교단주",
          },
        ],
        body: [
          "나무 비즈는 은은한 광택과 또렷한 나뭇결이 돋보입니다. 손끝에 닿았을 때 과하게 차갑지 않고 부드러운 느낌을 주어, 매일 착용하는 단주로 부담이 적습니다.",
        ],
      },
      {
        title: "진홍빛 포인트가 더하는 차분한 존재감",
        images: [
          {
            src: `${buddhistDanjuImageBase}/image3.jpg`,
            alt: "진홍빛 포인트 구슬이 있는 불교단주",
          },
        ],
        body: [
          "중앙의 진홍빛 포인트 구슬은 전체 디자인에 따뜻한 색감을 더해줍니다. 짙은 나무색과 아이보리빛 장식, 진홍빛 포인트가 함께 어우러져 단정하면서도 눈길이 가는 분위기를 완성합니다.",
        ],
      },
      {
        title: "손목에 가볍게 감기는 크기",
        images: [
          {
            src: `${buddhistDanjuImageBase}/image4.jpg`,
            alt: "손목에 가볍게 감기는 불교단주 크기",
          },
        ],
        body: [
          "비즈 지름은 약 6mm로, 손목 위에서 과하게 크거나 무겁게 느껴지지 않습니다. 얇고 가벼운 느낌의 단주를 찾는 분, 평소에도 자연스럽게 착용할 수 있는 불교 소품을 원하는 분께 잘 어울립니다.",
        ],
      },
      {
        title: "기도와 명상, 일상 착용까지",
        images: [
          {
            src: `${buddhistDanjuImageBase}/image5.jpg`,
            alt: "기도와 명상 일상 착용에 어울리는 불교단주",
          },
        ],
        body: [
          "불교단주는 기도할 때 손에 쥐기 좋고, 명상 전 마음을 가라앉히는 작은 도구로도 활용할 수 있습니다. 책상 위에 두거나 손목에 착용하면 바쁜 하루 속에서도 잠시 마음을 모으는 느낌을 줍니다.",
        ],
      },
      {
        title: "선물하기에도 좋은 단정한 디자인",
        images: [
          {
            src: `${buddhistDanjuImageBase}/image6.jpg`,
            alt: "선물하기 좋은 단정한 디자인의 불교단주",
          },
        ],
        body: [
          "나무 비즈의 차분한 색감과 진홍빛 포인트가 조화를 이루어 불교굿즈를 좋아하는 분께 선물하기 좋습니다. 부담스럽지 않은 크기와 단정한 디자인 덕분에 데일리 손목 장식으로도 자연스럽습니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 불교단주",
          "재질: 나무 외",
          "구성: 불교단주 1EA",
          "사이즈: 나무 비즈 지름 약 6mm",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "daily-wrist-prayer-beads/prayer-bead-bracelet": {
    name: "염주팔찌",
    subtitle: "두 줄 나무 비즈로 손목 위에 차분한 포인트를 더하는 불교 감성 팔찌",
    summary:
      "두 줄로 감기는 나무 비즈 디자인이 손목 위에 차분한 존재감을 더하는 염주팔찌입니다.",
    introBody: [
      "염주팔찌는 두 줄로 감기는 나무 비즈 디자인이 특징인 손목 염주입니다. 한 줄 팔찌보다 손목 위에서 더 풍성한 느낌을 주면서도, 전체적인 색감은 차분해 일상 복장에 자연스럽게 어울립니다. 검은 톤의 나무 구슬과 포인트 비즈가 조화를 이루어 부담스럽지 않게 착용할 수 있습니다.",
    ],
    image: `${prayerBeadBraceletImageBase}/image1.jpg`,
    imageAlt: "두 줄 나무 비즈로 구성된 염주팔찌 대표 이미지",
    sections: [
      {
        title: "두 줄이라 더 자연스럽게 살아나는 포인트",
        images: [
          {
            src: `${prayerBeadBraceletImageBase}/image2.jpg`,
            alt: "두 줄 나무 비즈가 손목 위에 포인트를 주는 염주팔찌",
          },
        ],
        body: [
          "두 줄 나무 비즈는 손목에 착용했을 때 단정하면서도 충분한 존재감을 만들어줍니다. 과하게 화려하지 않고, 가까이서 볼수록 나무 구슬의 은은한 결감과 포인트 비즈의 조화가 느껴집니다. 팔찌 하나만으로도 손목에 차분한 분위기를 더하고 싶은 분께 잘 어울립니다.",
        ],
      },
      {
        title: "검은 톤 나무 구슬의 차분한 분위기",
        images: [
          {
            src: `${prayerBeadBraceletImageBase}/image3.jpg`,
            alt: "검은 톤 나무 구슬로 만든 염주팔찌",
          },
        ],
        body: [
          "검은 톤의 나무 구슬은 오래 보아도 질리지 않는 안정감이 있습니다. 밝은 옷에는 단정한 포인트가 되고, 어두운 옷에는 자연스럽게 어우러져 깔끔한 인상을 줍니다. 나무 소재 특유의 편안한 분위기가 있어 손목에 착용했을 때 차갑지 않고 부드러운 느낌을 전합니다.",
        ],
      },
      {
        title: "기도와 명상, 일상 착용까지",
        images: [
          {
            src: `${prayerBeadBraceletImageBase}/image4.jpg`,
            alt: "기도와 명상 일상 착용에 어울리는 염주팔찌",
          },
        ],
        body: [
          "염주팔찌는 기도나 명상 시간뿐 아니라 출근길, 외출, 일상복 코디에도 편하게 착용할 수 있습니다. 불교용품의 의미를 담고 있으면서도 디자인은 일상 팔찌처럼 자연스러워 부담이 적습니다. 바쁜 하루 중 손목의 염주를 바라보며 잠시 마음을 가다듬기 좋은 제품입니다.",
        ],
      },
      {
        title: "선물하기 좋은 염주팔찌",
        images: [
          {
            src: `${prayerBeadBraceletImageBase}/image5.jpg`,
            alt: "선물하기 좋은 차분한 염주팔찌 구성",
          },
        ],
        body: [
          "차분한 색감과 부담 없는 디자인 덕분에 가까운 분께 선물하기에도 좋습니다. 어머니, 아내, 지인처럼 마음의 평온을 전하고 싶은 분에게 건네기 좋은 소품입니다. 매일 착용할 수 있는 실용성과 불교적 의미를 함께 담고 있어 작은 마음의 선물로 잘 어울립니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 염주팔찌",
          "재질: 나무 외",
          "구성: 염주팔찌 1EA",
          "사이즈: 염주 알 지름 8mm / 포인트 비즈 알 지름 10mm",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "daily-wrist-prayer-beads/wooden-prayer-beads": {
    name: "나무염주",
    subtitle: "나무 비즈와 전통 매듭이 어우러진 가벼운 손목 염주",
    summary:
      "나무 비즈의 따뜻한 색감과 전통 매듭 장식이 어우러진 가벼운 손목용 염주입니다.",
    introBody: [
      "나무염주는 나무 비즈의 따뜻한 색감과 전통 매듭 장식이 어우러진 손목용 염주입니다. 과하게 화려하지 않은 디자인이라 평소 착용하기 좋고, 손목에 올렸을 때 자연스럽고 편안한 분위기를 더해줍니다. 작고 가벼운 염주를 찾는 분께 부담 없이 어울리는 제품입니다.",
    ],
    image: `${woodenPrayerBeadsImageBase}/image1.jpg`,
    imageAlt: "나무 비즈와 전통 매듭 장식이 있는 나무염주 대표 이미지",
    sections: [
      {
        title: "나무 비즈가 주는 편안한 분위기",
        images: [
          {
            src: `${woodenPrayerBeadsImageBase}/image2.jpg`,
            alt: "밝은 갈색 나무 비즈가 이어진 나무염주",
          },
        ],
        body: [
          "둥근 나무 비즈는 손목 위에서 은은하고 수수한 느낌을 줍니다. 밝은 갈색 톤의 구슬이 이어져 있어 옷차림을 크게 가리지 않고, 일상복에도 자연스럽게 어울립니다. 불교용품의 의미는 담고 있으면서도 패션 소품처럼 편하게 착용할 수 있습니다.",
        ],
      },
      {
        title: "꽃 모양 포인트와 매듭 장식",
        images: [
          {
            src: `${woodenPrayerBeadsImageBase}/image3.jpg`,
            alt: "꽃 모양 포인트와 노란 매듭 고리가 있는 나무염주",
          },
        ],
        body: [
          "중앙의 꽃 모양 장식과 노란 매듭 고리는 나무염주의 부드러운 인상을 더해줍니다. 단순한 구슬 팔찌가 아니라 작은 포인트가 살아 있어 가까이서 볼수록 손목 위에 따뜻한 분위기를 만들어줍니다. 차분하면서도 귀여운 감성을 함께 원하는 분께 잘 어울립니다.",
        ],
      },
      {
        title: "전통 매듭 방식의 손목 염주",
        images: [
          {
            src: `${woodenPrayerBeadsImageBase}/image4.jpg`,
            alt: "전통 매듭 방식으로 여닫는 나무염주",
          },
        ],
        body: [
          "나무염주는 고무줄처럼 크게 늘어나는 방식이 아니라, 매듭 고리를 여닫아 착용하는 팔찌형 염주입니다. 처음 사용할 때는 매듭이 다소 단단하게 느껴질 수 있으나, 쉽게 풀리지 않도록 만들어진 구조입니다. 구매 전 손목 사이즈와 제품 길이를 함께 확인하는 것이 좋습니다.",
        ],
      },
      {
        title: "가볍게 착용하기 좋은 크기",
        images: [
          {
            src: `${woodenPrayerBeadsImageBase}/image5.jpg`,
            alt: "가볍게 착용하기 좋은 크기의 나무염주",
          },
        ],
        body: [
          "펼쳤을 때 약 180mm의 사이즈로 제작되어 손목에 가볍게 착용하기 좋습니다. 무게도 약 3g으로 부담이 적어 장시간 착용해도 손목에 무리가 덜합니다. 기도나 명상 시간은 물론, 외출할 때 가볍게 포인트로 착용하기 좋은 염주입니다.",
        ],
      },
      {
        title: "일상 속 작은 마음의 포인트",
        images: [
          {
            src: `${woodenPrayerBeadsImageBase}/image6.jpg`,
            alt: "일상 속 작은 마음의 포인트가 되는 나무염주",
          },
        ],
        body: [
          "나무염주는 특별한 날에만 사용하는 물건이 아니라, 매일 곁에 두고 착용할 수 있는 작은 소품입니다. 손목에 닿는 나무 비즈의 질감과 차분한 색감이 마음을 편안하게 해주며, 바쁜 하루 중에도 잠시 마음을 가다듬는 계기를 만들어줍니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 나무염주",
          "재질: 나무 외",
          "구성: 나무염주 1EA",
          "사이즈: 펼쳤을 때 약 180mm",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
  "daily-wrist-prayer-beads/buddhist-bracelet": {
    name: "불교팔찌",
    subtitle: "흑색 나무 비즈와 목탁 포인트가 어우러진 손목 염주",
    summary:
      "흑색 나무 비즈와 목탁 모양 포인트 장식이 어우러진 데일리 손목 염주입니다.",
    introBody: [
      "불교팔찌는 어두운 흑색의 나무 비즈로 제작된 손목용 염주입니다. 차분한 색감과 둥근 구슬 형태가 손목에 자연스럽게 어우러지고, 불교용품의 의미와 일상 팔찌의 실용성을 함께 담았습니다. 기도와 명상 시간은 물론 평소 외출할 때도 부담 없이 착용하기 좋은 제품입니다.",
    ],
    image: `${buddhistBraceletImageBase}/image1.jpg`,
    imageAlt: "흑색 나무 비즈와 목탁 포인트가 있는 불교팔찌 대표 이미지",
    sections: [
      {
        title: "흑색 나무 비즈의 차분한 분위기",
        images: [
          {
            src: `${buddhistBraceletImageBase}/image2.jpg`,
            alt: "검은 톤 나무 구슬로 구성된 불교팔찌",
          },
        ],
        body: [
          "검은 톤의 나무 구슬은 화려하지 않지만 오래 보아도 질리지 않는 단정한 매력이 있습니다. 밝은 옷에는 또렷한 포인트가 되고, 어두운 옷에는 자연스럽게 어우러져 깔끔한 느낌을 줍니다. 나무 소재 특유의 편안한 분위기가 손목 위에 차분한 인상을 더해줍니다.",
        ],
      },
      {
        title: "목탁 모양 포인트 장식",
        images: [
          {
            src: `${buddhistBraceletImageBase}/image3.jpg`,
            alt: "목탁 모양 포인트 장식이 달린 불교팔찌",
          },
        ],
        body: [
          "불교팔찌에는 목탁 모양의 포인트 장식이 더해져 있습니다. 단순한 나무 비즈 팔찌가 아니라 불교적인 감성을 자연스럽게 담은 디자인으로, 가까이서 볼수록 제품의 개성이 잘 느껴집니다. 장식은 과하게 튀지 않아 일상 착용에도 부담이 적습니다.",
        ],
      },
      {
        title: "알마다 살아 있는 문양 디테일",
        images: [
          {
            src: `${buddhistBraceletImageBase}/image4.jpg`,
            alt: "구슬마다 은은한 문양이 새겨진 불교팔찌 디테일",
          },
        ],
        body: [
          "구슬 하나하나에는 은은한 문양이 새겨져 있어 밋밋하지 않은 입체감을 줍니다. 손에 쥐었을 때 나무 비즈의 둥근 질감이 느껴지고, 가까이 바라보면 작은 디테일들이 제품의 완성도를 높여줍니다. 차분한 색감 속에서도 세심한 포인트가 살아 있는 팔찌입니다.",
        ],
      },
      {
        title: "12mm와 15mm 두 가지 선택",
        images: [
          {
            src: `${buddhistBraceletImageBase}/image5.jpg`,
            alt: "12mm와 15mm 두 가지 알 크기를 선택할 수 있는 불교팔찌",
          },
        ],
        body: [
          "불교팔찌는 알 크기에 따라 12mm와 15mm로 선택할 수 있습니다. 12mm는 손목에 비교적 부담 없이 착용하기 좋은 사이즈이고, 15mm는 구슬의 존재감이 더 또렷하게 느껴지는 사이즈입니다. 손목 굵기와 원하는 분위기에 따라 선택하면 좋습니다.",
          "선택1. 12mm는 비교적 작은 알 크기로 손목에 자연스럽게 감기는 느낌을 선호하는 분께 잘 어울립니다. 일상복과 함께 착용해도 부담이 적고, 차분한 포인트 팔찌처럼 활용하기 좋습니다.",
          "선택2. 15mm는 구슬 크기가 더 커서 팔찌의 존재감이 분명하게 느껴지는 선택입니다. 손목 위에서 묵직하고 안정적인 느낌을 주며, 불교 염주 특유의 분위기를 조금 더 강하게 표현하고 싶은 분께 어울립니다.",
        ],
      },
      {
        title: "착용했을 때 느껴지는 안정감",
        images: [
          {
            src: `${buddhistBraceletImageBase}/image6.jpg`,
            alt: "손목에 착용했을 때 차분하게 자리하는 불교팔찌",
          },
        ],
        body: [
          "손목에 착용하면 검은 나무 비즈가 단정하게 자리하며, 전체적인 분위기를 차분하게 정리해줍니다. 불교팔찌 하나만으로도 손목에 충분한 포인트가 되고, 과한 장식 없이도 편안하고 묵직한 인상을 남깁니다.",
        ],
      },
      {
        title: "손목 위에 두는 작은 마음의 도구",
        images: [
          {
            src: `${buddhistBraceletImageBase}/image7.jpg`,
            alt: "일상 속 마음을 가다듬는 작은 도구가 되는 불교팔찌",
          },
        ],
        body: [
          "불교팔찌는 단순한 장신구가 아니라, 하루 중 잠시 마음을 가다듬게 해주는 작은 도구가 될 수 있습니다. 손목에 닿는 나무 비즈의 질감과 차분한 색감이 일상 속에서 자연스럽게 마음을 환기해줍니다.",
        ],
      },
      {
        title: "제품 정보",
        body: [],
        items: [
          "제품명: 불교팔찌",
          "재질: 나무 외",
          "구성: 불교팔찌 1EA",
          "사이즈: 여성용 12mm / 남성용 15mm",
          "원산지: 중국",
          "수입사: 스테디오더",
        ],
      },
    ],
  },
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
  return `${curationSlug}/${productSlug}` in curationProductDetailOverrides;
}

export const curationProductDetails: ProductCurationDetail[] = productCurations.flatMap(
  (curation) =>
    curation.items.flatMap((item) => {
      const override = curationProductDetailOverrides[`${curation.slug}/${item.slug}`];

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

      return [{ ...detail, ...override }];
    }),
);
