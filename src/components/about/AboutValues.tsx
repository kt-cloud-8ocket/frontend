// components/about/AboutValues.tsx
import { Card, CardContent } from "@/components/ui/Card";
import { Target, Workflow, Boxes } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "양면 시장 이해",
    description: "B2C·B2B 동시 문제 정의",
  },
  {
    icon: Workflow,
    title: "데이터 중심 설계",
    description: "데이터 흐름 중심 플랫폼 기획",
  },
  {
    icon: Boxes,
    title: "확장 가능한 구조",
    description: "IoT 기반 스케일러블 설계",
  },
];

export function AboutValues() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">핵심 강점</h2>
            <p className="text-lg text-muted-foreground">
              벤디셰프가 이 문제를 해결할 수 있는 이유
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="text-center border-0 bg-transparent shadow-none"
                >
                  <CardContent className="pt-6 space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
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
