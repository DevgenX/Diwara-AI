const tools = [
  "Google Docs",
  "Notion",
  "Obsidian",
  "VS Code",
  "YouTube",
  "Wikipedia",
  "Khan Academy",
  "Coursera",
  "Any webpage",
];

export default function Integrations() {
  return (
    <div className="bg-surface border-y border-indigo-glow py-12 px-6 text-center">
      <p className="text-muted text-xs font-semibold uppercase tracking-[0.08em] mb-7">
        Works with your favourite tools
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {tools.map((tool) => (
          <span
            key={tool}
            className="bg-faint border border-indigo-glow rounded-full px-5 py-2 text-[0.82rem] font-semibold text-muted font-mono hover:text-white hover:border-accent transition-colors cursor-default"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
