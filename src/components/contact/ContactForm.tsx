// Contact 폼 컴포넌트

import { Button, Input } from "@/components/ui";
import { contactContent } from "@/lib";

export function ContactForm() {
  const { form } = contactContent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 폼 제출 로직
    console.log("폼 제출");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium block mb-1">
          {form.fields.name.label}
        </label>
        <Input id="name" placeholder={form.fields.name.placeholder} required />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium block mb-1">
          {form.fields.email.label}
        </label>
        <Input
          id="email"
          type="email"
          placeholder={form.fields.email.placeholder}
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium block mb-1">
          {form.fields.message.label}
        </label>
        <textarea
          id="message"
          className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder={form.fields.message.placeholder}
          required
        />
      </div>

      <Button type="submit" className="w-full">
        {form.submitButton}
      </Button>
    </form>
  );
}
