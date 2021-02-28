import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import Button, { IProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<IProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "hello world",
  onClick: action("onClick"),
};
