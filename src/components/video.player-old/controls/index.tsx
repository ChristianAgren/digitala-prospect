import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import PlayPauseReloadButton, { IPlayPauseReloadButtonProps } from './button.playpause';
import ProgressSlider, { IProgressSliderProps } from './slider.progress';
import SoundControls, { ISoundControlProps } from './sound';

interface Props extends ISoundControlProps, Omit<IPlayPauseReloadButtonProps, 'hasCompleted'>, IProgressSliderProps {}

const variants = {
  visible: {
    opacity: 1,
  },
  invisible: {
    opacity: 0,
  },
};

const PlayerControls = ({
  isPlaying,
  isMuted,
  volume,
  togglePlay,
  toggleMute,
  changeVolume,
  progress,
  updateProgress,
  reload,
}: Props) => {
  const [showControls, setShowControls] = useState(true);
  const intervalRef = useRef<number>();

  const slowlyHideControls = (delay: number) => {
    const interval = setInterval(() => {
      setShowControls(false);
    }, delay);
    intervalRef.current = interval;
  };

  const shouldShowControls = (delay = 3600) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setShowControls(true);
    slowlyHideControls(delay);
  };

  useEffect(() => {
    slowlyHideControls(1200);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setShowControls(false);
    };
  }, []);

  return (
    <motion.div
      onMouseMove={() => shouldShowControls()}
      onClick={() => shouldShowControls()}
      className="absolute z-10 inset-0 text-white flex items-end cursor-pointer"
      animate={showControls ? 'visible' : 'invisible'}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      variants={variants}
    >
      <div className=" bg-[#0B1D26]/80 w-full relative px-3 py-3">
        <ProgressSlider progress={progress} updateProgress={updateProgress} />
        <div className="flex items-center">
          <PlayPauseReloadButton
            hasCompleted={progress === 100}
            togglePlay={togglePlay}
            isPlaying={isPlaying}
            reload={reload}
          />
          <SoundControls isMuted={isMuted} toggleMute={toggleMute} changeVolume={changeVolume} volume={volume} />
        </div>
      </div>
    </motion.div>
  );
};

export default PlayerControls;
