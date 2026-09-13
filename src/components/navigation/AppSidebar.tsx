'use client';

import Link from 'next/link';
import {
  LayoutDashboard,
  FolderGit2,
  Sparkles,
  BarChart3,
  MessageSquare,
  Settings,
  ArrowUpRight,
  Layers,
  Award,
  ChevronRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

export type DashboardTab = 'overview' | 'projects' | 'ai-studio' | 'analytics' | 'guestbook' | 'settings';

interface AppSidebarProps {
  activeTab: DashboardTab;
  onSelectTab: (tab: DashboardTab) => void;
  onOpenOnboarding: () => void;
}

export default function AppSidebar({ activeTab, onSelectTab, onOpenOnboarding }: AppSidebarProps) {
  const navItems: { id: DashboardTab; label: string; icon: typeof LayoutDashboard; badge?: string }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'projects', label: 'Project Studio', icon: FolderGit2, badge: '4' },
    { id: 'ai-studio', label: 'AI Project Polisher', icon: Sparkles, badge: 'Smart' },
    { id: 'analytics', label: 'Recruiter Telemetry', icon: BarChart3 },
    { id: 'guestbook', label: 'Guestbook Ledger', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 border-r border-[var(--border)] bg-[var(--surface)] p-4 flex flex-col justify-between shrink-0 h-screen sticky top-0 font-sans text-xs">
      
      <div className="space-y-6">
        
        {/* Workspace Brand Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-7 w-7 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center font-bold shadow-xs">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <div className="font-semibold text-xs text-[var(--text-primary)] tracking-tight">
                FolioOS Studio
              </div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono">
                Hithesh&apos;s Workspace
              </div>
            </div>
          </Link>
        </div>

        {/* Readiness Gamification Badge */}
        <div
          onClick={onOpenOnboarding}
          className="p-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] cursor-pointer hover:border-[var(--text-dim)] transition-colors space-y-2 group"
        >
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-blue-500" />
              Readiness: Level 4
            </span>
            <span className="font-mono text-emerald-500 font-bold">85%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 w-[85%]" />
          </div>
          <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)] pt-0.5">
            <span>Senior Architect Track</span>
            <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Navigation List */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-left ${
                  isActive
                    ? 'bg-[var(--primary)] text-[var(--primary-foreground)] font-medium shadow-xs'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface-elevated)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`h-4 w-4 ${isActive ? 'text-[var(--primary-foreground)]' : 'text-[var(--text-muted)]'}`} />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                      isActive
                        ? 'bg-[var(--primary-foreground)]/20 text-[var(--primary-foreground)]'
                        : 'bg-[var(--border)] text-[var(--text-dim)]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

      </div>

      {/* Footer Profile & Live Link */}
      <div className="pt-4 border-t border-[var(--border)] space-y-2">
        <Link
          href="/p/hithesh"
          target="_blank"
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-dim)] transition-colors"
        >
          <span className="font-mono text-[11px]">View Public Showcase</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-[var(--text-muted)]" />
        </Link>

        <div className="flex items-center gap-2.5 px-2 py-1.5">
          <div className="h-7 w-7 rounded-full bg-blue-500/20 text-blue-500 font-bold flex items-center justify-center text-xs">
            H
          </div>
          <div className="truncate">
            <div className="text-[11px] font-medium text-[var(--text-primary)] truncate">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[10px] text-[var(--text-dim)] truncate font-mono">
              {PERSONAL_INFO.email}
            </div>
          </div>
        </div>
      </div>

    </aside>
  );
}
