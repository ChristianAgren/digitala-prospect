import { motion, MotionValue } from 'framer-motion';
import React from 'react';

export interface PageOneProps {
  scale: MotionValue<string>;
}

const PageOne = React.forwardRef<HTMLDivElement, PageOneProps>(({ scale }, ref) => (
  <div ref={ref} className="w-full h-[300vh] relative bg-[#0B1D26cc]">
    <motion.div style={{ scale }} className="bg-black h-screen sticky top-0">
      <h1>Hello!</h1>
    </motion.div>
  </div>
));

export default PageOne;
