import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export interface BuildingPlanPageProps {
  shouldAnimate: boolean;
}

const data = [
  { title: 'Utgångspris', value: '10 500 000 kr' },
  { title: 'Avgift', value: '5 425 kr/mån' },
  { title: 'Antal rum', value: '3 rok' },
  { title: 'Boarea', value: '124 kvm' },
  { title: 'Våningsplan', value: '3 av 3' },
  { title: 'Hiss', value: 'Nej' },
  { title: 'Byggår', value: '1886' },
];

const BuildingPlanPage = React.forwardRef<HTMLDivElement, BuildingPlanPageProps>(({ shouldAnimate }, ref) => {
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
    <div ref={ref} className="w-full h-[120vh] relative bg-whitehue">
      <motion.div className="sticky h-screen w-full top-0 z-10">
        <AnimatePresence initial={false}>
          {shouldAnimate && (
            <motion.div
              className="w-full h-screen flex justify-center items-center flex-row"
              variants={body}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.div
                className="p-4 w-1/2 flex-grow flex justify-center items-center flex-col"
                variants={content}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h1 className="px-4 text-3xl lg:text-4xl mb-8 text-[#0B1D26]">Planlösning</h1>
                <motion.div
                  variants={content}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className=" bg-whitehue/90 w-2/3 backdrop-blur-md py-4 px-8 text-[#0B1D26] text-content text-[.8em] desktop:text-[1em]"
                >
                  <p>
                    Takvåningens öppna planlösning binder ihop sällskapsytor, matsal och kök. Bakom köket döljer sig en
                    sovavdelning med två sovrum och två badrum.
                  </p>
                </motion.div>
                <table className="bg-whitehue/90 mt-8 w-2/3 border-separate py-4 px-8 backdrop-blur-md">
                  <tbody>
                    {data.map(({ title, value }) => (
                      <tr key={`${title}-${value}`}>
                        <th className="text-left">{title}</th>
                        <td className="text-right">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>

              <div className="flex-grow w-1/2 h-screen border-rose-300 bg-planlosning bg-center bg-contain bg-no-repeat" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
});

export default BuildingPlanPage;
