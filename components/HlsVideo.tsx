'use client';
import { useEffect, useRef } from 'react';

interface HlsVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function HlsVideo({ src, className = '', style }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (src.includes('REPLACE_')) return;

    let hlsInstance: { destroy: () => void } | null = null;
    let cancelled = false;

    if (src.endsWith('.m3u8')) {
      import('hls.js').then(({ default: Hls }) => {
        if (cancelled) return;
        if (Hls.isSupported()) {
          const hls = new Hls();
          hlsInstance = hls;
          hls.loadSource(src);
          hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = src;
        }
      });
    } else {
      video.src = src;
    }

    return () => {
      cancelled = true;
      hlsInstance?.destroy();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className={className}
      style={{
        background:
          'radial-gradient(circle at 50% 25%, rgba(34, 211, 238, 0.2), transparent 34%), linear-gradient(135deg, #07111f 0%, #050b14 58%, #0d1829 100%)',
        ...style,
      }}
    />
  );
}
