import { Link } from "react-router-dom";
import { Button, Section } from "@/components/ui";
import { homeContent } from "@/lib";

export function HomeHero() {
  const { hero } = homeContent;

  return (
    <Section background="primary" spacing="xl" className="text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
        {hero.title}
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground mt-4 sm:mt-6 mx-auto leading-relaxed">
        {hero.subtitle}
      </p>
      <div className="flex gap-4 justify-center mt-8">
        <Button size="lg" asChild>
          <Link to={hero.primaryCTA.href}>{hero.primaryCTA.label}</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link to={hero.secondaryCTA.href}>{hero.secondaryCTA.label}</Link>
        </Button>
      </div>
    </Section>
  );
}
