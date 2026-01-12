import { ServiceList } from "@/components/service";
import { useServices } from "@/hooks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  const consumerServices = services.filter((s) => s.category === "consumer");
  const businessServices = services.filter((s) => s.category === "business");

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">서비스 소개</h1>
        <p className="text-muted-foreground">
          도시락 자판기 데이터 플랫폼이 제공하는 핵심 서비스입니다
        </p>
      </div>

      <Tabs defaultValue="consumer" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="consumer">소비자 서비스</TabsTrigger>
          <TabsTrigger value="business">제조·운영 서비스</TabsTrigger>
        </TabsList>

        <TabsContent value="consumer" className="mt-6">
          <ServiceList services={consumerServices} />
        </TabsContent>

        <TabsContent value="business" className="mt-6">
          <ServiceList services={businessServices} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
