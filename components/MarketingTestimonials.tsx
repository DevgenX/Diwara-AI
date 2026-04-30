'use client';
import BlurText from './BlurText';

const testimonials = [
  { quote: 'A complete rebuild of how I study - in five days of use. The output outperformed everything I had spent weeks doing before.', name: 'Sarah Chen', role: 'PhD Candidate, MIT' },
  { quote: 'Research that used to take three hours now takes forty minutes. That is not a typo. It just works differently when context is built in.', name: 'Marcus Webb', role: 'Product Lead, Arcline' },
  { quote: 'It did not just help with my workflow. It changed how I think about focus. World-class does not begin to cover it.', name: 'Elena Voss', role: 'Founder, Helix Labs' },
];

export default function MarketingTestimonials() {
  return (
    <section id="testimonials" className="bg-[#050b14] px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-6 rounded-full px-3.5 py-1 text-xs uppercase tracking-wide text-[#22d3ee] liquid-glass font-mono">What They Say</span>
          <BlurText
            text="Don't take our word for it."
            className="mb-4 text-4xl font-bold leading-[0.9] tracking-tight text-white font-heading md:text-5xl lg:text-6xl"
          />
          <p className="text-sm font-light text-white/50 font-body md:text-base">
            From students to knowledge workers, the feedback is consistent: it just works.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-2xl p-8 liquid-glass">
              <div className="mb-4 text-4xl leading-none text-[#22d3ee] font-heading">"</div>
              <p className="mb-4 text-sm italic leading-relaxed text-white/70 font-body">{testimonial.quote}</p>
              <div className="text-sm font-semibold text-white font-body">{testimonial.name}</div>
              <div className="text-xs font-light text-white/40 font-body">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
