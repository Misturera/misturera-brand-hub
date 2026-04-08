import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, className, light }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-10 md:mb-14", className)}>
      <h2 className={cn(
        "font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
        light ? "text-primary-foreground" : "text-foreground"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed",
          light ? "text-primary-foreground/70" : "text-muted-foreground"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
