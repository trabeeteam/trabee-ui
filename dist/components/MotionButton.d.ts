import React from "react";
export interface IProps {
    text: string;
    onClick: () => void;
}
declare const MotionButton: React.FC<IProps>;
export default MotionButton;
