// components/home/HomeServices.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import { homeContent } from "@/lib";

export function HomeServices() {
  const { services } = homeContent;

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">{services.title}</h2>
            <p className="text-lg text-muted-foreground">
              자판기 데이터로 양방향 가치를 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.items.map((service) => (
              <Card
                key={service.title}
                className="text-center h-full hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-2xl">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
