import { motion, MotionValue } from 'framer-motion';
import React from 'react';
import Profile from './profile';

interface ISidebarProps {
  pages: {
    [key: string]: {
      title: string;
      ref: React.RefObject<HTMLDivElement>;
      sidebarAnimation: {
        opacity: MotionValue<string>;
      };
    };
  };
}

function Sidebar({ pages }: ISidebarProps) {
  const onClickItem = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 right-0 flex flex-col justify-center items-center w-[var(--sidebar-width)] h-full bg-[#0B1D26]">
      <div className="bg-bjurforsbeyond w-1/2 h-16 bg-contain bg-center bg-no-repeat" />
      <ul className="text-white">
        {Object.values(pages).map(({ title, ref, sidebarAnimation }) => (
          <motion.li style={{ ...sidebarAnimation }} className="sidebar-item" key={title}>
            <button type="button" onClick={() => onClickItem(ref)}>
              {title}
            </button>
          </motion.li>
        ))}
      </ul>
      <Profile />
    </div>
  );
}

export default Sidebar;
