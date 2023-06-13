import React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Note: 절대 경로 임포트가 어려워, GSD로 상대경로를 사용한다.
import FloatingButton from "../../syrup/components/Button/FloatingButton";

// 이 부분이 컴포넌트의 메타데이터가 됩니다.
export default {
  title: "Syrup/Button/FloatingButton", // 컴포넌트 분류명 (필수)
  component: FloatingButton, // 사용할 컴포넌트 (필수)
  tags: ["autodocs"],
} as Meta;

type Story = StoryObj<typeof FloatingButton>;

export const FloatingButtonDemo: Story = {
  render: (args) => {
    return (
      <>
        <FloatingButton {...args}>{args.children}</FloatingButton>
      </>
    );
  },

  args: {
    children: "Button",
    twoButtonChildren: "Sub Button",
  },
};
