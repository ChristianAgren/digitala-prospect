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
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const content = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <div ref={ref} className="w-full h-[150vh] relative bg-white">
      <motion.div className="sticky h-screen flex justify-center items-center top-0">
        <AnimatePresence initial={false}>
          {shouldAnimate && (
            <motion.div className="max-w-6xl" variants={body} initial="hidden" animate="visible" exit="hidden">
              <motion.div variants={content} initial="hidden" animate="visible" exit="hidden">
                <h1 className="text-3xl lg:text-4xl my-8 text-[#0B1D26]">Lång beskrivning</h1>
                <motion.div variants={content} initial="hidden" animate="visible" exit="hidden">
                  <p>
                    MÖTET MELLAN NORRA hamnen och stadskärnan är dynamisk på många sätt. Från anrika hus, torg och
                    gränder öppnar sig Öresunds mäktiga hav med kajen och hamningången som sina följeslagare. En plats
                    fyllt av liv och rörelse där badplatser och restauranger avlöser varandra på löpande band. Här, i
                    direkt anslutning till kajkanten och havet erbjuds nu ett boende om 115 smakfulla kvadratmeter.
                    VÅNINGEN MED FEM rum och två balkonger är en del av projektet SeaU som har formgetts av Gert
                    Wingårdh med arkitekter och uppfördes 2018. Föga förvånande, med detta team i åtanke, erbjuds ett
                    boende med snillrika finesser, stilsäkerhet och genomtänkta detaljer rakt igenom. Ett hem där
                    ingenting har lämnats åt slumpen. Glaspartierna har placerats minutiöst för att maximera såväl
                    ljusflöde som utsikt. Balkongerna nås från tre rum. Havsutsikten möter redan i entrén. Material och
                    färgval utstrålar enhetlighet och harmoni. Samtliga golvytor pryds av en vitpigmenterad
                    enstavsparkett medan väggarnas kulörer skiftar i vitt och mustigt midnattsblått som
                  </p>
                  <p>
                    matchar miljön. Planlösningen är oklanderlig, med de privata och funktionella rummen i en del och de
                    sociala i den andra. Kontakten med Öresund och de spektakulära solnedgångarna som medföljer avnjuts
                    som bäst på de två balkongerna som båda är frontade mot havet. Den stora balkongen är inglasad för
                    att kunna nyttja utelivet oavsett väder och förlänga utesäsongen. PÅ HELSINGÖRSKAJEN INFRIAS den
                    sällsynta kombinationen av storstadspuls och havets ro. En mötesplats med ett stort utbud som bara
                    växer sig allt större. Som namnet indikerar är det är här man vill ses helt enkelt!
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
});

export default EntrancePage;
