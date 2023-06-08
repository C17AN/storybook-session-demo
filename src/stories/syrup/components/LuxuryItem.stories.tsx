import React, { ComponentProps } from "react";
import { Meta } from "@storybook/react";
import AppBar from "../../../syrup/components/AppBar";

export default {
  title: "Syrup/LuxuryItem",
  component: AppBar,
} as Meta;

const Template = (args: ComponentProps<typeof AppBar>) => <AppBar {...args} />;

export const WithoutBackButton = Template.bind({});

WithoutBackButton.args = {};

export const WithBackButton = Template.bind({});
WithBackButton.args = {
  hasBackButton: true,
  pageName: "NFT 멤버십",
};
