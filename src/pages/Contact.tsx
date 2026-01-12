import { ContactHero, ContactInfo, ContactForm } from "@/components/contact";

export function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
