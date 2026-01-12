// components/service/ServiceList.tsx
import type { Service } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import * as Icons from "lucide-react";
import { Box, Check, PackageOpen } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface ServiceListProps {
  services: Service[];
}

// 아이콘 이름으로 컴포넌트 가져오기
function getIcon(iconName?: string): IconComponent {
  if (!iconName) return Box;
  const icon = Icons[iconName as keyof typeof Icons];
  if (typeof icon === "function") return icon as IconComponent;
  return Box;
}

export function ServiceList({ services }: ServiceListProps) {
  if (services.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Icons.PackageOpen className="h-12 w-12 text-muted-foreground/50 mb-4" />
        <p className="text-muted-foreground">등록된 서비스가 없습니다</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const IconComponent = getIcon(service.icon);
        return (
          <Card
            key={service.id}
            className="group relative overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/80 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          >
            {/* 배경 그라데이션 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <CardHeader className="relative pb-4">
              {/* 아이콘 */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <IconComponent className="h-6 w-6" />
              </div>

              <CardTitle className="text-lg font-bold tracking-tight">
                {service.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed line-clamp-3">
                {service.description}
              </CardDescription>
            </CardHeader>

            {service.features && service.features.length > 0 && (
              <CardContent className="relative pt-0">
                <div className="space-y-2">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Icons.Check className="h-4 w-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* 기대효과 표시 */}
                {service.benefits && service.benefits.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-xs font-medium text-muted-foreground mb-2">
                      기대효과
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            )}
          </Card>
        );
      })}
    </div>
  );
}
