import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

export const Primary = () => <Button onClick={action("onClick")}>Hi</Button>;
