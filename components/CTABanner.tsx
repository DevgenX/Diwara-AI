import Link from "next/link";

export default function CTABanner() {
  return (
    <div className="mx-6 md:mx-16 mb-24">
      <div className="relative bg-gradient-to-br from-accent/15 to-accent3/8 border border-accent/25 rounded-3xl px-8 py-16 text-center overflow-hidden">
        {/* Top glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-48 bg-accent/25 blur-3xl rounded-full pointer-events-none" />

        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 relative">
          Ready to study smarter?
        </h2>
        <p className="text-muted text-base mb-8 relative">
          Join thousands of students who learn faster with an AI buddy by their side.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap relative">
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-accent to-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_0_40px_rgba(99,102,241,0.35)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 transition-all"
          >
            ✦ Start for Free
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center gap-2 bg-transparent border border-indigo-glow text-white font-semibold px-8 py-3.5 rounded-xl hover:border-accent hover:bg-accent/8 transition-all"
          >
            See all features →
          </Link>
        </div>
      </div>
    </div>
  );
}
