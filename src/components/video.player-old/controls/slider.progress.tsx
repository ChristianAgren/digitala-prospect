import React from 'react';

export interface IProgressSliderProps {
  progress: number;
  updateProgress: (value: number) => void;
}

const ProgressSlider = ({ progress, updateProgress }: IProgressSliderProps) => {
  const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.stopPropagation();
    updateProgress(Number(ev.target.value));
  };
  return (
    <input
      className=" w-full cursor-pointer border-0 rounded-none h-1 relative -top-2 progress-slider"
      type="range"
      min="0"
      max="100"
      value={progress}
      onChange={handleOnChange}
    />
  );
};

export default ProgressSlider;
