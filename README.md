#VendiChef Frontend

> 🍱 도시락 자판기 데이터로 식사와 생산을 연결하는 플랫폼

**VendiChef**는 자판기를 단순 판매 채널이 아닌 데이터 수집 노드로 활용해, 개인에게는 건강한 식사를, 제조사에게는 예측 가능한 생산을 제공합니다.

## ✨ 주요 기능

- **실시간 데이터 수집** - 판매/재고/환경 데이터 실시간 수집 및 분석
- **AI 메뉴 추천** - 구매 패턴 기반 개인 맞춤 도시락 추천
- **AI 경영 리포트** - 수요 예측, 생산 가이드, 원재료 주문량 자동 생성
- **운영 모니터링** - 자판기 장애, 재고 소진, 온도 이상 실시간 감지

## 🛠 기술 스택

| 구분        | 기술                        |
| ----------- | --------------------------- |
| 프레임워크  | React 18                    |
| 언어        | TypeScript                  |
| 빌드 도구   | Vite 6                      |
| 스타일링    | Tailwind CSS 4              |
| 라우팅      | React Router DOM 7          |
| UI 컴포넌트 | Radix UI, MUI, Lucide Icons |
| 애니메이션  | Motion (Framer Motion)      |
| 차트        | Recharts                    |
| 폼          | React Hook Form             |

## 📁 폴더 구조

```
src/
├── api/           # API 클라이언트 및 엔드포인트
├── components/    # 재사용 컴포넌트
│   ├── about/     # 회사 소개 페이지 컴포넌트
│   ├── company/   # 제조사 관련 컴포넌트
│   ├── contact/   # 문의 페이지 컴포넌트
│   ├── home/      # 홈 페이지 컴포넌트
│   ├── layout/    # Header, Footer, Layout
│   ├── service/   # 서비스 관련 컴포넌트
│   ├── ui/        # Button, Card, Input 등 공통 UI
│   └── worker/    # 팀원 관련 컴포넌트
├── hooks/         # 커스텀 훅 (useCompany, useService)
├── lib/           # 유틸리티 함수 및 콘텐츠 데이터
├── mocks/         # Mock 데이터
├── pages/         # 페이지 컴포넌트
├── routes/        # 라우터 설정
├── styles/        # 글로벌 스타일
└── types/         # TypeScript 타입 정의
```

## 🚀 시작하기

### 요구사항

- Node.js 18 이상
- npm 또는 pnpm

### 설치

```bash
npm install
```

### 환경변수 설정

```bash
cp .env.example .env
```

`.env` 파일:

```env
VITE_USE_MOCK=true                       # Mock 데이터 사용 여부
VITE_API_BASE_URL=http://localhost:8080  # 백엔드 API URL
```

### 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 에서 확인

### 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

## 📄 페이지 구조

| 경로             | 페이지        | 설명                                    |
| ---------------- | ------------- | --------------------------------------- |
| `/`              | Home          | 메인 랜딩 페이지                        |
| `/about`         | About         | 회사 소개 (비전, 미션, 핵심 가치, 연혁) |
| `/services`      | ServiceList   | 서비스 목록                             |
| `/services/:id`  | ServiceDetail | 서비스 상세                             |
| `/companies`     | CompanyList   | 파트너 제조사 목록                      |
| `/companies/:id` | CompanyDetail | 제조사 상세                             |
| `/contact`       | Contact       | 문의하기 (파트너십, 설치, 투자 문의)    |

## 🔧 Mock 데이터

백엔드 API가 준비되지 않은 경우, Mock 데이터로 개발할 수 있습니다.

```env
# .env
VITE_USE_MOCK=true   # Mock 사용
VITE_USE_MOCK=false  # 실제 API 사용
```

Mock 데이터 위치: `src/mocks/`

## 📝 스크립트

| 명령어            | 설명                      |
| ----------------- | ------------------------- |
| `npm run dev`     | 개발 서버 실행 (HMR 지원) |
| `npm run build`   | 프로덕션 빌드             |
| `npm run preview` | 빌드 결과 미리보기        |

## 🎯 타겟 고객

### B2C

빠르고 건강한 식사가 필요한 직장인, 학생, 야간 근무자

### B2B

지역별 도시락 제조업체 (데이터 기반 생산 최적화)

## 📌 참고사항

- 백엔드 API: `http://localhost:8080`
- 개발 서버 포트: `3000`

---

**빠르고 건강한 한 끼를, 데이터로 지속 가능하게.** 🍱
