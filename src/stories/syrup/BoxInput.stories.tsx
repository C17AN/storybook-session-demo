import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import BoxInput from "../../syrup/components/TextField/BoxInput";
// Note: 절대 경로 임포트가 어려워, GSD로 상대경로를 사용한다.

// 이 부분이 컴포넌트의 메타데이터가 됩니다.
export default {
  title: "Syrup/BoxInput", // 컴포넌트 분류명 (필수)
  component: BoxInput, // 사용할 컴포넌트 (필수)
} as Meta;

type Story = StoryObj<typeof BoxInput>;

export const TextFieldDemo: Story = {
  render: (args) => {
    return (
      <>
        <BoxInput {...args} />
      </>
    );
  },

  args: {
    placeholder: "가이드문구",
    buttonText: "모두 사용",
    onButtonClick: () => {
      alert("버튼 클릭");
    },
  },
};
