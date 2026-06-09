import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { SectionShell } from "@/components/section-shell";
import { getBlogPosts } from "@/lib/content-service";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata, siteUrl } from "@/lib/site-data";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostPageProps) {
  const posts = await getBlogPosts();
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    return buildMetadata("/blog", "Blog", "Read Mehul Variya's Android, Flutter, iOS, Node.js, Express.js, NestJS, and backend development articles.");
  }

  return buildMetadata(`/blog/${post.slug}`, post.title, post.excerpt);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const posts = await getBlogPosts();
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }])} />
      <JsonLd
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
      <SectionShell eyebrow={post.published_at} title={post.title} titleAs="h1">
        <article className="max-w-3xl leading-8 text-muted-foreground">
          {/* Blog body */}
          <p>{post.content}</p>
        </article>
      </SectionShell>
    </>
  );
}
