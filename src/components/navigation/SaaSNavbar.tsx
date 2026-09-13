'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Layers, Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';

export default function SaaSNavbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--border)] py-3 shadow-xs'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-7 w-7 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center font-bold text-xs shadow-xs transition-transform group-hover:scale-105">
            <Layers className="h-4 w-4" />
          </div>
          <span className="font-semibold text-base tracking-tight text-[var(--text-primary)]">
            Folio<span className="text-[var(--text-muted)] font-normal">OS</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)]">
            v2.4
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs text-[var(--text-secondary)] font-medium">
          <a href="#features" className="hover:text-[var(--text-primary)] transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-[var(--text-primary)] transition-colors">
            How It Works
          </a>
          <Link href="/p/hithesh" className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1">
            Live Showcase
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </Link>
          <a href="#pricing" className="hover:text-[var(--text-primary)] transition-colors">
            Pricing
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-dim)] transition-colors"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Launch Dashboard Button */}
          <Link
            href="/dashboard"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-medium tracking-tight shadow-sm hover:opacity-90 transition-opacity"
          >
            <span>Open Dashboard</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl px-5 py-4 space-y-3 text-sm text-[var(--text-secondary)]">
          <a href="#features" onClick={() => setMobileOpen(false)} className="block py-1">
            Features
          </a>
          <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="block py-1">
            How It Works
          </a>
          <Link href="/p/hithesh" onClick={() => setMobileOpen(false)} className="block py-1 text-[var(--text-primary)] font-medium">
            Live Showcase &bull; Hithesh H G
          </Link>
          <a href="#pricing" onClick={() => setMobileOpen(false)} className="block py-1">
            Pricing
          </a>
          <div className="pt-3 border-t border-[var(--border)]">
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-medium"
            >
              Open Product Dashboard
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
