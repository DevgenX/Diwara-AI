'use client';

import { motion } from 'motion/react';
import { Check, FileText, Mic, MousePointer2, Search, Sparkles } from 'lucide-react';

type DiwaraMotionPanelProps = {
  variant: 'actions' | 'research';
};

const actionSteps = [
  'Open the right app',
  'Find the visible target',
  'Complete the next step',
];

const researchSteps = [
  'Gather sources',
  'Extract the signal',
  'Create review notes',
];

export default function DiwaraMotionPanel({ variant }: DiwaraMotionPanelProps) {
  const isResearch = variant === 'research';
  const steps = isResearch ? researchSteps : actionSteps;
  const prompt = isResearch
    ? 'Research photosynthesis and make a review flow'
    : 'Open Chrome and search for mitosis';

  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-2xl bg-[#07111f] p-5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.07)_1px,transparent_1px)] bg-[size:44px_44px] opacity-55" />
      <motion.div
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#22d3ee]/20 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-20 left-4 h-48 w-48 rounded-full bg-[#fbbf24]/12 blur-3xl"
        animate={{ x: [0, 18, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex h-full flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#22d3ee]" />
          </div>
          <span className="liquid-glass rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#22d3ee]">
            {isResearch ? 'research mode' : 'action mode'}
          </span>
        </div>

        <div className="liquid-glass rounded-2xl p-4">
          <div className="mb-3 flex items-center gap-2 font-mono text-xs text-white/45">
            <Mic size={14} className="text-[#22d3ee]" />
            voice command
          </div>
          <p className="font-mono text-sm leading-relaxed text-[#22d3ee]">&gt; "{prompt}"</p>
        </div>

        <div className="grid flex-1 gap-4 md:grid-cols-[1.05fr_0.95fr]">
          <div className="liquid-glass rounded-2xl p-4">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#fbbf24]">
              {isResearch ? <Search size={14} /> : <MousePointer2 size={14} />}
              {isResearch ? 'Live synthesis' : 'Screen route'}
            </div>
            <div className="space-y-3">
              {steps.map((step, index) => (
                <motion.div
                  key={step}
                  className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-3 py-2.5 text-sm text-white/70"
                  initial={{ opacity: 0.35, x: -8 }}
                  animate={{ opacity: [0.45, 1, 0.7], x: [-8, 0, 0] }}
                  transition={{ duration: 2.8, delay: index * 0.35, repeat: Infinity, repeatDelay: 1.4 }}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22d3ee]/12 text-[#22d3ee]">
                    <Check size={13} />
                  </span>
                  {step}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="liquid-glass rounded-2xl p-4">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#22d3ee]">
              {isResearch ? <FileText size={14} /> : <Sparkles size={14} />}
              Diwara output
            </div>
            <div className="space-y-2">
              {[72, 92, 58, 84].map((width, index) => (
                <motion.div
                  key={width}
                  className="h-2 rounded-full bg-white/12"
                  style={{ width: `${width}%` }}
                  animate={{ opacity: [0.25, 0.8, 0.35] }}
                  transition={{ duration: 2.2, delay: index * 0.25, repeat: Infinity }}
                />
              ))}
            </div>
            <motion.div
              className="mt-6 rounded-2xl border border-[#22d3ee]/15 bg-[#22d3ee]/10 p-3 text-xs leading-relaxed text-white/70"
              animate={{ y: [0, -4, 0], boxShadow: ['0 0 0 rgba(34,211,238,0)', '0 0 26px rgba(34,211,238,0.18)', '0 0 0 rgba(34,211,238,0)'] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {isResearch
                ? 'Summary ready, sources grouped, review flow saved.'
                : 'Navigation complete. The next useful action is ready.'}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
