// 서비스 카드 컴포넌트

import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link to={`/services/${service.id}`}>
      <Card className="h-full transition-shadow hover:shadow-lg">
        <CardHeader>
          <CardTitle>{service.name}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {service.problem && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                <strong>해결 문제:</strong> {service.problem}
              </p>
            )}
            {service.target && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                <strong>타겟:</strong> {service.target}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
