import React from "react";
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
    <StyledButton onClick={handleClick}>{text}</StyledButton>
    // <button onClick={handleClick}>{text}</button>
  );
};

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: yellow;
`;

export default Button;
