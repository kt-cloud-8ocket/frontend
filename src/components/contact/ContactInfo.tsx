// components/contact/ContactInfo.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { contactContent } from "@/lib";
import { Mail, Phone, MapPin } from "lucide-react";

const iconMap = {
  "📧": Mail,
  "📞": Phone,
  "📍": MapPin,
};

export function ContactInfo() {
  const { info } = contactContent;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{info.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {info.items.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div key={item.label} className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  {Icon ? (
                    <Icon className="w-5 h-5 text-primary" />
                  ) : (
                    <span className="text-xl">{item.icon}</span>
                  )}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            제조사 파트너십, 자판기 설치, 투자 관련 문의는 담당자가 24시간 내에
            연락드립니다.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
