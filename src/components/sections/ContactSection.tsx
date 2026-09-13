'use client';

import React, { useState } from 'react';
import { Mail, Phone, Check, Copy, Send, MapPin, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sentNotice, setSentNotice] = useState(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('8660807227');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setErrorNotice(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (data.success) {
        setName('');
        setEmail('');
        setMessage('');
        setSentNotice(true);
        setTimeout(() => setSentNotice(false), 5000);
      } else {
        setErrorNotice(data.error || 'Failed to send message.');
      }
    } catch {
      setErrorNotice('Network error submitting inquiry.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="w-full space-y-6">
      
      {/* Header Card */}
      <div className="mono-card p-8 sm:p-10">
        <div className="text-[11px] font-bold tracking-[0.22em] text-neutral-400 uppercase mb-2">
          GET IN TOUCH
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0a0a] tracking-tight">
          Let&apos;s Build{' '}
          <span className="font-serif italic font-normal text-3xl sm:text-4xl text-[#0a0a0a]">
            Something Scalable
          </span>
        </h2>
        <p className="mt-2 text-sm text-neutral-500 max-w-xl">
          Interested in backend development, Java full stack projects, or hiring for internships &amp; engineering roles? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Direct Inquiries (5 cols) */}
        <div className="lg:col-span-5 mono-card p-7 sm:p-8 space-y-5">
          <div className="border-b border-neutral-100 pb-3">
            <h3 className="text-lg font-bold text-[#0a0a0a] tracking-tight">
              Direct Contact
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Guaranteed response within 24 hours.
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-neutral-50/80 rounded-xl p-4 border border-neutral-200 space-y-1.5">
            <div className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">
              EMAIL ADDRESS
            </div>
            <div className="flex items-center justify-between gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs sm:text-sm font-bold text-[#0a0a0a] hover:text-neutral-500 transition-colors flex items-center gap-2 truncate"
              >
                <Mail className="h-3.5 w-3.5 text-black shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>

              <button
                onClick={copyEmail}
                className="px-2.5 py-1 rounded-full bg-white hover:bg-black hover:text-white text-xs font-semibold text-[#0a0a0a] border border-neutral-200 transition-colors flex items-center gap-1 cursor-pointer shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3 w-3 text-black" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-neutral-50/80 rounded-xl p-4 border border-neutral-200 space-y-1.5">
            <div className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">
              PHONE NUMBER
            </div>
            <div className="flex items-center justify-between gap-2">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-xs sm:text-sm font-bold text-[#0a0a0a] hover:text-neutral-500 transition-colors flex items-center gap-2"
              >
                <Phone className="h-3.5 w-3.5 text-black shrink-0" />
                <span>+91 8660807227</span>
              </a>

              <button
                onClick={copyPhone}
                className="px-2.5 py-1 rounded-full bg-white hover:bg-black hover:text-white text-xs font-semibold text-[#0a0a0a] border border-neutral-200 transition-colors flex items-center gap-1 cursor-pointer shrink-0"
              >
                {copiedPhone ? (
                  <>
                    <Check className="h-3 w-3 text-black" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="space-y-2 text-xs text-neutral-600 pt-1">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
              <span>{PERSONAL_INFO.location} · NMAMIT Nitte</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
              <span>Open to Full-Stack, Java &amp; Backend roles</span>
            </div>
          </div>

          <div className="pt-3 border-t border-neutral-100 flex flex-wrap gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-black hover:text-white text-xs font-bold tracking-wider uppercase text-neutral-800 border border-neutral-200 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-black hover:text-white text-xs font-bold tracking-wider uppercase text-neutral-800 border border-neutral-200 transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={PERSONAL_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-black hover:text-white text-xs font-bold tracking-wider uppercase text-neutral-800 border border-neutral-200 transition-colors"
            >
              Vercel ↗
            </a>
          </div>
        </div>

        {/* Right Column: Transmission Form (7 cols) */}
        <div className="lg:col-span-7 mono-card p-7 sm:p-8 space-y-5">
          <div className="border-b border-neutral-100 pb-3">
            <h3 className="text-lg font-bold text-[#0a0a0a] tracking-tight">
              Send a Transmission
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Direct inbox delivery. No spam, ever.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-neutral-700 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Recruiter or Lead"
                  className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-2.5 text-sm text-[#0a0a0a] placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-neutral-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="team@company.com"
                  className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-2.5 text-sm text-[#0a0a0a] placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-neutral-700 mb-1.5">
                Message *
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Hithesh, we would love to connect regarding an opportunity..."
                className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-2.5 text-sm text-[#0a0a0a] placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            {sentNotice && (
              <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold">
                Message transmitted successfully! Hithesh will get back to you shortly.
              </div>
            )}

            {errorNotice && (
              <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-300 text-neutral-900 text-xs font-semibold">
                {errorNotice}
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-black py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-neutral-800 transition-all disabled:opacity-50 cursor-pointer shadow-xs"
            >
              {isSending ? (
                <span>Transmitting...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
