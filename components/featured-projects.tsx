import { MotionBlock } from "@/components/motion-block";
import { ProjectCard } from "@/components/project-card";
import { SectionShell } from "@/components/section-shell";
import { getProjects } from "@/lib/content-service";

export default async function FeaturedProjects() {
  const featuredProjects = await getProjects();

  return (
    <SectionShell eyebrow="Featured projects" title="Applications with clear problems, stacks, and outcomes." id="projects">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <MotionBlock key={project.name} delay={index * 0.05}>
            <ProjectCard project={project} />
          </MotionBlock>
        ))}
      </div>
    </SectionShell>
  );
}
