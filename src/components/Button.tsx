import React from "react";
// import { motion } from "framer-motion";
import styled from "styled-components";

export interface IProps {
  text: string;
  onClick: () => void;
}
const Button: React.FC<IProps> = ({ text, onClick }) => {
  function handleClick() {
    onClick();
  }

  return (
    // <motion.button
    //   whileHover={{ scale: 1.2 }}
    //   whileTap={{ scale: 0.8 }}
    //   onClick={handleClick}
    // >
    //   {text}
    // </motion.button>
    <StyledButton onClick={handleClick}>{text}</StyledButton>
    // <button onClick={handleClick}>{text}</button>
  );
};

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: yellow;
`;

export default Button;
