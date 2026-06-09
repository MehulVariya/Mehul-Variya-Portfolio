import type { ReactNode } from "react";

type SectionShellProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  id?: string;
  titleAs?: "h1" | "h2";
};

export function SectionShell({ eyebrow, title, children, id, titleAs = "h2" }: SectionShellProps) {
  const Heading = titleAs;

  return (
    <section id={id} className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
          <Heading className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">{title}</Heading>
        </div>
        {children}
      </div>
    </section>
  );
}
