import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/50">
      <div className="absolute -left-24 -top-24 size-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-16 bottom-0 size-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}