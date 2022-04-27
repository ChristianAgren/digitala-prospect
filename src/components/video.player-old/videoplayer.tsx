import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import PlayerControls from './controls';

interface Props {
  playing: boolean;
}

const VideoPlayer = ({ playing }: Props) => {
  const player = useRef<ReactPlayer>(null);
  const [playerState, setPlayerState] = useState({
    playing,
    prevVolume: 20,
    volume: 0,
    progress: 0,
  });

  const togglePlay = () => {
    setPlayerState(prev => ({ ...prev, playing: !prev.playing }));
  };

  const toggleMute = () => {
    if (!playerState.volume) {
      setPlayerState(prev => ({ ...prev, volume: prev.prevVolume }));
    } else {
      setPlayerState(prev => ({ ...prev, volume: 0 }));
    }
  };

  const changeVolume = (val: number) => {
    setPlayerState(prev => ({
      ...prev,
      volume: val,
      prevVolume: val,
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

  useEffect(() => {
    setPlayerState(prev => ({ ...prev, playing }));
  }, [playing]);

  return (
    <div className="w-full h-full">
      <ReactPlayer
        ref={player}
        url="video/video.mp4"
        width="100%"
        height="100%"
        playing={playerState.playing}
        muted={!playerState.volume}
        volume={playerState.volume / 100}
        onProgress={({ played }) => setPlayerState(prev => ({ ...prev, progress: played * 100 }))}
      />
      <PlayerControls
        isMuted={!playerState.volume}
        toggleMute={toggleMute}
        isPlaying={playerState.playing}
        togglePlay={togglePlay}
        volume={playerState.volume}
        changeVolume={changeVolume}
        updateProgress={updateVideoProgress}
        progress={playerState.progress}
        reload={reloadVideo}
      />
    </div>
  );
};

export default VideoPlayer;
