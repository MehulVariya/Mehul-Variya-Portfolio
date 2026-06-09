# Supabase Admin Setup

## 1. Create Tables

Run `docs/supabase-schema.sql` in the Supabase SQL editor.

## 2. Configure Environment

Copy `.env.example` to `.env.local` and fill these values:

```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
ADMIN_API_TOKEN=replace-with-a-strong-admin-token
```

Use the service role key only on the server. Do not expose it in browser code.

## 3. Admin Panel

Open `/admin`, enter `ADMIN_API_TOKEN`, and manage:

- `profile`
- `projects`
- `blog_posts`
- `experiences`
- `skill_groups`
- `faqs`

## 4. API Routes

Public reads:

```bash
GET /api/content/profile
GET /api/content/projects
GET /api/content/blog_posts
GET /api/content/experiences
GET /api/content/skill_groups
GET /api/content/faqs
```

Admin writes require the `x-admin-token` header:

```bash
POST /api/content/blog_posts
PATCH /api/content/blog_posts/:id
DELETE /api/content/blog_posts/:id
```

The same write pattern works for every resource.
