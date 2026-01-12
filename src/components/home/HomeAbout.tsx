import { Link } from "react-router-dom";
import { Button, Section } from "@/components/ui";
import { homeContent } from "@/lib";

export function HomeAbout() {
  const { about } = homeContent;

  return (
    <Section background="muted" spacing="lg" className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        {about.title}
      </h2>
      <p className="text-muted-foreground mx-auto md:whitespace-pre-line leading-relaxed">
        {about.description}
      </p>
      <Button className="mt-8" variant="outline" asChild>
        <Link to={about.cta.href}>{about.cta.label}</Link>
      </Button>
    </Section>
  );
}
