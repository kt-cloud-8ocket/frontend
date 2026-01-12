// components/faq/FAQList.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { FAQ, FAQCategory } from "@/types/index";

const categories: FAQCategory[] = [
  {
    id: "service",
    label: "서비스 일반",
    description: "벤디셰프 플랫폼에 대한 기본 정보",
  },
  {
    id: "consumer",
    label: "소비자",
    description: "도시락 구매 및 이용 방법",
  },
  {
    id: "business",
    label: "제조사/운영자",
    description: "입점 및 비즈니스 협력",
  },
  {
    id: "data",
    label: "데이터/보안",
    description: "데이터 수집 및 보안 정책",
  },
  {
    id: "partnership",
    label: "파트너십",
    description: "제휴 및 협력 문의",
  },
];

const faqs: FAQ[] = [
  // 서비스 일반
  {
    id: "service-1",
    category: "service",
    question: "벤디셰프는 어떤 서비스인가요?",
    answer:
      "벤디셰프는 도시락 자판기를 데이터 수집 거점으로 활용하여, 소비자에게는 맞춤형 식사 추천을, 제조사에게는 수요 예측 기반 생산 가이드를 제공하는 양방향 데이터 플랫폼입니다. 단순히 도시락을 판매하는 것이 아니라, 식사와 생산을 데이터로 연결합니다.",
  },
  {
    id: "service-2",
    category: "service",
    question: "기존 도시락 자판기와 무엇이 다른가요?",
    answer:
      "기존 자판기가 단순 판매 채널이라면, 벤디셰프는 판매·재고·환경 데이터를 실시간으로 수집하고 분석합니다. 이를 통해 개인별 맞춤 추천, 원클릭 재구매, AI 경영 리포트 등 데이터 기반 서비스를 제공합니다.",
  },
  {
    id: "service-3",
    category: "service",
    question: "어떤 문제를 해결하나요?",
    answer:
      "소비자에게는 편의점 중심 구매로 인한 충동 소비와 불규칙한 식단 문제를 해결하고, 제조사에게는 수요 예측 실패로 인한 과잉 생산과 폐기 문제를 해결합니다. 데이터를 통해 양쪽 모두의 비효율을 줄입니다.",
  },

  // 소비자
  {
    id: "consumer-1",
    category: "consumer",
    question: "도시락은 어떻게 구매하나요?",
    answer:
      "자판기 화면 또는 모바일 앱에서 메뉴를 선택하고 결제하면 됩니다. AI가 개인 구매 패턴을 학습하여 맞춤 메뉴를 추천하며, 자주 구매하는 메뉴는 원클릭으로 즉시 재구매할 수 있습니다.",
  },
  {
    id: "consumer-2",
    category: "consumer",
    question: "AI 추천은 어떻게 작동하나요?",
    answer:
      "구매 이력, 구매 시간대, 메뉴 선호도를 축적하여 개인의 반복 구매 패턴과 식습관을 학습합니다. 이를 바탕으로 시간대, 날씨, 재고 상황 등을 고려한 최적의 메뉴를 추천합니다.",
  },
  {
    id: "consumer-3",
    category: "consumer",
    question: "원클릭 리오더는 무엇인가요?",
    answer:
      "이전에 구매했던 메뉴를 한 번의 클릭으로 즉시 재구매할 수 있는 기능입니다. 만약 해당 메뉴의 재고가 없거나 유통기한이 임박한 경우, 시간대에 맞는 대체 메뉴를 자동으로 추천합니다.",
  },
  {
    id: "consumer-4",
    category: "consumer",
    question: "멤버십이나 정기 구독도 가능한가요?",
    answer:
      "네, 정기 도시락 구독 서비스를 제공합니다. 개인 소비 패턴 기반 맞춤 추천을 받을 수 있으며, 기업 복지 연계를 통한 단체 구독도 가능합니다.",
  },

  // 제조사/운영자
  {
    id: "business-1",
    category: "business",
    question: "제조사는 어떤 혜택을 받나요?",
    answer:
      "실시간 판매 데이터, 지역별·시간대별 수요 예측, SKU별 생산 가이드, 원재료 주문 가이드, 마케팅 방향 제안 등 AI 경영 리포트를 제공받습니다. 데이터 기반으로 과잉 생산을 줄이고 폐기 비용을 절감할 수 있습니다.",
  },
  {
    id: "business-2",
    category: "business",
    question: "입점 비용은 어떻게 되나요?",
    answer:
      "칸(슬롯)별 월 매출 연동 수수료 구조로 운영됩니다. 노출 위치, 회전율, 판매 성과에 따라 수수료율이 차등 적용되며, 단순 공간 임대가 아닌 판매+데이터+운영 가이드를 포함한 플랫폼 이용료입니다.",
  },
  {
    id: "business-3",
    category: "business",
    question: "AI 경영 리포트는 어떤 내용을 포함하나요?",
    answer:
      "기본형은 판매 현황, 인기 메뉴 분석, 마케팅 방향 제안을 제공하고, 고급형은 수요 예측, 생산 가이드, 추가 생산 수량 제안, 원재료 주문 가이드까지 포함합니다. 제조사가 별도 분석 없이 바로 의사결정에 활용할 수 있는 형태로 제공됩니다.",
  },
  {
    id: "business-4",
    category: "business",
    question: "자판기 상태는 어떻게 모니터링하나요?",
    answer:
      "실시간으로 자판기 상태(장애, 재고 소진, 온도 이상 등)를 모니터링하고, 문제 발생 시 즉시 알림을 받을 수 있습니다. 운영 효율을 높이기 위한 데이터 기반 최적화 가이드도 함께 제공합니다.",
  },
  {
    id: "business-5",
    category: "business",
    question: "프리미엄 AI 기능은 무엇인가요?",
    answer:
      "지역 특화 메뉴 추천, 프로모션 효과 시뮬레이션, 신제품 테스트 및 성공 확률 예측 등 더 정교한 의사결정을 위한 고급 AI 기능입니다. 기능 단위 또는 패키지 형태로 선택할 수 있습니다.",
  },

  // 데이터/보안
  {
    id: "data-1",
    category: "data",
    question: "어떤 데이터를 수집하나요?",
    answer:
      "판매 데이터(메뉴, 시간, 금액), 재고 데이터(SKU별 재고량, 유통기한), 환경 데이터(온도, 날씨, 위치, 유동인구) 등을 수집합니다. 수집된 데이터는 개인별 추천과 제조사 의사결정 지원에 활용됩니다.",
  },
  {
    id: "data-2",
    category: "data",
    question: "개인정보는 안전하게 보호되나요?",
    answer:
      "네, 개인정보 보호법을 준수하며 다층 방어 보안 구조를 적용하고 있습니다. 사이버보안 전문팀이 보안 아키텍처 설계, 위협 분석, 데이터 보호 정책을 관리하고 있습니다.",
  },
  {
    id: "data-3",
    category: "data",
    question: "수집된 데이터는 어떻게 활용되나요?",
    answer:
      "개인별 맞춤 추천, 제조사 수요 예측, 생산 가이드, 운영 최적화 등 서비스 품질 향상을 위해서만 활용됩니다. 제3자 제공이나 마케팅 목적으로 무단 사용하지 않습니다.",
  },

  // 파트너십
  {
    id: "partnership-1",
    category: "partnership",
    question: "제휴 및 협력은 어떻게 문의하나요?",
    answer:
      "제조사 입점, 자판기 설치 장소 제안, 기업 복지 제휴, 광고 협력 등 다양한 형태의 파트너십이 가능합니다. 홈페이지의 문의하기 또는 이메일을 통해 연락주시면 담당자가 안내해드립니다.",
  },
  {
    id: "partnership-2",
    category: "partnership",
    question: "자판기는 어디에 설치되나요?",
    answer:
      "직장인과 학생이 많은 오피스 빌딩, 대학교, 병원, 공장, 야간 근무지 등을 우선으로 설치합니다. 빠르고 건강한 식사가 필요한 환경을 중심으로 확장해나갈 계획입니다.",
  },
  {
    id: "partnership-3",
    category: "partnership",
    question: "기업 복지 연계는 어떻게 진행되나요?",
    answer:
      "기업 사무실이나 근무지에 자판기를 설치하고, 임직원 대상 단체 구독 또는 복지 포인트 연동이 가능합니다. 개인 소비 패턴 기반 맞춤 추천도 함께 제공됩니다.",
  },
];

export function FAQList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("service");

  const filteredFAQs = faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <section className="py-16 md:py-10">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <Tabs
            defaultValue="service"
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-xs sm:text-sm"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-6"
              >
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 p-6 rounded-lg bg-muted/50 text-center space-y-4">
            <p className="font-medium">찾으시는 질문이 없으신가요?</p>
            <p className="text-sm text-muted-foreground">
              더 자세한 내용은 문의하기를 통해 확인하실 수 있습니다.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              문의하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
