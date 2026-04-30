'use client';
import HlsVideo from './HlsVideo';

const stats = [
  { value: '10K+', label: 'Users in beta' },
  { value: '98%', label: 'Task completion rate' },
  { value: '3.2x', label: 'Faster research sessions' },
  { value: '5 sec', label: 'Average time to first action' },
];

export default function MarketingStats() {
  return (
    <section className="relative py-32 overflow-hidden">
      <HlsVideo
        src="https://stream.mux.com/REPLACE_STATS_VIDEO.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'saturate(0)', opacity: 0.3 }}
      />
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10" style={{ height: 200, background: 'linear-gradient(to bottom, #050b14, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" style={{ height: 200, background: 'linear-gradient(to top, #050b14, transparent)' }} />

      <div className="relative z-20 max-w-5xl mx-auto px-6">
        <div className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map(s => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-1">{s.value}</div>
                <div className="w-8 h-0.5 bg-[#22d3ee] mx-auto my-2" />
                <div className="text-white/50 font-body font-light text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
