import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

const HeroBackground = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 200], [0, 5]);
  const scale = useTransform(scrollY, [0, 200], [1.13, 1.1]);
  const blur = useTransform(scrollY, [0, 200], ['blur(0px)', 'blur(2px)']);

  return (
    <motion.div style={{ scale, filter: blur, y }} className="fixed bg-hero-image bg-cover bg-no-repeat inset-0" />
  );
};

export default HeroBackground;
