// 서비스 상세 페이지
import { useParams, Link } from "react-router-dom";
import { mockServices } from "@/mocks/services";
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
  const service = mockServices.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <p className="text-destructive">서비스를 찾을 수 없습니다.</p>
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
              {service.title}
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
          <div className="max-w-4xl mx-auto space-y-8">
            {service.features && service.features.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>주요 기능</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {service.benefits && service.benefits.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>기대 효과</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
