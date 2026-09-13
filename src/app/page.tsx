'use client';

import MinimalNavbar from '@/components/ui/MinimalNavbar';
import HeroSection from '@/components/sections/HeroSection';
import MarqueeRibbon from '@/components/ui/MarqueeRibbon';
import ProcessSection from '@/components/sections/ProcessSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import GuestbookSection from '@/components/sections/GuestbookSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <main className="w-full flex flex-col gap-8 sm:gap-12">
      {/* Floating Minimalist Header Navbar */}
      <MinimalNavbar />

      {/* 3-Column Bento Grid Centerpiece */}
      <HeroSection />

      {/* Monochrome Tech Stack Ribbon */}
      <MarqueeRibbon />

      {/* Systems Architecture Process Workflow */}
      <ProcessSection />

      {/* Selected Engineering Projects Grid */}
      <ProjectsSection />

      {/* Career Trajectory & Technical Arsenal */}
      <ExperienceSection />

      {/* Neon PostgreSQL Live Guestbook */}
      <GuestbookSection />

      {/* Direct Contact & Transmission Form */}
      <ContactSection />

      {/* Minimalist Footer */}
      <Footer />
    </main>
  );
}
