import React from 'react';

export interface ISoundSliderProps {
  volume: number;
  changeVolume: (value: number) => void;
}

const SoundSlider = ({ volume, changeVolume }: ISoundSliderProps) => {
  const handleOnChange = (value: number) => {
    changeVolume(value);
  };
  return (
    <input
      className="mx-1 touch-none"
      type="range"
      min="0"
      max="100"
      value={volume}
      onChange={e => handleOnChange(Number(e.target.value))}
    />
  );
};

export default SoundSlider;
