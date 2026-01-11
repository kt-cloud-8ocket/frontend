import { Button, Input } from "@/components/ui";

export function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">문의하기</h1>

      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium">이름</label>
          <Input placeholder="이름을 입력하세요" />
        </div>
        <div>
          <label className="text-sm font-medium">이메일</label>
          <Input type="email" placeholder="이메일을 입력하세요" />
        </div>
        <div>
          <label className="text-sm font-medium">문의 내용</label>
          <textarea
            className="w-full min-h-[150px] rounded-md border p-3"
            placeholder="문의 내용을 입력하세요"
          />
        </div>
        <Button type="submit" className="w-full">
          제출하기
        </Button>
      </form>
    </div>
  );
}
