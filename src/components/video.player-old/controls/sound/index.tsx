import React from 'react';
import SoundButton, { ISoundButtonProps } from './button.sound';
import SoundSlider, { ISoundSliderProps } from './slider.sound';

export interface ISoundControlProps extends ISoundButtonProps, ISoundSliderProps {}

const SoundControls = ({ toggleMute, changeVolume, isMuted, volume }: ISoundControlProps) => (
  <div className="flex items-center mx-2">
    <SoundButton isMuted={isMuted} toggleMute={toggleMute} />
    <SoundSlider volume={volume} changeVolume={changeVolume} />
  </div>
);

export default SoundControls;
