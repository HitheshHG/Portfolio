'use client';

import React from 'react';
import { EXPERIENCES_SEED, TECH_SKILLS, PERSONAL_INFO } from '@/lib/data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full space-y-6">
      
      {/* Header Card */}
      <div className="mono-card p-8 sm:p-10">
        <div className="text-[11px] font-bold tracking-[0.22em] text-neutral-400 uppercase mb-2">
          CAREER &amp; EDUCATION
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0a0a] tracking-tight">
          Experience &amp;{' '}
          <span className="font-serif italic font-normal text-3xl sm:text-4xl text-[#0a0a0a]">
            Trajectory
          </span>
        </h2>
        <p className="mt-2 text-sm text-neutral-500 max-w-xl">
          Java Full Stack development at DLithe, student leadership at NSS IT Wing NMAMIT, and B.Tech CSE studies.
        </p>
      </div>

      {/* Experience Cards Stack */}
      <div className="space-y-6">
        {EXPERIENCES_SEED.map((exp) => (
          <div
            key={exp.id}
            className="mono-card p-7 sm:p-9 space-y-5"
          >
            {/* Header: Role, Period, Company */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-neutral-100 pb-4">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-2xl font-extrabold text-[#0a0a0a] tracking-tight">
                    {exp.role}
                  </h3>
                  {exp.badge && (
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                  <span className="font-bold text-black">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <span className="self-start sm:self-auto inline-flex items-center rounded-full bg-black px-3.5 py-1 text-xs font-bold tracking-wider text-white shadow-2xs">
                {exp.period}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-neutral-600">
              {exp.description}
            </p>

            {/* Bullet points */}
            <div className="space-y-2 pt-1">
              {exp.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                  <span className="text-black font-bold text-sm mt-[-1px]">✓</span>
                  <span className="leading-relaxed">{h}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-0.5 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Technical Competencies & Languages */}
      <div id="skills" className="mono-card p-8 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-100 pb-6">
          <div>
            <div className="text-[11px] font-bold tracking-[0.22em] text-neutral-400 uppercase mb-2">
              TECHNICAL ARSENAL
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a0a0a] tracking-tight">
              Competencies &amp;{' '}
              <span className="font-serif italic font-normal text-2xl sm:text-3xl text-[#0a0a0a]">
                Toolchain
              </span>
            </h3>
          </div>

          {/* Languages Pill Bar */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-neutral-400 font-bold uppercase tracking-wider text-[11px]">Languages:</span>
            {PERSONAL_INFO.languages.map((lang) => (
              <span
                key={lang.name}
                className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[#0a0a0a] font-semibold"
              >
                {lang.name} ({lang.proficiency.split(' ')[0]})
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {TECH_SKILLS.map((cat, idx) => (
            <div
              key={idx}
              className="bg-neutral-50/70 rounded-xl p-6 border border-neutral-200 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#0a0a0a]">
                  {cat.category}
                </h4>
                <span className="text-[11px] text-neutral-400 font-bold">
                  {cat.skills.length} SKILLS
                </span>
              </div>

              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-[#0a0a0a]">{skill.name}</span>
                      <span className="text-neutral-500 font-medium">{skill.level}</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-neutral-400">
                      <span>Experience</span>
                      <span>{skill.experience}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
