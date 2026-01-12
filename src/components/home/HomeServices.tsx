// components/home/HomeServices.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import { homeContent } from "@/lib";
import { BarChart3, Bot, TrendingUp, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  Bot,
  TrendingUp,
};

export function HomeServices() {
  const { services } = homeContent;

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">{services.title}</h2>
            <p className="text-lg text-muted-foreground">{services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.items.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card
                  key={service.title}
                  className="text-center h-full hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="mx-auto w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-7 h-7 text-primary" />}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
