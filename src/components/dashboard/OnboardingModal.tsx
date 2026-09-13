'use client';

import { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, X, Sparkles, Award, Cpu, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TRACKS = [
  { id: 'systems', title: 'Systems & Backend Architecture', desc: 'Focus on distributed pipelines, concurrency, and high throughput.' },
  { id: 'fullstack', title: 'Full-Stack Product Engineering', desc: 'Focus on end-to-end web apps, Next.js, and design fidelity.' },
  { id: 'ai', title: 'AI & Machine Learning Systems', desc: 'Focus on vector search, RAG pipelines, and model deployment.' },
];

const SKILL_OPTIONS = ['TypeScript', 'Go', 'Python', 'Next.js 15', 'PostgreSQL / Neon', 'Redis', 'Docker', 'Three.js'];

export default function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedTrack, setSelectedTrack] = useState('systems');
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['TypeScript', 'Go', 'Next.js 15', 'PostgreSQL / Neon']);
  const [targetBio, setTargetBio] = useState('Engineering student building reliable distributed systems and high-craft web interfaces.');

  if (!isOpen) return null;

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleFinish = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm font-sans">
      <div className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Header & Step progress */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-blue-500/10 text-blue-500 font-bold text-xs flex items-center justify-center font-mono">
              {step}/4
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Profile Readiness Wizard
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Step 1: Specialization Track */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
                Select Your Engineering Specialization
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                This configures the AI analysis and telemetry highlights on your portfolio.
              </p>
            </div>

            <div className="space-y-2.5">
              {TRACKS.map((t) => (
                <div
                  key={t.id}
                  onClick={() => setSelectedTrack(t.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    selectedTrack === t.id
                      ? 'border-blue-500 bg-blue-500/5 shadow-xs'
                      : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--text-dim)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--text-primary)]">
                      {t.title}
                    </span>
                    {selectedTrack === t.id && (
                      <Check className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] mt-1">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Tech Stack */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
                Confirm Primary Technical Stack
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Highlight skills where you can demonstrate deep architectural familiarity.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {SKILL_OPTIONS.map((skill) => {
                const active = selectedSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all ${
                      active
                        ? 'border-blue-500 bg-blue-500/10 text-blue-500 font-semibold'
                        : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--text-dim)]'
                    }`}
                  >
                    {active && '✓ '}
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Quantifiable Bio */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
                Refine Your Summary
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Keep it concise. Lead with what you build and the problems you solve.
              </p>
            </div>

            <textarea
              rows={4}
              value={targetBio}
              onChange={(e) => setTargetBio(e.target.value)}
              className="w-full p-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-blue-500 resize-none font-sans"
            />
          </div>
        )}

        {/* Step 4: Readiness Review */}
        {step === 4 && (
          <div className="text-center space-y-4 py-2">
            <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
              <Award className="h-6 w-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
                Profile Readiness: Level 4 (85%)
              </h3>
              <p className="text-xs text-[var(--text-secondary)] max-w-sm mx-auto">
                Your portfolio is primed for top-tier recruiter reviews. Neon PostgreSQL sync is active.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-left text-xs font-mono space-y-1.5">
              <div className="flex items-center justify-between text-[var(--text-muted)]">
                <span>Specialization:</span>
                <span className="text-[var(--text-primary)] uppercase">{selectedTrack}</span>
              </div>
              <div className="flex items-center justify-between text-[var(--text-muted)]">
                <span>Verified Skills:</span>
                <span className="text-[var(--text-primary)]">{selectedSkills.length} selected</span>
              </div>
              <div className="flex items-center justify-between text-[var(--text-muted)]">
                <span>Database Sync:</span>
                <span className="text-emerald-500 font-semibold">Neon PostgreSQL Connected</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] font-medium"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back
            </button>
          ) : (
            <span />
          )}

          {step < 4 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <span>Continue</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors shadow-sm"
            >
              <span>Launch Profile</span>
              <Check className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
