'use client';
import { ArrowUpRight } from 'lucide-react';
import BlurText from './BlurText';
import HlsVideo from './HlsVideo';

const steps = [
  { num: '01', title: 'Start in seconds', body: 'Open Diwara and ask for help right where you already are. No tool-switching ritual, no setup maze, no lost momentum.' },
  { num: '02', title: 'Say what you need', body: 'Ask a question, give a command, or request a full workflow. Diwara understands whether you need explanation, movement, or action.' },
  { num: '03', title: 'Let Diwara handle the friction', body: 'It can inspect the screen, take the next step, guide you visually, and keep the task moving without turning simple work into mental overhead.' },
  { num: '04', title: 'Keep the progress', body: 'Save setups, revisit sessions, and return to the same productive flow without rebuilding it from scratch every time.' },
];

export default function MarketingHowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-32">
      <HlsVideo
        src="https://stream.mux.com/REPLACE_HOW_IT_WORKS.m3u8"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.35 }}
      />
      <div className="absolute left-0 right-0 top-0 z-10 pointer-events-none" style={{ height: 200, background: 'linear-gradient(to bottom, #050b14, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none" style={{ height: 200, background: 'linear-gradient(to top, #050b14, transparent)' }} />

      <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center px-6 text-center" style={{ minHeight: 600 }}>
        <span className="mb-6 rounded-full px-3.5 py-1 text-xs font-medium uppercase tracking-wide text-[#22d3ee] liquid-glass font-mono">How It Works</span>
        <BlurText
          text="You say it. Diwara handles it."
          className="mb-4 max-w-2xl text-4xl font-bold leading-[0.9] tracking-tight text-white font-heading md:text-5xl lg:text-6xl"
        />
        <p className="mb-12 max-w-lg text-sm font-light text-white/50 font-body md:text-base">
          Ask a question, give a command, or describe a full workflow. Diwara understands whether you need an explanation,
          a navigation shortcut, or a complete automated sequence - then gets it done.
        </p>

        <div className="mb-10 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="rounded-2xl p-6 text-left liquid-glass">
              <div className="mb-3 text-xs text-[#22d3ee] font-mono">{step.num}</div>
              <div className="mb-2 text-base font-bold text-white font-heading">{step.title}</div>
              <div className="text-sm font-light leading-relaxed text-white/55 font-body">{step.body}</div>
            </div>
          ))}
        </div>

        <a href="#pricing" className="flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-colors liquid-glass-strong hover:bg-[#22d3ee]/10">
          Start free <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
