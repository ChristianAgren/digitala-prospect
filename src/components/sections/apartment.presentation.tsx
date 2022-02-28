import { AnimatePresence, motion, Transition, Variants } from 'framer-motion';
import React, { useState } from 'react';

const variants: Variants = {
  inactive: {
    // y: 100,
    opacity: 0,
  },
  active: {
    // y: 0,
    opacity: 1,
  },
};

const transition: Transition = {
  duration: 0.3,
};

const ApartmentPresentationSection = () => {
  const [isActive, setActive] = useState(false);

  return (
    <motion.div animate transition={transition} className="bg-slate-100 rounded-md relative my-2 mx-3 mt-[90vh]">
      <motion.div className="flex justify-between">
        <div className="p-4 flex-grow border-r-2">
          <p className="font-body text-xs font-medium text-secondary">Bjurfors beyond presenterar</p>
          <h1 className="font-body font-bold text-xl leading-10 text-primary">Helsingörskajen 4</h1>
          <AnimatePresence initial={false}>
            {isActive && (
              <motion.section
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-y-hidden"
              >
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                  pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta
                  dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit,
                  eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.
                </p>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
        <div className="h-24 flex items-center">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 m-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setActive(!isActive)}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              variants={variants}
              initial="inactive"
              animate={isActive ? 'active' : 'inactive'}
              transition={transition}
              d="M18 12H6"
            />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              variants={variants}
              initial="active"
              animate={isActive ? 'inactive' : 'active'}
              transition={transition}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </motion.svg>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ApartmentPresentationSection;
