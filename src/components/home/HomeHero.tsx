// components/home/HomeHero.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui";
import { homeContent } from "@/lib";

export function HomeHero() {
  const { hero } = homeContent;

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <Link to={hero.primaryCTA.href}>{hero.primaryCTA.label}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to={hero.secondaryCTA.href}>{hero.secondaryCTA.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
