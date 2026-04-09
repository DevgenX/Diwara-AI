import Link from "next/link";

type Feature = { label: string; free: boolean | string; pro: boolean | string };

const comparisonRows: Feature[] = [
  { label: "AI chat messages per day", free: "20 / day",    pro: "Unlimited"  },
  { label: "Animated cursor buddy",    free: true,          pro: true         },
  { label: "Browser embed (script tag)", free: true,        pro: true         },
  { label: "Bezier flight to elements",  free: true,        pro: true         },
  { label: "Speech bubbles (streaming)", free: true,        pro: true         },
  { label: "Voice input (STT)",         free: "5 min / day",pro: "Unlimited"  },
  { label: "Voice output (TTS)",        free: false,        pro: true         },
  { label: "Screen capture context",    free: false,        pro: true         },
  { label: "Desktop overlay (Electron)",free: false,        pro: true         },
  { label: "MCP tool integrations",     free: false,        pro: true         },
  { label: "Session history & export",  free: false,        pro: true         },
  { label: "Custom buddy themes",       free: false,        pro: true         },
  { label: "Priority AI (faster queue)",free: false,        pro: true         },
  { label: "Support",                   free: "Community",  pro: "Email + chat"},
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)  return <span className="text-emerald-400 text-base">✓</span>;
  if (value === false) return <span className="text-red-400 text-base">✗</span>;
  return <span className="text-amber-400 text-xs font-semibold">{value}</span>;
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-16 text-center">
      <p className="text-xs font-bold tracking-[0.1em] uppercase text-accent2 mb-4">
        Pricing
      </p>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
        Simple, honest pricing
      </h2>
      <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
        Start free. Upgrade when you need more. No hidden fees, no dark patterns.
      </p>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto text-left">

        {/* FREE */}
        <div className="bg-surface border border-indigo-glow rounded-2xl p-9">
          <p className="text-xs font-bold tracking-[0.08em] uppercase text-muted mb-3">Free</p>
          <div className="text-5xl font-black tracking-tight leading-none mb-1.5">
            <sup className="text-2xl font-bold align-top mt-2">$</sup>0
            <sub className="text-base font-medium text-muted">/mo</sub>
          </div>
          <p className="text-muted text-sm mb-7 mt-1.5">
            Perfect for casual learners and trying things out.
          </p>
          <Link
            href="#"
            className="block text-center border border-indigo-glow text-white font-bold py-3.5 rounded-xl mb-7 hover:border-accent hover:bg-accent/8 transition-all"
          >
            Get started — it&apos;s free
          </Link>
          <hr className="border-indigo-glow mb-6" />
          <ul className="flex flex-col gap-3">
            {[
              { ok: true,  text: "Animated cursor buddy on any webpage" },
              { ok: true,  text: "Spring-physics cursor following" },
              { ok: true,  text: "Bezier flight to elements" },
              { ok: true,  text: "Basic streaming speech bubbles" },
              { ok: true,  text: "Script-tag browser embed" },
              { ok: true,  text: "Element selector (click-to-point)" },
              { ok: true,  text: "Community support" },
              { ok: false, text: "AI chat responses", limit: "20/day" },
              { ok: false, text: "Voice input / STT", limit: "5 min/day" },
              { ok: false, text: "Voice output / TTS" },
              { ok: false, text: "Screen capture context" },
              { ok: false, text: "Desktop overlay (Electron app)" },
              { ok: false, text: "MCP tool integrations" },
              { ok: false, text: "Session history & logs" },
              { ok: false, text: "Custom themes" },
              { ok: false, text: "Priority AI responses" },
            ].map(({ ok, text, limit }) => (
              <li key={text} className={`flex items-start gap-2.5 text-sm ${ok ? "text-white/90" : "text-muted"}`}>
                <span className={`mt-0.5 flex-shrink-0 ${ok ? "text-emerald-400" : "text-red-400"}`}>
                  {ok ? "✓" : "✗"}
                </span>
                {text}
                {limit && (
                  <span className="ml-1 text-[0.68rem] font-semibold bg-red-400/10 text-red-400 border border-red-400/25 rounded px-1.5 py-px">
                    {limit}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* PRO */}
        <div className="relative bg-gradient-to-b from-accent/8 to-surface border border-accent rounded-2xl p-9 overflow-hidden popular-ribbon">
          <p className="text-xs font-bold tracking-[0.08em] uppercase text-accent2 mb-3">Pro</p>
          <div className="text-5xl font-black tracking-tight leading-none mb-1.5">
            <sup className="text-2xl font-bold align-top mt-2">$</sup>12
            <sub className="text-base font-medium text-muted">/mo</sub>
          </div>
          <p className="text-muted text-sm mb-7 mt-1.5">
            For serious students, developers, and power users.
          </p>
          <Link
            href="#"
            className="block text-center bg-gradient-to-br from-accent to-indigo-700 text-white font-bold py-3.5 rounded-xl mb-7 shadow-[0_0_28px_rgba(99,102,241,0.3)] hover:-translate-y-px transition-all"
          >
            Start 7-day free trial →
          </Link>
          <hr className="border-indigo-glow mb-6" />
          <ul className="flex flex-col gap-3">
            {[
              "Everything in Free",
              "Unlimited AI chat responses",
              "Full voice input (STT) — unlimited",
              "Voice output / TTS with natural voices",
              "Screen capture context (desktop)",
              "Desktop overlay — macOS, Windows, Linux",
              "MCP tool integrations (web search, calc, APIs)",
              "Full session history & export",
              "Custom buddy themes & colors",
              "Priority AI (faster, less queue)",
              "Early access to new features",
              "Email + chat support",
            ].map((text) => (
              <li key={text} className="flex items-start gap-2.5 text-sm text-white/90">
                <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Comparison table */}
      <div className="mt-12 max-w-[860px] mx-auto overflow-x-auto text-left">
        <p className="text-[0.75rem] font-bold uppercase tracking-[0.07em] text-muted mb-4">
          Detailed Comparison
        </p>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="text-left py-3 px-5 text-muted text-[0.75rem] uppercase tracking-wide font-bold border-b border-indigo-glow w-1/2">
                Feature
              </th>
              <th className="text-left py-3 px-5 text-muted text-[0.75rem] uppercase tracking-wide font-bold border-b border-indigo-glow">
                Free
              </th>
              <th className="text-left py-3 px-5 text-muted text-[0.75rem] uppercase tracking-wide font-bold border-b border-indigo-glow">
                Pro
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map(({ label, free, pro }) => (
              <tr key={label} className="hover:bg-accent/[0.04] transition-colors">
                <td className="py-3.5 px-5 text-muted border-b border-accent/8">{label}</td>
                <td className="py-3.5 px-5 border-b border-accent/8"><Cell value={free} /></td>
                <td className="py-3.5 px-5 border-b border-accent/8"><Cell value={pro} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
