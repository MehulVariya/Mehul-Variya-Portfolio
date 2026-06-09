import type { BlogPost, Project } from "@/lib/site-data";

export type Profile = {
  id?: string;
  name: string;
  title: string;
  location: string;
  email: string;
  website: string;
  phone: string;
  summary: string;
  current: string;
  socials: Array<{ label: string; href: string }>;
};

export type Experience = {
  id?: string;
  role: string;
  company: string;
  duration: string;
  stack: string;
  highlights: string[];
};

export type SkillGroup = {
  id?: string;
  term: string;
  items: string[];
};

export type FaqItem = {
  id?: string;
  question: string;
  answer: string;
};

export type ContentResource = "profile" | "projects" | "blog_posts" | "experiences" | "skill_groups" | "faqs";

export type ResourceItemMap = {
  profile: Profile;
  projects: Project;
  blog_posts: BlogPost;
  experiences: Experience;
  skill_groups: SkillGroup;
  faqs: FaqItem;
};
