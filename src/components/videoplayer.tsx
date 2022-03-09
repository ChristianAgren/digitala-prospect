import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import Close from './close';

interface Props {
  showing: boolean;
  onClose: () => void;
}

const VideoPlayer = ({ showing, onClose }: Props) => {
  const player = useRef<ReactPlayer>(null);
  if (!showing) return null;
  return (
    <motion.div className="fixed bg-black bg-cover bg-no-repeat inset-0 z-10">
      <Close onClose={onClose} />
      <ReactPlayer ref={player} url="./public/video/video.mp4" width="100%" height="100%" playing controls />
    </motion.div>
  );
};

export default VideoPlayer;
