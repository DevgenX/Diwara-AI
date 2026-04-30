'use client';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function MarketingNav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#how-it-works', label: 'How it works' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav className="fixed left-0 right-0 top-3 z-50 px-4 py-3 sm:top-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Image src="/icon.svg" alt="Diwara AI" width={40} height={40} className="h-10 w-10" />
          <span className="font-heading font-semibold text-white text-sm">Diwara AI</span>
        </a>

        <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 gap-0.5">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="px-3 py-2 text-sm font-medium text-white/80 font-body hover:text-[#22d3ee] transition-colors rounded-full">
              {l.label}
            </a>
          ))}
          <a href="#pricing"
            className="flex items-center gap-1 bg-[#22d3ee] text-[#050b14] rounded-full px-3.5 py-1.5 text-sm font-semibold ml-1 hover:bg-[#67e8f9] transition-colors">
            Start free <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="rounded-full p-2 text-white/70 liquid-glass hover:text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 flex max-w-6xl flex-col gap-3 rounded-2xl px-5 py-4 liquid-glass md:hidden">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white/80 font-body text-sm py-1 hover:text-[#22d3ee] transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#pricing" onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-1 bg-[#22d3ee] text-[#050b14] rounded-full py-2.5 text-sm font-semibold mt-1">
            Start free <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </nav>
  );
}
