'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import BlurText from './BlurText';

const faqs = [
  { q: 'What is Diwara AI in simple words?', a: 'Diwara AI is an assistant that stays close to your work, helps you understand what is on screen, and takes the repetitive digital steps that usually slow the day down.' },
  { q: 'How do I ask for help?', a: 'Use the voice flow and say what you need. Diwara can answer a question, move you through the screen faster, or help carry out a task from start to finish.' },
  { q: 'How does it simplify everyday tasks?', a: 'It reduces clicking, context switching, repeated setup, and the small manual steps that make simple tasks feel longer than they should. The result is a smoother flow through research, study, and work.' },
  { q: 'Can it see what is on my screen?', a: 'Yes. Screen context is a core part of the experience. Diwara uses what is visible to guide answers, locate targets, and choose the next useful action.' },
  { q: 'Does it pause before sensitive actions?', a: 'Yes. Diwara uses approval checks before certain risky actions so the experience stays useful, but still feels safe and deliberate.' },
  { q: 'Can it help across multiple apps and monitors?', a: 'Yes. Diwara can set up study sessions across apps, save the layout as a preset, reload it later, and help place windows across multiple screens when needed.' },
  { q: 'Who is it for?', a: 'It is built for students, knowledge workers, and anyone who spends long stretches moving between reading, researching, writing, reviewing, and repeating the same digital routines.' },
];

export default function MarketingFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#050b14] px-6 py-32">
      <div className="mx-auto max-w-2xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-6 rounded-full px-3.5 py-1 text-xs uppercase tracking-wide text-[#22d3ee] liquid-glass font-mono">FAQ</span>
          <BlurText
            text="Questions, answered."
            className="mb-4 text-4xl font-bold leading-[0.9] tracking-tight text-white font-heading md:text-5xl"
          />
          <p className="text-sm font-light text-white/50 font-body">Everything you need to know before you start.</p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div key={faq.q} className="overflow-hidden rounded-2xl liquid-glass">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-medium text-white font-body">{faq.q}</span>
                <span className="ml-4 shrink-0 text-lg text-[#22d3ee] font-mono">{open === index ? '-' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/5 px-6 pb-5 pt-3 text-sm font-light leading-relaxed text-white/55 font-body">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
