import { Card } from "@/components/ui";

export function AboutPage() {
  return (
    <div className="space-y-12">
      {/* 회사 소개 */}
      <section>
        <h1 className="text-3xl font-bold">회사 소개</h1>
        <p className="text-muted-foreground mt-4">...</p>
      </section>

      {/* 비전/미션 */}
      <section className="grid md:grid-cols-2 gap-6">
        <Card>비전</Card>
        <Card>미션</Card>
      </section>

      {/* 팀 소개 (선택) */}
      <section>...</section>
    </div>
  );
}
