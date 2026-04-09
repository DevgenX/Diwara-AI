const useCases = [
  {
    emoji: "📚",
    label: "University Students",
    heading: "Understand lecture slides without leaving them",
    description:
      "Highlight a confusing theorem, ask StudyBuddy what it means, and get a clear explanation right next to the slide — no alt-tab, no lost context.",
    tags: ["Math", "Physics", "Computer Science", "Biology"],
    gradient: "from-indigo-600/20 to-purple-600/10",
    border: "border-indigo-500/30",
  },
  {
    emoji: "💻",
    label: "Self-Taught Developers",
    heading: "Debug code while reading the docs",
    description:
      "StudyBuddy sees your screen. Paste an error, point to the relevant docs, and get a fix explained in plain language — without opening a new tab.",
    tags: ["Python", "JavaScript", "Rust", "APIs"],
    gradient: "from-cyan-600/20 to-indigo-600/10",
    border: "border-cyan-500/30",
  },
  {
    emoji: "🩺",
    label: "Medical & Law Students",
    heading: "Memorise dense material faster",
    description:
      "Read through case studies or clinical guidelines and ask StudyBuddy to quiz you on the spot, summarise key points, or explain unfamiliar terms.",
    tags: ["Anatomy", "Pharmacology", "Case Law", "Ethics"],
    gradient: "from-emerald-600/20 to-teal-600/10",
    border: "border-emerald-500/30",
  },
  {
    emoji: "🌍",
    label: "Language Learners",
    heading: "Learn vocabulary in context, not in a vacuum",
    description:
      "Hover over a word in any article or video subtitle and hear the pronunciation, get a definition, and see example sentences — all without pausing.",
    tags: ["Spanish", "Japanese", "French", "Mandarin"],
    gradient: "from-amber-600/20 to-orange-600/10",
    border: "border-amber-500/30",
  },
  {
    emoji: "📊",
    label: "Working Professionals",
    heading: "Get up to speed on any topic fast",
    description:
      "Reading a whitepaper before a meeting? StudyBuddy distils the key arguments, explains the jargon, and lets you ask follow-up questions instantly.",
    tags: ["Finance", "Strategy", "Research", "Policy"],
    gradient: "from-violet-600/20 to-pink-600/10",
    border: "border-violet-500/30",
  },
  {
    emoji: "🎮",
    label: "Game-Based Learners",
    heading: "Turn passive watching into active learning",
    description:
      "Studying from YouTube tutorials? StudyBuddy overlays on top, listens along, and lets you pause and ask questions without losing your place.",
    tags: ["Video Tutorials", "MOOCs", "Podcasts", "Streams"],
    gradient: "from-rose-600/20 to-red-600/10",
    border: "border-rose-500/30",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 md:px-16">
      <div className="text-center mb-16">
        <p className="text-xs font-bold tracking-[0.1em] uppercase text-accent2 mb-4">
          Use Cases
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Built for every kind of learner
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
          Whether you&apos;re cramming for an exam, switching careers, or reading
          research papers — StudyBuddy adapts to how you learn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {useCases.map(({ emoji, label, heading, description, tags, gradient, border }) => (
          <div
            key={label}
            className={`relative bg-gradient-to-br ${gradient} border ${border} rounded-2xl p-7 hover:-translate-y-1 transition-all duration-200 overflow-hidden group`}
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{emoji}</span>
              <span className="text-xs font-bold tracking-widest uppercase text-muted">
                {label}
              </span>
            </div>

            <h3 className="font-bold text-base mb-2.5 leading-snug">{heading}</h3>
            <p className="text-muted text-sm leading-relaxed mb-5">{description}</p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-muted text-base mb-6">
          Don&apos;t see your use case?{" "}
          <span className="text-accent font-semibold">
            StudyBuddy works anywhere you read or watch on screen.
          </span>
        </p>
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
        >
          Get started free
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
