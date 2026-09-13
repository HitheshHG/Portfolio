'use client';

import Link from 'next/link';
import { Layers } from 'lucide-react';

export default function LandingFooter() {
  return (
    <footer className="border-t border-[var(--border)] py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-mono text-xs text-[var(--text-muted)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2 text-[var(--text-primary)] font-semibold">
          <Layers className="h-4 w-4 text-blue-500" />
          <span>FolioOS</span>
          <span className="text-[var(--text-dim)] font-normal">&mdash; Architecture-first developer presence.</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 text-[var(--text-secondary)]">
          <Link href="/p/hithesh" className="hover:text-[var(--text-primary)] transition-colors">
            Flagship Showcase
          </Link>
          <Link href="/dashboard" className="hover:text-[var(--text-primary)] transition-colors">
            App Dashboard
          </Link>
          <a href="https://github.com/hitheshhg" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors">
            GitHub
          </a>
        </div>

        <div>
          &copy; {new Date().getFullYear()} FolioOS by Hithesh H G.
        </div>

      </div>
    </footer>
  );
}
