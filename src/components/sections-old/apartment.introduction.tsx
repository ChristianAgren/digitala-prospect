import React from 'react';

interface Props {
  onPlay: () => void;
}

const ApartmentIntroduction = ({ onPlay }: Props) => (
  <div className="h-[80vh] max-w-2xl flex items-end relative">
    <div className=" text-white flex justify-center items-center">
      <svg
        onClick={onPlay}
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 m-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h1 className="font-body text-lg">Se videon</h1>
    </div>
  </div>
);

export default ApartmentIntroduction;
