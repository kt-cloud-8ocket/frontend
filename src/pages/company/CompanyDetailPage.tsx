// pages/company/CompanyDetailPage.tsx
import { useParams, Link } from "react-router-dom";
import { useCompany } from "@/hooks";
import { ServiceList } from "@/components/service";
import { WorkerList } from "@/components/worker";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
} from "@/components/ui";
import { ArrowLeft } from "lucide-react";

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
    <>
      {/* Hero 섹션 */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link to="/companies" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                제조사 목록
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {company.name}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed">
              {company.description}
            </p>
          </div>
        </div>
      </section>

      {/* 상세 정보 섹션 */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>배경</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {company.background || "정보 없음"}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>강점</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {company.strengths || "정보 없음"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {company.services && company.services.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">서비스</h2>
                <ServiceList services={company.services} />
              </div>
            )}

            {company.workers && company.workers.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">팀원</h2>
                <WorkerList workers={company.workers} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
