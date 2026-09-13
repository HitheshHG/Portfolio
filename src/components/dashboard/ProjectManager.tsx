'use client';

import { useState } from 'react';
import { Plus, FolderGit2, ExternalLink, Github, Trash2, Edit2, Check, X } from 'lucide-react';
import { PROJECTS_SEED } from '@/lib/data';
import { Project, TechCategory } from '@/lib/types';

export default function ProjectManager() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS_SEED);
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<TechCategory>('Systems & Backend');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [techString, setTechString] = useState('TypeScript, Next.js, PostgreSQL');

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newProject: Project = {
      id: 'proj-' + Date.now(),
      slug: title.toLowerCase().replace(/\s+/g, '-'),
      title: title.trim(),
      tagline: tagline.trim() || title.trim(),
      description: description.trim(),
      category,
      tags: techString.split(',').map((t) => t.trim()),
      metrics: [
        { label: 'Dispatch P99', value: '<15ms' },
        { label: 'Throughput', value: '10k/s' },
      ],
      tech: techString.split(',').map((t) => t.trim()),
      github_frontend: 'https://github.com/hitheshhg',
      live: 'https://github.com/hitheshhg',
    };

    setProjects([newProject, ...projects]);
    setTitle('');
    setTagline('');
    setDescription('');
    setModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
        <div>
          <h2 className="text-base font-bold text-[var(--text-primary)]">
            Project Studio
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            Manage the projects displayed on your public engineering showcase ({projects.length} active).
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-xs"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>Add Project</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--text-dim)] transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-500 font-semibold px-2 py-0.5 rounded-full bg-blue-500/10">
                  {project.category}
                </span>

                <button
                  onClick={() => handleDelete(project.id)}
                  className="text-[var(--text-muted)] hover:text-rose-500 p-1"
                  title="Remove Project"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>

              <h3 className="text-base font-bold text-[var(--text-primary)]">
                {project.title}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono">
              <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.live || project.github_frontend}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1 text-[11px]"
              >
                <span>Preview</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Add Project Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] shadow-2xl p-6 space-y-4 font-sans">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <h3 className="font-bold text-sm text-[var(--text-primary)]">Add Engineering Project</h3>
              <button onClick={() => setModalOpen(false)} className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleAddProject} className="space-y-3 text-xs">
              <div>
                <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Distributed Consensus Engine"
                  className="w-full p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as TechCategory)}
                    className="w-full p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] focus:outline-none focus:border-blue-500"
                  >
                    <option value="Systems & Backend">Systems &amp; Backend</option>
                    <option value="Full-Stack">Full-Stack</option>
                    <option value="AI & ML">AI &amp; ML</option>
                    <option value="Creative Tech">Creative Tech</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1">Tech Stack (CSV)</label>
                  <input
                    type="text"
                    value={techString}
                    onChange={(e) => setTechString(e.target.value)}
                    placeholder="Go, Redis, Docker"
                    className="w-full p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1">Architectural Summary *</label>
                <textarea
                  rows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="High-throughput workflow runner featuring raft-inspired consensus and sub-15ms task dispatch..."
                  className="w-full p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[var(--border)]">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-3 py-1.5 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:opacity-90"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
