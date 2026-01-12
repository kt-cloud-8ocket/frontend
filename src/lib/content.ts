// 홈페이지 콘텐츠 데이터

export const homeContent = {
  hero: {
    title: "식사와 생산을\n데이터로 연결합니다",
    subtitle:
      "도시락을 파는 회사가 아니라, 자판기 데이터를 통해 개인에게는 건강한 식사를, 제조사에게는 예측 가능한 생산을 제공하는 플랫폼",
    primaryCTA: { label: "서비스 보기", href: "/services" },
    secondaryCTA: { label: "문의하기", href: "/contact" },
  },

  services: {
    title: "주요 서비스",
    items: [
      {
        icon: "📊",
        title: "실시간 데이터 수집",
        description:
          "판매·재고·환경(온도·날씨·위치) 데이터를 실시간으로 수집하고 이벤트화합니다",
      },
      {
        icon: "🤖",
        title: "AI 메뉴 추천",
        description:
          "구매 패턴 데이터 기반으로 개인별 맞춤 도시락 메뉴를 추천합니다",
      },
      {
        icon: "📈",
        title: "AI 경영 리포트",
        description:
          "수요 예측, 생산 가이드, 원재료 주문량까지 자동으로 생성합니다",
      },
    ],
  },

  about: {
    title: "왜 벤디셰프인가요?",
    description:
      "우리는 도시락 구매가 단순한 소비가 아니라 시간·돈·건강·습관을 좌우하는 반복 행동이라는 점에 주목했습니다. 자판기를 단순한 판매 채널이 아닌 수요를 읽는 데이터 노드로 만들어, 구매와 생산을 연결합니다.",
    cta: { label: "더 알아보기", href: "/about" },
  },
};

