'use client';

import { useState } from 'react';
import { Sparkles, Check, Copy, ArrowRight, RefreshCw, BarChart2, ShieldCheck } from 'lucide-react';
import { PROJECTS_SEED } from '@/lib/data';

export default function AIProjectPolisher() {
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS_SEED[0].id);
  const [customText, setCustomText] = useState(PROJECTS_SEED[0].description);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [analysisResult, setAnalysisResult] = useState<{
    initialScore: number;
    optimizedScore: number;
    polishedBullets: string[];
    suggestedMetrics: { label: string; value: string }[];
    recommendations: string[];
  } | null>({
    initialScore: 72,
    optimizedScore: 94,
    polishedBullets: [
      'Architected high-throughput distributed pipeline, reducing P99 latency by 38% through non-blocking concurrency primitives.',
      'Engineered fault-tolerant task queue handling 45k+ operations/sec with automated backpressure and raft consensus.',
      'Integrated real-time telemetry and connection pooling on PostgreSQL, achieving 99.98% operational uptime.',
    ],
    suggestedMetrics: [
      { label: 'Latency Drop', value: '-38% P99' },
      { label: 'Throughput', value: '45k ops/sec' },
      { label: 'SLA Uptime', value: '99.98%' },
    ],
    recommendations: [
      'Lead with action verbs and quantifiable metrics rather than generic responsibilities.',
      'Explain the distributed failure recovery protocol and how the system self-heals.',
    ],
  });

  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
    const proj = PROJECTS_SEED.find((p) => p.id === id);
    if (proj) setCustomText(proj.description);
  };

  const handleRunAnalysis = async () => {
    const proj = PROJECTS_SEED.find((p) => p.id === selectedProjectId);
    if (!proj) return;

    setLoading(true);
    try {
      const res = await fetch('/api/ai/optimize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: proj.title,
          description: customText,
          category: proj.category,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setAnalysisResult({
          initialScore: data.initialScore,
          optimizedScore: data.optimizedScore,
          polishedBullets: data.polishedBullets,
          suggestedMetrics: data.suggestedMetrics,
          recommendations: data.recommendations,
        });
      }
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  const handleCopyBullet = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6 font-sans">
      
      {/* Intro Header */}
      <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-purple-500" />
          <h2 className="text-base font-bold text-[var(--text-primary)]">
            AI Technical Project Polisher
          </h2>
        </div>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          Recruiters read dozens of resumes daily. This engine analyzes your technical descriptions, calculates an architectural depth score, and generates quantifiable, resume-ready bullet points.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Input Selection */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-4">
          <div className="space-y-1">
            <label className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
              Select Project to Optimize
            </label>
            <select
              value={selectedProjectId}
              onChange={(e) => handleSelectProject(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-blue-500 font-sans"
            >
              {PROJECTS_SEED.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
              Technical Description / Architecture Notes
            </label>
            <textarea
              rows={6}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full p-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-blue-500 resize-none font-sans leading-relaxed"
            />
          </div>

          <button
            onClick={handleRunAnalysis}
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                <span>Analyzing Architecture...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                <span>Run Technical Impact Analysis</span>
              </>
            )}
          </button>
        </div>

        {/* Right: Analysis & Optimization Results */}
        <div className="lg:col-span-7 space-y-4">
          {analysisResult && (
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-5">
              
              {/* Score Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                <div>
                  <div className="text-xs font-mono uppercase text-[var(--text-muted)]">
                    Technical Impact Score
                  </div>
                  <div className="flex items-baseline gap-2 pt-0.5">
                    <span className="text-2xl font-extrabold text-[var(--text-primary)] font-mono">
                      {analysisResult.optimizedScore}/100
                    </span>
                    <span className="text-xs text-emerald-500 font-mono font-semibold">
                      +{analysisResult.optimizedScore - analysisResult.initialScore} pts improvement
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono font-medium border border-emerald-500/20">
                    Tier: Senior Architect Ready
                  </span>
                </div>
              </div>

              {/* Suggested Metrics */}
              <div>
                <div className="text-[11px] font-mono uppercase text-[var(--text-muted)] mb-2">
                  Extracted Quantifiable Metrics
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {analysisResult.suggestedMetrics.map((m, i) => (
                    <div key={i} className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] font-mono text-xs">
                      <div className="font-bold text-[var(--text-primary)]">{m.value}</div>
                      <div className="text-[10px] text-[var(--text-muted)]">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Polished Bullets */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase text-[var(--text-muted)]">
                  Resume-Ready Polished Bullets
                </div>
                <div className="space-y-2">
                  {analysisResult.polishedBullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] flex items-start justify-between gap-3 text-xs text-[var(--text-primary)] leading-relaxed group"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-blue-500 font-mono">&bull;</span>
                        <span>{bullet}</span>
                      </div>
                      <button
                        onClick={() => handleCopyBullet(bullet, idx)}
                        className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] shrink-0"
                        title="Copy to clipboard"
                      >
                        {copiedIndex === idx ? (
                          <Check className="h-3.5 w-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

      </div>

    </div>
  );
}
