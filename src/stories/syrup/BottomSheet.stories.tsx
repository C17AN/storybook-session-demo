import React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Note: 절대 경로 임포트가 어려워, GSD로 상대경로를 사용한다.
import BottomSheet from "../../syrup/components/BottomSheet";

// 이 부분이 컴포넌트의 메타데이터가 됩니다.
export default {
  title: "Syrup/BottomSheet", // 컴포넌트 분류명 (필수)
  component: BottomSheet, // 사용할 컴포넌트 (필수)
} as Meta;

type Story = StoryObj<typeof BottomSheet>;

export const DemoBottomSheet: Story = {
  render: () => {
    return (
      <>
        <BottomSheet>1% 재적립</BottomSheet>
      </>
    );
  },
};
