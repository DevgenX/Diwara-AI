'use client';
import { BarChart3, Monitor, Shield, Zap } from 'lucide-react';
import BlurText from './BlurText';
import DiwaraMotionPanel from './DiwaraMotionPanel';

const chessRows = [
  {
    title: 'Voice-commanded actions, done right.',
    body: 'Let Diwara handle the repetitive clicks, typing, app switching, and small UI steps that chip away at your focus. Every pixel is intentional - our AI studies what is on your screen, then acts before the thought is finished.',
    tags: ['Launch the right app', 'Find the target', 'Complete the step'],
    btn: 'See it in action',
    variant: 'actions' as const,
    reverse: false,
  },
  {
    title: 'Research mode. Without the spiral.',
    body: 'Turn a vague topic into useful notes and summaries without disappearing into hours of scattered browsing. Diwara tracks the query, scroll, and source trail, then synthesizes the essentials in real time. No manual aggregation. Ever.',
    tags: ['Gather sources', 'Summarize essentials', 'No tab spiral'],
    btn: 'See how it works',
    variant: 'research' as const,
    reverse: true,
  },
];

const whyCards = [
  { Icon: Zap, title: 'Seconds, Not Setup', body: 'Voice turns intention into action quickly, so a small task does not become a long setup ritual.' },
  { Icon: Monitor, title: 'Screen-Aware by Default', body: 'Diwara sees what is visible, understands the context, and acts on the right element. Every time.' },
  { Icon: BarChart3, title: 'Built to Keep You in Flow', body: 'Research, study, coding, flashcards, presets, and replay stay connected to the work already on screen.' },
  { Icon: Shield, title: 'Safe by Design', body: 'Approval checks step in before sensitive actions. The flow stays helpful without feeling risky.' },
];

export default function MarketingFeatureSet() {
  return (
    <>
      <section id="features" className="bg-[#050b14] px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 flex flex-col items-center text-center">
            <span className="mb-6 rounded-full px-3.5 py-1 text-xs uppercase tracking-wide text-[#22d3ee] liquid-glass font-mono">Capabilities</span>
            <BlurText
              text="Features that make everyday work feel lighter."
              className="mb-4 max-w-3xl text-4xl font-bold leading-[0.9] tracking-tight text-white font-heading md:text-5xl lg:text-6xl"
            />
            <p className="max-w-xl text-sm font-light text-white/50 font-body md:text-base">
              Diwara is built around one idea: the best AI help should reduce friction, not add more screens, more steps, or more complexity to the day.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {chessRows.map((row) => (
              <div key={row.title} className={`flex flex-col items-center gap-12 ${row.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                <div className="flex-1">
                  <h3 className="mb-4 text-2xl font-bold text-white font-heading md:text-3xl">{row.title}</h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-white/60 font-body">{row.body}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {row.tags.map((tag) => (
                      <span key={tag} className="rounded-full px-2.5 py-1 text-xs text-[#22d3ee] liquid-glass font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="rounded-full px-4 py-2 text-sm font-medium text-white transition-colors liquid-glass-strong font-body hover:bg-[#22d3ee]/10">
                    {row.btn}
                  </button>
                </div>
                <div className="w-full flex-1">
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded-2xl liquid-glass">
                    <DiwaraMotionPanel variant={row.variant} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-diwara" className="bg-[#050b14] px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-6 rounded-full px-3.5 py-1 text-xs uppercase tracking-wide text-[#22d3ee] liquid-glass font-mono">Why Diwara</span>
            <BlurText
              text="The difference is everything."
              className="mb-4 text-4xl font-bold leading-[0.9] tracking-tight text-white font-heading md:text-5xl lg:text-6xl"
            />
            <p className="max-w-md text-sm font-light text-white/50 font-body md:text-base">
              Built for the moments between the big tasks - the friction that quietly eats your day.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyCards.map(({ Icon, title, body }) => (
              <div key={title} className="rounded-2xl p-6 liquid-glass">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full liquid-glass-strong">
                  <Icon size={18} className="text-[#22d3ee]" />
                </div>
                <h4 className="mb-2 text-base font-bold text-white font-heading">{title}</h4>
                <p className="text-sm font-light leading-relaxed text-white/55 font-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
