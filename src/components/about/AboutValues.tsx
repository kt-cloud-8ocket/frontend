// components/about/AboutValues.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Target, Workflow, Boxes } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "양면 시장 이해",
    description: "문제를 개인(B2C)과 공장(B2B) 관점에서 동시에 정의",
    detail:
      "단순히 도시락을 파는 것이 아니라, 소비자의 식사 경험과 제조사의 생산 효율이라는 두 가지 문제를 하나의 플랫폼으로 해결합니다.",
  },
  {
    icon: Workflow,
    title: "데이터 중심 설계",
    description: "데이터 흐름 중심의 서비스·플랫폼 기획",
    detail:
      "자판기를 단순한 판매 채널이 아닌 데이터 수집 노드로 활용하여, 판매·재고·환경 정보를 실시간으로 수집하고 의사결정에 연결합니다.",
  },
  {
    icon: Boxes,
    title: "확장 가능한 아키텍처",
    description: "IoT·인프라 구조를 고려한 확장 가능한 설계 사고",
    detail:
      "단일 자판기가 아닌 네트워크화된 인프라를 전제로, 지역·시간·환경 변수를 고려한 스케일러블한 시스템을 설계합니다.",
  },
];

export function AboutValues() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">핵심 강점</h2>
            <p className="text-lg text-muted-foreground">
              벤디셰프가 이 문제를 해결할 수 있는 이유
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="relative overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                    <CardDescription className="font-medium text-foreground/80">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.detail}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