export const aboutContent = {
  hero: {
    title: "회사 소개",
    subtitle:
      "벤디셰프는 도시락 자판기 데이터를 통해 식사와 생산을 연결하는 플랫폼입니다",
  },

  vision: {
    icon: "🎯",
    title: "비전",
    description: "데이터로 지속 가능한 식사와 생산 인프라를 만든다",
  },

  mission: {
    icon: "🚀",
    title: "미션",
    description:
      "도시락 자판기 데이터를 통해 개인에게는 건강한 식사 습관을, 제조사에게는 예측 가능한 생산·재고 의사결정을 제공한다",
  },

  values: {
    title: "핵심 가치",
    items: [
      {
        title: "간결한 선택",
        description: "선택을 단순하게, 실행을 빠르게",
      },
      {
        title: "데이터 중심",
        description: "감이 아닌 데이터로 판단한다",
      },
      {
        title: "동반 성장",
        description: "거래가 아닌 파트너십을 만든다",
      },
      {
        title: "지속 가능성",
        description: "반복 가능하고 커질 수 있는 구조를 만든다",
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
      content: `"왜 매번 급하게 먹는 식사는 건강하지 않을까?"
"왜 식품은 항상 남아서 버려질까?"

우리는 이 두 질문이 서로 다른 문제가 아니라, 하나의 구조적 문제에서 시작된다고 생각했습니다.`,
    },
    solution: {
      title: "해결 방향",
      content:
        "우리는 사용자에게 더 많은 선택지를 제공하는 대신, 더 나은 기본값(default)을 제공하는 방향을 선택했습니다. 빠르고, 건강하고, 고민이 필요 없는 식사 경험을 기본으로 만들고, 동시에 그 선택의 결과가 생산과 공급의 의사결정으로 이어지는 구조를 설계했습니다.",
    },
  },

  brandMessage: {
    title: "브랜드 메시지",
    message: "빠르고 건강한 한 끼를,\n데이터로 지속 가능하게.",
  },

  strengths: {
    title: "팀의 핵심 강점",
    items: [
      {
        title: "문제 정의",
        description: "문제를 개인(B2C)과 공장(B2B) 관점에서 동시에 정의",
      },
      {
        title: "서비스 기획",
        description: "데이터 흐름 중심의 서비스·플랫폼 기획",
      },
      {
        title: "확장성 설계",
        description: "IoT·인프라 구조를 고려한 확장 가능한 설계 사고",
      },
    ],
  },
};

export const contactContent = {
  hero: {
    title: "문의하기",
    subtitle:
      "벤디셰프와 함께 데이터 기반 식사·생산 플랫폼을 만들어가실 파트너를 찾습니다",
  },

  form: {
    fields: {
      name: { label: "이름", placeholder: "이름을 입력하세요" },
      email: { label: "이메일", placeholder: "이메일을 입력하세요" },
      company: { label: "회사명", placeholder: "회사명을 입력하세요 (선택)" },
      type: {
        label: "문의 유형",
        options: ["일반 문의", "제조사 파트너십", "설치 문의", "투자 문의"],
      },
      message: { label: "문의 내용", placeholder: "문의 내용을 입력하세요" },
    },
    submitButton: "문의 보내기",
  },

  info: {
    title: "연락처 정보",
    items: [
      { icon: "📧", label: "이메일", value: "contact@vendichef.com" },
      { icon: "📞", label: "전화", value: "02-1234-5678" },
      { icon: "📍", label: "주소", value: "서울시 강남구" },
    ],
  },
};

// 서비스 상세 콘텐츠
export const servicesContent = {
  hero: {
    title: "서비스",
    subtitle:
      "도시락 자판기를 데이터 노드로 활용하여 판매·재고·환경 데이터를 수집하고, 제조·주문·운영 의사결정을 실시간으로 연결합니다",
  },

  problems: {
    title: "해결하고자 하는 문제",
    consumer: {
      title: "개인의 문제",
      items: [
        "편의점 중심 구매 구조로 인한 충동 소비",
        "자극적인 식단으로 건강 관리 어려움",
        "식사 선택에 불필요한 시간 소모",
      ],
    },
    business: {
      title: "공장/제조사의 문제",
      items: [
        "수요 예측 실패로 인한 과잉 생산",
        "높은 폐기 비용",
        "제품이 어디서, 누구에게 팔리는지에 대한 정보 부재",
      ],
    },
  },

  target: {
    title: "타겟 고객",
    b2c: {
      title: "B2C",
      description: "빠르고 건강한 식사가 필요한 직장인·학생·야간 근무자",
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
        description:
          "판매/재고/환경(온도·날씨·위치 등) 데이터 수집 및 이벤트화",
      },
      {
        icon: "🤖",
        title: "AI 도시락 메뉴 추천",
        description:
          "개인별 구매 이력, 구매 시간대, 메뉴 선호도를 축적하여 사용자의 반복 구매 패턴과 식습관을 데이터로 관리",
      },
      {
        icon: "🔄",
        title: "원클릭 리오더",
        description:
          "이전 구매 메뉴를 한 번의 클릭으로 즉시 재구매, 재고/유통기한/시간대에 따라 대체 추천 제공",
      },
      {
        icon: "📊",
        title: "AI 경영 리포트",
        description:
          "지역/시간대/SKU 판매 리포트, 인기 메뉴 분석, 수요 예측, 생산 가이드 자동 생성",
      },
      {
        icon: "🎯",
        title: "마케팅 인사이트",
        description:
          "판매 추이와 이용 패턴을 분석해 할인, 묶음 판매, 노출 강화 등 프로모션 방향 제안",
      },
      {
        icon: "🖥️",
        title: "운영 모니터링",
        description:
          "자판기 상태(장애·재고 소진·온도 이상 등) 모니터링 및 운영 최적화",
      },
    ],
  },

  reportTypes: {
    title: "AI 경영 리포트 구성",
    basic: {
      title: "기본형",
      items: [
        "지역/시간대/SKU 판매 리포트",
        "인기 메뉴 분석",
        "마케팅·프로모션 방향 제안",
        "즉시 의사결정 지원 리포트",
      ],
    },
    premium: {
      title: "고급형",
      items: [
        "수요 예측",
        "생산 가이드",
        "추가 생산 및 재료 구매 수량 제안",
        "원재료 주문 가이드",
        "의사결정 지원 리포트",
      ],
    },
  },
};

// 비즈니스 모델 콘텐츠
export const businessContent = {
  title: "비즈니스 모델",
  subtitle: "다양한 수익 구조를 통해 지속 가능한 플랫폼을 만들어갑니다",

  models: [
    {
      icon: "💳",
      title: "플랫폼 수수료",
      description:
        "도시락 자판기 입점 제조사 대상 플랫폼 이용 수수료. 칸(슬롯)별 월 매출 연동 수수료 구조로, 노출 위치·회전율·판매 성과에 따라 수수료율 차등 적용",
    },
    {
      icon: "📊",
      title: "구독형 AI 경영 리포트",
      description:
        "제조사를 위한 데이터 기반 운영 리포트 구독 모델. 기본형부터 고급형까지 선택 가능",
    },
    {
      icon: "🤖",
      title: "프리미엄 AI 기능",
      description:
        "지역 특화 메뉴 추천, 프로모션 효과 시뮬레이션, 신제품 테스트 및 성공 확률 예측",
    },
    {
      icon: "📺",
      title: "광고 수익",
      description:
        "자판기 화면 및 앱을 활용한 브랜드·제품 노출. 상황·시간·구매 맥락에 맞춘 데이터 기반 타겟 광고",
    },
    {
      icon: "🔄",
      title: "멤버십 & 정기 구독",
      description:
        "B2C 정기 도시락 구독, B2B 기업 복지 연계 및 사무실·병원·근무지 대상 단체 구독",
    },
  ],
};
