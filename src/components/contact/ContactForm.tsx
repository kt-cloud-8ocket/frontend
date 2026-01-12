// components/contact/ContactForm.tsx
import { Button, Input } from "@/components/ui";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { contactContent } from "@/lib";

export function ContactForm() {
  const { form } = contactContent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 폼 제출 로직
    console.log("폼 제출");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>문의 양식</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                {form.fields.name.label}{" "}
                <span className="text-destructive">*</span>
              </label>
              <Input
                id="name"
                placeholder={form.fields.name.placeholder}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {form.fields.email.label}{" "}
                <span className="text-destructive">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder={form.fields.email.placeholder}
                required
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">
                {form.fields.company.label}
              </label>
              <Input
                id="company"
                placeholder={form.fields.company.placeholder}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="type" className="text-sm font-medium">
                {form.fields.type.label}{" "}
                <span className="text-destructive">*</span>
              </label>
              <select
                id="type"
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                required
              >
                <option value="">선택하세요</option>
                {form.fields.type.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              {form.fields.message.label}{" "}
              <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
              placeholder={form.fields.message.placeholder}
              required
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            {form.submitButton}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
