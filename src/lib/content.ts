// 홈페이지 콘텐츠 데이터

export const homeContent = {
  hero: {
    title: "식사와 생산을 데이터로 연결합니다",
    subtitle:
      "자판기 데이터로 개인에게는 건강한 식사를, 제조사에게는 예측 가능한 생산을 제공합니다.",
    primaryCTA: { label: "서비스 보기", href: "/services" },
    secondaryCTA: { label: "문의하기", href: "/contact" },
  },

  services: {
    title: "주요 서비스",
    items: [
      {
        icon: "📊",
        title: "실시간 데이터 수집",
        description: "판매·재고·환경 데이터를 실시간으로 수집하고 분석",
      },
      {
        icon: "🤖",
        title: "AI 메뉴 추천",
        description: "구매 패턴 기반 개인 맞춤 도시락 추천",
      },
      {
        icon: "📈",
        title: "AI 경영 리포트",
        description: "수요 예측, 생산 가이드, 원재료 주문량 자동 생성",
      },
    ],
  },

  about: {
    title: "왜 벤디셰프인가요?",
    description:
      "자판기를 단순 판매 채널이 아닌 데이터 수집 노드로 활용해, 수요와 공급을 정확하게 연결합니다.",
    cta: { label: "더 알아보기", href: "/about" },
  },
};

export const aboutContent = {
  hero: {
    title: "회사 소개",
    subtitle: "도시락 자판기 데이터로 식사와 생산을 연결하는 플랫폼",
  },

  vision: {
    icon: "🎯",
    title: "비전",
    description: "데이터로 지속 가능한 식사와 생산 인프라를 만든다",
  },

  mission: {
    icon: "🚀",
    title: "미션",
    description: "개인에게는 건강한 식습관을, 제조사에게는 예측 가능한 생산을",
  },

  values: {
    title: "핵심 가치",
    items: [
      {
        title: "간결한 선택",
        description: "선택은 단순하게, 실행은 빠르게",
      },
      {
        title: "데이터 중심",
        description: "직감이 아닌 데이터로 판단",
      },
      {
        title: "동반 성장",
        description: "거래가 아닌 파트너십",
      },
      {
        title: "지속 가능성",
        description: "반복 가능하고 확장 가능한 구조",
      },
    ],
  },

  history: {
    title: "연혁",
    items: [{ year: "2024", event: "벤디셰프 팀 결성" }],
  },

  story: {
    title: "우리의 이야기",
    problem: {
      title: "문제 발견",
      content: `"왜 급하게 먹는 식사는 건강하지 않을까?"
"왜 식품은 항상 남아서 버려질까?"

이 두 질문은 하나의 구조적 문제에서 시작됩니다.`,
    },
    solution: {
      title: "해결 방향",
      content:
        "더 많은 선택지 대신, 더 나은 기본값을 제공합니다. 빠르고 건강하며 고민 없는 식사. 그 선택이 생산 의사결정으로 이어지는 구조를 만들었습니다.",
    },
  },

  brandMessage: {
    title: "브랜드 메시지",
    message: "빠르고 건강한 한 끼를,\n데이터로 지속 가능하게.",
  },

  strengths: {
    title: "팀의 강점",
    items: [
      {
        title: "문제 정의",
        description: "B2C와 B2B 관점을 동시에 고려",
      },
      {
        title: "서비스 기획",
        description: "데이터 흐름 중심 플랫폼 설계",
      },
      {
        title: "확장성 설계",
        description: "IoT 인프라 기반 확장 가능한 구조",
      },
    ],
  },
};

export const contactContent = {
  hero: {
    title: "문의하기",
    subtitle: "데이터 기반 식사·생산 플랫폼을 함께 만들어갈 파트너를 찾습니다",
  },

  form: {
    fields: {
      name: { label: "이름", placeholder: "이름을 입력하세요" },
      email: { label: "이메일", placeholder: "이메일을 입력하세요" },
      company: { label: "회사명", placeholder: "회사명 (선택)" },
      type: {
        label: "문의 유형",
        options: ["일반 문의", "제조사 파트너십", "설치 문의", "투자 문의"],
      },
      message: { label: "문의 내용", placeholder: "문의 내용을 입력하세요" },
    },
    submitButton: "문의 보내기",
  },

  info: {
    title: "연락처",
    items: [
      { icon: "📧", label: "이메일", value: "contact@vendichef.com" },
      { icon: "📞", label: "전화", value: "02-1234-5678" },
      { icon: "📍", label: "주소", value: "서울시 강남구" },
    ],
  },
};

