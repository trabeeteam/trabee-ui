import React from "react";
import styled from "styled-components";

import { typography } from "../../shared/styles";

const fontSize = {
  h1: typography.size.h1,
  h2: typography.size.h2,
  h3: typography.size.h3,
  h4: typography.size.h4,
  h5: typography.size.h5,
  h6: typography.size.h6,
  s1: typography.size.s1,
  s2: typography.size.s2,
  b0: typography.size.b0,
  b1: typography.size.b1,
  b2: typography.size.b2,
  link: typography.size.link,
};

const fontWeight = {
  h1: typography.weight.semibold,
  h2: typography.weight.semibold,
  h3: typography.weight.semibold,
  h4: typography.weight.semibold,
  h5: typography.weight.semibold,
  h6: typography.weight.semibold,
  s1: typography.weight.regular,
  s2: typography.weight.medium,
  b0: typography.weight.semibold,
  b1: typography.weight.regular,
  b2: typography.weight.regular,
  link: typography.weight.regular,
};

type VariantTypes =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "s1"
  | "s2"
  | "b0"
  | "b1"
  | "b2"
  | "link";

type ComponentTypes =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "strong"
  | "p"
  | "span"
  | "div"
  | "a";

export interface IProps {
  /** 적용 스타일 */
  variant: VariantTypes;
  /** HTML 태그 */
  component: ComponentTypes;
  /** 텍스트 */
  children: React.ReactNode;
}

/** `Typograph` 컴포넌트는 모든 텍스트 요소를 다룹니다. */
const Typograph: React.FC<IProps> = ({ variant, component, children }) => {
  return (
    <StyledTag
      as={component}
      fontSize={fontSize[variant]}
      fontWeight={fontWeight[variant]}
    >
      {children}
    </StyledTag>
  );
};

const StyledTag = styled.div<{ fontSize: number; fontWeight: string }>`
  font-size: ${(p) => p.fontSize}px;
  font-size: ${(p) => p.fontWeight};
`;

export default Typograph;
