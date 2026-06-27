# 붓다모아 랜딩 마이크로사이트

Astro로 만든 `붓다모아` 전용 정적 랜딩 사이트입니다.  
메인 랜딩, 상품 상세 페이지, 상단 조회수 표시, SEO 메타, JSON-LD 구조화 데이터, 사이트맵, robots.txt, 외부 링크 클릭 추적 준비가 포함되어 있습니다.

## 실행 방법

```sh
npm install
npm run dev
```

기본 개발 서버는 `http://localhost:4321`에서 실행됩니다.

## 배포 전 확인

`PUBLIC_SITE_URL` 환경변수에 실제 배포 도메인을 넣어 주세요.

```sh
PUBLIC_SITE_URL=https://buddhamoa.com npm run build
```

이 값은 다음 항목에 사용됩니다.

- canonical URL
- Open Graph 이미지 절대 경로
- JSON-LD 구조화 데이터 URL
- `sitemap-index.xml`
- `robots.txt`의 사이트맵 주소

GitHub Pages에서 `buddhamoa.com`을 루트 도메인으로 사용할 때는 Pages 설정의 Custom domain에
`buddhamoa.com`을 저장하고, DNS에는 아래 값을 연결합니다.

```text
@    A      185.199.108.153
@    A      185.199.109.153
@    A      185.199.110.153
@    A      185.199.111.153
www  CNAME  grrr419-create.github.io
```

## 조회수 집계 설정

상단 `Today`/`Total` 조회수는 Supabase RPC를 통해 기록됩니다. Supabase SQL 편집기나 CLI로
`supabase/migrations/*.sql`을 적용한 뒤, 배포 환경에 아래 값을 설정해 주세요.

```sh
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key
PUBLIC_VIEW_COUNTER_SITE_KEY=buddhamoa
```

Supabase 환경변수가 없으면 조회수 영역은 대시(`—`) 상태로 표시되고 방문 기록을 전송하지 않습니다.

비공개 통계 페이지는 `/stats/`에 있으며 Supabase Auth 이메일 로그인으로 보호됩니다. 분석 단위를
일/주/월로 바꾸면 오늘 기준으로 일은 최근 7일, 주는 최근 12주, 월은 최근 12개월 범위로 자동
조정되고, 조회수 추이도 선택한 단위로 묶어 표시됩니다. 같은 기간의 유입 도메인, 인기 페이지,
UTM 캠페인, 기기 구분도 함께 확인할 수 있습니다. 순방문자는 브라우저에 저장한 익명 방문자 ID를
기준으로 집계되며, 해당 migration 적용 이후의 방문부터 정확히 계산됩니다. Supabase SQL Editor에서
관리자 이메일을 소문자로 허용 목록에 추가해 주세요.

```sql
insert into public.stats_admins (email)
values ('admin@example.com')
on conflict (email) do nothing;
```

Supabase Auth 설정의 Site URL과 Redirect URLs에는 실제 배포 주소의 `/stats/` 경로를 허용해야
이메일 로그인 링크가 통계 페이지로 돌아옵니다.

## 실제 운영 전 교체 권장 항목

- `src/data/site.ts`
  - 스마트스토어 링크
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
