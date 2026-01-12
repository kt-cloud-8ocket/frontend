// Contact Hero 섹션

import { Section } from "@/components/ui";
import { contactContent } from "@/lib";

export function ContactHero() {
  const { hero } = contactContent;

  return (
    <Section spacing="md" className="text-center">
      <h1 className="text-2xl sm:text-3xl font-bold">{hero.title}</h1>
      <p className="text-muted-foreground mt-2 md:whitespace-pre-line leading-relaxed">
        {hero.subtitle}
      </p>
    </Section>
  );
}
