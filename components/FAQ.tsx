"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What exactly is StudyBuddy?",
    a: "StudyBuddy is an animated AI companion that lives on your screen. It can follow your cursor, fly to elements you point at, show streamed AI answers in speech bubbles, hear your questions, and speak answers — all without switching apps or breaking focus.",
  },
  {
    q: "Does it work on any website?",
    a: "Yes. The browser embed works on any page via a single <script> tag. The desktop app works above all your apps — browser, PDF reader, IDE, anything on your screen.",
  },
  {
    q: "What are the Free plan limits exactly?",
    a: "Free users get 20 AI chat messages per day and 5 minutes of voice input per day. Voice output (TTS), screen capture, the desktop overlay, MCP tools, and session history are Pro-only. The cursor animation, browser embed, and element selector are fully free with no limits.",
  },
  {
    q: "What does the Pro plan unlock?",
    a: "Pro removes all message and voice limits, adds TTS voice output, enables screen capture so the buddy understands what's on screen, unlocks the Electron desktop app, MCP integrations, session logs, custom theming, and priority AI queue — plus email and chat support.",
  },
  {
    q: "Is my screen data private?",
    a: "Screen captures are processed in-session only and never stored beyond your own session logs (which you control). We do not train on your personal data. You can disable screen capture entirely in the settings panel.",
  },
  {
    q: "Which AI model powers the buddy?",
    a: "StudyBuddy uses Anthropic's Claude models — among the most capable and safety-focused language models available. Pro users get faster access with a priority queue.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Cancel from your account dashboard in seconds. You keep Pro access until the end of your billing period, then drop back to Free — no data loss.",
  },
  {
    q: "Is there an API or developer SDK?",
    a: "Yes! StudyBuddy ships as both an IIFE script and an ESM module. The full public API lets you control the buddy programmatically: flyTo, flyToElement, setVoiceState, event listeners, and more.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 md:px-16 text-center">
      <p className="text-xs font-bold tracking-[0.1em] uppercase text-accent2 mb-4">
        FAQ
      </p>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12">
        Common questions
      </h2>

      <div className="max-w-[720px] mx-auto flex flex-col gap-1 text-left">
        {faqs.map(({ q, a }, i) => (
          <div
            key={q}
            className="bg-surface border border-indigo-glow rounded-xl overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-5 font-semibold text-sm text-left hover:text-accent2 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {q}
              <span className="text-muted text-xl ml-4 flex-shrink-0">
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <p className="px-6 pb-5 text-muted text-sm leading-relaxed">
                {a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
