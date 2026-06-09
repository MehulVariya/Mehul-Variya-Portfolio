import { faq, featuredProjects, person, siteUrl } from "@/lib/site-data";
import type { FaqItem, Profile } from "@/lib/content-types";
import type { Project } from "@/lib/site-data";

export function personSchema(profile: Profile = person) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    telephone: profile.phone,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "India"
    },
    sameAs: profile.socials.map((social) => social.href),
    knowsAbout: [
      "Flutter",
      "Node.js",
      "Express.js",
      "NestJS",
      "Android Development",
      "iOS App Development",
      "REST APIs",
      "MongoDB",
      "Firebase",
      "Backend Architecture"
    ]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mehul Variya Portfolio",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/projects?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function faqSchema(items: FaqItem[] = faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function projectSchemas(projects: Project[] = featuredProjects) {
  return projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": project.type.includes("App") ? "SoftwareApplication" : "CreativeWork",
    name: project.name,
    description: project.description,
    applicationCategory: project.type,
    programmingLanguage: project.stack,
    creator: {
      "@type": "Person",
      name: person.name
    },
    url: project.href ?? siteUrl,
    abstract: project.problem
  }));
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`
    }))
  };
}
