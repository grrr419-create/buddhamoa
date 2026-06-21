# 붓다모아 랜딩 마이크로사이트

Astro로 만든 `붓다모아` 전용 정적 랜딩 사이트입니다.  
메인 랜딩, 상품 상세 페이지, 보조 채널 링크, SEO 메타, JSON-LD 구조화 데이터, 사이트맵, robots.txt, 외부 링크 클릭 추적 준비가 포함되어 있습니다.

## 실행 방법

```sh
npm install
npm run dev
```

기본 개발 서버는 `http://localhost:4321`에서 실행됩니다.

## 배포 전 확인

`PUBLIC_SITE_URL` 환경변수에 실제 배포 도메인을 넣어 주세요.

```sh
PUBLIC_SITE_URL=https://your-domain.com npm run build
```

이 값은 다음 항목에 사용됩니다.

- canonical URL
- Open Graph 이미지 절대 경로
- JSON-LD 구조화 데이터 URL
- `sitemap-index.xml`
- `robots.txt`의 사이트맵 주소

## 실제 운영 전 교체 권장 항목

- `src/data/site.ts`
  - 스마트스토어, 블로그, 유튜브, 인스타그램, 틱톡 실제 링크
  - 연락처 정보
- `src/data/products.ts`
  - 스마트스토어 실제 상품 URL
  - 상품명, 설명, 키워드
- `public/images/products/*`
  - 현재는 임시 SVG 비주얼이며 실제 상품 사진으로 교체 권장

## 주요 구조

```text
src/
  components/
  data/
  layouts/
  pages/
    products/[slug].astro
  styles/
  utils/
```

## 빌드

```sh
npm run build
npm run preview
```
