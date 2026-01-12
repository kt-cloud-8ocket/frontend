// components/home/HomeAbout.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui";
import { homeContent } from "@/lib";
import {
  ArrowRight,
  Database,
  Users,
  Target,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Database,
  Users,
  Target,
};

export function HomeAbout() {
  const { about } = homeContent;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* 헤더 */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">{about.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {about.description}
            </p>
          </div>

          {/* 강조 포인트 - 구분선 스타일 */}
          <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-border">
            {about.highlights.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-8 py-4 sm:py-0"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    {Icon && <Icon className="w-5 h-5 text-primary" />}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
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
      </div>
    </section>
  );
}
