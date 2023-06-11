import React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Note: 절대 경로 임포트가 어려워, GSD로 상대경로를 사용한다.
import Chip from "../../syrup/components/Chip";
import InvestEventCard from "../../syrup/components/InvestEventCard";

// 이 부분이 컴포넌트의 메타데이터가 됩니다.
export default {
  title: "Syrup/Chip", // 컴포넌트 분류명 (필수)
  component: Chip, // 사용할 컴포넌트 (필수)
} as Meta;

type Story = StoryObj<typeof Chip>;

export const DemoChip: Story = {
  render: () => {
    return (
      <>
        <Chip backgroundColor="#ededed" color="#555555">
          1% 재적립
        </Chip>
        <Chip backgroundColor="#0043C3" color="#fff">
          2% 재적립
        </Chip>
        <Chip backgroundColor="#f2a6a6" color="#fff">
          3% 재적립
        </Chip>
      </>
    );
  },
};

export const ChipUsage = {
  render: () => {
    return (
      <InvestEventCard
        icon="https://skp-resource-center.s3.ap-northeast-2.amazonaws.com/img_68_invest_samsung_logo.png"
        topAccesary={
          <Chip backgroundColor="#fff" color="#555555">
            1% 재적립
          </Chip>
        }
        backgroundColor="#F1F6FF"
        title="삼성증권 예수금 채우기"
        titleColor="#0043C3"
        content="삼성증권 주식 및 펀드 투자"
      />
    );
  },
};
