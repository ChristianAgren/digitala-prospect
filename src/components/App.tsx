import React, { useState } from 'react';
import HeroBackground from './hero.background';
import ApartmentIntroduction from './sections/apartment.introduction';
import ApartmentPresentationSection from './sections/apartment.presentation';
import AreaDescriptionSection from './sections/area.description';
import RoomOverviewSection from './sections/room.overview';
import VideoPlayer from './videoplayer';

function App() {
  const [showingVideo, setShowingVideo] = useState(false);

  const closeVideo = () => {
    setShowingVideo(false);
  };

  const startVideo = () => {
    setShowingVideo(true);
  };

  return (
    <div
      style={
        showingVideo
          ? {
              position: 'fixed',
              inset: 0,
              overflow: 'hidden',
            }
          : undefined
      }
    >
      <HeroBackground />
      <ApartmentIntroduction onPlay={startVideo} />
      <ApartmentPresentationSection />
      <AreaDescriptionSection />
      <RoomOverviewSection />
      <RoomOverviewSection />
      <VideoPlayer showing={showingVideo} onClose={closeVideo} />
    </div>
  );
}

export default App;
