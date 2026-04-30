'use client';
import { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import BlurText from './BlurText';
import MarketingWizardRobotBackground from './MarketingWizardRobotBackground';

const blurIn = (delay: number) => ({
  initial: false,
  animate: {
    filter: ['blur(10px)', 'blur(0px)'],
    opacity: [0, 1],
    y: [20, 0],
  },
  transition: { delay, duration: 0.6, ease: 'easeOut' as const },
});

const aiNodes = [
  { left: '8%', top: '18%', size: 0.65, duration: 16, delay: 0, x: [0, 20, -12, 4, 0], y: [0, -20, 8, 4, 0] },
  { left: '18%', top: '62%', size: 0.55, duration: 18, delay: 1.2, x: [0, -14, 12, 0], y: [0, 8, -10, 4, 0] },
  { left: '28%', top: '38%', size: 0.45, duration: 20, delay: 0.6, x: [0, 18, -10, 3, 0], y: [0, -12, 16, -8, 0] },
  { left: '41%', top: '20%', size: 0.55, duration: 17, delay: 1.8, x: [0, 12, -14, 8, 0], y: [0, -16, 10, -4, 0] },
  { left: '54%', top: '58%', size: 0.72, duration: 22, delay: 2.2, x: [0, -16, 9, 14, 0], y: [0, 10, -14, 6, 0] },
  { left: '66%', top: '28%', size: 0.5, duration: 19, delay: 0.3, x: [0, -12, 16, -8, 0], y: [0, -8, 11, -3, 0] },
  { left: '74%', top: '70%', size: 0.58, duration: 21, delay: 0.9, x: [0, 10, -18, 6, 0], y: [0, 14, -6, 2, 0] },
  { left: '82%', top: '34%', size: 0.5, duration: 23, delay: 1.6, x: [0, -18, 6, 10, 0], y: [0, -10, 14, -8, 0] },
  { left: '91%', top: '14%', size: 0.42, duration: 20, delay: 0.5, x: [0, 8, -9, 4, 0], y: [0, -16, 10, -2, 0] },
  { left: '12%', top: '90%', size: 0.6, duration: 24, delay: 0.8, x: [0, 14, -8, 0], y: [0, -18, 12, 0] },
];

export default function MarketingHero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section ref={heroRef} className="relative min-h-[820px] overflow-hidden md:min-h-[1000px]">
      <MarketingWizardRobotBackground targetRef={heroRef} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(34,211,238,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.055)_1px,transparent_1px)] bg-[size:70px_70px]" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-45"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(34,211,238,0.2) 0 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          mixBlendMode: 'screen',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '-14% 14%', '10% 2%', '0% 0%'],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0">
        {aiNodes.map((node, index) => (
          <motion.span
            key={node.left + node.top + index}
            className="absolute rounded-full bg-[#22d3ee]/80 shadow-[0_0_16px_rgba(34,211,238,0.55)]"
            style={{
              left: node.left,
              top: node.top,
              width: `${node.size}rem`,
              height: `${node.size}rem`,
              opacity: 0.15,
            }}
            animate={{
              x: node.x,
              y: node.y,
              opacity: [0.08, 0.35, 0.18, 0.3, 0.1],
              scale: [1, 1.14, 0.88, 1.08, 1],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              delay: node.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-[28%] z-0 h-[360px] w-[92vw] -translate-x-1/2 rounded-full bg-[#22d3ee]/14 blur-3xl md:h-[520px] md:w-[820px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[8%] top-[46%] z-0 h-40 w-40 rounded-full bg-[#fbbf24]/12 blur-3xl md:left-[18%] md:h-48 md:w-48"
        animate={{ y: [0, -24, 0], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpg"
        className="absolute left-0 z-0 h-auto w-full object-contain opacity-60"
        style={{ top: '20%' }}
      >
        <source src="/videos/hero_bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-0 bg-[#050b14]/50" />
      <div
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
        style={{ height: 300, background: 'linear-gradient(to bottom, transparent, #050b14)' }}
      />

      <div className="relative z-10 flex min-h-[820px] flex-col items-center px-4 text-center sm:px-6 md:min-h-[1000px]" style={{ paddingTop: 150 }}>
        <motion.div {...blurIn(0.4)} className="mb-8 flex max-w-[calc(100vw-2rem)] flex-wrap items-center justify-center gap-2 rounded-full px-1 py-1 liquid-glass">
          <span className="rounded-full bg-[#22d3ee] px-3 py-1 text-xs font-semibold text-[#050b14]">Now in beta</span>
          <span className="px-2 pb-1 font-body text-xs text-white/70 sm:pb-0 sm:pr-3">AI help that keeps your day moving.</span>
        </motion.div>

        <BlurText
          text="Work Smarter, Not Harder"
          as="h1"
          delay={100}
          className="mb-6 max-w-[22rem] text-4xl font-bold leading-[0.9] text-white font-heading sm:max-w-3xl sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        />

        <motion.p {...blurIn(0.8)} className="mb-6 w-full max-w-[22rem] text-sm font-light leading-relaxed text-white/60 font-body sm:max-w-xl md:text-base">
          Diwara is a desktop AI companion that can act on your computer, navigate instantly, annotate the screen,
          research, run flashcard sessions, start practice exams, save presets, and replay study sessions.
        </motion.p>

        <motion.div {...blurIn(0.95)} className="mb-8 flex w-full max-w-[22rem] flex-wrap justify-center gap-2 sm:max-w-2xl">
          {[
            'Talk once, skip repetitive clicks',
            'Move through reading and browsing faster',
            'Turn research into a guided flow',
            'Save the setup. Replay it later.',
          ].map((pill) => (
            <span key={pill} className="max-w-full rounded-full px-3 py-1.5 text-center text-xs text-white/70 liquid-glass font-body">
              {pill}
            </span>
          ))}
        </motion.div>

        <motion.div {...blurIn(1.1)} className="flex flex-wrap items-center justify-center gap-4">
          <a href="#pricing" className="flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold text-white transition-colors liquid-glass-strong hover:bg-[#22d3ee]/10">
            Start free <ArrowUpRight size={16} />
          </a>
          <a href="#features" className="flex items-center gap-1.5 text-sm text-white/60 transition-colors font-body hover:text-white">
            Explore features <ChevronDown size={15} />
          </a>
        </motion.div>

        <div className="mt-auto flex flex-col items-center gap-4 pb-8 pt-16">
          <span className="rounded-full px-4 py-1.5 text-xs text-white/40 liquid-glass font-body">
            Trusted by students and teams at
          </span>
          <div className="flex max-w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-8 md:gap-x-14">
            {['MIT', 'Stanford', 'YC', 'Notion', 'Linear'].map((name) => (
              <span key={name} className="text-lg font-semibold text-white/30 font-heading sm:text-xl md:text-2xl">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
