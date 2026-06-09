import { JsonLd } from "@/components/json-ld";
import { SectionShell } from "@/components/section-shell";
import { getExperiences, getProfile, getSkillGroups } from "@/lib/content-service";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/site-data";

export function generateMetadata() {
  return buildMetadata(
    "/about",
    "About",
    "Read Mehul Variya's Android, Flutter, iOS app, Node.js, Express.js, and NestJS backend biography, education, skills, experience, and project work in India."
  );
}

export default async function AboutPage() {
  const [profile, experiences, skillGroups] = await Promise.all([getProfile(), getExperiences(), getSkillGroups()]);

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <SectionShell eyebrow="Biography" title="Mehul Variya builds Android, iOS, Flutter, and backend applications." titleAs="h1">
        <article className="max-w-4xl space-y-6 leading-8 text-muted-foreground">
          {/* Factual biography */}
          <p>{profile.summary}</p>
          <p>{profile.current}</p>
          <p>
            Mehul earned a Bachelor of Computer Applications from Vivekanand College, Surat, between June 2021 and May 2024. He completed the degree with an 8.48 CGPA and studied software development, web development, database administration, and network administration.
          </p>
        </article>
      </SectionShell>
      <SectionShell eyebrow="Work history" title="Experience across Android, Flutter, iOS, and backend systems.">
        <div className="grid gap-4">
          {experiences.map((item) => (
            <article key={`${item.role}-${item.duration}`} className="rounded-[8px] border border-border bg-card p-6">
              {/* Experience item */}
              <h2 className="font-heading text-xl font-semibold">{item.role}</h2>
              <p className="mt-1 text-sm font-semibold text-primary">{item.company} · {item.duration}</p>
              <p className="mt-4 text-muted-foreground">Stack: {item.stack}</p>
            </article>
          ))}
        </div>
      </SectionShell>
      <SectionShell eyebrow="Skills" title="Clear skill definitions for Mehul Variya.">
        <dl className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.term} className="rounded-[8px] border border-border bg-card p-5">
              {/* Skill definition */}
              <dt className="font-heading text-lg font-semibold">{group.term}</dt>
              <dd className="mt-3 text-muted-foreground">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </SectionShell>
    </>
  );
}
