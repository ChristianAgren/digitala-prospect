import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React, { useCallback, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

type TProgress = {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
};

const HeroBackground = () => {
  const { scrollY } = useViewportScroll();
  const player = useRef<ReactPlayer>(null);
  const [isReady, setIsReady] = useState(false);
  const y = useTransform(scrollY, [0, 200], [0, 5]);
  const scale = useTransform(scrollY, [0, 200], [1.23, 1.2]);
  const blur = useTransform(scrollY, [0, 200], ['blur(0px)', 'blur(2px)']);

  const initVideo = useCallback(() => {
    if (!player.current || isReady) return;
    player.current.seekTo(10, 'seconds');
    setIsReady(true);
  }, [isReady]);

  const loopVideo = ({ playedSeconds }: TProgress) => {
    if (!player.current || playedSeconds < 51) return;
    player.current.seekTo(10, 'seconds');
  };

  return (
    <motion.div style={{ scale, filter: blur, y }} className="fixed bg-hero-image bg-cover bg-no-repeat inset-0">
      <ReactPlayer
        ref={player}
        onReady={initVideo}
        onProgress={loopVideo}
        playbackRate={0.78}
        style={{
          filter: 'brightness(0.5)',
          transform: 'scale(1.3)',
        }}
        url="./public/video/video.mp4"
        className="hero-background-video"
        width="100%"
        height="100%"
        muted
        playing={isReady}
        loop
      />
    </motion.div>
  );
};

export default HeroBackground;
