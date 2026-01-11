// 서비스 상세 페이지

import { useParams } from "react-router-dom";
import { useService } from "@/hooks";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { service, loading, error } = useService(id ? parseInt(id) : null);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <p className="text-muted-foreground">로딩 중...</p>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <p className="text-destructive">
          {error || "서비스를 찾을 수 없습니다."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{service.name}</h1>
        <p className="text-muted-foreground mt-2">{service.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>해결 문제</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{service.problem || "정보 없음"}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>타겟 고객</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{service.target || "정보 없음"}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>주요 기능</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{service.features || "정보 없음"}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>차별점</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{service.uniquePoints || "정보 없음"}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
