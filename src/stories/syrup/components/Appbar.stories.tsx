import React, { ComponentProps } from "react";
import { Meta } from "@storybook/react";
import AppBar from "../../../syrup/components/AppBar";

// 이 부분이 컴포넌트의 메타데이터가 됩니다.
export default {
  title: "Syrup/AppBar", // 컴포넌트 분류명 (필수)
  component: AppBar, // 사용할 컴포넌트 (필수)
} as Meta;

const Template = (args: ComponentProps<typeof AppBar>) => <AppBar {...args} />;

export const WithoutBackButton = Template.bind({});

WithoutBackButton.args = {};

export const WithBackButton = Template.bind({});
WithBackButton.args = {
  hasBackButton: true,
  pageName: "NFT 멤버십",
} as ComponentProps<typeof AppBar>;
