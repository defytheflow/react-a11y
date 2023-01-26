import React from "react";
import { Button } from "./button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "Click me",
};
