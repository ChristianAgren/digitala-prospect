import { motion, MotionValue } from 'framer-motion';
import React from 'react';
import VideoPlayer from '../video.player-old/videoplayer';

export interface VideoPageProps {
  playVideo: boolean;
  opacity: MotionValue<string>;
}

const VideoPage = React.forwardRef<HTMLDivElement, VideoPageProps>(({ playVideo, opacity }, ref) => (
  <motion.div ref={ref} className="w-full h-[200vh] relative bg-primary">
    <motion.div style={{ opacity }} className="sticky top-0 h-screen bg-black">
      <VideoPlayer playing={playVideo} />
    </motion.div>
  </motion.div>
));

export default VideoPage;
