import React from "react";
import { motion } from "framer-motion";

export interface IProps {
  text: string;
  onClick: () => void;
}
const MotionButton: React.FC<IProps> = ({ text, onClick }) => {
  function handleClick() {
    onClick();
  }

  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onClick={handleClick}
    >
      {text}
    </motion.button>
  );
};

export default MotionButton;
