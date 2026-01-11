// 연혁 섹션

import { Section } from "@/components/ui";
import { aboutContent } from "@/lib";

export function AboutHistory() {
  const { history } = aboutContent;

  return (
    <Section spacing="lg">
      <h2 className="text-2xl font-bold text-center mb-8">{history.title}</h2>
      <div className="space-y-4 max-w-2xl mx-auto">
        {history.items.map((item) => (
          <div key={item.year} className="flex gap-4">
            <span className="font-bold text-primary">{item.year}</span>
            <span className="text-muted-foreground">{item.event}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
