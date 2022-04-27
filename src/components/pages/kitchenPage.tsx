import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export interface KitchenPageProps {
  shouldAnimate: boolean;
}

const KitchenPage = React.forwardRef<HTMLDivElement, KitchenPageProps>(({ shouldAnimate }, ref) => {
  const body = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  const content = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <div ref={ref} className="w-full h-[500vh] relative bg-white">
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
                <h1 className="px-4 text-3xl lg:text-4xl mb-8 text-[#0B1D26]">Kök</h1>
                <motion.div
                  variants={content}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className=" bg-white/90 backdrop-blur-md p-4 gap-4 columns-3 text-[#0B1D26] text-content text-[.7em] 2xl:text-[1em]"
                >
                  <p>
                    Till höger, i öppen planlösning med matsal och kök, ligger våningens ljusa sällskapsytor.
                    Arkitekturlinjerna reser sig brant upp till nock, inramade av synliga reglar och bjälkar som är
                    mörkbetsade. Intrycket ihop med de slätputsade tegelstommarna och den centrala murstocken är
                    slående. En höstkväll, när regnet smattrar mot takfönstren, sprakar björkveden i den formrena
                    gjutjärnskaminen. En sådan kväll skapar de stora ytornas belysning en fantastisk atmosfär.
                  </p>
                  <br />
                  <p>
                    I öppen planlösning ligger det formrena köket som är centrerat runt en större köksö med underskåp.
                    Bjud in kvällens gäster att sitta ner med sina glas vid barhänget i mörkbetsad ek.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="min-w-[85%] min-h-screen m-16 relative bg-kitchen1 bg-contain bg-right-top bg-no-repeat" />
      <div className="min-w-[85%] min-h-screen  m-16 relative bg-kitchen2 bg-contain bg-right-top bg-no-repeat" />
      <div className="min-w-[85%] min-h-screen  m-16 relative bg-kitchen3 bg-contain bg-right-top bg-no-repeat" />
    </div>
  );
});

export default KitchenPage;
