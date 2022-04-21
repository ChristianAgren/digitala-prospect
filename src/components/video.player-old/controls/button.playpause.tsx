import React from 'react';
import { motion, Variants } from 'framer-motion';

export interface IPlayPauseReloadButtonProps {
  togglePlay: () => void;
  reload: () => void;
  isPlaying: boolean;
  hasCompleted: boolean;
}

const transition = { duration: 0.3, ease: 'easeInOut' };
const variants: Variants = {
  inactive: {
    // y: 100,
    opacity: 0,
  },
  active: {
    // y: 0,
    opacity: 1,
  },
};

const PlayPauseReloadButton = ({ isPlaying, togglePlay, hasCompleted, reload }: IPlayPauseReloadButtonProps) => {
  const showPlay = !hasCompleted && !isPlaying;
  const showPause = !hasCompleted && isPlaying;

  const handleAction = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    if (hasCompleted) {
      return reload();
    }
    return togglePlay();
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      viewBox="0 0 20 20"
      fill="currentColor"
      onClick={handleAction}
    >
      <motion.path
        initial={showPlay ? 'active' : 'inactive'}
        animate={showPlay ? 'active' : 'inactive'}
        variants={variants}
        transition={transition}
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clipRule="evenodd"
      />
      <motion.path
        initial={showPause ? 'active' : 'inactive'}
        animate={showPause ? 'active' : 'inactive'}
        variants={variants}
        transition={transition}
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
      <motion.path
        initial="inactive"
        animate={hasCompleted ? 'active' : 'inactive'}
        variants={variants}
        transition={transition}
        fillRule="evenodd"
        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
        clipRule="evenodd"
      />
    </motion.svg>
  );
};

export default PlayPauseReloadButton;
