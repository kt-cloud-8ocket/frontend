import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export function AboutPage() {
  return (
    <div className="space-y-16">
      {/* 히어로 */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">회사 소개</h1>
        <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
          8ocket은 혁신적인 기술로 더 나은 미래를 만들어갑니다
        </p>
      </section>

      {/* 비전/미션 */}
      <section className="grid md:grid-cols-2 gap-8">
        <Card className="p-8">
          <CardHeader>
            <CardTitle className="text-2xl">🎯 비전</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              기술을 통해 모든 사람이 더 나은 삶을 살 수 있는 세상을 만듭니다
            </p>
          </CardContent>
        </Card>
        <Card className="p-8">
          <CardHeader>
            <CardTitle className="text-2xl">🚀 미션</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              혁신적인 솔루션을 통해 고객의 문제를 해결합니다
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 핵심 가치 */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">핵심 가치</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["혁신", "신뢰", "협력"].map((value) => (
            <Card key={value} className="text-center p-6">
              <CardContent>
                <h3 className="font-bold text-lg">{value}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  설명 텍스트
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 연혁 (선택) */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">연혁</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="flex gap-4">
            <span className="font-bold text-primary">2024</span>
            <span className="text-muted-foreground">회사 설립</span>
          </div>
          {/* 더 추가 */}
        </div>
      </section>
    </div>
  );
}
