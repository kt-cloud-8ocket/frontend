// 회사 상세 페이지

import { useParams } from "react-router-dom";
import { useCompany } from "@/hooks";
import { ServiceList } from "@/components/service";
import { WorkerList } from "@/components/worker";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";

export function CompanyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { company, loading, error } = useCompany(id ? parseInt(id) : null);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <p className="text-muted-foreground">로딩 중...</p>
      </div>
    );
  }

  if (error || !company) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <p className="text-destructive">
          {error || "회사를 찾을 수 없습니다."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{company.name}</h1>
        <p className="text-muted-foreground mt-2">{company.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>배경</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{company.background || "정보 없음"}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>강점</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{company.strengths || "정보 없음"}</p>
          </CardContent>
        </Card>
      </div>

      {company.services && company.services.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">서비스</h2>
          <ServiceList services={company.services} />
        </div>
      )}

      {company.workers && company.workers.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">팀원</h2>
          <WorkerList workers={company.workers} />
        </div>
      )}
    </div>
  );
}
