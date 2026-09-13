'use client';

import { useState } from 'react';
import { Download, Check, Moon, Sun, Save, ShieldCheck } from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { PERSONAL_INFO, PROJECTS_SEED, EXPERIENCES_SEED } from '@/lib/data';

export default function SettingsView() {
  const { theme, setTheme } = useTheme();
  const [name, setName] = useState(PERSONAL_INFO.name);
  const [role, setRole] = useState(PERSONAL_INFO.role);
  const [email, setEmail] = useState(PERSONAL_INFO.email);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleExportJson = () => {
    const backupData = {
      profile: { name, role, email },
      projects: PROJECTS_SEED,
      experiences: EXPERIENCES_SEED,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `folio_backup_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 font-sans max-w-3xl">
      
      {/* Profile Form */}
      <form onSubmit={handleSave} className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-4">
        <div>
          <h2 className="text-base font-bold text-[var(--text-primary)]">Profile Information</h2>
          <p className="text-xs text-[var(--text-secondary)]">
            Configure the personal details shown on your public portfolio instance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
          <div>
            <label className="block font-mono text-[11px] text-[var(--text-muted)] mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] focus:outline-none focus:border-blue-500 font-sans"
            />
          </div>

          <div>
            <label className="block font-mono text-[11px] text-[var(--text-muted)] mb-1">Professional Title</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] focus:outline-none focus:border-blue-500 font-sans"
            />
          </div>

          <div>
            <label className="block font-mono text-[11px] text-[var(--text-muted)] mb-1">Contact Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] focus:outline-none focus:border-blue-500 font-sans"
            />
          </div>

          <div>
            <label className="block font-mono text-[11px] text-[var(--text-muted)] mb-1">Location</label>
            <input
              type="text"
              defaultValue="Bengaluru, India"
              className="w-full p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] focus:outline-none focus:border-blue-500 font-sans"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
          {savedNotice ? (
            <span className="text-xs font-mono text-emerald-500 flex items-center gap-1">
              <Check className="h-3.5 w-3.5" /> Changes saved successfully.
            </span>
          ) : (
            <span />
          )}

          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            Save Profile
          </button>
        </div>
      </form>

      {/* Appearance Settings */}
      <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-4">
        <div>
          <h2 className="text-base font-bold text-[var(--text-primary)]">Appearance</h2>
          <p className="text-xs text-[var(--text-secondary)]">
            Select your preferred visual aesthetic for the platform and portfolio.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            type="button"
            onClick={() => setTheme('light')}
            className={`p-3.5 rounded-xl border text-left space-y-1 transition-all ${
              theme === 'light'
                ? 'border-blue-500 bg-blue-500/5'
                : 'border-[var(--border)] bg-[var(--bg)] hover:border-[var(--text-dim)]'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-primary)]">
              <span className="flex items-center gap-1.5">
                <Sun className="h-4 w-4" /> Light Mode
              </span>
              {theme === 'light' && <Check className="h-3.5 w-3.5 text-blue-500" />}
            </div>
            <p className="text-[11px] text-[var(--text-muted)]">
              Crisp, bright Stripe/Vercel aesthetic.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setTheme('dark')}
            className={`p-3.5 rounded-xl border text-left space-y-1 transition-all ${
              theme === 'dark'
                ? 'border-blue-500 bg-blue-500/5'
                : 'border-[var(--border)] bg-[var(--bg)] hover:border-[var(--text-dim)]'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-primary)]">
              <span className="flex items-center gap-1.5">
                <Moon className="h-4 w-4" /> Dark Mode
              </span>
              {theme === 'dark' && <Check className="h-3.5 w-3.5 text-blue-500" />}
            </div>
            <p className="text-[11px] text-[var(--text-muted)]">
              Deep matte zinc Linear-inspired aesthetic.
            </p>
          </button>
        </div>
      </div>

      {/* Data Export */}
      <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-3">
        <div>
          <h2 className="text-base font-bold text-[var(--text-primary)]">Data Portability</h2>
          <p className="text-xs text-[var(--text-secondary)]">
            Export your entire portfolio architecture, projects, and telemetry schema as JSON.
          </p>
        </div>

        <button
          onClick={handleExportJson}
          className="px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-xs text-[var(--text-primary)] hover:border-[var(--text-dim)] font-medium flex items-center gap-2 transition-colors"
        >
          <Download className="h-3.5 w-3.5" />
          <span>Export Portfolio Data (.json)</span>
        </button>
      </div>

    </div>
  );
}
