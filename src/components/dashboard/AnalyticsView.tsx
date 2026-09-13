'use client';

import { BarChart3, TrendingUp, Users, Clock, Globe, ArrowUpRight } from 'lucide-react';

const TOP_PROJECTS = [
  { name: 'NexusFlow: Distributed Job Pipeline', views: 842, avgTime: '3m 15s', pct: 45 },
  { name: 'Aegis Vector: Real-Time RAG', views: 520, avgTime: '2m 40s', pct: 28 },
  { name: 'Synapse: WebRTC Collaborative Canvas', views: 320, avgTime: '2m 10s', pct: 17 },
  { name: 'Aura GL: GPU Shader Art Engine', views: 160, avgTime: '1m 25s', pct: 10 },
];

const REFERRERS = [
  { source: 'github.com/hitheshhg', visitors: '1,040', pct: 56 },
  { source: 'linkedin.com/in/hitheshhg', visitors: '612', pct: 33 },
  { source: 'direct / email brief', visitors: '190', pct: 11 },
];

export default function AnalyticsView() {
  return (
    <div className="space-y-6 font-sans">
      
      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
            <span>TOTAL IMPRESSIONS</span>
            <Users className="h-3.5 w-3.5 text-blue-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[var(--text-primary)] font-mono">1,842</span>
            <span className="text-xs text-emerald-500 font-mono font-medium">+24% this wk</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
            <span>AVG RECRUITER DWELL</span>
            <Clock className="h-3.5 w-3.5 text-purple-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[var(--text-primary)] font-mono">2m 45s</span>
            <span className="text-xs text-emerald-500 font-mono font-medium">+40s vs benchmark</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
            <span>RECRUITER CTR</span>
            <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[var(--text-primary)] font-mono">18.4%</span>
            <span className="text-xs text-emerald-500 font-mono font-medium">Industry High</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
            <span>NEON DB P95</span>
            <Globe className="h-3.5 w-3.5 text-amber-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[var(--text-primary)] font-mono">11ms</span>
            <span className="text-xs text-blue-500 font-mono font-medium">Zero-Cold Start</span>
          </div>
        </div>

      </div>

      {/* Dwell Breakdown & Referrers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Project Dwell Time (Col 7) */}
        <div className="lg:col-span-7 p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-5">
          <div>
            <h3 className="text-sm font-bold text-[var(--text-primary)]">
              Project Dwell Time &amp; Engagement
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Which projects hold hiring managers&apos; attention longest?
            </p>
          </div>

          <div className="space-y-4">
            {TOP_PROJECTS.map((proj) => (
              <div key={proj.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--text-primary)] font-medium truncate max-w-[280px]">
                    {proj.name}
                  </span>
                  <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--text-muted)] shrink-0">
                    <span>{proj.avgTime}</span>
                    <span className="text-[var(--text-primary)] font-bold">{proj.views} views</span>
                  </div>
                </div>

                <div className="w-full h-2 rounded-full bg-[var(--bg)] border border-[var(--border)] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${proj.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Referrers & Top Sources (Col 5) */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-5">
          <div>
            <h3 className="text-sm font-bold text-[var(--text-primary)]">
              Traffic Attribution
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Primary channels driving technical recruiters.
            </p>
          </div>

          <div className="space-y-3">
            {REFERRERS.map((ref) => (
              <div
                key={ref.source}
                className="p-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] flex items-center justify-between text-xs font-mono"
              >
                <div>
                  <div className="text-[var(--text-primary)] font-medium">{ref.source}</div>
                  <div className="text-[10px] text-[var(--text-muted)]">{ref.pct}% of total traffic</div>
                </div>
                <span className="font-bold text-[var(--text-primary)]">{ref.visitors}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
