# CivCurve (civcurve.com)

인류 최초 문명부터 현재까지, 각 문명의 탄생-성장-전성기-쇠퇴를 곡선으로 표현해
한눈에 비교하는 인터랙티브 타임라인. 기획안: `개발 관리` 프로젝트의
`기획_문명생명곡선.md` 참고.

기본 언어는 영어(`/en`), 한국어는 `/ko`. `civcurve.com` (도메인 미연결 시
`*.vercel.app`)으로 접속하면 자동으로 `/en`으로 리다이렉트된다.

## 현재 상태 — Phase 1 프로토타입

- 문명 10개 (`data/civilizations.ts`) 하드코딩 데이터, 한/영 이중 언어
- 곡선 형태는 실제 데이터(start/peak/end)로 계산 — 픽셀 하드코딩 아님
- 문명 클릭 시 상세 패널에 요약·주요 사건 표시
- 반응형 (모바일에서는 상세 패널이 아래로)

## 기술 스택

- Next.js 15 (App Router) + TypeScript
- i18n은 라이브러리 없이 `app/[locale]` 세그먼트 + `middleware.ts`로 직접 구현
  (`lib/i18n.ts`에 사전 정의, `data/civilizations.ts`는 `{ ko, en }` 이중 언어 필드)
- 순수 SVG + React state — 별도 차트 라이브러리 없음
  (Phase 2에서 확대/축소가 필요해지면 Visx 도입 검토)
- 스타일은 plain CSS (`app/globals.css`), 기획안 아티팩트와 동일한
  디자인 토큰(Fraunces / Source Sans 3 / IBM Plex Mono, 색상) 사용

## 로컬 실행

```bash
npm install
npm run dev
```

http://localhost:3000 은 `/en`으로 리다이렉트됨. http://localhost:3000/ko 로 한국어 확인.

## 배포 (GitHub → Vercel)

1. 이 저장소를 GitHub에 push
2. Vercel에서 New Project → 이 저장소 선택 → Import
   (Next.js 자동 감지, 별도 설정 불필요)
3. main 브랜치에 push할 때마다 자동 배포됨

## 새 언어 추가하는 법

1. `lib/i18n.ts`의 `locales` 배열에 로케일 코드 추가, `dictionaries`에 번역 추가
2. `data/civilizations.ts`의 `LocalizedText` 타입에 필드 추가, 10개 문명 전부 번역
3. `regionLabels`에 지역명 번역 추가

## 다음 단계 (Phase 2)

- 나머지 8개 문명 데이터 추가 (18개 목표) — 한/영 동시 작성
- 지역/시대 필터, 검색
- 확대·축소 (Visx 도입 검토)
- 문명 간 계승 관계 표시 (predecessor/successor 연결선)

## 데이터 출처에 대해

연대는 대중적으로 통용되는 근사치이며, 문명의 시작/끝은 역사학적으로
논쟁적인 경우가 많다(예: 로마 멸망을 476년 vs 1453년). 정확한 학술
자료보다 "직관적 비교"를 목표로 하는 프로젝트임을 감안할 것.
