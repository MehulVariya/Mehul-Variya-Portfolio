import { siteUrl } from "@/lib/site-data";

export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
