'use client';

import { Cpu, BarChart3, Sparkles, Database, ArrowUpRight, Check, Zap } from 'lucide-react';

export default function LandingBentoFeatures() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--border)]">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="text-xs uppercase font-mono tracking-wider text-[var(--text-muted)]">
          Architected for Builders
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Everything you need to prove your engineering pedigree.
        </h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          Generic portfolio builders are built for graphic designers. FolioOS is built specifically for systems engineers, backend developers, and full-stack craftspeople.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Card 1: Architecture-First Showcase (Col 7) */}
        <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Architecture-First Project Showcase
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Recruiters don&apos;t care about generic to-do apps. Showcase distributed failovers, P99 dispatch latencies, throughput metrics, and hardware concurrency trade-offs.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg)] font-mono text-xs space-y-2">
            <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)]">
              <span>SYSTEM TRADEOFF ANALYSIS</span>
              <span className="text-emerald-500">OPTIMAL</span>
            </div>
            <div className="text-[var(--text-primary)] font-semibold">
              NexusFlow: Distributed Job Pipeline
            </div>
            <div className="flex flex-wrap gap-2 pt-1 text-[10px] text-[var(--text-dim)]">
              <span className="px-2 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)]">Go Concurrency</span>
              <span className="px-2 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)]">Redis Streams</span>
              <span className="px-2 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)]">PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* Card 2: AI Bullet Polisher (Col 5) */}
        <div className="md:col-span-5 p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              AI Engineering Bullet Polisher
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Analyzes your technical descriptions and calculates an impact score. Instantly adds quantifiable metrics and systems vocabulary.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-purple-500/20 bg-purple-500/5 font-mono text-xs space-y-2">
            <div className="flex items-center justify-between text-[10px] text-purple-400">
              <span>TECHNICAL IMPACT SCORE</span>
              <span className="font-bold">68 &rarr; 94/100</span>
            </div>
            <p className="text-[11px] text-[var(--text-primary)] font-sans">
              &ldquo;Reduced P99 dispatch latency by 38% using non-blocking I/O primitives.&rdquo;
            </p>
          </div>
        </div>

        {/* Card 3: Recruiter Telemetry (Col 5) */}
        <div className="md:col-span-5 p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Recruiter Dwell Telemetry
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Understand which projects hiring managers spend the most time reading, top referral links, and geographic recruiter traffic.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg)] font-mono text-xs">
            <div>
              <div className="text-[10px] text-[var(--text-muted)]">Avg Read Time</div>
              <div className="text-sm font-bold text-[var(--text-primary)]">2m 45s</div>
            </div>
            <div>
              <div className="text-[10px] text-[var(--text-muted)]">Recruiter CTR</div>
              <div className="text-sm font-bold text-emerald-500">+18.4%</div>
            </div>
          </div>
        </div>

        {/* Card 4: Neon PostgreSQL Persistence (Col 7) */}
        <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
              <Database className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Neon PostgreSQL Serverless Persistence
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Zero-config database layer. Real-time community guestbook signatures, inquiry dispatches, and project data persist seamlessly to serverless PostgreSQL.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg)] font-mono text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[var(--text-primary)] font-medium">Neon Driver Connected</span>
            </div>
            <span className="text-[11px] text-[var(--text-muted)]">Latency: 8ms</span>
          </div>
        </div>

      </div>

    </section>
  );
}
