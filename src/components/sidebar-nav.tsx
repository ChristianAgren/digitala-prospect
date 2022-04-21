import React from 'react';
import Profile from './profile';

function Sidebar() {
  return (
    <div className="fixed top-0 right-0 flex flex-col justify-center items-center w-[var(--sidebar-width)] h-full bg-[#0B1D26]">
      <ul className="text-white">
        <li className="sidebar-item">Startsida</li>
        <li className="sidebar-item">Områdesbeskrivning</li>
        <li className="sidebar-item">Entré/hall</li>
        <li className="sidebar-item">Sovrum</li>
        <li className="sidebar-item">Kök</li>
        <li className="sidebar-item">Badrum</li>
        <li className="sidebar-item">Planskisser</li>
        <li className="sidebar-item">Bostadsfakta</li>
      </ul>
      <Profile />
    </div>
  );
}

export default Sidebar;
