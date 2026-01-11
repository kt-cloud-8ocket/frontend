// 회사 목록 컴포넌트

import { CompanyCard } from "./CompanyCard";
import type { Company } from "@/types";

interface CompanyListProps {
  companies: Company[];
}

export function CompanyList({ companies }: CompanyListProps) {
  if (companies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">등록된 회사가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}
