'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '@/lib/data';

export default function HeroSection() {
  const [activeProject, setActiveProject] = useState<number>(0);

  const projects = [
    {
      id: 0,
      title: 'Spring Nexus',
      subtitle: 'Java Spring Boot Enterprise Microservices',
      image: '/bentolio-preview.jpg',
      metrics: '<18ms p99 · 12k req/s',
      tech: 'Java 21 · Spring Boot 3 · PostgreSQL',
    },
    {
      id: 1,
      title: 'NSS IT Wing',
      subtitle: 'Campus Operations & Volunteer Portal',
      image: '/bentolio-preview.jpg',
      metrics: '500+ Active Volunteers · 99.9% Uptime',
      tech: 'Node.js · Next.js · Tailwind · SQL',
    },
    {
      id: 2,
      title: 'AlgoCraft',
      subtitle: 'Data Structures & Algorithms Visualizer',
      image: '/bentolio-preview.jpg',
      metrics: '35+ Algorithms · 60 FPS Stepper',
      tech: 'TypeScript · React · DSA Engine',
    },
    {
      id: 3,
      title: 'NeonQL',
      subtitle: 'Reactive SQL Query Explorer',
      image: '/bentolio-preview.jpg',
      metrics: '<10ms Execution Plan · Serverless',
      tech: 'Node.js · PostgreSQL · Neon DB',
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full">
      {/* Bento Grid Layout - Black & White Minimalist Alignment */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* ======================================================== */}
        {/* LEFT COLUMN: Headline Card (Top) + About Bio Card (Bottom) */}
        {/* ======================================================== */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          
          {/* Top Headline Card */}
          <div className="mono-card p-8 sm:p-10 flex flex-col justify-between flex-1 min-h-[360px] relative overflow-hidden group">
            {/* Geometric Minimal Wireframe Rosette */}
            <div className="absolute top-6 right-6 w-16 h-16 sm:w-20 sm:h-20 text-neutral-200 group-hover:text-neutral-400 group-hover:rotate-45 transition-all duration-700 ease-out pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none stroke-[1.2]">
                {[...Array(12)].map((_, i) => (
                  <ellipse
                    key={i}
                    cx="50"
                    cy="50"
                    rx="16"
                    ry="38"
                    transform={`rotate(${i * 30} 50 50)`}
                  />
                ))}
              </svg>
            </div>

            {/* Top Category Tag */}
            <div className="text-[11px] font-bold tracking-[0.22em] text-neutral-400 uppercase">
              JAVA FULL STACK · DLITHE TRAINEE
            </div>

            {/* Signature Minimalist Typography Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a0a0a] tracking-tight leading-[1.14] mt-8">
              Backend Developer <br />
              <span className="font-serif italic font-normal text-4xl sm:text-5xl lg:text-[50px] text-[#0a0a0a]">
                Architecting
              </span>{' '}
              Scalable <br />
              Software &amp; Web
            </h1>
          </div>

          {/* Bottom About / Bio Card */}
          <div id="about" className="mono-card p-7 sm:p-8 flex flex-col justify-between min-h-[220px]">
            {/* Minimalist Sparkle Icon */}
            <div className="w-8 h-8 text-neutral-400 mb-3">
              <svg viewBox="0 0 40 40" className="w-full h-full fill-current">
                {[...Array(8)].map((_, i) => (
                  <rect
                    key={i}
                    x="18.5"
                    y="4"
                    width="3"
                    height="7"
                    rx="1.5"
                    transform={`rotate(${i * 45} 20 20)`}
                  />
                ))}
              </svg>
            </div>

            {/* Bio Paragraph */}
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-neutral-600 font-normal">
              {PERSONAL_INFO.name} is a B.Tech Computer Science student at NMAM Institute of Technology (Expected July 2027) and Java Full Stack Trainee at DLithe. Equipped with strong fundamentals in Java, Spring Boot, Node.js, and Data Structures &amp; Algorithms, he is passionate about backend development, scalable software, and clean architectures.
            </p>
          </div>
        </div>

        {/* ======================================================== */}
        {/* CENTER COLUMN: Pixel Profile (Top) + Dark CTA (Bottom) */}
        {/* ======================================================== */}
        <div className="lg:col-span-3 flex flex-col gap-6 justify-between">
          
          {/* Authentic Pixel Art Profile Card */}
          <div className="mono-card p-6 min-h-[360px] flex flex-col justify-between items-center relative bg-neutral-50/60 group overflow-hidden">
            {/* Top Status Pill */}
            <div className="w-full flex items-center justify-between z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-bold text-neutral-800 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                <span>Available for Roles</span>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase bg-white px-2 py-0.5 rounded-md border border-neutral-200">
                CSE &apos;27
              </span>
            </div>

            {/* Pixel Art Avatar inside crisp frame */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 my-auto group-hover:scale-105 transition-transform duration-500 ease-out flex items-center justify-center bg-white rounded-2xl border border-neutral-200 shadow-xs p-2">
              <Image
                src="/pfp.png"
                alt="Hithesh Gurudatta — Pixel Profile"
                width={192}
                height={192}
                priority
                className="w-full h-full object-contain [image-rendering:pixelated]"
              />
            </div>

            {/* Bottom ID Badge */}
            <div className="w-full text-center bg-white rounded-xl py-2 px-3 border border-neutral-200 z-10 shadow-2xs">
              <div className="text-xs font-bold text-[#0a0a0a]">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[11px] text-neutral-500 font-medium">
                Java Full Stack Trainee · DLithe
              </div>
            </div>
          </div>

          {/* Solid Black Minimalist CTA Card */}
          <div
            onClick={scrollToContact}
            className="mono-card-dark p-7 sm:p-8 flex flex-col justify-between min-h-[220px] cursor-pointer group"
            role="button"
            tabIndex={0}
            aria-label="Scroll to contact form"
          >
            {/* Top row */}
            <div className="flex items-start justify-between">
              <span className="text-[14px] font-medium text-neutral-300 leading-tight">
                Have an inquiry
                <br />
                or opportunity?
              </span>
              <span className="text-2xl font-light text-white group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300">
                ↗
              </span>
            </div>

            {/* Bottom Action Headline */}
            <h2 className="text-3xl sm:text-[34px] font-extrabold tracking-tight text-white">
              Contact me
            </h2>
          </div>
        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: Projects Accordion Card (Top) + Socials (Bottom) */}
        {/* ======================================================== */}
        <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
          
          {/* Projects Accordion Card */}
          <div className="mono-card p-6 sm:p-8 flex flex-col justify-between flex-1 min-h-[480px]">
            <div className="space-y-4">
              <div className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase pb-1 border-b border-neutral-100">
                FEATURED ARCHITECTURES
              </div>

              {projects.map((proj, idx) => {
                const isExpanded = activeProject === idx;
                return (
                  <div
                    key={proj.title}
                    className="border-b border-neutral-100 pb-3 last:border-b-0 last:pb-0 cursor-pointer"
                    onClick={() => setActiveProject(idx)}
                  >
                    {/* Project Header Row */}
                    <div className="flex items-center justify-between py-1 group">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg sm:text-xl font-bold text-[#0a0a0a] group-hover:text-neutral-500 transition-colors">
                          {proj.title}
                        </span>
                        {!isExpanded && (
                          <span className="text-xs text-neutral-400 hidden sm:inline truncate max-w-[140px]">
                            · {proj.subtitle}
                          </span>
                        )}
                      </div>
                      <span className={`text-lg text-neutral-400 transition-transform duration-300 ${isExpanded ? 'translate-x-0.5 -translate-y-0.5 text-black font-bold' : 'group-hover:translate-x-0.5'}`}>
                        ↗
                      </span>
                    </div>

                    {/* Expandable Content with Image preview */}
                    {isExpanded && (
                      <div className="mt-3 space-y-3">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-200">
                          <Image
                            src={proj.image}
                            alt={proj.title}
                            fill
                            className="object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        </div>
                        <div className="flex items-center justify-between text-xs text-neutral-600 pt-1">
                          <span className="font-semibold text-black">{proj.metrics}</span>
                          <span className="text-neutral-400 text-[11px]">{proj.tech}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom view all link */}
            <div className="pt-4 border-t border-neutral-100 flex justify-end">
              <a
                href="#projects"
                className="text-xs font-bold tracking-widest uppercase text-black hover:text-neutral-500 transition-colors"
              >
                EXPLORE ALL PROJECTS ↗
              </a>
            </div>
          </div>

          {/* Socials Bar Card */}
          <div className="mono-card px-6 py-4 flex items-center justify-between">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold tracking-[0.16em] text-neutral-600 hover:text-black transition-colors uppercase"
            >
              GITHUB
            </a>
            <span className="text-neutral-300">·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold tracking-[0.16em] text-neutral-600 hover:text-black transition-colors uppercase"
            >
              LINKEDIN
            </a>
            <span className="text-neutral-300">·</span>
            <a
              href={PERSONAL_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold tracking-[0.16em] text-neutral-600 hover:text-black transition-colors uppercase"
            >
              VERCEL
            </a>
            <span className="text-neutral-300">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[11px] font-bold tracking-[0.16em] text-neutral-600 hover:text-black transition-colors uppercase"
            >
              EMAIL
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
