// 연락처 정보 컴포넌트

import { Card, CardContent } from "@/components/ui";
import { contactContent } from "@/lib";

export function ContactInfo() {
  const { info } = contactContent;

  return (
    <Card className="p-6">
      <CardContent className="space-y-4">
        <h2 className="font-bold text-lg">{info.title}</h2>
        {info.items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="text-xl">{item.icon}</span>
            <div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
