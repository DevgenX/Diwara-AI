'use client';

import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { type RefObject } from 'react';

type MarketingWizardRobotBackgroundProps = {
  targetRef: RefObject<HTMLElement | null>;
};

const runes = ['15%', '35%', '55%', '75%', '94%'];
const panels = [
  { left: '10%', align: 'left' },
  { left: '80%', align: 'right' },
];

export default function MarketingWizardRobotBackground({ targetRef }: MarketingWizardRobotBackgroundProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const yaw = useTransform(scrollYProgress, [0, 1], [8, 56]);
  const pitch = useTransform(scrollYProgress, [0, 1], [16, -28]);
  const driftY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const driftX = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const depth = useTransform(scrollYProgress, [0, 1], [140, 24]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.52, 0.16]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const floorGlow = useTransform(scrollYProgress, [0, 1], [0.4, 0.15]);

  const smoothYaw = useSpring(yaw, { stiffness: 95, damping: 24 });
  const smoothPitch = useSpring(pitch, { stiffness: 110, damping: 26 });
  const smoothDriftY = useSpring(driftY, { stiffness: 90, damping: 28 });
  const smoothDriftX = useSpring(driftX, { stiffness: 90, damping: 25 });
  const smoothDepth = useSpring(depth, { stiffness: 100, damping: 24 });
  const smoothOpacity = useSpring(opacity, { stiffness: 110, damping: 26 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 28 });
  const smoothFloorGlow = useSpring(floorGlow, { stiffness: 110, damping: 30 });

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(34,211,238,0.22),transparent_42%),radial-gradient(circle_at_82%_40%,rgba(251,191,36,0.11),transparent_39%),radial-gradient(circle_at_56%_74%,rgba(168,85,247,0.1),transparent_42%)]" />
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22d3ee]/10 blur-xl"
          animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.62, 0.35] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78bfa]/10 blur-2xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.22, 0.54, 0.22] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-start justify-center" style={{ perspective: '1300px' }}>
        <motion.div
          className="relative mt-20 h-[560px] w-[320px]"
          style={{
            transformStyle: 'preserve-3d',
            rotateY: smoothYaw,
            rotateX: smoothPitch,
            translateY: smoothDriftY,
            translateX: smoothDriftX,
            translateZ: smoothDepth,
            scale: smoothScale,
            opacity: smoothOpacity,
          }}
        >
          <motion.div
            className="absolute left-1/2 top-16 h-7 w-[220px] -translate-x-1/2 rounded-full bg-[#22d3ee]/12 blur-md"
            animate={{ opacity: [0.18, 0.46, 0.18], scale: [0.96, 1.08, 0.96] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            className="absolute left-1/2 top-28 h-[255px] w-[140px] -translate-x-1/2 rounded-[48%_48%_60%_60%] border border-[#22d3ee]/30 bg-[#0b1730] shadow-[0_0_18px_rgba(34,211,238,.22)]"
            style={{ transformStyle: 'preserve-3d', translateZ: 44 }}
          >
            <div className="absolute -top-8 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border border-[#f59e0b]/65 bg-[#0a1631]/85" />
            <div className="absolute -top-14 left-1/2 h-20 w-24 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(56,189,248,.28),rgba(13,23,43,.95))]">
              <div className="absolute left-1/2 top-3 h-2 w-12 -translate-x-1/2 rounded-full bg-[#22d3ee]/70" />
              <div className="absolute left-[calc(50%-16px)] top-[12px] h-2 w-2 rounded-full bg-[#dbeafe]" />
              <div className="absolute left-[calc(50%+10px)] top-[12px] h-2 w-2 rounded-full bg-[#dbeafe]" />
            </div>
            <motion.div
              className="absolute left-1/2 top-2 h-2 w-16 -translate-x-1/2 rounded-full border border-[#22d3ee]/50 bg-[#0b1730]"
              style={{ rotateX: 76, translateZ: 32 }}
            />

            <motion.div
              className="absolute left-1/2 top-36 h-16 w-2 rounded-full bg-gradient-to-b from-[#22d3ee] via-[#22d3ee]/30 to-transparent"
              style={{ rotateY: 87, translateX: -59, translateZ: 35 }}
              animate={{ opacity: [0.45, 0.95, 0.45] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute left-1/2 top-36 h-16 w-2 rounded-full bg-gradient-to-b from-[#22d3ee] via-[#22d3ee]/30 to-transparent"
              style={{ rotateY: -87, translateX: 59, translateZ: 35 }}
              animate={{ opacity: [0.45, 0.95, 0.45] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            <div className="absolute inset-x-2 top-[84px] h-[150px] rounded-full border border-[#a78bfa]/25 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,.18),rgba(13,23,43,.9))]" />
            <motion.div
              className="absolute left-1/2 top-28 h-20 w-16 -translate-x-1/2 rounded-full border-2 border-[#e2e8f0]/50 bg-[#0e1c34]/90"
              style={{ rotateX: -70 }}
              animate={{ y: [0, -6, 0], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22d3ee]/85 shadow-[0_0_14px_rgba(34,211,238,.85)]" />
            </motion.div>

            <div className="absolute -left-1 top-36 h-16 w-8 rounded-full border border-[#7dd3fc]/40 bg-[#091327]/90" style={{ transform: 'rotateY(-22deg) rotate(-7deg) translateZ(22px)' }} />
            <div className="absolute -right-1 top-36 h-16 w-8 rounded-full border border-[#7dd3fc]/40 bg-[#091327]/90" style={{ transform: 'rotateY(22deg) rotate(7deg) translateZ(22px)' }} />
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-24 h-16 w-16 -translate-x-1/2 rounded-full border border-[#f59e0b]/70 bg-[#0b1a33]/70"
            style={{ transformStyle: 'preserve-3d', rotateX: 82, rotateY: 20, translateZ: 132 }}
            animate={{ rotate: [0, 8, 0], scale: [0.98, 1.14, 0.98] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#fcd34d]" />
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-[314px] h-[190px] w-[168px] -translate-x-1/2 rounded-[48%_48%_62%_62%] border border-[#a78bfa]/35 bg-[#0a1230] shadow-[inset_0_0_40px_rgba(167,139,250,.15)]"
            style={{ transformStyle: 'preserve-3d', translateZ: 40 }}
          >
            <div className="absolute left-1/2 top-6 h-[138px] w-[148px] -translate-x-1/2 rounded-[50%_50%_66%_66%] border border-[#22d3ee]/50 bg-[linear-gradient(180deg,rgba(34,211,238,.2),rgba(9,16,33,.95))]" />
            <motion.div className="absolute left-1/2 top-16 h-4 w-20 -translate-x-1/2 rounded-full border border-[#a78bfa]/50 bg-[#0f172a]/65" animate={{ opacity: [0.35, 0.75, 0.35] }} transition={{ duration: 2.4, repeat: Infinity }} />
            <motion.div
              className="absolute left-1/2 top-24 h-[100px] w-11 -translate-x-1/2 rounded-full bg-[#111827]/85"
              style={{ rotateY: 90, translateZ: 30 }}
              animate={{ rotate: [0, 6, 0], opacity: [0.55, 0.95, 0.55] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="absolute left-1/2 top-8 h-2 w-3 -translate-x-1/2 rounded-full bg-[#22d3ee]" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-[336px] h-16 w-56 -translate-x-1/2 rounded-full border border-[#22d3ee]/45 bg-[#0b1730]/65"
            style={{ rotateX: 82, translateZ: -22 }}
            animate={{ opacity: [0.15, 0.45, 0.15] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="absolute left-[34%] top-1/2 h-1.5 w-3 -translate-y-1/2 rounded-full bg-[#22d3ee]" />
            <span className="absolute left-1/2 top-1/2 h-1.5 w-3 -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#a78bfa]" />
            <span className="absolute left-[64%] top-1/2 h-1.5 w-3 -translate-y-1/2 rounded-full bg-[#22d3ee]" />
          </motion.div>

          <motion.div
            className="absolute left-[calc(100%-8px)] top-[214px] h-80 w-12 -translate-y-1/2 rounded-full border border-[#fbbf24]/65 bg-[#111827]/70"
            style={{ rotateY: 10, rotateX: 8, translateZ: 74 }}
            animate={{ rotate: [0, 2, 0], y: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="mt-3 h-2 w-2 rounded-full bg-[#22d3ee] mx-auto" />
            <motion.div className="absolute top-1/2 left-1/2 h-40 w-12 -translate-x-1/2 rounded-full border border-[#f59e0b]/50 bg-[linear-gradient(180deg,rgba(251,191,36,.2),rgba(17,24,39,.05))]" />
          </motion.div>

          {runes.map((left, index) => (
            <motion.div
              key={left}
              className="absolute h-[2px] w-7 rounded-full bg-[#22d3ee]/80"
              style={{
                left,
                top: `${12 + index * 16}%`,
                transformStyle: 'preserve-3d',
                translateZ: 24 + index * 5,
              }}
              animate={{ opacity: [0.24, 0.85, 0.24], x: [0, 8, 0] }}
              transition={{ duration: 3.0 + index * 0.35, delay: index * 0.24, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          {panels.map((panel) => (
            <motion.div
              key={panel.left}
              className={`absolute top-36 h-40 w-24 rounded-lg border ${panel.align === 'left' ? 'left-0' : 'right-0'} translate-x-0 -translate-y-1/2 border-[#22d3ee]/35 bg-[#020917]/55 backdrop-blur`}
              style={{ rotateY: panel.align === 'left' ? -35 : 35, translateZ: 28 }}
              animate={{ opacity: [0.2, 0.58, 0.2], y: [0, -5, 0] }}
              transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="mt-2 flex items-center justify-center text-[9px] tracking-[0.2em] text-[#22d3ee] font-mono">DIWARA AI</div>
              <div className="mt-3 space-y-2 px-2">
                <div className="h-1.5 w-full rounded-full bg-[#22d3ee]/55" />
                <div className="h-1.5 w-3/4 rounded-full bg-[#22d3ee]/55" />
                <div className="h-1.5 w-1/2 rounded-full bg-[#22d3ee]/55" />
              </div>
            </motion.div>
          ))}

          <motion.div
            className="absolute left-[22%] top-1/2 h-2 w-16 rounded-full bg-[#22d3ee]/45"
            style={{ translateZ: 58 }}
            animate={{ x: [0, 10, 0], opacity: [0.25, 0.8, 0.25], scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute left-[58%] top-[52%] h-2 w-16 rounded-full bg-[#a78bfa]/45"
            style={{ translateZ: 52 }}
            animate={{ x: [0, -10, 0], opacity: [0.2, 0.75, 0.2], scaleX: [1, 1.2, 1] }}
            transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-2xl"
        style={{ opacity: smoothFloorGlow }}
      >
        <div className="h-full w-full rounded-full bg-gradient-to-r from-[#22d3ee]/20 via-[#a78bfa]/20 to-[#f59e0b]/20" />
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
        <div className="h-1 w-[72vw] rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0),rgba(34,211,238,.45),rgba(167,139,250,.32),rgba(34,211,238,0))]" />
      </div>
    </div>
  );
}
