import { motion, MotionValue } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FncmVuIiwiYSI6ImNsMmpiYzk1MzB3NTEzZWw1anZlNm00YzkifQ.k_ju0M0ICrY4qQNteSAn8w';

export interface MapPageProps {
  pitch: MotionValue<number>;
  zoom: MotionValue<number>;
  opacity: MotionValue<number>;
}

const MapPage = React.forwardRef<HTMLDivElement, MapPageProps>(({ pitch, zoom, opacity }, ref) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || !markerRef.current) return;
    const mapBox = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/cagren/cl2jbcran000h14p0ocxipvyz?optimize=true',
      center: [11.963116, 57.694213],
      zoom: 6,
      bearing: 12.0,
      pitch: 50,
      interactive: false,
    });

    new mapboxgl.Marker({
      element: markerRef.current,
    })
      .setLngLat([11.963116, 57.694213])
      .addTo(mapBox);

    setMap(mapBox);
  }, [mapRef, markerRef]);

  useEffect(() => {
    if (!map) return undefined;
    return pitch.onChange((v: number) => map.setPitch(v));
  }, [map, pitch]);

  useEffect(() => {
    if (!map) return undefined;
    return zoom.onChange((v: number) => map.setZoom(v));
  }, [map, zoom]);

  return (
    <div ref={ref} className="w-full h-[500vh] relative bg-whitehue">
      <motion.div className="sticky h-screen w-full top-0 z-10 flex justify-center items-center">
        <motion.div ref={mapRef} className="w-full h-full" exit="hidden" id="map" />
      </motion.div>
      <motion.div ref={markerRef} style={{ opacity }} className="relative h-[30rem] w-[30rem]">
        <div className="absolute top-0 right-0 left-0 h-1/2 flex justify-end items-center flex-col">
          <div className="p-10 bg-whitehue shadow-md rounded-md">
            <p className="text-primary text-center text-lg">
              <strong>Besvärsgatan 3</strong>
            </p>
            <p className="text-primary text-center text-lg">
              <strong>411 28, Göteborg</strong>
            </p>
          </div>
          <div className=" translate-y-[-1px] w-0 h-0 border-x-[20px] border-l-transparent border-r-transparent border-t-[20px] border-t-[#F7FCFF]" />
        </div>
      </motion.div>
    </div>
  );
});

export default MapPage;
