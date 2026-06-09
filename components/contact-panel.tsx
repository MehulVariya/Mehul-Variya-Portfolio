import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { getProfile } from "@/lib/content-service";

export async function ContactPanel() {
  const profile = await getProfile();

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Contact details */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
            <h1 className="mt-3 font-heading text-4xl font-semibold">Work with Mehul Variya</h1>
            <p className="mt-5 leading-8 text-muted-foreground">
              Mehul works on Android apps, Flutter Android and iOS apps, Node.js APIs, Express.js services, NestJS backend architecture, and database-backed product systems.
            </p>
          </div>
          <div className="rounded-[8px] border border-border bg-card p-6">
            <div className="space-y-4 text-muted-foreground">
              <a className="flex items-center gap-3 hover:text-primary" href={`mailto:${profile.email}`} aria-label="Email Mehul Variya">
                <Mail aria-hidden="true" size={20} />
                {profile.email}
              </a>
              <span className="flex items-center gap-3">
                <MapPin aria-hidden="true" size={20} />
                {profile.location}
              </span>
              <a className="flex items-center gap-3 hover:text-primary" href={profile.socials[0].href} aria-label="Open Mehul Variya GitHub">
                <Github aria-hidden="true" size={20} />
                GitHub
              </a>
              <a className="flex items-center gap-3 hover:text-primary" href={profile.socials[1].href} aria-label="Open Mehul Variya LinkedIn">
                <Linkedin aria-hidden="true" size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
