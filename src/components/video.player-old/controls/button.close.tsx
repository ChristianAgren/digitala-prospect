import React from 'react';

export interface ICloseButtonProps {
  onClose: () => void;
}

const Close = ({ onClose }: ICloseButtonProps) => {
  const handleClose = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    onClose();
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 m-4 fixed top-1 left-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth={2}
      onClick={handleClose}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
};

export default Close;
