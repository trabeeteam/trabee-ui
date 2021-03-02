import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { dummy } from "../../shared/styles";
import Typograph, { IProps } from "./Typograph";

export default {
  title: "Design System/Typograph",
  component: Typograph,
} as Meta;

const Template: Story<IProps> = (args) => <Typograph {...args} />;

export const h1 = Template.bind({});
h1.args = {
  variant: "h1",
  component: "h1",
  children: dummy.sampleText,
};

export const h2 = Template.bind({});
h2.args = {
  variant: "h2",
  component: "h2",
  children: dummy.sampleText,
};

export const h3 = Template.bind({});
h3.args = {
  variant: "h3",
  component: "h3",
  children: dummy.sampleText,
};

export const h4 = Template.bind({});
h4.args = {
  variant: "h4",
  component: "h4",
  children: dummy.sampleText,
};

export const h5 = Template.bind({});
h5.args = {
  variant: "h5",
  component: "h5",
  children: dummy.sampleText,
};

export const h6 = Template.bind({});
h6.args = {
  variant: "h6",
  component: "h6",
  children: dummy.sampleText,
};

export const s1 = Template.bind({});
s1.args = {
  variant: "s1",
  component: "strong",
  children: dummy.sampleText,
};

export const s2 = Template.bind({});
s2.args = {
  variant: "s2",
  component: "strong",
  children: dummy.sampleText,
};

export const b0 = Template.bind({});
b0.args = {
  variant: "b0",
  component: "p",
  children: dummy.sampleText,
};
export const b1 = Template.bind({});
b1.args = {
  variant: "b1",
  component: "div",
  children: dummy.sampleText,
};
export const b2 = Template.bind({});
b2.args = {
  variant: "b2",
  component: "span",
  children: dummy.sampleText,
};
export const link = Template.bind({});
link.args = {
  variant: "link",
  component: "a",
  children: dummy.sampleText,
};
