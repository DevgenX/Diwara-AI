import type { CSSProperties, ReactNode } from 'react';
import { Audio } from '@remotion/media';
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const ease = Easing.bezier(0.16, 1, 0.3, 1);
const gold = '#ffd329';
const cyan = '#19e6ff';
const ink = '#04070b';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

type ImageSceneProps = {
  src: string;
  start: number;
  end: number;
  width: number;
  height: number;
  xFrom: number;
  xTo: number;
  yFrom: number;
  yTo: number;
  zoomFrom: number;
  zoomTo: number;
  rotateFrom?: number;
  rotateTo?: number;
  label: string;
  caption: string;
  highlight?: CSSProperties;
  children?: ReactNode;
};

const typeText = (text: string, frame: number, start: number, duration: number) => {
  const count = Math.floor(
    interpolate(frame, [start, start + duration], [0, text.length], clamp),
  );
  return text.slice(0, count);
};

const FrameShell = ({
  children,
  opacity,
  transform,
}: {
  children: ReactNode;
  opacity: number;
  transform: string;
}) => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity,
      perspective: 1800,
    }}
  >
    <div
      style={{
        transform,
        transformStyle: 'preserve-3d',
        filter: 'drop-shadow(0 50px 90px rgba(0, 0, 0, 0.58))',
      }}
    >
      {children}
    </div>
  </div>
);

const Cursor = ({ frame }: { frame: number }) => {
  const x = interpolate(
    frame,
    [18, 72, 132, 206, 292, 374],
    [805, 1070, 1215, 900, 1035, 1330],
    clamp,
  );
  const y = interpolate(
    frame,
    [18, 72, 132, 206, 292, 374],
    [705, 705, 365, 735, 505, 780],
    clamp,
  );
  const clickPulse = spring({
    frame: frame - 86,
    fps: 30,
    config: { damping: 16, stiffness: 140 },
  });
  const clickWindow = interpolate(frame, [68, 78, 102], [0, 1, 0], clamp);

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: 42,
        height: 42,
        transform: 'rotate(-18deg)',
        zIndex: 20,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: -20,
          top: -20,
          width: 58,
          height: 58,
          borderRadius: '50%',
          border: `2px solid rgba(255, 211, 41, ${0.28 * clickPulse * clickWindow})`,
          transform: `scale(${0.5 + clickPulse * 1.8})`,
          opacity: clickWindow,
        }}
      />
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: '16px solid white',
          borderTop: '12px solid transparent',
          borderBottom: '12px solid transparent',
          filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.55))',
        }}
      />
    </div>
  );
};

