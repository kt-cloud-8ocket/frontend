// components/contact/ContactHero.tsx
import { contactContent } from "@/lib";

export function ContactHero() {
  const { hero } = contactContent;

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
