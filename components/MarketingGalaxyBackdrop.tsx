const colors = [
  'rgba(56, 189, 248, 0.95)',
  'rgba(251, 191, 36, 0.9)',
  'rgba(168, 85, 247, 0.85)',
  'rgba(236, 72, 153, 0.85)',
  'rgba(59, 130, 246, 0.9)',
];

type GalaxyStar = {
  left: string;
  top: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
};

const random = (seed: number) => {
  const x = Math.sin(seed) * 43758.5453123;
  return x - Math.floor(x);
};

const stars: GalaxyStar[] = Array.from({ length: 190 }, (_v, index) => {
  const color = colors[index % colors.length];
  const seed = index + 1;
  const size = 2 + random(seed * 7.17) * 3.5;

  return {
    left: `${random(seed * 13.37) * 100}%`,
    top: `${random(seed * 17.91) * 220}%`,
    size,
    color,
    duration: 5 + random(seed * 23.4) * 12,
    delay: random(seed * 3.91) * 6,
  };
});

export default function MarketingGalaxyBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {stars.map((star, index) => (
        <span
          key={`${star.left}-${star.top}-${index}`}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            mixBlendMode: 'screen',
            opacity: 0.68,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 1.5}px ${star.color}`,
            animation: `diwara-star-twinkle ${star.duration.toFixed(2)}s ease-in-out infinite ${star.delay.toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
}
