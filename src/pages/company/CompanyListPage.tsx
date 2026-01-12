// pages/company/CompanyListPage.tsx
import { CompanyList } from "@/components/company";
import { mockCompanies } from "@/mocks/companies";

export function CompanyListPage() {
  return (
    <>
      {/* Hero 섹션 */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              파트너 제조사
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              VendiChef와 함께하는 도시락 제조 파트너사입니다
            </p>
          </div>
        </div>
      </section>

      {/* 목록 섹션 */}
      <section className="py-12 md:py-16">
        <div className="container">
          <CompanyList companies={mockCompanies} />
        </div>
      </section>
    </>
  );
}
