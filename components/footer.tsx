import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { getProfile } from "@/lib/content-service";

export async function Footer() {
  const profile = await getProfile();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-sm text-muted-foreground sm:px-6 lg:px-8">
        {/* Contact summary */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden="true" size={16} />
            {profile.location}
          </span>
          <a className="inline-flex items-center gap-2 hover:text-primary" href={`mailto:${profile.email}`} aria-label="Email Mehul Variya">
            <Mail aria-hidden="true" size={16} />
            {profile.email}
          </a>
          <a className="inline-flex items-center gap-2 hover:text-primary" href={profile.socials[0].href} aria-label="Open Mehul Variya GitHub">
            <Github aria-hidden="true" size={16} />
            GitHub
          </a>
          <a className="inline-flex items-center gap-2 hover:text-primary" href={profile.socials[1].href} aria-label="Open Mehul Variya LinkedIn">
            <Linkedin aria-hidden="true" size={16} />
            LinkedIn
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>© 2026 Mehul Variya. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          <Link href="/projects" className="font-medium text-foreground hover:text-primary" aria-label="View Mehul Variya projects">
            View projects
          </Link>
        </div>
      </div>
    </footer>
  );
}
