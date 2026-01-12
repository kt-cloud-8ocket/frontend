// FAQ 페이지

import { Section } from "@/components/ui";
import { FAQList } from "@/components/faq/FAQList";

export function FAQPage() {
  return (
    <>
      <Section className="bg-muted/30">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">자주 묻는 질문</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            벤디셰프 서비스에 대해 궁금하신 점을 확인해보세요
          </p>
        </div>
      </Section>
      <Section>
        <FAQList />
      </Section>
    </>
  );
}
