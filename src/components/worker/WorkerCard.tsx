// 워커 카드 컴포넌트

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui";
import type { Worker } from "@/types";

interface WorkerCardProps {
  worker: Worker;
}

export function WorkerCard({ worker }: WorkerCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{worker.name}</CardTitle>
        <CardDescription>{worker.role}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {worker.field && (
            <p className="text-sm text-muted-foreground">
              <strong>분야:</strong> {worker.field}
            </p>
          )}
          {worker.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">
              {worker.description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
