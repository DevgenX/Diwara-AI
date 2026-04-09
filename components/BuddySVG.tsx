export default function BuddySVG() {
  return (
    <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="buddyGrad" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      {/* Body */}
      <circle cx="27" cy="27" r="22" fill="url(#buddyGrad)" opacity="0.95" />
      {/* Eyes whites */}
      <circle cx="20" cy="24" r="3.5" fill="white" />
      <circle cx="34" cy="24" r="3.5" fill="white" />
      {/* Pupils */}
      <circle cx="21" cy="24.5" r="1.8" fill="#1e1b4b" />
      <circle cx="35" cy="24.5" r="1.8" fill="#1e1b4b" />
      {/* Smile */}
      <path d="M20 32 Q27 38 34 32" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* Glow ring */}
      <circle cx="27" cy="27" r="25" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.4" />
    </svg>
  );
}
