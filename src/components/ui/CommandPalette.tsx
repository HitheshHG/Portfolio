'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderGit2, Briefcase, MessageSquare, Mail, FileText, ArrowRight, X, Command } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open via custom event or parent
          window.dispatchEvent(new CustomEvent('toggle-command-palette'));
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const scrollTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const actions = [
    {
      id: 'projects',
      label: 'Jump to Selected Projects',
      category: 'Navigation',
      icon: FolderGit2,
      run: () => scrollTo('projects'),
    },
    {
      id: 'experience',
      label: 'Inspect Work Experience & Skills',
      category: 'Navigation',
      icon: Briefcase,
      run: () => scrollTo('experience'),
    },
    {
      id: 'guestbook',
      label: 'Sign Neon DB Guestbook',
      category: 'Database',
      icon: MessageSquare,
      run: () => scrollTo('guestbook'),
    },
    {
      id: 'contact',
      label: 'Get in Touch / Inquiry',
      category: 'Navigation',
      icon: Mail,
      run: () => scrollTo('contact'),
    },
    {
      id: 'copy-email',
      label: copied ? 'Copied to Clipboard!' : `Copy Email (${PERSONAL_INFO.email})`,
      category: 'Quick Action',
      icon: Mail,
      run: copyEmail,
    },
    {
      id: 'resume',
      label: 'Download Resume (PDF)',
      category: 'Document',
      icon: FileText,
      run: () => {
        window.open(PERSONAL_INFO.resume, '_blank');
        onClose();
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-[#0e0e12] shadow-2xl overflow-hidden z-10 font-mono"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08]">
              <Search className="h-4 w-4 text-zinc-500 shrink-0" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or jump to..."
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="p-1 rounded text-zinc-500 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* List */}
            <div className="max-h-72 overflow-y-auto p-2 space-y-1">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-xs text-zinc-500">
                  No commands matching &ldquo;{query}&rdquo;
                </div>
              ) : (
                filtered.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.run}
                      className="w-full px-3 py-2.5 rounded-xl hover:bg-white/[0.06] flex items-center justify-between text-left group transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-white/[0.04] text-zinc-400 group-hover:text-[#c8f135]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-zinc-200 group-hover:text-white font-medium">
                            {item.label}
                          </div>
                          <div className="text-[10px] text-zinc-500">
                            {item.category}
                          </div>
                        </div>
                      </div>

                      <ArrowRight className="h-3.5 w-3.5 text-zinc-600 group-hover:text-[#c8f135] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-white/[0.06] bg-[#09090b] flex items-center justify-between text-[10px] text-zinc-500">
              <div className="flex items-center gap-1.5">
                <Command className="h-3 w-3" />
                <span>Quick Navigation</span>
              </div>
              <span>ESC to dismiss</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
