// import { Carousel } from 'framer-motion';
import React from 'react';

const RoomOverviewSection = () => (
  <div className=" bg-slate-100 relative flex justify-between my-2 px-3 min-h-fit">
    <div className="p-4 flex-grow min-w-[60vw]">
      <p className="font-body text-xs font-medium text-secondary uppercase leading-1 tracking-wide">Rumsbeskrivning</p>
      <h1 className="font-body font-bold text-xl leading-10 text-primary">Sovrum 1</h1>
      <p className="font-body text-xs pb-3 text-primary">
        Himmeln badar i ett skimmer av rosa och orange över Öresunds spegelblanka hav. Framför Dunckers vita skepnad
        florerar siluetter förbi, för en promenad eller middag ute. Så är livet på kajen.
      </p>
    </div>
    <div className="bg-bedroom w-full h-96 bg-cover" />
    <div className="bg-bedroom w-full h-96 bg-cover" />
    <div className="bg-bedroom w-full h-96 bg-cover" />
  </div>
);

export default RoomOverviewSection;
