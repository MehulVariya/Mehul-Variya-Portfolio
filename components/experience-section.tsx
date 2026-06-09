import { MotionBlock } from "@/components/motion-block";
import { SectionShell } from "@/components/section-shell";
import { getExperiences } from "@/lib/content-service";

export default async function ExperienceSection() {
  const experiences = await getExperiences();

  return (
    <SectionShell eyebrow="Experience" title="Recent backend work and product delivery history." id="experience">
      <div className="space-y-4">
        {experiences.map((item, index) => (
          <MotionBlock key={`${item.role}-${item.duration}`} delay={index * 0.06}>
            <article className="rounded-[8px] border border-border bg-card p-6">
              {/* Role header */}
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-heading text-xl font-semibold">{item.role}</h3>
                  <p className="mt-1 text-muted-foreground">{item.company}</p>
                </div>
                <p className="text-sm font-semibold text-primary">{item.duration}</p>
              </div>
              <p className="mt-4 text-sm font-medium text-foreground">Stack: {item.stack}</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="leading-7">
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </MotionBlock>
        ))}
      </div>
    </SectionShell>
  );
}
