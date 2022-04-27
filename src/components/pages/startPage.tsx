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
  { title: 'Utgångspris', value: '10 950 000kr' },
  { title: 'Avgift', value: '5 836 kr/mån' },
  { title: 'Antal rum', value: '5 varav 3 sovrum' },
  { title: 'Boarea', value: '115 kvm' },
  { title: 'Våningsplan', value: '2 av 8' },
  { title: 'Balkong', value: 'Ja' },
  { title: 'Hiss', value: 'Ja' },
  { title: 'Byggår', value: '2018' },
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
          <table className="bg-white/70 mt-8 rounded-md w-full border-separate py-4 px-8 backdrop-blur-md">
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
          <h1 className="text-white text-center text-3xl lg:text-4xl m-8 shadowed-title">Kort beskrivning</h1>
          <p className="rounded-md p-8 bg-white/70 backdrop-blur-md shadow-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, nunc, viverra est quis massa mattis
            vestibulum, vitae. Orci varius nunc elit dictumst id convallis elementum. Vel amet, amet, tristique rutrum
            velit ultricies ut. Tellus neque, magna non aliquet diam pharetra sed ac. Sed varius eu, dictum nec posuere
            elementum. Nulla nisi, ac laoreet turpis fringilla purus aliquet. Posuere ut cras lectus integer mauris
            maecenas. Ornare vitae pellentesque ut fringilla non, eu. Mi nulla aenean ornare bibendum faucibus cursus
            quam.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
);

export default StartPage;
