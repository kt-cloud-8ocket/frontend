// components/home/HomeAbout.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui";
import { homeContent } from "@/lib";
import { ArrowRight } from "lucide-react";

export function HomeAbout() {
  const { about } = homeContent;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">{about.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {about.description}
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link
              to={about.cta.href}
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              {about.cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
