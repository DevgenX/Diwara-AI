const steps = [
  {
    num: "01",
    title: "Start in seconds",
    body: "Open Diwara and ask for help right where you already are. No tool-switching ritual, no setup maze, no lost momentum.",
  },
  {
    num: "02",
    title: "Say what you need",
    body: "Ask a question, give a command, or request a full workflow. Diwara understands whether you need explanation, movement, or action.",
  },
  {
    num: "03",
    title: "Let Diwara handle the friction",
    body: "It can inspect the screen, take the next step, guide you visually, and keep the task moving without turning simple work into mental overhead.",
  },
  {
    num: "04",
    title: "Keep the progress",
    body: "Save setups, revisit sessions, and return to the same productive flow without rebuilding it from scratch every time.",
  },
];

export default function MarketingHowItWorks() {
  return (
    <section id="how-it-works" className="section-shell px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <p className="eyebrow mb-4">How it works</p>
        <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
          Built to remove friction from everyday digital work.
        </h2>
        <p className="section-copy mx-auto mt-4 max-w-2xl text-base sm:text-lg">
          From quick answers to full study routines, Diwara keeps the flow
          simple: understand the task, reduce the busywork, and help you move
          forward without breaking concentration.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ num, title, body }) => (
            <article
              key={num}
              className="surface-card rounded-[1.6rem] p-7 text-left"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-sm font-extrabold text-accent2">
                {num}
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
