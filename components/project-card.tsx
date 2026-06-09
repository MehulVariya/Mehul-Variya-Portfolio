import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/site-data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-[8px] border border-border bg-card">
      {/* Project image */}
      <Image
        src={project.image}
        alt={`${project.name} ${project.type} project by Mehul Variya`}
        width={900}
        height={540}
        loading="lazy"
        className="aspect-[5/3] w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-primary">{project.type}</p>
            <h3 className="mt-2 font-heading text-xl font-semibold">{project.name}</h3>
          </div>
          {project.href ? (
            <a
              href={project.href}
              aria-label={`Open ${project.name} project link`}
              className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          ) : null}
        </div>
        <p className="mt-4 leading-7 text-muted-foreground">{project.description}</p>
        <dl className="mt-5 space-y-3 text-sm">
          <div>
            <dt className="font-semibold text-foreground">Stack</dt>
            <dd className="mt-1 text-muted-foreground">{project.stack}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Problem solved</dt>
            <dd className="mt-1 text-muted-foreground">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Outcome</dt>
            <dd className="mt-1 text-muted-foreground">{project.outcome}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
