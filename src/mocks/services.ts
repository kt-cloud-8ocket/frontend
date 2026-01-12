import type { Service } from "@/types";

export const mockServices: Service[] = [
  // ===== 소비자 서비스 (B2C) =====
  {
    id: "consumer-1",
    category: "consumer",
    title: "맞춤 메뉴 추천",
    description:
      "구매 패턴을 학습해 나만의 취향에 맞는 도시락 메뉴를 자동으로 추천합니다. 식사 선택에 드는 시간과 에너지를 줄여드립니다.",
    icon: "Sparkles",
    features: [
      "AI 기반 개인화 추천",
      "구매 이력 분석",
      "시간대별 선호도 반영",
      "신메뉴 맞춤 알림",
    ],
    benefits: [
      "메뉴 고민 시간 절약",
      "새로운 메뉴 발견",
      "만족도 높은 식사 경험",
    ],
  },
  {
    id: "consumer-2",
    category: "consumer",
    title: "원클릭 재구매",
    description:
      "자주 구매하는 메뉴를 한 번의 터치로 간편하게 재주문할 수 있습니다. 바쁜 일상 속에서도 빠르고 편리한 식사를 제공합니다.",
    icon: "MousePointerClick",
    features: [
      "즐겨찾기 메뉴 등록",
      "원터치 결제",
      "정기 구매 설정",
      "픽업 시간 예약",
    ],
    benefits: ["주문 시간 단축", "편리한 결제 경험", "일관된 식사 품질"],
  },
  {
    id: "consumer-3",
    category: "consumer",
    title: "건강 식단 관리",
    description:
      "칼로리, 영양소 정보를 기반으로 건강한 식단을 관리할 수 있도록 돕습니다. 개인 건강 목표에 맞는 메뉴를 제안합니다.",
    icon: "Heart",
    features: [
      "영양 정보 제공",
      "칼로리 트래킹",
      "알레르기 필터링",
      "건강 목표 설정",
    ],
    benefits: ["균형 잡힌 식사", "건강 목표 달성 지원", "식단 기록 자동화"],
  },

  // ===== 제조·운영 서비스 (B2B) =====
  {
    id: "business-1",
    category: "business",
    title: "실시간 데이터 수집",
    description:
      "자판기에서 발생하는 판매 기록, 재고 변동, 설치 위치의 환경 정보(온도, 날씨, 유동인구 등)를 실시간으로 수집해 축적합니다. 자판기가 '살아있는 데이터 센서' 역할을 합니다.",
    icon: "Database",
    features: [
      "판매 기록 실시간 수집",
      "재고 변동 모니터링",
      "환경 정보 센싱 (온도, 날씨)",
      "유동인구 데이터 연동",
    ],
    benefits: ["데이터 기반 의사결정", "실시간 현황 파악", "트렌드 변화 감지"],
  },
  {
    id: "business-2",
    category: "business",
    title: "AI 수요 예측",
    description:
      "축적된 데이터를 AI가 분석해 '어느 지역에서 어떤 메뉴가 언제 잘 팔리는지', '다음 주에는 어떤 메뉴를 몇 개나 만들어야 하는지'를 자동으로 예측합니다.",
    icon: "BrainCircuit",
    features: [
      "지역별 판매 분석",
      "시간대별 수요 예측",
      "메뉴별 트렌드 분석",
      "계절·날씨 영향 분석",
    ],
    benefits: ["정확한 생산 계획 수립", "과잉 생산 방지", "판매 기회 극대화"],
  },
  {
    id: "business-3",
    category: "business",
    title: "생산 계획 자동화",
    description:
      "데이터 기반으로 최적의 생산량을 자동 산출하고, 원재료 주문 시점과 수량까지 제안합니다. 감이나 경험이 아닌 데이터로 의사결정합니다.",
    icon: "Factory",
    features: [
      "일별/주별 생산량 제안",
      "원재료 주문 자동화",
      "재고 최적화 알고리즘",
      "폐기율 최소화 관리",
    ],
    benefits: ["폐기 비용 절감", "재고 관리 효율화", "운영 비용 최적화"],
  },
  {
    id: "business-4",
    category: "business",
    title: "운영 대시보드",
    description:
      "전체 자판기 네트워크의 실시간 현황을 한눈에 파악할 수 있는 통합 대시보드를 제공합니다. 재고 부족, 기기 이상 등을 즉시 알림받습니다.",
    icon: "LayoutDashboard",
    features: [
      "실시간 판매 현황",
      "재고 알림 시스템",
      "기기 상태 모니터링",
      "매출 리포트 자동 생성",
    ],
    benefits: ["운영 효율 향상", "빠른 문제 대응", "의사결정 시간 단축"],
  },
];
