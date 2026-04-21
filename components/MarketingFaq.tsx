"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Diwara AI in simple words?",
    a: "Diwara AI is an assistant that stays close to your work, helps you understand what is on screen, and takes the repetitive digital steps that usually slow the day down.",
  },
  {
    q: "How do I ask for help?",
    a: "Use the voice flow and say what you need. Diwara can answer a question, move you through the screen faster, or help carry out a task from start to finish.",
  },
  {
    q: "How does it simplify everyday tasks?",
    a: "It reduces clicking, context switching, repeated setup, and the small manual steps that make simple tasks feel longer than they should. The result is a smoother flow through research, study, and work.",
  },
  {
    q: "Can it still see what is on my screen?",
    a: "Yes. Screen context is a core part of the experience. Diwara uses what is visible to guide answers, locate targets, and choose the next useful action.",
  },
  {
    q: "Does it pause before sensitive actions?",
    a: "Yes. Diwara uses approval checks before certain risky actions so the experience stays useful, but still feels safe and deliberate.",
  },
  {
    q: "Can it help across multiple apps and monitors?",
    a: "Yes. Diwara can set up study sessions across apps, save the layout as a preset, reload it later, and help place windows across multiple screens when needed.",
  },
  {
    q: "Who is it for?",
    a: "It is built for students, knowledge workers, and anyone who spends long stretches moving between reading, researching, writing, reviewing, and repeating the same digital routines.",
  },
];

export default function MarketingFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-shell px-6 py-24 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
            Clear answers for the questions people actually ask.
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3 text-left">
          {faqs.map(({ q, a }, index) => (
            <div
              key={q}
              className="surface-card overflow-hidden rounded-[1.4rem]"
            >
              <button
                className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left text-sm font-semibold text-white transition-colors hover:text-accent2 sm:items-center sm:px-6"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span>{q}</span>
                <span className="ml-4 flex-shrink-0 text-xl text-muted">
                  {open === index ? "-" : "+"}
                </span>
              </button>
              {open === index && (
                <p className="section-copy px-6 pb-5 text-sm">{a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