const FloatingConsole = ({ frame }: { frame: number }) => {
  const visible = interpolate(frame, [274, 302], [0, 1], clamp);
  const typed = typeText('Teach me how to make a video cinematic', frame, 306, 58);
  const pulse = interpolate(frame % 44, [0, 22, 44], [0.45, 1, 0.45], clamp);

  return (
    <div
      style={{
        position: 'absolute',
        right: 116,
        bottom: 96,
        width: 560,
        height: 410,
        borderRadius: 32,
        border: '1px solid rgba(255, 211, 41, 0.5)',
        background: 'rgba(7, 9, 13, 0.9)',
        boxShadow: '0 30px 90px rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(255, 211, 41, 0.08)',
        opacity: visible,
        transform: `translateY(${interpolate(visible, [0, 1], [50, 0], clamp)}px) rotateY(-10deg)`,
        transformOrigin: 'right center',
        padding: 28,
        zIndex: 16,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
        <div style={{ color: gold, fontSize: 18, fontWeight: 800, letterSpacing: 2 }}>DIWARA</div>
        <div style={{ color: 'white', fontSize: 18, fontWeight: 700 }}>Cursor Assistant</div>
        <div
          style={{
            marginLeft: 'auto',
            width: 34,
            height: 34,
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.18)',
          }}
        >
          x
        </div>
      </div>
      <div
        style={{
          height: 180,
          borderRadius: 22,
          border: '1px solid rgba(255, 211, 41, 0.22)',
          background: 'rgba(255, 255, 255, 0.03)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 28,
          right: 28,
          bottom: 28,
          display: 'grid',
          gridTemplateColumns: '112px 1fr 72px',
          gap: 12,
          alignItems: 'center',
        }}
      >
        <div
          style={{
            height: 54,
            borderRadius: 16,
            display: 'grid',
            placeItems: 'center',
            color: 'white',
            fontWeight: 700,
            border: '1px solid rgba(255, 211, 41, 0.35)',
            background: `rgba(255, 211, 41, ${0.12 + pulse * 0.08})`,
          }}
        >
          Voice
        </div>
        <div
          style={{
            height: 54,
            borderRadius: 18,
            border: '1px solid rgba(255, 211, 41, 0.25)',
            background: 'rgba(0, 0, 0, 0.38)',
            color: 'rgba(255, 255, 255, 0.72)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            fontSize: 20,
          }}
        >
          {typed}
          <span style={{ color: gold, opacity: frame % 24 < 12 ? 1 : 0 }}>_</span>
        </div>
        <div
          style={{
            height: 54,
            borderRadius: 16,
            display: 'grid',
            placeItems: 'center',
            background: gold,
            color: ink,
            fontWeight: 800,
          }}
        >
          Ask
        </div>
      </div>
    </div>
  );
};

const ImageScene = ({
  src,
  start,
  end,
  width,
  height,
  xFrom,
  xTo,
  yFrom,
  yTo,
  zoomFrom,
  zoomTo,
  rotateFrom = -4,
  rotateTo = 4,
  label,
  caption,
  highlight,
  children,
}: ImageSceneProps) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [start, end], [0, 1], { ...clamp, easing: ease });
  const enter = interpolate(frame, [start, start + 24], [0, 1], clamp);
  const exit = interpolate(frame, [end - 26, end], [1, 0], clamp);
  const opacity = Math.min(enter, exit);
  const zoom = interpolate(progress, [0, 1], [zoomFrom, zoomTo], clamp);
  const x = interpolate(progress, [0, 1], [xFrom, xTo], clamp);
  const y = interpolate(progress, [0, 1], [yFrom, yTo], clamp);
  const rotate = interpolate(progress, [0, 1], [rotateFrom, rotateTo], clamp);

  return (
    <>
      <FrameShell
        opacity={opacity}
        transform={`translate3d(${x}px, ${y}px, 0) rotateX(4deg) rotateY(${rotate}deg) scale(${zoom})`}
      >
        <div
          style={{
            position: 'relative',
            width,
            height,
            overflow: 'hidden',
            borderRadius: 30,
            border: '1px solid rgba(255, 211, 41, 0.34)',
            background: '#101010',
          }}
        >
          <Img
            src={staticFile(src)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {highlight ? (
            <div
              style={{
                position: 'absolute',
                borderRadius: 22,
                border: `4px solid ${gold}`,
                boxShadow: '0 0 42px rgba(255, 211, 41, 0.38)',
                opacity: interpolate(frame, [start + 34, start + 54], [0, 1], clamp),
                ...highlight,
              }}
            />
          ) : null}
          {children}
        </div>
      </FrameShell>
      <div
        style={{
          position: 'absolute',
          left: 96,
          top: 94,
          color: 'white',
          width: 720,
          textShadow: '0 8px 28px rgba(0, 0, 0, 0.75)',
          opacity,
          zIndex: 15,
        }}
      >
        <div style={{ color: gold, fontSize: 21, fontWeight: 800, letterSpacing: 3 }}>{label}</div>
        <div style={{ marginTop: 10, fontSize: 36, fontWeight: 800, lineHeight: 1.02 }}>{caption}</div>
      </div>
    </>
  );
};

const ChatTyping = ({ frame }: { frame: number }) => {
  const typed = typeText('Create a reviewer from this file and quiz me after.', frame, 190, 58);
  const enter = interpolate(frame, [178, 196], [0, 1], clamp);
  const exit = interpolate(frame, [264, 286], [1, 0], clamp);
  const visible = Math.min(enter, exit);

  return (
    <div
      style={{
        position: 'absolute',
        left: 405,
        bottom: 128,
        width: 900,
        height: 78,
        borderRadius: 24,
        border: '1px solid rgba(255, 211, 41, 0.34)',
        background: 'rgba(0, 0, 0, 0.78)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 28px',
        color: 'rgba(255, 255, 255, 0.82)',
        fontSize: 27,
        opacity: visible,
        zIndex: 12,
      }}
    >
      {typed}
      <span style={{ color: gold, opacity: frame % 20 < 10 ? 1 : 0 }}>_</span>
    </div>
  );
};

const ClosingTitle = ({ frame }: { frame: number }) => {
  const show = interpolate(frame, [356, 394], [0, 1], clamp);

  return (
    <div
      style={{
        position: 'absolute',
        left: 100,
        top: 96,
        width: 760,
        opacity: show,
        transform: `translateY(${interpolate(show, [0, 1], [34, 0], clamp)}px)`,
        zIndex: 18,
      }}
    >
      <div style={{ color: gold, fontSize: 26, fontWeight: 900, letterSpacing: 7 }}>DIWARA</div>
      <div style={{ marginTop: 18, color: 'white', fontSize: 82, fontWeight: 900, lineHeight: 0.9 }}>
        Your screen-aware AI assistant is almost here.
      </div>
    </div>
  );
};

