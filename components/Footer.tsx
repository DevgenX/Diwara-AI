import Link from "next/link";

const links = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "GitHub" },
  { href: "#", label: "Docs" },
  { href: "#", label: "Status" },
  { href: "#", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-indigo-glow px-6 md:px-16 py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 flex-wrap">
      <div>
        <Link href="/" className="inline-flex items-center gap-2.5 font-extrabold text-[1.05rem] tracking-tight text-white no-underline mb-2">
          <span className="w-[34px] h-[34px] rounded-[10px] bg-gradient-to-br from-accent to-accent3 flex items-center justify-center text-lg">
            🧠
          </span>
          StudyBuddy
        </Link>
        <p className="text-muted text-xs mt-1">
          Your AI companion on every screen. © {new Date().getFullYear()} StudyBuddy.
        </p>
      </div>
      <div className="flex flex-wrap gap-5">
        {links.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className="text-muted hover:text-white text-xs transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
