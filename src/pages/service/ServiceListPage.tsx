import { ServiceList } from "@/components/service";
import { mockServices } from "@/mocks/services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ServiceListPage() {
  const consumerServices = mockServices.filter(
    (s) => s.category === "consumer"
  );
  const businessServices = mockServices.filter(
    (s) => s.category === "business"
  );

  return (
    <>
      {/* Hero 섹션 */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              서비스 소개
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              도시락 자판기 데이터 플랫폼이 제공하는 핵심 서비스입니다
            </p>
          </div>
        </div>
      </section>

      {/* 서비스 목록 섹션 */}
      <section className="py-12 md:py-16">
        <div className="container">
          <Tabs defaultValue="consumer" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto">
              <TabsTrigger value="consumer">소비자 서비스</TabsTrigger>
              <TabsTrigger value="business">제조·운영 서비스</TabsTrigger>
            </TabsList>

            <TabsContent value="consumer" className="mt-8">
              <ServiceList services={consumerServices} />
            </TabsContent>

            <TabsContent value="business" className="mt-8">
              <ServiceList services={businessServices} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
