import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  onClose: () => void;
}

const Close = ({ onClose }: Props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 fixed z-20 m-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="white"
    strokeWidth={2}
    onClick={onClose}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </motion.svg>
);

export default Close;
