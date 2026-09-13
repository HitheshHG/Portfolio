'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function MinimalNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Guestbook', href: '#guestbook' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-4 z-50 w-full">
      <div className="w-full bg-white/90 backdrop-blur-md border border-neutral-200 rounded-full px-6 sm:px-8 py-3.5 flex items-center justify-between shadow-xs transition-all">
        {/* Minimalist Logo */}
        <Link href="/" className="flex items-center group">
          <span className="font-serif italic text-xl sm:text-2xl text-[#0a0a0a] group-hover:opacity-75 transition-opacity">
            Hithesh
          </span>
          <span className="font-sans font-extrabold text-lg sm:text-xl text-[#0a0a0a] ml-1.5 tracking-tight">
            Gurudatta
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] font-semibold tracking-widest text-neutral-500 hover:text-black transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}

          {/* Resume Action */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-full bg-black text-white hover:bg-neutral-800 transition-all shadow-xs"
          >
            Resume ↗
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center space-x-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full bg-black text-white"
          >
            CV ↗
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#0a0a0a] hover:bg-neutral-100"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-white rounded-2xl p-5 shadow-xl border border-neutral-200 flex flex-col space-y-3 md:hidden mt-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-semibold tracking-wider text-neutral-700 hover:text-black uppercase py-2 border-b border-neutral-100 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
