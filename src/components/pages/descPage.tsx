import { AnimatePresence, motion, MotionValue } from 'framer-motion';
import React from 'react';

export interface DescPageProps {
  container: {
    backgroundColor: MotionValue<string>;
  };
  shouldAnimate: boolean;
}

const DescriptionPage = React.forwardRef<HTMLDivElement, DescPageProps>(({ container, shouldAnimate }, ref) => {
  const body = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 40,
    },
  };

  const content = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 40 },
  };

  return (
    <motion.div ref={ref} style={{ ...container }} className="w-full h-[150vh] relative">
      <motion.div className="sticky h-screen flex justify-center items-center top-0">
        <AnimatePresence initial={false}>
          {shouldAnimate && (
            <motion.div className="max-w-4xl p-4" variants={body} initial="hidden" animate="visible" exit="hidden">
              <motion.div
                style={{ ...container }}
                variants={content}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="p-4"
              >
                <h1 className="text-3xl lg:text-4xl my-8 text-[#0B1D26]">Välkommen</h1>
                <motion.div
                  variants={content}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="gap-8 columns-2 max-h-screen text-[#0B1D26] text-content text-[.7em] 2xl:text-[1em]"
                >
                  <p>
                    <strong>En tambur med marmorgolv</strong> tar emot. Den gamla kalstenstrappan med tidstrogna
                    träräcken försvinner upp mot tredje och översta plan där den stora våningen ligger. Här nere finns
                    hatthylla och avhängning i gammal stil. Ett fönster, halvvägs upp i trappan, avslöjar höjden och
                    utsikten över de kuperade kvarteren. En låg, frilagd tegelvägg med smide och översida i ek utgör
                    räcke mot entréhallen.
                  </p>
                  <br />
                  <p>
                    <strong>Väl uppe är de</strong> första intrycket av den stora våningen smått dramatiskt. Ett vackert
                    ekplankgolv sträcker ut under den fria takhöjden som reser sig fem meter upp till nock. Känslan av
                    stora och mäktiga rumsvolymer är omedelbar och tankarna går till klassiska, internationella
                    takvåningar. Floder med ljus forsar in från alla håll, inte minst från de många stora takfönstren.
                    Väggarna går i en sobert ljusgrå nyans. Till vänster i hallen finns platsbyggd förvaring bakom ett
                    parti med släta, mörkbetsade ytor. Den mer privata sovrumsdelen skymtar bakom en öppning.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
});

export default DescriptionPage;
