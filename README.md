# 8ocket Frontend

8ocket 프론트엔드 프로젝트입니다.

## 🛠 기술 스택

| 구분 | 기술 |
|------|------|
| 프레임워크 | React 18 |
| 언어 | TypeScript |
| 빌드 도구 | Vite |
| 스타일링 | Tailwind CSS |
| 라우팅 | React Router DOM |
| UI 컴포넌트 | Radix UI, Lucide Icons |

## 📁 폴더 구조

```
src/
├── api/           # API 클라이언트 및 엔드포인트
├── components/    # 재사용 컴포넌트
│   ├── layout/    # Header, Footer, Layout
│   ├── ui/        # Button, Card, Input 등
│   ├── company/   # 회사 관련 컴포넌트
│   ├── service/   # 서비스 관련 컴포넌트
│   └── worker/    # 팀원 관련 컴포넌트
├── hooks/         # 커스텀 훅
├── lib/           # 유틸리티 함수
├── mocks/         # Mock 데이터
├── pages/         # 페이지 컴포넌트
├── routes/        # 라우터 설정
├── styles/        # 글로벌 스타일
└── types/         # TypeScript 타입 정의
```

## 🚀 시작하기

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
VITE_USE_MOCK=true          # Mock 데이터 사용 여부
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

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | Home | 메인 랜딩 페이지 |
| `/about` | About | 회사 소개 |
| `/services` | ServiceList | 서비스 목록 |
| `/services/:id` | ServiceDetail | 서비스 상세 |
| `/companies` | CompanyList | 회사 목록 |
| `/companies/:id` | CompanyDetail | 회사 상세 |
| `/contact` | Contact | 문의하기 |

## 🔧 Mock 데이터

백엔드 API가 준비되지 않은 경우, Mock 데이터로 개발할 수 있습니다.

```env
# .env
VITE_USE_MOCK=true   # Mock 사용
VITE_USE_MOCK=false  # 실제 API 사용
```

Mock 데이터 위치: `src/mocks/`

## 📝 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |

## 📌 참고사항

- Node.js 18 이상 권장
- 백엔드 API: `http://localhost:8080`
- 개발 서버 포트: `3000`
