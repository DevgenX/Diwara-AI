'use client';
import { Check } from 'lucide-react';
import BlurText from './BlurText';
import { motion } from 'motion/react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    tag: 'Perfect for trying the flow',
    popular: false,
    features: ['20 questions each day', '5 minutes of voice help each day', 'Copy and explain', 'Browser support'],
    cta: 'Start free',
    ctaClass: 'liquid-glass-strong rounded-full w-full py-2.5 text-white font-semibold',
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/month',
    tag: 'Built for people who want less friction every day',
    popular: true,
    features: ['Unlimited questions', 'Unlimited voice help', 'Desktop actions and instant navigation', 'Research / homework / coding / flashcards', 'Presets, replay, and exam mode', 'Priority support'],
    cta: 'Get Pro',
    ctaClass: 'bg-[#22d3ee] text-[#050b14] rounded-full w-full py-2.5 font-semibold hover:bg-[#67e8f9] transition-colors',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    tag: 'For schools, teams, and larger rollouts',
    popular: false,
    features: ['Everything in Pro', 'Custom pricing', 'Team onboarding help', 'Custom rollout planning'],
    cta: 'Contact us',
    ctaClass: 'liquid-glass-strong rounded-full w-full py-2.5 text-white font-semibold',
  },
];

export default function MarketingPricing() {
  return (
    <section id="pricing" className="bg-[#050b14] px-4 py-24 sm:px-6 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-mono tracking-wide uppercase text-[#22d3ee] mb-6">Pricing</span>
          <BlurText
            text="Start simple. Upgrade when the time savings matter."
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[0.9] text-white mb-4 max-w-3xl"
          />
          <p className="text-white/50 font-body font-light text-sm md:text-base">Diwara is useful on day one, and it grows with the way you work.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`liquid-glass relative flex min-h-[430px] flex-col rounded-2xl p-6 sm:p-8 ${
                tier.popular ? 'ring-1 ring-[#22d3ee]/35 shadow-[0_0_42px_rgba(34,211,238,0.12)]' : ''
              }`}
            >
              <div className="mb-6">
                <div className="mb-3 flex min-h-8 items-center justify-between gap-3">
                  <div className="font-heading font-bold text-white text-xl">{tier.name}</div>
                  {tier.popular && (
                    <span className="shrink-0 rounded-full border border-[#8ff2ff]/70 bg-[#22d3ee] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#050b14] shadow-[0_0_24px_rgba(34,211,238,0.55)]">
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-0.5 mb-1">
                  <span className="text-4xl font-heading font-bold text-white">{tier.price}</span>
                  {tier.period && <span className="text-white/40 text-sm font-body">{tier.period}</span>}
                </div>
                <div className="text-white/40 text-xs font-body">{tier.tag}</div>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm font-body text-white/70">
                    <Check size={15} className="text-[#22d3ee] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`${tier.ctaClass} text-center`}>{tier.cta}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
