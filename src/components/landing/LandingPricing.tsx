'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';

const TIERS = [
  {
    name: 'Undergrad & Open Source',
    price: '$0',
    period: 'forever',
    description: 'Everything you need to ship a world-class engineering portfolio.',
    features: [
      'Next.js 15 & Neon PostgreSQL stack',
      'Up to 10 curated engineering projects',
      'Real-time guestbook & inquiries',
      'Basic recruiter telemetry',
      'Standard AI bullet suggestions',
      'folio.dev/p/[username] URL',
    ],
    cta: 'Start Building Free',
    highlight: false,
  },
  {
    name: 'Pro Engineer',
    price: '$12',
    period: 'per month',
    description: 'For engineers actively interviewing for top-tier tech roles.',
    features: [
      'Everything in Free',
      'Unlimited AI Project Polisher runs',
      'Deep recruiter dwell-time heatmaps',
      'Custom apex domain support',
      'Exportable resume-matched PDF briefs',
      'Priority Neon DB connection pooling',
      'Verified Engineer badge',
    ],
    cta: 'Start Pro Trial',
    highlight: true,
  },
  {
    name: 'Research Lab / Team',
    price: '$49',
    period: 'per month',
    description: 'For collegiate teams, open-source orgs, and startup founders.',
    features: [
      'Everything in Pro',
      'Team shared workspaces',
      'Custom telemetry webhooks',
      'Audit log & recruiter notifications',
      'Dedicated support channel',
    ],
    cta: 'Contact Lab Team',
    highlight: false,
  },
];

export default function LandingPricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--border)]">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="text-xs uppercase font-mono tracking-wider text-[var(--text-muted)]">
          Simple, Transparent Plans
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Priced for students, scaled for senior engineers.
        </h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          Start completely free. Upgrade when you need deep recruiter analytics and custom domains.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
              tier.highlight
                ? 'border-[var(--primary)] bg-[var(--surface-elevated)] shadow-xl relative'
                : 'border-[var(--border)] bg-[var(--surface)]'
            }`}
          >
            {tier.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-[10px] uppercase font-mono font-bold tracking-wider shadow-sm">
                Most Popular
              </span>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
                  {tier.name}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  {tier.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1 pt-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                  {tier.price}
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  /{tier.period}
                </span>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-[var(--border)]">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                    <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/dashboard"
                className={`w-full py-2.5 rounded-lg text-xs font-semibold tracking-tight transition-all flex items-center justify-center ${
                  tier.highlight
                    ? 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-md hover:opacity-90'
                    : 'border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] hover:border-[var(--text-dim)]'
                }`}
              >
                {tier.cta}
              </Link>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
