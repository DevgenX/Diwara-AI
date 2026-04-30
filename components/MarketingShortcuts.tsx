'use client';
import BlurText from './BlurText';
import { motion } from 'motion/react';

const commands = [
  { category: 'Command', cmd: '> "Open Chrome and search for mitosis"', desc: 'Skip the tiny steps. Diwara can open the app, move to the right place, and get the task going before momentum fades.' },
  { category: 'Speed', cmd: '> "Scroll down" or "next tab"', desc: 'Move through pages, PDFs, and browser tabs with quick voice controls that keep reading and review sessions smooth.' },
  { category: 'Clarity', cmd: '> "Highlight the key terms in this paragraph"', desc: 'Turn busy screens into clear next steps with on-screen callouts, labels, and numbered guidance.' },
  { category: 'Research', cmd: '> "Research the causes of World War I"', desc: 'Let Diwara gather sources, summarize the essentials, and bring back the answer without sending you down a tab spiral.' },
  { category: 'Routine', cmd: '> "Save this as my bio setup"', desc: 'Capture the exact workspace that works for you, then bring it back whenever you want a fast start.' },
  { category: 'Review', cmd: '> "Replay my last study session"', desc: 'Look back at what happened, what you clicked, and what was explained, so progress feels easier to repeat.' },
];

export default function MarketingShortcuts() {
  return (
    <section id="commands" className="py-32 bg-[#050b14] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-mono tracking-wide uppercase text-[#22d3ee] mb-6">Popular Commands</span>
          <BlurText
            text="Say the task. Keep your hands on what matters."
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[0.9] text-white mb-4 max-w-3xl"
          />
          <p className="text-white/50 font-body font-light text-sm md:text-base">Six things Diwara does the moment you ask.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {commands.map((c, i) => (
            <motion.div
              key={c.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="liquid-glass rounded-2xl p-6"
            >
              <div className="font-mono text-xs text-[#fbbf24] mb-2 uppercase tracking-widest">{c.category}</div>
              <div className="font-mono text-sm text-[#22d3ee] bg-[#050b14]/60 rounded-lg px-3 py-2 mb-4">{c.cmd}</div>
              <div className="text-white/60 font-body font-light text-sm leading-relaxed">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
