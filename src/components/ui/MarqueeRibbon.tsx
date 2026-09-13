'use client';

import React from 'react';
import { Server, Database, Cpu, Layers, Code, Zap, Globe, Shield } from 'lucide-react';

const STACK_ITEMS = [
  { label: 'Java (Core & Advanced)', icon: Server },
  { label: 'Spring Boot 3', icon: Zap },
  { label: 'Spring Framework', icon: Layers },
  { label: 'Neon PostgreSQL', icon: Database },
  { label: 'TypeScript', icon: Code },
  { label: 'Node.js', icon: Cpu },
  { label: 'Tailwind CSS', icon: Globe },
  { label: 'Data Structures & Algorithms', icon: Shield },
];

export default function MarqueeRibbon() {
  return (
    <div className="w-full overflow-hidden bg-neutral-50/60 rounded-2xl border border-neutral-200 py-3.5">
      <div className="flex animate-marquee gap-10 whitespace-nowrap">
        {[0, 1, 2, 3].map((cycle) => (
          <div key={cycle} className="flex items-center gap-10 shrink-0">
            {STACK_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.15em] uppercase text-neutral-700 select-none"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white border border-neutral-200 text-black shadow-2xs">
                    <Icon className="h-3 w-3" />
                  </span>
                  <span>{item.label}</span>
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
