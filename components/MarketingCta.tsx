'use client';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import BlurText from './BlurText';
import HlsVideo from './HlsVideo';

export default function MarketingCta() {
  return (
    <section className="relative overflow-hidden py-40" id="cta">
      <HlsVideo
        src="https://stream.mux.com/REPLACE_CTA_VIDEO.m3u8"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.35 }}
      />
      <div className="absolute left-0 right-0 top-0 z-10 pointer-events-none" style={{ height: 200, background: 'linear-gradient(to bottom, #050b14, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none" style={{ height: 200, background: 'linear-gradient(to top, #050b14, transparent)' }} />

      <div className="relative z-20 mx-auto flex min-h-[700px] max-w-6xl flex-col px-6">
        <div className="mx-auto flex flex-1 flex-col items-center justify-center text-center">
          <BlurText
            text="Make everyday digital work feel smoother, lighter, and easier to finish."
            className="mb-6 max-w-3xl text-5xl font-bold leading-[0.85] tracking-tight text-white font-heading md:text-6xl lg:text-7xl"
          />
          <p className="mb-10 max-w-md text-sm font-light text-white/50 font-body md:text-base">
            From quick answers to full guided workflows, Diwara helps reduce friction, shorten repetitive tasks,
            and keep your best routine closer at hand.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#pricing" className="flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-colors liquid-glass-strong hover:bg-[#22d3ee]/10">
              Start free <ArrowUpRight size={16} />
            </a>
            <a href="#pricing" className="rounded-full bg-white px-6 py-3 font-semibold text-[#050b14] transition-colors hover:bg-white/90">
              Compare plans
            </a>
            <a href="#how-it-works" className="text-sm text-white/50 transition-colors font-body hover:text-white">
              See how it works
            </a>
          </div>
        </div>

        <footer className="mt-32 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <span className="text-xs text-white/30 font-body">(c) 2026 Diwara AI. All rights reserved.</span>
            <a href="#" className="flex items-center gap-2">
              <Image src="/icon.svg" alt="Diwara AI" width={32} height={32} className="h-8 w-8" />
              <span className="text-sm font-semibold text-white/60 font-heading">Diwara AI</span>
            </a>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Contact'].map((link) => (
                <a key={link} href="#" className="text-xs text-white/30 transition-colors font-body hover:text-white/60">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
