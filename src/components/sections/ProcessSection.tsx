'use client';

import React, { useState } from 'react';
import { Server, Zap, Database } from 'lucide-react';

const STEPS = [
  {
    id: '01',
    tab: '01 · Ingest & Queue',
    title: 'High-Throughput Ingestion',
    icon: Zap,
    description:
      'Incoming asynchronous telemetry and task payloads are buffered into lock-free Redis Streams. Sub-millisecond backpressure guarantees zero dropped messages under peak spikes.',
    panelData: [
      { label: 'Event Ingestion', value: '45,000 / sec' },
      { label: 'Buffer Storage', value: 'Redis Stream Ring' },
      { label: 'P99 Latency', value: '1.2ms' },
      { label: 'Backpressure Mode', value: 'Dynamic Throttling' },
    ],
  },
  {
    id: '02',
    tab: '02 · DAG Scheduling',
    title: 'Distributed Orchestration',
    icon: Server,
    description:
      'Worker clusters pick up directed acyclic graph (DAG) nodes concurrently. Master election via Raft consensus coordinates dependency resolution and task dispatch.',
    panelData: [
      { label: 'Cluster Topology', value: 'Master / Worker' },
      { label: 'Consensus', value: 'Raft-based Quorum' },
      { label: 'Dispatch Latency', value: '<12ms P95' },
      { label: 'Fault Recovery', value: 'Automated Failover' },
    ],
  },
  {
    id: '03',
    tab: '03 · Persistent Sync',
    title: 'Serverless Neon DB Ledger',
    icon: Database,
    description:
      'Final execution artifacts, audit trails, and client analytics write through to Neon serverless PostgreSQL with pgvector indexing for sub-second semantic retrieval.',
    panelData: [
      { label: 'Storage Engine', value: 'Neon Serverless Postgres' },
      { label: 'Vector Index', value: 'HNSW / pgvector' },
      { label: 'Cold-Start Latency', value: 'Zero-Pause Autoscaling' },
      { label: 'Replication', value: 'Multi-AZ Branching' },
    ],
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const current = STEPS[activeStep];
  const StepIcon = current.icon;

  return (
    <section id="workflow" className="w-full">
      <div className="mono-card p-8 sm:p-10">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-100">
          <div>
            <div className="text-[11px] font-bold tracking-[0.22em] text-neutral-400 uppercase mb-2">
              ENGINEERING METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0a0a] tracking-tight">
              Systems Execution{' '}
              <span className="font-serif italic font-normal text-3xl sm:text-4xl text-[#0a0a0a]">
                Workflow
              </span>
            </h2>
            <p className="mt-2 text-sm text-neutral-500 max-w-xl">
              From raw network packet to durable database consensus. Three deterministic stages ensuring fault-tolerant execution.
            </p>
          </div>

          {/* Minimalist Pill Selectors */}
          <div className="flex flex-wrap gap-2">
            {STEPS.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'bg-black text-white shadow-2xs'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black'
                }`}
              >
                {step.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-xs font-bold text-black border border-neutral-200">
              <StepIcon className="w-3.5 h-3.5" />
              <span>STAGE {current.id}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a0a0a] tracking-tight">
              {current.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {current.description}
            </p>
          </div>

          <div className="lg:col-span-5 bg-neutral-50/80 rounded-xl p-5 border border-neutral-200 space-y-2.5">
            <div className="text-[11px] font-bold tracking-widest uppercase text-neutral-400 pb-2 border-b border-neutral-200">
              TELEMETRY &amp; SPECS
            </div>
            {current.panelData.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center text-xs py-1 border-b border-neutral-100 last:border-0">
                <span className="text-neutral-500">{item.label}</span>
                <span className="font-bold text-[#0a0a0a]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
