import React from "react";
export interface IProps {
    text: string;
    onClick: () => void;
}
declare const Button: React.FC<IProps>;
export default Button;
