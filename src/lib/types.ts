export type TechCategory = 'Full-Stack' | 'Systems & Backend' | 'AI & ML' | 'Creative Tech';

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: TechCategory;
  tags: string[];
  metrics: { label: string; value: string }[];
  tech: string[];
  github_frontend?: string;
  github_backend?: string;
  live?: string;
  featured?: boolean;
  architecture?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  badge?: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface GuestbookEntry {
  id: string;
  name: string;
  handle?: string;
  role?: string;
  message: string;
  avatar_emoji?: string;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  created_at: string;
}

export interface SystemMetrics {
  status: 'OPTIMAL' | 'DEGRADED';
  uptime: string;
  dbLatencyMs: number;
  projectCount: number;
  experienceCount: number;
  guestbookCount: number;
  environment: string;
  timestamp: string;
}

export type ThemeAccent = 'lime' | 'cyan' | 'magenta' | 'amber' | 'emerald';
