'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Terminal, Cpu, Database, ExternalLink } from 'lucide-react';
import { PROJECTS_SEED } from '@/lib/data';

export default function LandingHero() {
  const featured = PROJECTS_SEED[0];

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Eyebrow Pill */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] text-xs font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-[var(--text-primary)]">FolioOS Engine</span>
          <span className="text-[var(--text-dim)]">&bull;</span>
          <span>Next.js 15 &bull; TypeScript &bull; Neon PostgreSQL</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]">
          Turn raw engineering craft into a presence that{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
            gets you hired.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto font-sans">
          The developer portfolio engine designed for systems architects and full-stack builders. Track recruiter telemetry, polish project impact with AI, and ship world-class presence in minutes.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        <Link
          href="/dashboard"
          className="px-5 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-semibold tracking-tight shadow-md hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span>Open Product Dashboard</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>

        <Link
          href="/p/hithesh"
          className="px-5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] text-xs font-semibold tracking-tight hover:border-[var(--text-dim)] transition-colors flex items-center gap-2"
        >
          <span>Explore Live Showcase (Hithesh H G)</span>
          <ExternalLink className="h-3.5 w-3.5 text-[var(--text-muted)]" />
        </Link>
      </div>

      {/* Interactive Browser Mockup Preview */}
      <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl overflow-hidden max-w-4xl mx-auto">
        
        {/* Browser Top Chrome */}
        <div className="px-4 py-3 border-b border-[var(--border)] bg-[var(--surface-elevated)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-rose-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 text-xs font-mono text-[var(--text-muted)] flex items-center gap-1.5">
              <span className="text-emerald-500">&bull;</span>
              folio.dev/p/hithesh &mdash; Live Production Instance
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-[var(--text-muted)]">
            <Database className="h-3 w-3 text-blue-500" />
            <span>Neon Serverless Synced</span>
          </div>
        </div>

        {/* Mockup Content Surface */}
        <div className="p-6 sm:p-8 bg-[var(--bg)] space-y-6">
          
          {/* Header row in preview */}
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--border)] pb-4">
            <div>
              <div className="text-lg font-semibold text-[var(--text-primary)]">Hithesh H G</div>
              <div className="text-xs font-mono text-[var(--text-muted)]">
                Software Engineer &bull; Systems &amp; Web Infrastructure
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                Available for Contract
              </span>
            </div>
          </div>

          {/* Featured Project Showcase inside frame */}
          <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                Featured Engineering Project
              </span>
              <span className="text-xs font-mono text-blue-500">Distributed Systems</span>
            </div>

            <div className="text-base font-semibold text-[var(--text-primary)]">
              {featured.title}
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {featured.description}
            </p>

            {/* Metrics Chips */}
            <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-xs font-mono">
              <div>
                <div className="font-semibold text-[var(--text-primary)]">&lt;12ms</div>
                <div className="text-[10px] text-[var(--text-muted)]">Dispatch Latency</div>
              </div>
              <div>
                <div className="font-semibold text-[var(--text-primary)]">45k tasks/s</div>
                <div className="text-[10px] text-[var(--text-muted)]">Throughput</div>
              </div>
              <div>
                <div className="font-semibold text-[var(--text-primary)]">99.98%</div>
                <div className="text-[10px] text-[var(--text-muted)]">SLA Uptime</div>
              </div>
            </div>
          </div>

          {/* Bottom Live Hint */}
          <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] pt-2">
            <span>Powered by FolioOS Engine</span>
            <Link href="/p/hithesh" className="text-[var(--text-primary)] hover:underline flex items-center gap-1">
              View Full Portfolio Showcase &rarr;
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}
