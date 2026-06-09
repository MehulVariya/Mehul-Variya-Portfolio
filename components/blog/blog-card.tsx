import Link from "next/link";
import type { BlogPost } from "@/lib/site-data";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-[8px] border border-border bg-card p-6">
      {/* Blog summary */}
      <p className="text-sm font-semibold text-primary">{post.published_at}</p>
      <h2 className="mt-3 font-heading text-2xl font-semibold text-foreground">{post.title}</h2>
      <p className="mt-4 leading-7 text-muted-foreground">{post.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-semibold text-primary" aria-label={`Read ${post.title}`}>
        Read article
      </Link>
    </article>
  );
}
