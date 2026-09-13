'use client';

import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import GuestbookSection from '@/components/sections/GuestbookSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function PublicPortfolioPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = use(params);
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-200">
      
      {/* Top Banner Bar */}
      <div className="sticky top-0 z-50 bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)] py-3 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between text-xs font-mono">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>FolioOS Platform</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[var(--text-dim)]">
              Verified Flagship Profile
            </span>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            </button>
            <Link
              href="/dashboard"
              className="px-2.5 py-1 rounded bg-[var(--primary)] text-[var(--primary-foreground)] font-medium text-[11px]"
            >
              Edit in Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Main Portfolio Sections */}
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <GuestbookSection />
      <ContactSection />
      <Footer />

    </main>
  );
}
