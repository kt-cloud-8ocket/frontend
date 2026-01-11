// 핵심 가치 섹션

import { Section, Card, CardContent } from "@/components/ui";
import { aboutContent } from "@/lib";

export function AboutValues() {
  const { values } = aboutContent;

  return (
    <Section spacing="lg">
      <h2 className="text-2xl font-bold text-center mb-8">{values.title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {values.items.map((value) => (
          <Card key={value.title} className="text-center p-6">
            <CardContent>
              <h3 className="font-bold text-lg">{value.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
