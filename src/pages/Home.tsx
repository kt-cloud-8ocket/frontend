// 홈 페이지

import { Link } from "react-router-dom";
import { Button } from "@/components/ui";

export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          8ocket에 오신 것을 환영합니다
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          혁신적인 스타트업과 서비스를 한눈에 확인하세요
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link to="/companies">회사 둘러보기</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/services">서비스 보기</Link>
        </Button>
      </div>
    </div>
  );
}
