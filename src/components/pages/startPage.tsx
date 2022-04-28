import { motion, MotionValue } from 'framer-motion';
import React from 'react';

export interface StartPageProps {
  wrapper: {
    width: MotionValue<string>;
    height: MotionValue<string>;
    top: MotionValue<string>;
    left: MotionValue<string>;
  };
  image: {
    top: MotionValue<string>;
    left: MotionValue<string>;
  };
  landingInfo: {
    opacity: MotionValue<string>;
  };
  shortDescription: {
    opacity: MotionValue<string>;
  };
  container: {
    opacity: MotionValue<string>;
  };
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

const StartPage = React.forwardRef<HTMLDivElement, StartPageProps>(
  ({ wrapper, landingInfo, shortDescription, container, image }, ref) => (
    <motion.div ref={ref} className="w-full h-[200vh] relative bg-primary">
      <motion.div style={{ ...wrapper, ...container }} className="bg-black sticky overflow-hidden shadow-lg">
        <motion.div style={{ ...image }} className="absolute w-screen h-screen bg-hero-image bg-center bg-cover" />
      </motion.div>
      <div className="w-full h-screen absolute top-0 flex items-center justify-center">
        <motion.div style={{ ...landingInfo }} className="max-w-2xl shadow-md">
          <h1 className="text-white text-center text-4xl lg:text-6xl shadowed-title">Besvärsgatan 3</h1>
          <h2 className="text-white text-center text-3xl lg:text-4xl pb-8 shadowed-title">411 28, Göteborg</h2>
          <table className="bg-whitehue/90 mt-8 rounded-md w-full border-separate py-4 px-8 backdrop-blur-md">
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
      </div>
      <div className="w-full h-screen absolute flex items-center justify-center">
        <motion.div style={{ ...shortDescription }} className="m-8 max-w-2xl">
          <p className="rounded-md p-12 bg-whitehue/90 backdrop-blur-md shadow-md">
            Runt det stilrena tegelhuset från 1880 reser sig lövskogsgrönskan. Träden klättrar uppför höjden, där
            Landalaskogen tar över med granitbranter och vild natur. Dessa lite hemliga kvarter präglas av
            höjdskillnader, trappor och gränder mellan byggnader från olika tidsperioder. Huset för tankarna till ett
            klassiskt Town House. Uppe i den smått spektakulära takvåningen är känslan av att befinna sig högt över
            staden ständigt närvarande.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
);

export default StartPage;
