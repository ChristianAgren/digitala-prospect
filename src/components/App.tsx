import React from 'react';
import Header from './header';
import HeroBackground from './hero.background';
import ApartmentPresentationSection from './sections/apartment.presentation';
import AreaDescriptionSection from './sections/area.description';
import RoomOverviewSection from './sections/room.overview';

function App() {
  return (
    <>
      <HeroBackground />
      <Header />
      <ApartmentPresentationSection />
      <AreaDescriptionSection />
      <RoomOverviewSection />
      <RoomOverviewSection />
    </>
  );
}

export default App;
