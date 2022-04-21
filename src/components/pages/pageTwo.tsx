import { motion, MotionValue } from 'framer-motion';
import React from 'react';

export interface PageTwoProps {
  textX: MotionValue<string>;
}

const PageTwo = React.forwardRef<HTMLDivElement, PageTwoProps>(({ textX }, ref) => (
  <div ref={ref} className="w-full h-[300vh] relative bg-slate-500">
    <motion.h1 style={{ x: textX }} className="sticky top-4 w-fit">
      WOOOOOOOOOOO
    </motion.h1>
  </div>
));

export default PageTwo;
