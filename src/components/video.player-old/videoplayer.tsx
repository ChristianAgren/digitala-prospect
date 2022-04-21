import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import PlayerControls from './controls';

interface Props {
  showing: boolean;
  onClose: () => void;
}

const VideoPlayer = ({ showing, onClose }: Props) => {
  const player = useRef<ReactPlayer>(null);
  const [playerState, setPlayerState] = useState({
    playing: true,
    muted: false,
    volume: 20,
    progress: 0,
  });

  const togglePlay = () => {
    setPlayerState(prev => ({ ...prev, playing: !prev.playing }));
  };

  const toggleMute = () => {
    setPlayerState(prev => ({ ...prev, muted: !prev.muted }));
  };

  const changeVolume = (val: number) => {
    setPlayerState(prev => ({
      ...prev,
      volume: val,
    }));
  };

  const updateVideoProgress = (value: number) => {
    if (!player.current) return;
    setPlayerState(prev => ({ ...prev, progress: value }));
    if (playerState.playing) {
      setPlayerState(prev => ({ ...prev, playing: false }));
    }
    player.current.seekTo(value / 100, 'fraction');
  };

  const reloadVideo = () => {
    if (!player.current) return;
    player.current.seekTo(0);
  };

  if (!showing) return null;
  return (
    <motion.div className="fixed bg-black bg-cover bg-no-repeat inset-0 z-10">
      <ReactPlayer
        ref={player}
        url="./public/video/video.mp4"
        width="100%"
        height="100%"
        playing={playerState.playing}
        muted={playerState.muted}
        volume={playerState.volume / 100}
        onProgress={({ played }) => setPlayerState(prev => ({ ...prev, progress: played * 100 }))}
      />
      <PlayerControls
        isMuted={playerState.muted}
        toggleMute={toggleMute}
        isPlaying={playerState.playing}
        togglePlay={togglePlay}
        onClose={onClose}
        volume={playerState.volume}
        changeVolume={changeVolume}
        updateProgress={updateVideoProgress}
        progress={playerState.progress}
        reload={reloadVideo}
      />
    </motion.div>
  );
};

export default VideoPlayer;
