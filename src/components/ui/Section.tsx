import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "muted" | "primary";
  spacing?: "sm" | "md" | "lg" | "xl";
  container?: boolean;
}

const backgroundStyles = {
  default: "bg-background",
  muted: "bg-muted/30",
  primary: "bg-primary/5",
};

const spacingStyles = {
  sm: "py-8",
  md: "py-12",
  lg: "py-20",
  xl: "py-24",
};

export function Section({
  children,
  className,
  background = "default",
  spacing = "lg",
  container = true,
}: SectionProps) {
  return (
    <section
      className={cn(
        backgroundStyles[background],
        spacingStyles[spacing],
        className
      )}
    >
      {container ? <div className="container">{children}</div> : children}
    </section>
  );
}
