import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import { MotionBlock } from "@/components/motion-block";
import { SectionShell } from "@/components/section-shell";
import { getProfile } from "@/lib/content-service";

export default async function HomeSummary() {
  const profile = await getProfile();
  const facts = [
    { label: "Current focus", value: "Android apps, Flutter Android and iOS apps, Node.js APIs, Express.js, and NestJS backend systems", icon: BriefcaseBusiness },
    { label: "Education", value: "BCA, Vivekanand College, Surat with 8.48 CGPA", icon: GraduationCap },
    { label: "Location", value: profile.location, icon: MapPin }
  ];

  return (
    <SectionShell eyebrow="About" title="A factual snapshot for teams, clients, and search engines." id="about">
      <div className="grid gap-4 md:grid-cols-3">
        {facts.map((fact, index) => {
          const Icon = fact.icon;
          return (
            <MotionBlock key={fact.label} delay={index * 0.08}>
              <article className="h-full rounded-[8px] border border-border bg-card p-6">
                {/* Fact icon */}
                <Icon aria-hidden="true" className="mb-5 text-primary" size={28} />
                <h3 className="font-heading text-lg font-semibold">{fact.label}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{fact.value}</p>
              </article>
            </MotionBlock>
          );
        })}
      </div>
      <p className="mt-8 max-w-4xl leading-8 text-muted-foreground">{profile.current}</p>
    </SectionShell>
  );
}
