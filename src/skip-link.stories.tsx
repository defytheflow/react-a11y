import React from "react";
import { SkipLink } from "./skip-link";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "SkipLink",
  component: SkipLink,
} as ComponentMeta<typeof SkipLink>;

const Template: ComponentStory<typeof SkipLink> = args => <SkipLink {...args} />;

export const Basic = Template.bind({});
