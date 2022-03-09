import React from 'react';
import ReactSlider from 'react-slider';

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
      onMouseUp={e => e.preventDefault()}
      onInput={e => handleOnChange(e)}
    />
  );
};

export default SoundSlider;
