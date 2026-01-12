import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

interface AccordionContextValue {
  expandedItems: string[];
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(
  undefined
);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion components must be used within an Accordion provider"
    );
  }
  return context;
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string | string[];
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      type = "single",
      collapsible = false,
      defaultValue,
      children,
      ...props
    },
    ref
  ) => {
    const [expandedItems, setExpandedItems] = React.useState<string[]>(() => {
      if (!defaultValue) return [];
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    });

    const toggleItem = React.useCallback(
      (value: string) => {
        setExpandedItems((prev) => {
          if (type === "single") {
            if (prev.includes(value)) {
              return collapsible ? [] : prev;
            }
            return [value];
          }
          // multiple
          if (prev.includes(value)) {
            return prev.filter((item) => item !== value);
          }
          return [...prev, value];
        });
      },
      [type, collapsible]
    );

    return (
      <AccordionContext.Provider value={{ expandedItems, toggleItem, type }}>
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

interface AccordionItemContextValue {
  value: string;
  isExpanded: boolean;
}

const AccordionItemContext = React.createContext<
  AccordionItemContextValue | undefined
>(undefined);

function useAccordionItem() {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      "AccordionItem components must be used within an AccordionItem"
    );
  }
  return context;
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const { expandedItems } = useAccordion();
    const isExpanded = expandedItems.includes(value);

    return (
      <AccordionItemContext.Provider value={{ value, isExpanded }}>
        <div
          ref={ref}
          className={cn("border-b", className)}
          data-state={isExpanded ? "open" : "closed"}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { toggleItem } = useAccordion();
  const { value, isExpanded } = useAccordionItem();

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => toggleItem(value)}
      className={cn(
        "flex flex-1 w-full items-center justify-between py-4 font-medium transition-all hover:underline",
        className
      )}
      data-state={isExpanded ? "open" : "closed"}
      aria-expanded={isExpanded}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isExpanded && "rotate-180"
        )}
      />
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { isExpanded } = useAccordionItem();

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all",
        isExpanded ? "animate-accordion-down" : "hidden",
        className
      )}
      data-state={isExpanded ? "open" : "closed"}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
