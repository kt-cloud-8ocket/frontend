// 서비스 목록 컴포넌트

import { ServiceCard } from "./ServiceCard";
import type { Service } from "@/types";

interface ServiceListProps {
  services: Service[];
}

export function ServiceList({ services }: ServiceListProps) {
  if (services.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">등록된 서비스가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
