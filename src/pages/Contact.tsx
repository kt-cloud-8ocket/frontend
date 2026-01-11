import { Section } from "@/components/ui";
import { ContactHero, ContactInfo, ContactForm } from "@/components";

export function ContactPage() {
  return (
    <>
      <ContactHero />
      <Section spacing="lg">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>
      </Section>
    </>
  );
}
