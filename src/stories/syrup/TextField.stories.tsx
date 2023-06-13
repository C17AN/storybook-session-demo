import React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Note: 절대 경로 임포트가 어려워, GSD로 상대경로를 사용한다.
import TextField from "../../syrup/components/TextField";

// 이 부분이 컴포넌트의 메타데이터가 됩니다.
export default {
  title: "Syrup/TextField", // 컴포넌트 분류명 (필수)
  component: TextField, // 사용할 컴포넌트 (필수)
} as Meta;

type Story = StoryObj<typeof TextField>;

export const TextFieldDemo: Story = {
  render: (args) => {
    return (
      <>
        <TextField {...args} />
      </>
    );
  },

  args: {
    label: "이름",
    placeholder: "홍길동",
  },
};
