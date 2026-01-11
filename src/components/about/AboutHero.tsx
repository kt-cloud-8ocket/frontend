// About Hero 섹션

import { Section } from "@/components/ui";
import { aboutContent } from "@/lib";

export function AboutHero() {
  const { hero } = aboutContent;

  return (
    <Section spacing="lg" className="text-center">
      <h1 className="text-4xl font-bold">{hero.title}</h1>
      <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
        {hero.subtitle}
      </p>
    </Section>
  );
}
