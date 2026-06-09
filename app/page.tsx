import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { faqSchema, projectSchemas } from "@/lib/schema";
import { buildMetadata } from "@/lib/site-data";
import { getFaqs, getProjects } from "@/lib/content-service";

const HomeSummary = dynamic(() => import("@/components/home-summary"), {
  loading: () => <SectionSkeleton />
});
const SkillsSection = dynamic(() => import("@/components/skills-section"), {
  loading: () => <SectionSkeleton />
});
const FeaturedProjects = dynamic(() => import("@/components/featured-projects"), {
  loading: () => <SectionSkeleton />
});
const ExperienceSection = dynamic(() => import("@/components/experience-section"), {
  loading: () => <SectionSkeleton />
});
const FaqSection = dynamic(() => import("@/components/faq-section"), {
  loading: () => <SectionSkeleton />
});

export function generateMetadata() {
  return buildMetadata(
    "/",
    "Home",
    "Mehul Variya is an Android, Flutter, and Node.js backend developer building Android apps, iOS apps, Express APIs, NestJS systems, and mobile products."
  );
}

function SectionSkeleton() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Loading state */}
        <div className="h-40 animate-pulse rounded-[8px] bg-muted" />
      </div>
    </section>
  );
}

export default async function HomePage() {
  const [faqs, projects] = await Promise.all([getFaqs(), getProjects()]);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      {projectSchemas(projects).map((schema) => (
        <JsonLd key={schema.name as string} data={schema} />
      ))}
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <HomeSummary />
        <SkillsSection />
        <FeaturedProjects />
        <ExperienceSection />
        <FaqSection />
      </Suspense>
    </>
  );
}
