import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export interface BedroomPageProps {
  shouldAnimate: boolean;
}

const BedroomPage = React.forwardRef<HTMLDivElement, BedroomPageProps>(({ shouldAnimate }, ref) => {
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
    <div ref={ref} className="w-full relative pb-20 bg-whitehue">
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
                <h1 className="px-4 text-3xl lg:text-4xl mb-8 text-[#0B1D26]">Sovrum</h1>
                <motion.div
                  variants={content}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className=" bg-whitehue/90 max-w-[75%] backdrop-blur-md p-4 gap-4 columns-3 text-[#0B1D26] text-content text-[.8em] desktop:text-[1em]"
                >
                  <p>
                    Från entréhallen fortsätter ekgolvet in i den privat placerade sovrumsdelen. En inre hall med
                    frilagd tegelvägg och garderobsvägg förbinder till våningens två sovrum och lika många badrum. Det
                    första sovrummet ligger till vänster. Ekgolvet går igen och rummet får ljus och utsikt via två
                    högsmala glaspartier. Till vänster finns en formren garderobsvägg med skjutdörrar.
                  </p>
                  <br />
                  <p>
                    Det största sovrummet får sin givna karaktär av det stora, tredelade, och småspröjsade
                    fönsterpartiet som öppnar det grönskande perspektivet i den branta granitsluttningen. Rummets läge
                    känns privat och harmoniskt. Med ett fönster på glänt vaknar du av koltrastsången.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="mt-[-100vh]">
        <div className="min-w-[85%] min-h-screen m-4 relative bg-bedroom1 bg-contain bg-right-top bg-no-repeat" />
        <div className="min-w-[85%] min-h-screen m-4 relative bg-bedroom2 bg-contain bg-right-top bg-no-repeat" />
        <div className="min-w-[85%] min-h-screen m-4 relative bg-bedroom3 bg-contain bg-right-top bg-no-repeat" />
      </div>
    </div>
  );
});

export default BedroomPage;
