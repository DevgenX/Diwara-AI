type IconName =
  | "actions"
  | "navigation"
  | "annotation"
  | "research"
  | "coding"
  | "flashcards"
  | "presets"
  | "replay";

const featureCards: Array<{
  icon: IconName;
  title: string;
  body: string;
}> = [
  {
    icon: "actions",
    title: "Voice-commanded actions",
    body: "Let Diwara handle the repetitive clicks, typing, app switching, and small UI steps that chip away at your focus.",
  },
  {
    icon: "navigation",
    title: "Instant navigation commands",
    body: "Move through long pages, tabs, and documents faster when all you want is quick control without stopping to reach for shortcuts.",
  },
  {
    icon: "annotation",
    title: "Live screen annotation",
    body: "Make cluttered screens easier to understand with highlights, markers, and visual guidance that point to what matters next.",
  },
  {
    icon: "research",
    title: "Autonomous research mode",
    body: "Turn a vague topic into useful notes and summaries without disappearing into hours of scattered browsing.",
  },
  {
    icon: "coding",
    title: "Homework and coding workflows",
    body: "Break down hard problems, test ideas faster, and get guided support while staying inside the tools you already use.",
  },
  {
    icon: "flashcards",
    title: "Flashcards and practice exams",
    body: "Study hands-free, stay consistent, and turn passive revision into something more active and easier to finish.",
  },
  {
    icon: "presets",
    title: "Presets and multi-app setup",
    body: "Stop rebuilding the same workspace every day. Save what works once and bring it back whenever you need it.",
  },
  {
    icon: "replay",
    title: "Replay and multi-monitor review",
    body: "Revisit the flow, learn from what happened, and keep complex setups easier to repeat across screens and sessions.",
  },
];

const rolloutItems = [
  {
    phase: "Act faster",
    title: "Turn spoken intent into completed steps",
    body: "Diwara helps with the tiny pieces of work that usually pull attention away from the bigger goal.",
    bullets: ["Launch the app", "Find the target", "Handle the next action"],
  },
  {
    phase: "Stay focused",
    title: "Keep flow without constant context switching",
    body: "Quick controls, guided overlays, and visible help reduce the mental tax of bouncing between tools and tabs.",
    bullets: ["Scroll and switch faster", "See what matters", "Keep moving forward"],
  },
  {
    phase: "Learn better",
    title: "Make deep work feel lighter",
    body: "Research, homework help, coding guidance, and flashcard support make the hard parts feel more structured and less overwhelming.",
    bullets: ["Research faster", "Understand faster", "Practice more consistently"],
  },
  {
    phase: "Reuse progress",
    title: "Build routines you do not have to rebuild",
    body: "Presets, exams, replays, and workspace control help your productive setup feel repeatable instead of fragile.",
    bullets: ["Save the setup", "Review the session", "Restart with less effort"],
  },
];

function FeatureIcon({ name }: { name: IconName }) {
  const common = "h-6 w-6 text-accent2";

  if (name === "actions") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M4 18V6" />
        <path d="M10 18V10" />
        <path d="M16 18v-6" />
        <path d="M22 18V8" />
      </svg>
    );
  }

  if (name === "navigation") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M6 8 3 12l3 4" />
        <path d="M18 8l3 4-3 4" />
        <path d="M4 12h16" />
      </svg>
    );
  }

  if (name === "annotation") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M4 18V6h16v12" />
        <path d="M8 10h8" />
        <path d="M8 14h5" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    );
  }

  if (name === "research") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-4.2-4.2" />
        <path d="M11 8v3l2 2" />
      </svg>
    );
  }

  if (name === "coding") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m13 5-2 14" />
      </svg>
    );
  }

  if (name === "flashcards") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <rect x="4" y="7" width="14" height="10" rx="2" />
        <path d="M7 11h8" />
        <path d="M9 4h11v10" />
      </svg>
    );
  }

  if (name === "presets") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
        <path d="M8 17h8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <path d="M5 6h14v10H5Z" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  );
}

export default function MarketingFeatureSet() {
  return (
    <section id="features" className="section-shell px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <p className="eyebrow mb-4">Features</p>
        <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
          Features that make everyday work feel lighter.
        </h2>
        <p className="section-copy mx-auto mt-4 max-w-2xl text-base sm:text-lg">
          Diwara is built around one idea: the best AI help should reduce
          friction, not add more screens, more steps, or more complexity to the
          day.
        </p>

        <div className="surface-panel mt-12 rounded-[2rem] p-5 text-left sm:p-7">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {rolloutItems.map(({ phase, title, body, bullets }) => (
              <article
                key={title}
                className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5"
              >
                <div className="tiny-kicker">{phase}</div>
                <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
                <p className="section-copy mt-3 text-sm">{body}</p>
                <div className="mt-4 space-y-2">
                  {bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-xl border border-white/8 bg-black/15 px-3 py-2 text-xs text-white/80"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-5 text-left sm:grid-cols-2 xl:grid-cols-4">
          {featureCards.map(({ icon, title, body }) => (
            <article
              key={title}
              className="surface-card card-hover-glow relative overflow-hidden rounded-[1.6rem] p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                <FeatureIcon name={icon} />
              </div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="section-copy mt-3 text-sm">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
