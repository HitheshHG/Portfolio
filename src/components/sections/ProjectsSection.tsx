'use client';

import React, { useState } from 'react';
import { Github, ExternalLink, Layers, Database, Globe, Cpu } from 'lucide-react';
import { PROJECTS_SEED } from '@/lib/data';
import { Project } from '@/lib/types';

const CATEGORY_ICONS: Record<string, any> = {
  'Systems & Backend': Layers,
  'AI & ML': Database,
  'Full-Stack': Globe,
  'Creative Tech': Cpu,
};

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Systems & Backend', 'Full-Stack', 'Creative Tech'];

  const filtered: Project[] = selectedCategory === 'All'
    ? PROJECTS_SEED
    : PROJECTS_SEED.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="w-full space-y-6">
      
      {/* Section Header Card */}
      <div className="mono-card p-8 sm:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-[11px] font-bold tracking-[0.22em] text-neutral-400 uppercase mb-2">
            FEATURED PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0a0a] tracking-tight">
            Selected{' '}
            <span className="font-serif italic font-normal text-3xl sm:text-4xl text-[#0a0a0a]">
              Architectures
            </span>
          </h2>
          <p className="mt-2 text-sm text-neutral-500 max-w-xl">
            Enterprise Java Spring Boot services, campus automation engines, and interactive DSA computational tools.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-black text-white shadow-2xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Minimalist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project, idx) => {
          const Icon = CATEGORY_ICONS[project.category] || Layers;

          return (
            <div
              key={project.id}
              className="mono-card p-7 sm:p-8 flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                
                {/* Category Pill & Index */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-xs font-bold text-black border border-neutral-200">
                    <Icon className="h-3.5 w-3.5 text-neutral-700" />
                    <span>{project.category}</span>
                  </span>

                  <span className="text-xs font-mono font-bold tracking-wider text-neutral-400">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title & Arrow */}
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-extrabold text-[#0a0a0a] group-hover:text-neutral-600 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <span className="text-xl text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </div>

                {/* Subtitle / Description */}
                <p className="text-sm leading-relaxed text-neutral-600">
                  {project.description}
                </p>

                {/* Core Architecture Bullet Points */}
                {project.architecture && (
                  <div className="pt-2 space-y-1.5">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">
                      KEY ARCHITECTURAL DECISIONS
                    </div>
                    <ul className="text-xs text-neutral-600 space-y-1 list-disc pl-4">
                      {project.architecture.map((dec, dIdx) => (
                        <li key={dIdx}>{dec}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* System Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-neutral-50 rounded-lg p-2.5 border border-neutral-200">
                        <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">{m.label}</div>
                        <div className="text-xs font-bold text-[#0a0a0a]">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer: Tech Stack & Links */}
              <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-neutral-100 text-[11px] font-medium text-neutral-800 border border-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  {(project.github_frontend || project.github_backend) && (
                    <a
                      href={project.github_frontend || project.github_backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white hover:bg-black hover:text-white text-[#0a0a0a] transition-all border border-neutral-200 shadow-2xs"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white hover:bg-black hover:text-white text-[#0a0a0a] transition-all border border-neutral-200 shadow-2xs"
                      title="Live Preview"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
