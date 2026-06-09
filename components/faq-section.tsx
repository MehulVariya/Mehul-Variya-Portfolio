import { MotionBlock } from "@/components/motion-block";
import { SectionShell } from "@/components/section-shell";
import { getFaqs } from "@/lib/content-service";

export default async function FaqSection() {
  const faq = await getFaqs();

  return (
    <SectionShell eyebrow="FAQ" title="Direct answers about Mehul Variya's work.">
      <div className="grid gap-4 md:grid-cols-2">
        {faq.map((item, index) => (
          <MotionBlock key={item.question} delay={index * 0.04}>
            <article className="rounded-[8px] border border-border bg-card p-5">
              {/* FAQ answer */}
              <h3 className="font-heading text-lg font-semibold">{item.question}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{item.answer}</p>
            </article>
          </MotionBlock>
        ))}
      </div>
    </SectionShell>
  );
}
