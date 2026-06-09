import { MotionBlock } from "@/components/motion-block";
import { SectionShell } from "@/components/section-shell";
import { getSkillGroups } from "@/lib/content-service";

export default async function SkillsSection() {
  const skillGroups = await getSkillGroups();

  return (
    <SectionShell eyebrow="Skills" title="Mobile, backend, database, and delivery skills." id="skills">
      <dl className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <MotionBlock key={group.term} delay={index * 0.04}>
            <div className="rounded-[8px] border border-border bg-card p-5">
              {/* Skill group */}
              <dt className="font-heading text-lg font-semibold text-foreground">{group.term}</dt>
              <dd className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </MotionBlock>
        ))}
      </dl>
    </SectionShell>
  );
}
