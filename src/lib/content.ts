// 홈페이지 콘텐츠 데이터

export const homeContent = {
  hero: {
    title: "혁신적인 기술로\n더 나은 미래를 만듭니다",
    subtitle: "8ocket은 최신 기술을 통해 비즈니스의 성장을 돕습니다",
    primaryCTA: { label: "서비스 보기", href: "/services" },
    secondaryCTA: { label: "문의하기", href: "/contact" },
  },

  services: {
    title: "주요 서비스",
    items: [
      { icon: "🚀", title: "서비스 1", description: "서비스 설명" },
      { icon: "💡", title: "서비스 2", description: "서비스 설명" },
      { icon: "🔧", title: "서비스 3", description: "서비스 설명" },
    ],
  },

  about: {
    title: "왜 8ocket인가요?",
    description: "설명 텍스트...",
    cta: { label: "더 알아보기", href: "/about" },
  },
};

export const aboutContent = {
  hero: {
    title: "회사 소개",
    subtitle: "8ocket은 혁신적인 기술로 더 나은 미래를 만들어갑니다",
  },

  vision: {
    icon: "🎯",
    title: "비전",
    description:
      "기술을 통해 모든 사람이 더 나은 삶을 살 수 있는 세상을 만듭니다",
  },

  mission: {
    icon: "🚀",
    title: "미션",
    description: "혁신적인 솔루션을 통해 고객의 문제를 해결합니다",
  },

  values: {
    title: "핵심 가치",
    items: [
      { title: "혁신", description: "설명 텍스트" },
      { title: "신뢰", description: "설명 텍스트" },
      { title: "협력", description: "설명 텍스트" },
    ],
  },

  history: {
    title: "연혁",
    items: [{ year: "2024", event: "회사 설립" }],
  },
};

export const contactContent = {
  hero: {
    title: "문의하기",
    subtitle: "궁금한 점이 있으시면 언제든 문의해주세요",
  },

  form: {
    fields: {
      name: { label: "이름", placeholder: "이름을 입력하세요" },
      email: { label: "이메일", placeholder: "이메일을 입력하세요" },
      message: { label: "문의 내용", placeholder: "문의 내용을 입력하세요" },
    },
    submitButton: "제출하기",
  },

  info: {
    title: "연락처 정보",
    items: [
      { icon: "📧", label: "이메일", value: "contact@8ocket.com" },
      { icon: "📞", label: "전화", value: "02-1234-5678" },
      { icon: "📍", label: "주소", value: "서울시 강남구" },
    ],
  },
};
