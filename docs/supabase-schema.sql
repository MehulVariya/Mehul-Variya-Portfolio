create extension if not exists "pgcrypto";

create table if not exists profile (
  id text primary key default 'main',
  name text not null,
  title text not null,
  location text not null,
  email text not null,
  website text not null,
  phone text not null,
  summary text not null,
  current text not null,
  socials jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text not null,
  href text,
  demo text,
  description text not null,
  features text not null,
  stack text not null,
  problem text not null,
  outcome text not null,
  image text not null,
  is_featured boolean not null default true,
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  content text not null,
  tags text[] not null default '{}',
  published_at date not null default current_date,
  is_published boolean not null default false,
  updated_at timestamptz not null default now()
);

create table if not exists experiences (
  id uuid primary key default gen_random_uuid(),
  role text not null,
  company text not null,
  duration text not null,
  stack text not null,
  highlights text[] not null default '{}',
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists skill_groups (
  id uuid primary key default gen_random_uuid(),
  term text not null,
  items text[] not null default '{}',
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table profile enable row level security;
alter table projects enable row level security;
alter table blog_posts enable row level security;
alter table experiences enable row level security;
alter table skill_groups enable row level security;
alter table faqs enable row level security;

create policy "Public can read profile" on profile for select using (true);
create policy "Public can read projects" on projects for select using (true);
create policy "Public can read published blogs" on blog_posts for select using (is_published = true);
create policy "Public can read experiences" on experiences for select using (true);
create policy "Public can read skills" on skill_groups for select using (true);
create policy "Public can read faqs" on faqs for select using (true);
