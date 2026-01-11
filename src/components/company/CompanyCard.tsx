// 회사 카드 컴포넌트

import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui";
import type { Company } from "@/types";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Link to={`/companies/${company.id}`}>
      <Card className="h-full transition-shadow hover:shadow-lg">
        <CardHeader>
          <CardTitle>{company.name}</CardTitle>
          <CardDescription>{company.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {company.background && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                <strong>배경:</strong> {company.background}
              </p>
            )}
            {company.strengths && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                <strong>강점:</strong> {company.strengths}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
