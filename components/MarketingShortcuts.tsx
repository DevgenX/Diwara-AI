const shortcuts = [
  {
    keys: "Command",
    title: '"Open Chrome and search for mitosis"',
    body: "Skip the tiny steps. Diwara can open the app, move to the right place, and get the task going before momentum fades.",
  },
  {
    keys: "Speed",
    title: '"Scroll down" or "next tab"',
    body: "Move through pages, PDFs, and browser tabs with quick voice controls that keep reading and review sessions smooth.",
  },
  {
    keys: "Clarity",
    title: '"Highlight the key terms in this paragraph"',
    body: "Turn busy screens into clear next steps with on-screen callouts, labels, and numbered guidance.",
  },
  {
    keys: "Research",
    title: '"Research the causes of World War I"',
    body: "Let Diwara gather sources, summarize the essentials, and bring back the answer without sending you down a tab spiral.",
  },
  {
    keys: "Routine",
    title: '"Save this as my bio setup"',
    body: "Capture the exact workspace that works for you, then bring it back whenever you want a fast start.",
  },
  {
    keys: "Review",
    title: '"Replay my last study session"',
    body: "Look back at what happened, what you clicked, and what was explained, so progress feels easier to repeat.",
  },
];

export default function MarketingShortcuts() {
  return (
    <section className="section-shell px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="eyebrow mb-4">Popular commands</p>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
            Say the task. Keep your hands on what matters.
          </h2>
          <p className="section-copy mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            Diwara is built for everyday momentum. The command layer helps you
            move faster through reading, browsing, setup, revision, and the
            repetitive digital tasks that usually slow the day down.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {shortcuts.map(({ keys, title, body }) => (
            <article
              key={title}
              className="surface-card rounded-[1.6rem] p-6 text-left"
            >
              <div className="mb-4 inline-flex rounded-2xl border border-accent/25 bg-accent/10 px-4 py-2">
                <kbd className="text-sm font-bold tracking-[0.08em] text-accent2">
                  {keys}
                </kbd>
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
