import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionBlock } from "@/components/motion-block";
import { getProfile } from "@/lib/content-service";

export async function Hero() {
  const profile = await getProfile();

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8">
        {/* Hero copy */}
        <MotionBlock>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Android, Flutter, and Node.js backend developer</p>
          <h1 className="font-heading text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
            Mehul Variya
          </h1>
          <p className="mt-5 text-xl font-medium text-foreground">
            Mehul Variya is an Android developer and Flutter developer who builds Android and iOS apps with Node.js, Express.js, and NestJS backends.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              aria-label="View Mehul Variya featured projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              View projects
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Mehul Variya"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              Contact
              <Mail aria-hidden="true" size={18} />
            </a>
          </div>
          <div className="mt-7 flex gap-3">
            <a href={profile.socials[0].href} aria-label="Open Mehul Variya GitHub" className="rounded-full border border-border p-3 hover:text-primary">
              <Github aria-hidden="true" size={18} />
            </a>
            <a href={profile.socials[1].href} aria-label="Open Mehul Variya LinkedIn" className="rounded-full border border-border p-3 hover:text-primary">
              <Linkedin aria-hidden="true" size={18} />
            </a>
          </div>
        </MotionBlock>
        {/* Hero image */}
        <MotionBlock delay={0.12} className="relative">
          <div className="overflow-hidden rounded-[8px] border border-border bg-card shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1300&q=80"
              alt="Mehul Variya Android Flutter and Node.js backend developer workspace with code editor"
              width={900}
              height={1060}
              priority
              className="aspect-[5/6] w-full object-cover"
            />
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}
