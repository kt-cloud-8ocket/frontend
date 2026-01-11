// 비전/미션 섹션

import {
  Section,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui";
import { aboutContent } from "@/lib";

export function AboutVisionMission() {
  const { vision, mission } = aboutContent;

  return (
    <Section spacing="lg">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              {vision.icon} {vision.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{vision.description}</p>
          </CardContent>
        </Card>
        <Card className="p-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              {mission.icon} {mission.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{mission.description}</p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
