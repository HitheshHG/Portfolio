'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Award,
  TrendingUp,
  Clock,
  Globe,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Flame,
  Shield,
  Layers,
} from 'lucide-react';
import AppSidebar, { DashboardTab } from '@/components/navigation/AppSidebar';
import AppTopNav from '@/components/navigation/AppTopNav';
import CommandPalette from '@/components/ui/CommandPalette';
import OnboardingModal from '@/components/dashboard/OnboardingModal';
import ProjectManager from '@/components/dashboard/ProjectManager';
import AIProjectPolisher from '@/components/dashboard/AIProjectPolisher';
import AnalyticsView from '@/components/dashboard/AnalyticsView';
import GuestbookManager from '@/components/dashboard/GuestbookManager';
import SettingsView from '@/components/dashboard/SettingsView';
import { PROJECTS_SEED } from '@/lib/data';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [cmdKOpen, setCmdKOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[var(--bg)] text-[var(--text-primary)] font-sans overflow-hidden">
      
      {/* Sidebar */}
      <AppSidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenOnboarding={() => setOnboardingOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top Navbar */}
        <AppTopNav
          activeTab={activeTab}
          onOpenCmdK={() => setCmdKOpen(true)}
        />

        {/* Tab Content Container */}
        <main className="flex-1 p-6 sm:p-8 max-w-6xl w-full mx-auto space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Readiness Banner (Gamification) */}
              <div className="p-6 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-transparent flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500 text-white font-mono text-[10px] font-bold">
                      LEVEL 4 ARCHITECT
                    </span>
                    <span className="text-xs font-mono text-emerald-500 font-semibold flex items-center gap-1">
                      <Flame className="h-3.5 w-3.5 text-amber-500" />
                      14-Day Streak
                    </span>
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                    Profile Readiness: 85%
                  </h2>
                  <p className="text-xs text-[var(--text-secondary)] max-w-xl leading-relaxed">
                    Your architecture-first portfolio is optimized for senior engineering recruiters. Complete 1 more project metric review to reach 100% Top-Tier certification.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setActiveTab('ai-studio')}
                    className="px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                    <span>Run AI Polisher</span>
                  </button>
                  <button
                    onClick={() => setOnboardingOpen(true)}
                    className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Readiness Wizard
                  </button>
                </div>
              </div>

              {/* Telemetry Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-1.5">
                  <div className="text-[11px] font-mono text-[var(--text-muted)]">RECRUITER VIEWS</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-mono text-[var(--text-primary)]">1,842</span>
                    <span className="text-xs font-mono text-emerald-500">+24%</span>
                  </div>
                  <div className="text-[10px] text-[var(--text-dim)]">Top Source: GitHub Profile</div>
                </div>

                <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-1.5">
                  <div className="text-[11px] font-mono text-[var(--text-muted)]">RECRUITER DWELL TIME</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-mono text-[var(--text-primary)]">2m 45s</span>
                    <span className="text-xs font-mono text-emerald-500">+40s</span>
                  </div>
                  <div className="text-[10px] text-[var(--text-dim)]">Highest on NexusFlow</div>
                </div>

                <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-1.5">
                  <div className="text-[11px] font-mono text-[var(--text-muted)]">RECRUITER CTR</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-mono text-[var(--text-primary)]">18.4%</span>
                    <span className="text-xs font-mono text-blue-500">Industry Top</span>
                  </div>
                  <div className="text-[10px] text-[var(--text-dim)]">Inquiries &amp; Live Demo visits</div>
                </div>

                <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-1.5">
                  <div className="text-[11px] font-mono text-[var(--text-muted)]">NEON POSTGRES LATENCY</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-mono text-[var(--text-primary)]">11ms</span>
                    <span className="text-xs font-mono text-emerald-500">99.98% SLA</span>
                  </div>
                  <div className="text-[10px] text-[var(--text-dim)]">Zero cold-start pooling</div>
                </div>
              </div>

              {/* Recommended Actions & Recent Activity Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left: Recommended Next Actions (Col 7) */}
                <div className="lg:col-span-7 p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)]">
                      Actionable Engineering Recommendations
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Steps to reach 100% profile readiness and improve recruiter conversion.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] flex items-start justify-between gap-3">
                      <div className="space-y-0.5">
                        <div className="text-xs font-semibold text-[var(--text-primary)]">
                          Optimize Synapse Canvas Description with AI
                        </div>
                        <p className="text-[11px] text-[var(--text-muted)]">
                          Add quantifiable CRDT sync benchmark numbers to elevate technical impact.
                        </p>
                      </div>
                      <button
                        onClick={() => setActiveTab('ai-studio')}
                        className="px-2.5 py-1 rounded bg-[var(--primary)] text-[var(--primary-foreground)] text-[10px] font-semibold shrink-0"
                      >
                        Optimize
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] flex items-start justify-between gap-3">
                      <div className="space-y-0.5">
                        <div className="text-xs font-semibold text-[var(--text-primary)]">
                          Review 2 New Neon Guestbook Signatures
                        </div>
                        <p className="text-[11px] text-[var(--text-muted)]">
                          Sarah Chen and Marcus Vance left architectural endorsements.
                        </p>
                      </div>
                      <button
                        onClick={() => setActiveTab('guestbook')}
                        className="px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] text-[10px] font-semibold shrink-0"
                      >
                        Review
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Flagship Showcase Status (Col 5) */}
                <div className="lg:col-span-5 p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-[var(--text-muted)]">
                        Production Showcase
                      </span>
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <h3 className="text-sm font-bold text-[var(--text-primary)]">
                      Hithesh H G &bull; Flagship Portfolio
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Your public showcase is live with 4 verified projects, Neon PostgreSQL guestbook, and transmission hub.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                    <Link
                      href="/p/hithesh"
                      target="_blank"
                      className="text-xs text-blue-500 hover:underline font-mono flex items-center gap-1"
                    >
                      <span>folio.dev/p/hithesh</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>

                    <button
                      onClick={() => setActiveTab('projects')}
                      className="px-3 py-1 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-xs text-[var(--text-primary)] hover:border-[var(--text-dim)]"
                    >
                      Edit Projects
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: PROJECTS */}
          {activeTab === 'projects' && <ProjectManager />}

          {/* TAB 3: AI STUDIO */}
          {activeTab === 'ai-studio' && <AIProjectPolisher />}

          {/* TAB 4: ANALYTICS */}
          {activeTab === 'analytics' && <AnalyticsView />}

          {/* TAB 5: GUESTBOOK */}
          {activeTab === 'guestbook' && <GuestbookManager />}

          {/* TAB 6: SETTINGS */}
          {activeTab === 'settings' && <SettingsView />}

        </main>

      </div>

      {/* Global Command Palette (⌘K) */}
      <CommandPalette
        isOpen={cmdKOpen}
        onClose={() => setCmdKOpen(false)}
      />

      {/* Onboarding Wizard Modal */}
      <OnboardingModal
        isOpen={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
      />

    </div>
  );
}
