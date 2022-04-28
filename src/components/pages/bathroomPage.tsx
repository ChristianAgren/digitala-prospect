import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export interface BathroomPageProps {
  shouldAnimate: boolean;
}

const BathroomPage = React.forwardRef<HTMLDivElement, BathroomPageProps>(({ shouldAnimate }, ref) => {
  const body = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -40,
    },
  };

  const content = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div ref={ref} className="w-full min-h-screen pb-20 relative bg-whitehue">
      <motion.div className="sticky h-screen w-full top-0 z-10 flex justify-start items-end">
        <AnimatePresence initial={false}>
          {shouldAnimate && (
            <motion.div className="translate-x-10" variants={body} initial="hidden" animate="visible" exit="hidden">
              <motion.div
                className=" max-w-4xl p-4 mx-8 mb-8"
                variants={content}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h1 className="px-4 text-3xl lg:text-4xl mb-8 text-[#0B1D26]">Badrum</h1>
                <motion.div
                  variants={content}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className=" bg-whitehue/90 max-w-[75%] p-4 gap-4 columns-3 text-[#0B1D26] text-content text-[.8em] desktop:text-[1em]"
                >
                  <p>
                    Våningens första badrum går i en sparsmakad och sober ton med helkakel, dusch bakom glasvägg,
                    handfatskommod och vägghängd wc. Porslinet och utrustningen kommer från Vola och Duravit. Bakom
                    fönstret reser sig grönskan i sluttningen mot Landalaskogen.
                  </p>
                  <br />
                  <p>
                    Även nästa badrum går i en ljus och formren stil med fönster mot grönskan, badkar, handfat (INR) och
                    vägghängd wc. Porslinet kommer från Duravit där stilren, kantig design i vitt får kontrast av de
                    svarta blandarna.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="mt-[-100vh]">
        <div className="min-w-[85%] min-h-screen m-4 relative bg-bathroom1 bg-contain bg-right-top bg-no-repeat" />
        <div className="min-w-[85%] min-h-screen  m-4 relative bg-bathroom2 bg-contain bg-right-top bg-no-repeat" />
        <div className="min-w-[85%] min-h-screen  m-4 relative bg-bathroom3 bg-contain bg-right-top bg-no-repeat" />
      </div>
    </div>
  );
});

export default BathroomPage;
