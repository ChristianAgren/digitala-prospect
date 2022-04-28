import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export interface EntrancePageProps {
  shouldAnimate: boolean;
}

const EntrancePage = React.forwardRef<HTMLDivElement, EntrancePageProps>(({ shouldAnimate }, ref) => {
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
                className=" max-w-6xl p-4 mx-8 mb-8"
                variants={content}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h1 className="px-4 text-3xl lg:text-4xl mb-8 text-[#0B1D26]">Entré / Hall</h1>
                <motion.div
                  variants={content}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className=" bg-whitehue/90 max-w-[75%] backdrop-blur-md p-4 gap-4 columns-3 text-[#0B1D26] text-content text-[.8em] desktop:text-[1em]"
                >
                  <p>
                    Tillsammans med det genomgående ljusa ekgolvet får det italienska designköket från Poliform ett
                    grafiskt, närmast minimalistiskt, uttryck – de släta luckornas mörkbets står mot arbetsytornas
                    bländvita komposit. Vitvarorna är helintegrerade, med enstaka inslag av glas och signeras bl.a.
                    Gaggenau.
                  </p>
                  <br />
                  <p>
                    Den öppna planlösningens effektfulla rumsvolym får en välbehövlig balans när taket efterhand sänks
                    över kök och matsal. Det skapar en mjuk rumslighet och en trivsam miljö när långbordet står dukat
                    till fest. Tre glaspartier med djupa nischer ger fint ljus, en varm kväll står de öppna ut mot
                    fågelsång och sommarens dofter. Utsikten över staden avslöjar det höga och fria läget. En
                    vinterkväll räcker några levande ljus i nischerna för att skapa stark atmosfär.
                  </p>
                  <br />
                  <p>
                    När dina nattgäster undrar var de ska sova, överraskar du med att sänka ner trappan till loftet, med
                    ett knapptryck. Trappan i svart stål med vita steg blir ett designelement som reser sig diagonalt
                    genom rummet. Här uppe fortsätter ekgolvet med ca 12 kvm under nocken. Ytan är naturligt avgränsad
                    för allt från tevespel, dataarbetsplats eller gästsängar.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="mt-[-100vh]">
        <div className="min-w-[85%] min-h-screen m-4 relative bg-entrance1 bg-contain bg-right-top bg-no-repeat" />
        <div className="min-w-[85%] min-h-screen  m-4 relative bg-entrance2 bg-contain bg-right-top bg-no-repeat" />
        <div className="min-w-[85%] min-h-screen  m-4 relative bg-entrance3 bg-contain bg-right-top bg-no-repeat" />
      </div>
    </div>
  );
});

export default EntrancePage;
