import StudyBuddyCursorTriangle from "@/components/StudyBuddyCursorTriangle";
import Link from "next/link";

const highlightItems = [
  "Talk once, skip repetitive clicks",
  "Move through reading and browsing faster",
  "Turn research and homework into guided flow",
  "Save the setup and replay it later",
];

const actionSteps = [
  "Launch the right app",
  "Find the right screen",
  "Complete the next step for you",
  "Pause when approval matters",
];

const modeChips = [
  "Research mode",
  "Homework help",
  "Coding practice",
  "Flashcard review",
  "Exam mode",
  "Session replay",
];

export default function MarketingHero() {
  return (
    <section className="section-shell relative overflow-hidden px-6 pb-24 pt-32 md:px-10 md:pb-28 md:pt-36">
      <div className="subtle-glow left-[8%] top-28 h-28 w-28 bg-accent/20" />
      <div className="subtle-glow right-[10%] top-44 h-32 w-32 bg-accent3/15" />

      <div className="mx-auto grid max-w-7xl gap-12 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
        <div>
          <div className="info-pill mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse2" />
            AI help that keeps your day moving
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Work Smarter,
            <br />
            <span className="text-gradient">Not Harder.</span>
          </h1>

          <p className="section-copy mt-6 max-w-2xl text-base sm:text-lg">
            Diwara AI helps with the small tasks that quietly eat your day.
            Ask questions, move around faster, automate repetitive actions,
            highlight what matters, research a topic, walk through homework,
            run a study session, and come back to the exact setup when you need
            it again.
          </p>

          <div className="mt-5 max-w-2xl text-sm font-medium text-[#cfe0f4] sm:text-base">
            One assistant for study, work, and the in-between tasks that slow
            everything down.
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#pricing"
              className="button-primary inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all sm:w-auto"
            >
              Start free
            </Link>
            <Link
              href="#features"
              className="button-secondary inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all sm:w-auto"
            >
              Explore features
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {highlightItems.map((item) => (
              <div
                key={item}
                className="info-pill rounded-full px-4 py-2 text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="tiny-kicker">Diwara AI in action</p>
              <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                Ask once. Watch the busywork disappear.
              </h2>
              <p className="section-copy mt-2 max-w-xl text-sm">
                Diwara can guide, act, and keep track of the flow so you spend
                less time repeating steps and more time finishing what matters.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
              desktop runtime
            </div>
          </div>

          <div className="monitor-grid relative overflow-hidden rounded-[1.5rem] border border-white/6 p-3 sm:p-4">
            <div className="grid gap-4 xl:min-h-[26rem] xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/8 bg-[#0b1524]/85 p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="h-2.5 w-28 rounded-full bg-accent/25" />
                  <div className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold text-accent2">
                    Task mode
                  </div>
                </div>

                <div className="prompt-bubble mb-4 rounded-2xl rounded-tr-md px-3 py-3 text-xs leading-6 text-white/90 sm:max-w-[82%] sm:text-sm">
                  Open Chrome, research mitosis, and save my notes setup for
                  tonight.
                </div>

                <div className="space-y-2.5">
                  {actionSteps.map((step) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2.5"
                    >
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-xs text-white/75 sm:text-sm">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-accent3/20 bg-accent3/10 px-3 py-2 text-xs text-[#f7d48a] sm:text-sm">
                  Safety checks step in before sensitive actions, so the flow
                  stays helpful without feeling risky.
                </div>

                <svg
                  className="pointer-events-none absolute inset-0 hidden h-full w-full xl:block"
                  viewBox="0 0 520 420"
                  aria-hidden="true"
                >
                  <path
                    className="flight-path"
                    d="M160 290C210 250 265 220 316 180C350 154 390 130 428 118"
                  />
                </svg>

                <StudyBuddyCursorTriangle className="absolute left-[60%] top-[56%] hidden h-10 w-9 -rotate-[18deg] xl:block" />
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-[1.4rem] border border-white/8 bg-[#08111d]/88 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#f87171]" />
                    <span className="h-2 w-2 rounded-full bg-[#fbbf24]" />
                    <span className="h-2 w-2 rounded-full bg-[#34d399]" />
                  </div>
                  <div className="space-y-3">
                    <div className="prompt-bubble rounded-2xl rounded-tr-md px-3 py-2 text-xs leading-6 text-white/90 sm:text-sm">
                      Quiz me after the research and keep the setup ready for
                      tomorrow.
                    </div>
                    <div className="prompt-bubble rounded-2xl rounded-tl-md px-3 py-2 text-xs leading-6 text-accent2 sm:text-sm">
                      Notes saved. Study layout ready. Flashcards and exam mode
                      are one command away.
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                  {modeChips.map((mode, index) => (
                    <div
                      key={mode}
                      className={`rounded-2xl border px-4 py-3 text-sm ${
                        index < 2
                          ? "border-accent/20 bg-accent/10 text-accent2"
                          : "border-white/8 bg-white/[0.03] text-white/75"
                      }`}
                    >
                      {mode}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                <div className="tiny-kicker">Simplify</div>
                <p className="mt-1 text-sm text-white/85">
                  Offload repetitive steps that usually break focus.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                <div className="tiny-kicker">Stay in flow</div>
                <p className="mt-1 text-sm text-white/85">
                  Keep reading, studying, and building without tab hopping.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                <div className="tiny-kicker">Come back faster</div>
                <p className="mt-1 text-sm text-white/85">
                  Reuse presets, replays, and saved routines whenever you need
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
