// components/about/AboutHistory.tsx
import { Card, CardContent } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

const milestones = [
  {
    phase: "문제 발견",
    title: "소비와 생산의 단절",
    description:
      "도시락 구매가 반복되는 일상 행동임에도 데이터로 연결되지 않고, 제조사는 수요를 예측하지 못해 폐기를 반복한다는 것을 발견",
  },
  {
    phase: "솔루션 기획",
    title: "자판기를 데이터 노드로",
    description:
      "도시락 자판기를 판매 채널이 아닌 데이터 수집 거점으로 재정의하고, 양방향 플랫폼 구조 설계",
  },
  {
    phase: "플랫폼 구축",
    title: "AI 기반 의사결정 시스템",
    description:
      "실시간 데이터 수집부터 소비자 추천, 제조사 리포트까지 통합된 플랫폼 개발",
  },
];

export function AboutHistory() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">우리의 여정</h2>
            <p className="text-lg text-muted-foreground">
              문제를 발견하고 플랫폼을 만들기까지
            </p>
          </div>

          <div className="relative space-y-8">
            {/* 타임라인 라인 */}
            <div className="absolute left-[23px] top-8 bottom-8 w-0.5 bg-border hidden md:block" />

            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="relative hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-4 border-background">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {milestone.phase}
                      </div>
                      <h3 className="text-xl font-semibold">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
