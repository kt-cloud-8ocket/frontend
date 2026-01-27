# MindLog Frontend

[KT Cloud Tech Up 실무 통합 프로젝트]

## 🛠 기술 스택

| 구분                | 기술                        |
| ------------------- | --------------------------- |
| **Framework**       | Next.js 16.1.5 (App Router) |
| **Language**        | TypeScript                  |
| **상태관리**        | Zustand                     |
| **서버 상태**       | TanStack React Query        |
| **HTTP 클라이언트** | Axios                       |
| **스타일링**        | Tailwind CSS 4              |
| **UI 컴포넌트**     | Radix UI + shadcn/ui        |
| **폼 관리**         | React Hook Form + Zod       |

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── login/              # 로그인 페이지
│   └── auth/callback/      # OAuth 콜백
├── components/
│   └── ui/                 # 공통 UI 컴포넌트
├── lib/                    # 유틸리티 함수
│   ├── axios.ts            # API 클라이언트
│   └── utils.ts
├── stores/                 # Zustand 스토어
├── types/                  # TypeScript 타입 정의
└── providers/              # React 프로바이더
```

## 🚀 시작하기

### 환경 요구사항

- Node.js 18.x 이상
- npm, yarn, pnpm 또는 bun

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

개발 서버: [http://localhost:3000](http://localhost:3000)

### 환경 변수

`.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

## 📜 스크립트

| 명령어          | 설명               |
| --------------- | ------------------ |
| `npm run dev`   | 개발 서버 실행     |
| `npm run build` | 프로덕션 빌드      |
| `npm start`     | 프로덕션 서버 실행 |
| `npm run lint`  | ESLint 검사        |

## 👥 팀원

- [@lnu8926-web](https://github.com/lnu8926-web)
- [@choitaeung-cloud](https://github.com/choitaeung-cloud)
