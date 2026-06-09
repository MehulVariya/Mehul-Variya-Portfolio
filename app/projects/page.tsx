import { JsonLd } from "@/components/json-ld";
import { ProjectCard } from "@/components/project-card";
import { SectionShell } from "@/components/section-shell";
import { breadcrumbSchema, projectSchemas } from "@/lib/schema";
import { getProjects } from "@/lib/content-service";
import { buildMetadata, otherProjects } from "@/lib/site-data";

export function generateMetadata() {
  return buildMetadata(
    "/projects",
    "Projects",
    "Explore Mehul Variya's Android, Flutter, iOS, Node.js, Express.js, NestJS, Firebase, MongoDB, backend portfolio projects, results, app stacks, and mobile work."
  );
}

export default async function ProjectsPage() {
  const featuredProjects = await getProjects();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }])} />
      {projectSchemas(featuredProjects).map((schema) => (
        <JsonLd key={schema.name as string} data={schema} />
      ))}
      <SectionShell eyebrow="Portfolio" title="Featured Android, Flutter, iOS, and backend projects." titleAs="h1">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </SectionShell>
      <SectionShell eyebrow="More projects" title="Additional apps, tools, and experiments.">
        <div className="grid gap-3 md:grid-cols-2">
          {otherProjects.map((project) => (
            <article key={project} className="rounded-[8px] border border-border bg-card p-4 text-muted-foreground">
              {/* Other project */}
              {project}
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