export const DiwaraTeaser = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const glow = interpolate(frame % (fps * 3), [0, fps * 1.5, fps * 3], [0.2, 0.62, 0.2], clamp);

  return (
    <AbsoluteFill style={{ backgroundColor: ink, overflow: 'hidden', fontFamily: 'Arial, sans-serif' }}>
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(circle at 18% 12%, rgba(25, 230, 255, 0.22), transparent 28%), radial-gradient(circle at 84% 78%, rgba(255, 211, 41, 0.22), transparent 30%), linear-gradient(135deg, #020509, #08131a 44%, #030407)',
        }}
      />
      <AbsoluteFill
        style={{
          opacity: 0.24,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          transform: `translate(${interpolate(frame, [0, 420], [0, -90], clamp)}px, ${interpolate(frame, [0, 420], [0, 60], clamp)}px)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 64,
          borderRadius: 48,
          border: '1px solid rgba(255, 211, 41, 0.18)',
          boxShadow: `inset 0 0 90px rgba(25, 230, 255, ${glow * 0.22})`,
        }}
      />

      <Audio
        src={staticFile('audio/diwara-thrill-bed.mp3')}
        volume={(audioFrame) =>
          interpolate(audioFrame, [0, 42, 360, 420], [0, 0.38, 0.38, 0], clamp)
        }
      />

      <Sequence from={0} durationInFrames={420}>
        <ImageScene
          src="teaser/cursor-assistant.png"
          start={0}
          end={96}
          width={900}
          height={662}
          xFrom={0}
          xTo={-38}
          yFrom={28}
          yTo={-10}
          zoomFrom={0.82}
          zoomTo={1.05}
          rotateFrom={-9}
          rotateTo={4}
          label="CURSOR ASSISTANT"
          caption="Ask for real-time screen help without saving it to chat."
          highlight={{ left: 230, top: 542, width: 520, height: 78 }}
        >
          <div
            style={{
              position: 'absolute',
              left: 248,
              top: 566,
              width: 500,
              height: 50,
              display: 'flex',
              alignItems: 'center',
              overflow: 'hidden',
              borderRadius: 26,
              background: '#090909',
              color: 'rgba(255, 255, 255, 0.76)',
              fontSize: 22,
              paddingLeft: 26,
              whiteSpace: 'nowrap',
            }}
          >
            Teach me how to make a video cinematic
          </div>
        </ImageScene>
      </Sequence>

      <Sequence from={0} durationInFrames={420}>
        <ImageScene
          src="teaser/workspace-tools.png"
          start={72}
          end={184}
          width={1395}
          height={1080}
          xFrom={70}
          xTo={-120}
          yFrom={0}
          yTo={-28}
          zoomFrom={0.74}
          zoomTo={0.91}
          label="TOOLS"
          caption="Choose Research Deck or Reviewer Maker from the workspace."
          highlight={{ left: 420, top: 270, width: 860, height: 150 }}
        />
      </Sequence>

      <Sequence from={0} durationInFrames={420}>
        <ImageScene
          src="teaser/chat-empty.png"
          start={160}
          end={286}
          width={1406}
          height={1080}
          xFrom={-90}
          xTo={-30}
          yFrom={-6}
          yTo={-42}
          zoomFrom={0.72}
          zoomTo={0.9}
          rotateFrom={6}
          rotateTo={-3}
          label="DIWARA CHAT"
          caption="Start a conversation and turn files into study work."
          highlight={{ left: 385, top: 910, width: 810, height: 66 }}
        />
      </Sequence>

      <Sequence from={0} durationInFrames={420}>
        <ImageScene
          src="teaser/assistant-answer.png"
          start={266}
          end={388}
          width={1402}
          height={1080}
          xFrom={18}
          xTo={-108}
          yFrom={-12}
          yTo={-38}
          zoomFrom={0.77}
          zoomTo={0.93}
          rotateFrom={-5}
          rotateTo={4}
          label="SCREEN-AWARE ASSISTANT"
          caption="Diwara explains the active page and guides the next click."
          highlight={{ left: 400, top: 286, width: 902, height: 262 }}
        />
      </Sequence>

      <ChatTyping frame={frame} />
      <FloatingConsole frame={frame} />
      <Cursor frame={frame} />
      <ClosingTitle frame={frame} />

      <div
        style={{
          position: 'absolute',
          left: 94,
          bottom: 70,
          right: 94,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'rgba(255,255,255,0.58)',
          fontSize: 22,
          letterSpacing: 1.5,
          zIndex: 30,
        }}
      >
        <span>AI DESKTOP ASSISTANT</span>
        <span style={{ color: cyan }}>VOICE + CURSOR + SCREEN CONTEXT</span>
      </div>
    </AbsoluteFill>
  );
};
