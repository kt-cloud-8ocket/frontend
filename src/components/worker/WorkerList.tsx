// 워커 목록 컴포넌트

import { WorkerCard } from "./WorkerCard";
import type { Worker } from "@/types";

interface WorkerListProps {
  workers: Worker[];
}

export function WorkerList({ workers }: WorkerListProps) {
  if (workers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">등록된 팀원이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {workers.map((worker) => (
        <WorkerCard key={worker.id} worker={worker} />
      ))}
    </div>
  );
}
