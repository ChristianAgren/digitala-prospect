import { motion, MotionValue } from 'framer-motion';
import React from 'react';

export interface PageThreeProps {
  boxX: MotionValue<string>;
  boxOpacity: MotionValue<string>;
  bgGradient: MotionValue<string>;
}

const PageThree = React.forwardRef<HTMLDivElement, PageThreeProps>(({ boxX, boxOpacity, bgGradient }, ref) => (
  <motion.div ref={ref} style={{ backgroundColor: bgGradient }} className="w-full h-[500vh] relative">
    <motion.div
      style={{ x: boxX, opacity: boxOpacity, transform: 'translateY(-50%)' }}
      className="sticky top-1/2 bg-white w-6 h-12"
    />
  </motion.div>
));

export default PageThree;
