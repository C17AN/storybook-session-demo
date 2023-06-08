import React, { ComponentProps } from "react";
import { Meta } from "@storybook/react";
import Chip from "../../../syrup/components/Chip";

// 이 부분이 컴포넌트의 메타데이터가 됩니다.
export default {
  title: "Syrup/Chip", // 컴포넌트 분류명 (필수)
  component: Chip, // 사용할 컴포넌트 (필수)
} as Meta;

const Template = (args: ComponentProps<typeof Chip>) => <Chip {...args} />;

export const DemoChip = Template.bind({});

DemoChip.args = {
  children: "1% 재적립",
  backgroundColor: "#0043C314",
  color: "#0043C3",
} as ComponentProps<typeof Chip>;
