// 홈 페이지

import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui";

export function HomePage() {
  return (
    <>
      {/* Hero 섹션 */}
      <section className="py-24 text-center bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            혁신적인 기술로
            <br />더 나은 미래를 만듭니다
          </h1>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            8ocket은 최신 기술을 통해 비즈니스의 성장을 돕습니다
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button size="lg" asChild>
              <Link to="/services">서비스 보기</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">문의하기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 서비스 하이라이트 */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">주요 서비스</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  🚀
                </div>
                <CardTitle>서비스 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">서비스 설명</p>
              </CardContent>
            </Card>
            {/* 카드 2, 3 반복 */}
          </div>
        </div>
      </section>

      {/* 회사 소개 요약 */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">왜 8ocket인가요?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            설명 텍스트...
          </p>
          <Button className="mt-8" variant="outline" asChild>
            <Link to="/about">더 알아보기</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
