import { Composition } from 'remotion';
import { DiwaraTeaser } from './DiwaraTeaser';

export const RemotionRoot = () => {
  return (
    <Composition
      id="DiwaraTeaser"
      component={DiwaraTeaser}
      durationInFrames={420}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
