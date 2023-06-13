import React, { ComponentProps } from "react";
import { Meta } from "@storybook/react";
import ChangeRate from "../../syrup/components/ChangeRate";

// 이 부분이 컴포넌트의 메타데이터가 됩니다.
export default {
  title: "Syrup/ChangeRate", // 컴포넌트 분류명 (필수)
  component: ChangeRate, // 사용할 컴포넌트 (필수)
  tags: ["autodocs"],
} as Meta;

const Template = (args: ComponentProps<typeof ChangeRate>) => (
  <ChangeRate {...args} />
);

export const DemoChangeRate1 = Template.bind({});

DemoChangeRate1.args = {
  percentageValue: 22,
  showPercentageOnly: true,
  value: 78202,
} as ComponentProps<typeof ChangeRate>;

export const DemoChangeRate2 = Template.bind({});

DemoChangeRate2.args = {
  percentageValue: -22,
  value: 13353,
} as ComponentProps<typeof ChangeRate>;
