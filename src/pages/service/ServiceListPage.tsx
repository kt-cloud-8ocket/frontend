// 서비스 목록 페이지

import { ServiceList } from "@/components/service";
import { useServices } from "@/hooks";

export function ServiceListPage() {
  const { services, loading, error } = useServices();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <p className="text-muted-foreground">로딩 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">서비스 목록</h1>
        <p className="text-muted-foreground">등록된 모든 서비스를 확인하세요</p>
      </div>
      <ServiceList services={services} />
    </div>
  );
}
