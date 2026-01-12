// components/about/AboutVisionMission.tsx
import { Card, CardContent } from "@/components/ui/Card";
import { aboutContent } from "@/lib";
import { Users, Factory } from "lucide-react";

export function AboutVisionMission() {
  const { visionMission } = aboutContent;

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              {visionMission.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {visionMission.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {visionMission.consumer.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {visionMission.consumer.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Factory className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {visionMission.manufacturer.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {visionMission.manufacturer.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-4 pt-8">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
              우리의 솔루션
            </div>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
              {visionMission.solution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
