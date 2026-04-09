"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16 bg-bg/85 backdrop-blur-xl border-b border-indigo-glow">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 font-extrabold text-[1.05rem] tracking-tight text-white no-underline">
        <span className="w-[34px] h-[34px] rounded-[10px] bg-gradient-to-br from-accent to-accent3 flex items-center justify-center text-lg">
          🧠
        </span>
        StudyBuddy
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-7">
        {[
          { href: "#how-it-works", label: "How it works" },
          { href: "#features",     label: "Features"     },
          { href: "#pricing",      label: "Pricing"      },
          { href: "#faq",          label: "FAQ"          },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-muted hover:text-white text-sm font-medium transition-colors"
          >
            {label}
          </Link>
        ))}
        <Link
          href="#pricing"
          className="bg-accent hover:bg-accent2 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all hover:-translate-y-px"
        >
          Get Started Free
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-muted hover:text-white p-2"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-surface border-b border-indigo-glow flex flex-col p-6 gap-5 md:hidden">
          {[
            { href: "#how-it-works", label: "How it works" },
            { href: "#features",     label: "Features"     },
            { href: "#pricing",      label: "Pricing"      },
            { href: "#faq",          label: "FAQ"          },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-muted hover:text-white font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#pricing"
            className="bg-accent text-white font-semibold px-5 py-3 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Started Free
          </Link>
        </div>
      )}
    </nav>
  );
}
