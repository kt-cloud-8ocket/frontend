// components/about/AboutHero.tsx
import { aboutContent } from "@/lib";

export function AboutHero() {
  const { hero } = aboutContent;

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {hero.subtitle.split("\n")[0]}
            <br />
            <span className="text-foreground font-semibold">
              {hero.subtitle.split("\n")[1]}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
