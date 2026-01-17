import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHero({ title, subtitle, children, className }: PageHeroProps) {
  return (
    <section className={cn("pt-32 pb-16 md:pt-40 md:pb-20 bg-background", className)}>
      <div className="container-narrow text-center">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
