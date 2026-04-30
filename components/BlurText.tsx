'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

type BlurTextTag = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  direction?: 'bottom' | 'top';
  as?: BlurTextTag;
  splitBy?: 'words' | 'letters';
}

export default function BlurText({
  text,
  className = '',
  delay = 200,
  direction = 'bottom',
  as: Tag = 'h2',
  splitBy = 'words',
}: BlurTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const parts = splitBy === 'letters' ? [...text] : text.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fromY = direction === 'bottom' ? 50 : -50;
  const overshootY = direction === 'bottom' ? -5 : 5;

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={`${className} flex flex-wrap justify-center gap-x-[0.25em]`} aria-label={text}>
      {parts.map((part, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={false}
          animate={inView ? {
            filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
            opacity: [0, 0.5, 1],
            y: [fromY, overshootY, 0],
          } : {}}
          transition={{
            delay: (i * delay) / 1000,
            duration: 0.7,
            times: [0, 0.5, 1],
            ease: 'easeOut',
          }}
          style={{ display: 'inline-block' }}
        >
          {part === ' ' ? '\u00a0' : part}
        </motion.span>
      ))}
    </Tag>
  );
}
