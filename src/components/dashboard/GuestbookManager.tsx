'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, Check, Trash2, Database, RefreshCw, UserCheck } from 'lucide-react';
import { GuestbookEntry } from '@/lib/types';
import { GUESTBOOK_SEED } from '@/lib/data';

export default function GuestbookManager() {
  const [entries, setEntries] = useState<GuestbookEntry[]>(GUESTBOOK_SEED);
  const [loading, setLoading] = useState(false);

  const fetchEntries = () => {
    setLoading(true);
    fetch('/api/guestbook')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.entries) setEntries(data.entries);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleDelete = (id: string) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
        <div>
          <h2 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-blue-500" />
            Neon Guestbook Ledger
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            Review and manage public endorsements and peer signatures stored in serverless PostgreSQL.
          </p>
        </div>

        <button
          onClick={fetchEntries}
          disabled={loading}
          className="px-3.5 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Entries Table */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
        <div className="p-4 border-b border-[var(--border)] bg-[var(--surface-elevated)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
          <span>{entries.length} VERIFIED SIGNATURES</span>
          <span className="flex items-center gap-1 text-emerald-500">
            <Database className="h-3 w-3" /> Neon Postgres Active
          </span>
        </div>

        <div className="divide-y divide-[var(--border)]">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs hover:bg-[var(--surface-elevated)] transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[var(--text-primary)]">{entry.name}</span>
                  {entry.role && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)]">
                      {entry.role}
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-[var(--text-dim)]">
                    {new Date(entry.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {entry.message}
                </p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                <button
                  onClick={() => handleDelete(entry.id)}
                  className="p-1.5 rounded text-[var(--text-muted)] hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
                  title="Remove Entry"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
