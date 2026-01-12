// components/service/ServiceDetailPage.tsx
import { useParams, Link } from "react-router-dom";
import { useService } from "@/hooks";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
} from "@/components/ui";
import { ArrowLeft } from "lucide-react";

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
    <>
      {/* Hero 섹션 */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link to="/services" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                서비스 목록
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* 상세 정보 섹션 */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>해결 문제</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.problem || "정보 없음"}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>타겟 고객</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.target || "정보 없음"}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>주요 기능</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.features || "정보 없음"}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>차별점</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.uniquePoints || "정보 없음"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
