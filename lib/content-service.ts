import {
  blogPosts,
  experiences,
  faq,
  featuredProjects,
  person,
  skillGroups
} from "@/lib/site-data";
import type { ContentResource, ResourceItemMap } from "@/lib/content-types";

const resourceTable: Record<ContentResource, string> = {
  profile: "profile",
  projects: "projects",
  blog_posts: "blog_posts",
  experiences: "experiences",
  skill_groups: "skill_groups",
  faqs: "faqs"
};

const resourceOrder: Record<ContentResource, string> = {
  profile: "id.asc",
  projects: "sort_order.asc",
  blog_posts: "published_at.desc",
  experiences: "sort_order.asc",
  skill_groups: "sort_order.asc",
  faqs: "sort_order.asc"
};

const fallbackData: { [K in ContentResource]: ResourceItemMap[K][] } = {
  profile: [{ ...person }],
  projects: featuredProjects,
  blog_posts: blogPosts,
  experiences,
  skill_groups: skillGroups,
  faqs: faq
};

function supabaseConfig() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return null;
  }

  return { url: url.replace(/\/$/, ""), key };
}

function headers() {
  const config = supabaseConfig();

  if (!config) {
    return null;
  }

  return {
    apikey: config.key,
    Authorization: `Bearer ${config.key}`,
    "Content-Type": "application/json"
  };
}

export function hasDatabaseConfig() {
  return Boolean(supabaseConfig());
}

export function isResource(resource: string): resource is ContentResource {
  return resource in resourceTable;
}

export async function getResource<K extends ContentResource>(resource: K): Promise<ResourceItemMap[K][]> {
  const config = supabaseConfig();
  const requestHeaders = headers();

  if (!config || !requestHeaders) {
    return fallbackData[resource];
  }

  const table = resourceTable[resource];
  const order = resourceOrder[resource];
  const response = await fetch(`${config.url}/rest/v1/${table}?select=*&order=${order}`, {
    headers: requestHeaders,
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    return fallbackData[resource];
  }

  const data = (await response.json()) as ResourceItemMap[K][];
  return data.length > 0 ? data : fallbackData[resource];
}

export async function getProfile() {
  const profiles = await getResource("profile");
  return profiles[0] ?? person;
}

export async function getProjects() {
  return getResource("projects");
}

export async function getBlogPosts() {
  const posts = await getResource("blog_posts");
  return posts.filter((post) => post.is_published);
}

export async function getExperiences() {
  return getResource("experiences");
}

export async function getSkillGroups() {
  return getResource("skill_groups");
}

export async function getFaqs() {
  return getResource("faqs");
}

export async function createResource<K extends ContentResource>(resource: K, payload: Partial<ResourceItemMap[K]>) {
  return writeResource(resource, payload, "POST");
}

export async function updateResource<K extends ContentResource>(resource: K, id: string, payload: Partial<ResourceItemMap[K]>) {
  return writeResource(resource, payload, "PATCH", id);
}

export async function deleteResource(resource: ContentResource, id: string) {
  const config = supabaseConfig();
  const requestHeaders = headers();

  if (!config || !requestHeaders) {
    throw new Error("Supabase is not configured.");
  }

  const table = resourceTable[resource];
  const response = await fetch(`${config.url}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`, {
    method: "DELETE",
    headers: requestHeaders
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }
}

async function writeResource<K extends ContentResource>(
  resource: K,
  payload: Partial<ResourceItemMap[K]>,
  method: "POST" | "PATCH",
  id?: string
) {
  const config = supabaseConfig();
  const requestHeaders = headers();

  if (!config || !requestHeaders) {
    throw new Error("Supabase is not configured.");
  }

  const table = resourceTable[resource];
  const target = id ? `${config.url}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}` : `${config.url}/rest/v1/${table}`;
  const response = await fetch(target, {
    method,
    headers: {
      ...requestHeaders,
      Prefer: "return=representation"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}
