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
