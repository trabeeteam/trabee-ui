import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import MotionButton, { IProps as MotionButtonProps } from "./MotionButton";

export default {
  title: "Components/MotionButton",
  component: MotionButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<MotionButtonProps> = (args) => <MotionButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "hello world",
  onClick: action("onClick"),
};
