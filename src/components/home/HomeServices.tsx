import {
  Section,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui";
import { homeContent } from "@/lib";

export function HomeServices() {
  const { services } = homeContent;
  return (
    <Section spacing="lg">
      <h2 className="text-3xl font-bold text-center mb-12">{services.title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.items.map((service) => (
          <Card
            key={service.title}
            className="text-center p-6 h-full flex flex-col"
          >
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-2xl">
                {service.icon}
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              <p className="text-muted-foreground whitespace-nowrap">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
