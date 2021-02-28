import React from "react";
import styled from "styled-components";

export interface IProps {
  children: React.ReactNode;
  onClick: () => void;
}
const Button: React.FC<IProps> = ({ children, onClick }) => {
  function handleClick() {
    onClick();
  }

  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: yellow;
`;

export default Button;
