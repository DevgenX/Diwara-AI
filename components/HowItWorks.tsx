const steps = [
  {
    num: "01",
    title: "Install or Embed",
    body: "Drop a single <script> tag on any page, or install the desktop app on macOS, Windows, or Linux — no build steps required.",
  },
  {
    num: "02",
    title: "Buddy Appears",
    body: "Your animated AI companion spawns on screen with smooth spring-physics movement, staying out of the way until you need it.",
  },
  {
    num: "03",
    title: "Ask Anything",
    body: "Click, speak, or type. StudyBuddy reads your screen context and delivers instant, focused answers right where you're looking.",
  },
  {
    num: "04",
    title: "Keep Studying",
    body: "The buddy flies back out of the way and waits. No tab-switching, no copy-pasting, no focus breaks.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-16 text-center">
      <p className="text-xs font-bold tracking-[0.1em] uppercase text-accent2 mb-4">
        How it works
      </p>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
        Up and running in seconds
      </h2>
      <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
        No complex setup. StudyBuddy works as a browser embed or a full desktop
        overlay — your choice.
      </p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {steps.map(({ num, title, body }) => (
          <div
            key={num}
            className="bg-surface border border-indigo-glow rounded-2xl p-7 text-left hover:border-accent hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-accent/20 to-accent3/15 border border-accent/30 flex items-center justify-center font-extrabold text-sm text-accent2 mb-5">
              {num}
            </div>
            <h3 className="font-bold text-base mb-2">{title}</h3>
            <p className="text-muted text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
