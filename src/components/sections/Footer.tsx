'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full">
      <div className="mono-card px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        {/* Left: Brand / Copyright */}
        <div className="flex items-center gap-3">
          <span className="font-serif italic text-xl text-[#0a0a0a]">Hithesh</span>
          <span className="font-extrabold text-sm text-[#0a0a0a] tracking-tight">Gurudatta</span>
          <span className="text-neutral-300">·</span>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex items-center gap-6 font-semibold tracking-wider uppercase text-[11px]">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.website}
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors"
          >
            Vercel
          </a>
          <span className="text-neutral-300">·</span>
          <button
            onClick={scrollToTop}
            className="hover:text-black transition-colors cursor-pointer flex items-center gap-1 font-bold text-[#0a0a0a]"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
