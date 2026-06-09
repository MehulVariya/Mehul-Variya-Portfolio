"use client";

import { LockKeyhole } from "lucide-react";
import { useState } from "react";
import { ResourceEditor } from "@/components/admin/resource-editor";
import type { ContentResource } from "@/lib/content-types";

const resources: ContentResource[] = ["profile", "projects", "blog_posts", "experiences", "skill_groups", "faqs"];

export function AdminPanel() {
  const [token, setToken] = useState("");
  const [resource, setResource] = useState<ContentResource>("profile");

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Admin heading */}
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Admin</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-foreground">Portfolio content panel</h1>
          <p className="mt-4 leading-7 text-muted-foreground">
            Manage profile, projects, blog posts, work experience, skills, and FAQs through API routes backed by Supabase.
          </p>
        </div>
        <div className="mb-5 rounded-[8px] border border-border bg-card p-4">
          <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
            <span className="inline-flex items-center gap-2">
              <LockKeyhole aria-hidden="true" size={16} />
              Admin API token
            </span>
            <input
              type="password"
              value={token}
              onChange={(event) => setToken(event.target.value)}
              className="rounded-[8px] border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary"
              aria-label="Admin API token"
            />
          </label>
        </div>
        <div className="mb-5 flex flex-wrap gap-2">
          {resources.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setResource(item)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${resource === item ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground"}`}
              aria-label={`Edit ${item}`}
            >
              {item.replace("_", " ")}
            </button>
          ))}
        </div>
        <ResourceEditor resource={resource} token={token} />
      </div>
    </section>
  );
}