export const servicesContent = {
  hero: {
    title: "서비스",
    subtitle:
      "자판기 데이터로 판매·재고·환경 정보를 수집하고, 제조·주문·운영 의사결정을 실시간 연결",
  },

  problems: {
    title: "해결하는 문제",
    consumer: {
      title: "개인",
      items: [
        "편의점 중심 구매로 인한 충동 소비",
        "자극적인 식단과 건강 관리 어려움",
        "식사 선택에 소모되는 시간",
      ],
    },
    business: {
      title: "제조사",
      items: [
        "수요 예측 실패로 인한 과잉 생산",
        "높은 폐기 비용",
        "판매 데이터 부재",
      ],
    },
  },

  target: {
    title: "타겟 고객",
    b2c: {
      title: "B2C",
      description: "빠르고 건강한 식사가 필요한 직장인, 학생, 야간 근무자",
    },
    b2b: {
      title: "B2B",
      description: "지역별 도시락 제조업체",
    },
  },

  features: {
    title: "핵심 기능",
    items: [
      {
        icon: "📡",
        title: "실시간 데이터 수집",
        description: "판매/재고/환경 데이터 실시간 수집 및 이벤트화",
      },
      {
        icon: "🤖",
        title: "AI 메뉴 추천",
        description: "구매 이력과 패턴 학습으로 개인 맞춤 메뉴 추천",
      },
      {
        icon: "🔄",
        title: "원클릭 리오더",
        description:
          "이전 구매 메뉴 즉시 재주문, 재고 따라 대체 상품 자동 추천",
      },
      {
        icon: "📊",
        title: "AI 경영 리포트",
        description: "지역/시간/SKU별 분석, 수요 예측, 생산 가이드 자동 생성",
      },
      {
        icon: "🎯",
        title: "마케팅 인사이트",
        description: "판매 추이 분석으로 할인, 묶음 판매 등 프로모션 전략 제안",
      },
      {
        icon: "🖥️",
        title: "운영 모니터링",
        description: "자판기 장애, 재고 소진, 온도 이상 등 실시간 모니터링",
      },
    ],
  },

  reportTypes: {
    title: "AI 경영 리포트",
    basic: {
      title: "기본형",
      items: [
        "지역/시간/SKU별 판매 리포트",
        "인기 메뉴 분석",
        "프로모션 방향 제안",
        "즉시 실행 가능한 인사이트",
      ],
    },
    premium: {
      title: "고급형",
      items: [
        "수요 예측 모델",
        "생산량 가이드",
        "재료 구매 수량 제안",
        "원재료 주문 최적화",
      ],
    },
  },
};

export const businessContent = {
  title: "비즈니스 모델",
  subtitle: "다양한 수익 구조로 지속 가능한 플랫폼 구축",

  models: [
    {
      icon: "💳",
      title: "플랫폼 수수료",
      description:
        "제조사 대상 플랫폼 이용료. 노출 위치·회전율·판매 성과에 따라 차등 적용",
    },
    {
      icon: "📊",
      title: "AI 리포트 구독",
      description: "데이터 기반 운영 리포트 구독. 기본형~고급형 선택 가능",
    },
    {
      icon: "🤖",
      title: "프리미엄 AI 기능",
      description: "지역 특화 메뉴 추천, 프로모션 시뮬레이션, 신제품 테스트",
    },
    {
      icon: "📺",
      title: "광고 수익",
      description: "자판기 화면·앱 브랜드 노출. 상황 기반 타겟 광고",
    },
    {
      icon: "🔄",
      title: "정기 구독",
      description: "개인 정기 구독, 기업 복지 연계, 사무실·병원 단체 구독",
    },
  ],
};
