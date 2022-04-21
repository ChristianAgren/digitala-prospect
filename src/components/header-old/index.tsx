import React from 'react';
import BjurforsBeyond from './bjurforsbeyond';

const Header = () => (
  <div className="fixed top-0 inset-x-0 h-16 px-3 flex justify-between items-center">
    <BjurforsBeyond />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white m-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </div>
);

export default Header;
