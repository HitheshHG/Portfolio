'use client';

import React, { useState, useEffect } from 'react';
import { Database, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GuestbookEntry } from '@/lib/types';
import { GUESTBOOK_SEED } from '@/lib/data';

export default function GuestbookSection() {
  const [entries, setEntries] = useState<GuestbookEntry[]>(GUESTBOOK_SEED);
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedNotice, setSubmittedNotice] = useState(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/guestbook')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.entries) {
          setEntries(data.entries);
        }
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setErrorNotice(null);

    try {
      const res = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          handle: handle.trim() || undefined,
          message: message.trim(),
        }),
      });

      const data = await res.json();
      if (data.success && data.entry) {
        setEntries((prev) => [data.entry, ...prev]);
        setName('');
        setHandle('');
        setMessage('');
        setSubmittedNotice(true);
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.8 },
          colors: ['#000000', '#525252', '#a3a3a3', '#d4d4d4'],
        });
        setTimeout(() => setSubmittedNotice(false), 5000);
      } else {
        setErrorNotice(data.error || 'Failed to sign.');
      }
    } catch {
      setErrorNotice('Network error submitting to guestbook.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="guestbook" className="w-full space-y-6">
      
      {/* Header Card */}
      <div className="mono-card p-8 sm:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="text-[11px] font-bold tracking-[0.22em] text-neutral-400 uppercase mb-2">
            PUBLIC LEDGER
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0a0a] tracking-tight">
            Community{' '}
            <span className="font-serif italic font-normal text-3xl sm:text-4xl text-[#0a0a0a]">
              Guestbook
            </span>
          </h2>
          <p className="mt-2 text-sm text-neutral-500 max-w-xl">
            Leave a permanent signature in the Neon PostgreSQL ledger. Live sync across sessions.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 text-xs font-bold text-[#0a0a0a] border border-neutral-200 w-fit">
          <Database className="h-3.5 w-3.5 text-neutral-700" />
          <span>Neon PostgreSQL</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Sign Form (5 cols) */}
        <div className="lg:col-span-5 mono-card p-7 sm:p-8 space-y-5">
          <div className="border-b border-neutral-100 pb-3">
            <h3 className="text-lg font-bold text-[#0a0a0a] tracking-tight">
              Sign the Ledger
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Your signature will be stored in serverless PostgreSQL.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-neutral-700 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ada Lovelace"
                className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-2.5 text-sm text-[#0a0a0a] placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-neutral-700 mb-1.5">
                Role or Handle (Optional)
              </label>
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                placeholder="@adalovelace or Senior Engineer"
                className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-2.5 text-sm text-[#0a0a0a] placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-neutral-700 mb-1.5">
                Your Message *
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Loved the minimal architecture and clean design..."
                className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-2.5 text-sm text-[#0a0a0a] placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            {submittedNotice && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold">
                <Sparkles className="h-4 w-4 shrink-0 text-black" />
                <span>Signature committed to database!</span>
              </div>
            )}

            {errorNotice && (
              <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-300 text-neutral-900 text-xs font-semibold">
                {errorNotice}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-black py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-neutral-800 transition-all disabled:opacity-50 cursor-pointer shadow-xs"
            >
              {isSubmitting ? (
                <span>Writing to Ledger...</span>
              ) : (
                <>
                  <span>Sign Ledger</span>
                  <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right: Signatures Feed (7 cols) */}
        <div className="lg:col-span-7 mono-card p-7 sm:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
            <h3 className="text-lg font-bold text-[#0a0a0a] tracking-tight">
              Recent Signatures
            </h3>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-400">
              {entries.length} VERIFIED ENTRIES
            </span>
          </div>

          <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-neutral-50/70 rounded-xl p-4 border border-neutral-200 space-y-2 hover:border-neutral-300 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                      {entry.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-xs text-[#0a0a0a]">{entry.name}</div>
                      {entry.handle && (
                        <div className="text-[11px] text-neutral-500">{entry.handle}</div>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-mono text-neutral-400">
                    {new Date(entry.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 pl-11 leading-relaxed">
                  {entry.message}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
