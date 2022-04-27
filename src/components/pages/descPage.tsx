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
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      x: 40,
      transition: {
        when: 'afterChildren',
      },
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
              <motion.div variants={content} initial="hidden" animate="visible" exit="hidden">
                <h1 className="text-3xl lg:text-4xl my-8 text-[#0B1D26]">Områdesbeskrivning</h1>
                <motion.div
                  variants={content}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="gap-8 columns-2 max-h-screen text-[#0B1D26] text-content lg:text-md"
                >
                  <p>
                    <strong>MÖTET MELLAN NORRA</strong> hamnen och stadskärnan är dynamisk på många sätt. Från anrika
                    hus, torg och gränder öppnar sig Öresunds mäktiga hav med kajen och hamningången som sina
                    följeslagare. En plats fyllt av liv och rörelse där badplatser och restauranger avlöser varandra på
                    löpande band. Här, i direkt anslutning till kajkanten och havet erbjuds nu ett boende om 115
                    smakfulla kvadratmeter.
                  </p>
                  <br />
                  <p>
                    <strong>VÅNINGEN MED FEM</strong> rum och två balkonger är en del av projektet SeaU som har
                    formgetts av Gert Wingårdh med arkitekter och uppfördes 2018. Föga förvånande, med detta team i
                    åtanke, erbjuds ett boende med snillrika finesser, stilsäkerhet och genomtänkta detaljer rakt
                    igenom. Ett hem där ingenting har lämnats åt slumpen. Glaspartierna har placerats minutiöst för att
                    maximera såväl ljusflöde som utsikt. Balkongerna nås från tre rum. Havsutsikten möter redan i
                    entrén. Material och färgval utstrålar enhetlighet och harmoni. Samtliga golvytor pryds av en
                    vitpigmenterad enstavsparkett medan väggarnas kulörer skiftar i vitt och mustigt midnattsblått som
                    matchar miljön. Planlösningen är oklanderlig, med de privata och funktionella rummen i en del och de
                    sociala i den andra. Kontakten med Öresund och de spektakulära solnedgångarna som medföljer avnjuts
                    som bäst på de två balkongerna som båda är frontade mot havet. Den stora balkongen är inglasad för
                    att kunna nyttja utelivet oavsett väder och förlänga utesäsongen.
                  </p>
                  <br />
                  <p>
                    <strong>PÅ HELSINGÖRSKAJEN INFRIAS</strong> den sällsynta kombinationen av storstadspuls och havets
                    ro. En mötesplats med ett stort utbud som bara växer sig allt större. Som namnet indikerar är det är
                    här man vill ses helt enkelt!
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
