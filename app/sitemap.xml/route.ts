import { siteUrl } from "@/lib/site-data";

const routes = ["", "/about", "/projects", "/blog", "/contact"];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((route) => `  <url><loc>${siteUrl}${route}</loc><changefreq>monthly</changefreq><priority>${route === "" ? "1.0" : "0.8"}</priority></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
