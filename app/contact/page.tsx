import { ContactPanel } from "@/components/contact-panel";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/site-data";

export function generateMetadata() {
  return buildMetadata(
    "/contact",
    "Contact",
    "Contact Mehul Variya for Android apps, Flutter iOS apps, Node.js APIs, Express.js services, NestJS backends, database product projects, and app work in India."
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <ContactPanel />
    </>
  );
}
