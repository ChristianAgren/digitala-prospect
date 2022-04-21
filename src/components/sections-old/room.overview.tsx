// import { Carousel } from 'framer-motion';
import React from 'react';
import ImageGallery from '../imageGallery-old/image.gallery';
import images from '../imageGallery-old/images';

const RoomOverviewSection = () => (
  <div className=" bg-slate-100 relative flex flex-col justify-between my-2 px-3 pb-3">
    <div className="p-4">
      <p className="font-body text-xs font-medium text-secondary uppercase leading-1 tracking-wide">Rumsbeskrivning</p>
      <h1 className="font-body font-bold text-xl leading-10 text-primary">Sovrum 1</h1>
      <p className="font-body text-xs text-primary">
        Himmeln badar i ett skimmer av rosa och orange över Öresunds spegelblanka hav. Framför Dunckers vita skepnad
        florerar siluetter förbi, för en promenad eller middag ute. Så är livet på kajen.
      </p>
    </div>
    <ImageGallery>
      {({ index }) => {
        const modulo = index % images.length;
        const imageIndex = modulo < 0 ? images.length + modulo : modulo;
        return <img draggable={false} alt="Mountain" className="w-full px-1" src={images[imageIndex]} />;
      }}
    </ImageGallery>
  </div>
);

export default RoomOverviewSection;
