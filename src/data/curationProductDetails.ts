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
