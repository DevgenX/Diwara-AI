'use client';

import { ArrowUpRight, Play } from 'lucide-react';
import BlurText from './BlurText';

export default function MarketingTeaserVideo() {
  return (
    <section id="teaser" className="relative overflow-hidden bg-[#050b14] px-4 py-28 sm:px-6 md:py-36">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050b14] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050b14] to-transparent" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="mb-5 inline-flex rounded-full px-3.5 py-1 text-xs uppercase tracking-wide text-[#22d3ee] liquid-glass font-mono">
              Product Teaser
            </span>
            <BlurText
              text="Diwara moves with the work on your screen."
              className="max-w-3xl text-4xl font-bold leading-[0.9] text-white font-heading md:text-5xl lg:text-6xl"
            />
          </div>
          <a
            href="#pricing"
            className="flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors liquid-glass-strong hover:bg-[#22d3ee]/10"
          >
            Join the beta <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-[#22d3ee]/15 bg-black shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
          <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 text-xs text-white/70 backdrop-blur-md font-mono">
            <Play size={13} className="text-[#fbbf24]" />
            Teaser preview
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            poster="/videos/diwara-teaser-poster.png"
            className="block aspect-video w-full bg-black object-cover"
          >
            <source src="/videos/diwara-teaser.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-white/58 font-body md:grid-cols-3">
          <div className="rounded-2xl px-4 py-3 liquid-glass">Animated browsing through the desktop assistant workspace.</div>
          <div className="rounded-2xl px-4 py-3 liquid-glass">Live typing moment that turns a request into a guided flow.</div>
          <div className="rounded-2xl px-4 py-3 liquid-glass">CUA-focused screen awareness, cursor movement, and voice assistant overlay.</div>
        </div>
      </div>
    </section>
  );
}
