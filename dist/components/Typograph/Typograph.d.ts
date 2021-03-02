import React from "react";
declare type VariantTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "s1" | "s2" | "b0" | "b1" | "b2" | "link";
declare type ComponentTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | "p" | "span" | "div" | "a";
export interface IProps {
    /** 적용 스타일 */
    variant: VariantTypes;
    /** HTML 태그 */
    component: ComponentTypes;
    /** 텍스트 */
    children: React.ReactNode;
}
/** `Typograph` 컴포넌트는 모든 텍스트 요소를 다룹니다. */
declare const Typograph: React.FC<IProps>;
export default Typograph;
