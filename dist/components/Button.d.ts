import React from "react";
export interface IProps {
    children: React.ReactNode;
    onClick: () => void;
}
declare const Button: React.FC<IProps>;
export default Button;
