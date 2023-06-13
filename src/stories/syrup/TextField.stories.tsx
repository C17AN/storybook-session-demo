import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import LineInput from "../../syrup/components/TextField/LineInput";
// Note: 절대 경로 임포트가 어려워, GSD로 상대경로를 사용한다.

// 이 부분이 컴포넌트의 메타데이터가 됩니다.
export default {
  title: "Syrup/LineInput", // 컴포넌트 분류명 (필수)
  component: LineInput, // 사용할 컴포넌트 (필수)
} as Meta;

type Story = StoryObj<typeof LineInput>;

export const LineInputDemo: Story = {
  render: (args) => {
    return (
      <>
        <LineInput {...args} />
      </>
    );
  },

  args: {
    label: "이름",
    placeholder: "홍길동",
  },
};
