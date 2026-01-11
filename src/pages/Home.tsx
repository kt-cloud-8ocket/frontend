// 홈 페이지

import { Button } from "@/components/ui";

export function HomePage() {
  return (
    // 섹션 구성 예시
    <>
      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold">타이틀</h1>
        <p className="text-muted-foreground mt-4">설명</p>
        <Button className="mt-8">CTA</Button>
      </section>

      {/* 서비스 소개 */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">서비스</h2>
          <div className="grid md:grid-cols-3 gap-6">{/* Card들 */}</div>
        </div>
      </section>

      {/* 회사 소개 요약 */}
      <section className="py-16">...</section>
    </>
  );
}
