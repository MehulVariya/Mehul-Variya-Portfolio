import { BlogCard } from "@/components/blog/blog-card";
import { JsonLd } from "@/components/json-ld";
import { SectionShell } from "@/components/section-shell";
import { getBlogPosts } from "@/lib/content-service";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata, siteUrl } from "@/lib/site-data";

export function generateMetadata() {
  return buildMetadata(
    "/blog",
    "Blog",
    "Read Mehul Variya's blog about Android apps, Flutter iOS apps, Node.js APIs, Express.js, NestJS, Supabase, admin panels, and product systems."
  );
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      {posts.map((post) => (
        <JsonLd
          key={post.slug}
          data={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.published_at,
            url: `${siteUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Mehul Variya"
            }
          }}
        />
      ))}
      <SectionShell eyebrow="Blog" title="Articles from the portfolio API and database." titleAs="h1">
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </SectionShell>
    </>
  );
}
