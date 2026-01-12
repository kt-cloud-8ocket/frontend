// components/home/HomeHero.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui";
import { homeContent } from "@/lib";

export function HomeHero() {
  const { hero } = homeContent;

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* 뱃지 */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            🍱 자판기 데이터 기반 푸드테크 플랫폼
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            <span className="block">식사와 생산을</span>
            <span className="block mt-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              데이터로 연결합니다
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
            <span className="block">
              자판기 데이터로 개인에게는 건강한 식사를,
            </span>
            <span className="block">
              제조사에게는 예측 가능한 생산을 제공합니다.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              className="text-base px-8 py-6 shadow-lg shadow-primary/25"
              asChild
            >
              <Link to={hero.primaryCTA.href}>{hero.primaryCTA.label}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6"
              asChild
            >
              <Link to={hero.secondaryCTA.href}>{hero.secondaryCTA.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
