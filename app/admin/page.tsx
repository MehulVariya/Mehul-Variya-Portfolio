import { AdminPanel } from "@/components/admin/admin-panel";
import { buildMetadata } from "@/lib/site-data";

export function generateMetadata() {
  return buildMetadata(
    "/admin",
    "Admin",
    "Manage Mehul Variya portfolio content from an API admin panel backed by Supabase database tables for profile, blogs, projects, skills, and FAQs."
  );
}

export default function AdminPage() {
  return <AdminPanel />;
}
