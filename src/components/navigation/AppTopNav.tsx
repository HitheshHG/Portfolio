'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Bell, Sun, Moon, ExternalLink, Check, Sparkles } from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { DashboardTab } from './AppSidebar';

interface AppTopNavProps {
  activeTab: DashboardTab;
  onOpenCmdK: () => void;
}

const NOTIFICATIONS = [
  {
    id: 'n-1',
    title: 'Recruiter Dwell Alert',
    desc: 'An engineering manager from Stripe spent 3m 40s inspecting NexusFlow.',
    time: '12m ago',
    unread: true,
  },
  {
    id: 'n-2',
    title: 'New Guestbook Endorsement',
    desc: 'Sarah Chen left an architectural endorsement in Neon PostgreSQL.',
    time: '2h ago',
    unread: true,
  },
  {
    id: 'n-3',
    title: 'AI Technical Analysis Ready',
    desc: 'Your profile readiness jumped to Level 4 (85%).',
    time: '1d ago',
    unread: false,
  },
];

export default function AppTopNav({ activeTab, onOpenCmdK }: AppTopNavProps) {
  const { theme, toggleTheme } = useTheme();
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const titles: Record<DashboardTab, { title: string; subtitle: string }> = {
    overview: { title: 'Overview & Telemetry', subtitle: 'Real-time performance and profile readiness' },
    projects: { title: 'Project Studio', subtitle: 'Manage architectural highlights and live deployments' },
    'ai-studio': { title: 'AI Engineering Polisher', subtitle: 'Score technical depth and optimize project bullets' },
    analytics: { title: 'Recruiter Telemetry', subtitle: 'Track dwell time, traffic sources, and conversion' },
    guestbook: { title: 'Neon Guestbook Ledger', subtitle: 'Review and moderate community signatures' },
    settings: { title: 'Workspace Settings', subtitle: 'Manage account, theme, and data export' },
  };

  return (
    <header className="h-16 border-b border-[var(--border)] bg-[var(--surface)] px-6 flex items-center justify-between font-sans shrink-0 sticky top-0 z-40">
      
      {/* Title & Breadcrumb */}
      <div>
        <h1 className="text-sm font-bold text-[var(--text-primary)] tracking-tight">
          {titles[activeTab].title}
        </h1>
        <p className="text-[11px] text-[var(--text-muted)] font-mono hidden sm:block">
          {titles[activeTab].subtitle}
        </p>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        
        {/* Search / Command trigger */}
        <button
          onClick={onOpenCmdK}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-dim)] transition-colors"
        >
          <Search className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Search studio...</span>
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[10px] font-mono">
            ⌘K
          </kbd>
        </button>

        {/* Notifications Popover */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="p-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative"
            title="Notifications"
          >
            <Bell className="h-4 w-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            )}
          </button>

          {notifOpen && (
            <div className="absolute right-0 top-11 w-80 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] shadow-2xl p-3 z-50 text-xs space-y-3 font-sans">
              <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
                <span className="font-semibold text-[var(--text-primary)]">Notifications</span>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllRead}
                    className="text-[10px] text-blue-500 hover:underline font-mono"
                  >
                    Mark all read
                  </button>
                )}
              </div>

              <div className="space-y-2 max-h-60 overflow-y-auto">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`p-2.5 rounded-lg border transition-colors ${
                      n.unread
                        ? 'border-blue-500/20 bg-blue-500/5'
                        : 'border-[var(--border)] bg-[var(--surface)]'
                    }`}
                  >
                    <div className="flex items-center justify-between font-medium text-[var(--text-primary)] text-[11px]">
                      <span>{n.title}</span>
                      <span className="text-[9px] text-[var(--text-dim)] font-mono">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 leading-snug">
                      {n.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>

        {/* View Public Live Link */}
        <Link
          href="/p/hithesh"
          target="_blank"
          className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-semibold tracking-tight shadow-xs hover:opacity-90 transition-opacity"
        >
          <span>Live Site</span>
          <ExternalLink className="h-3 w-3" />
        </Link>

      </div>

    </header>
  );
}
