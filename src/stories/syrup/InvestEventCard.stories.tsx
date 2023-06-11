import React, { ComponentProps } from "react";
import { Meta } from "@storybook/react";
import InvestEventCard from "../../syrup/components/InvestEventCard";
import Chip from "../../syrup/components/Chip";

// 이 부분이 컴포넌트의 메타데이터가 됩니다.
export default {
  title: "Syrup/InvestEventCard", // 컴포넌트 분류명 (필수)
  component: InvestEventCard, // 사용할 컴포넌트 (필수)
} as Meta;

const Template = (props: ComponentProps<typeof InvestEventCard>) => (
  <InvestEventCard {...props} />
);

export const DemoInvestEventCard = Template.bind({});

InvestEventCard.props = {
  topAccesary: (
    <Chip backgroundColor="#0043C314" color="#0043C3">
      1% 재적립
    </Chip>
  ),
  icon: "https://skp-resource-center.s3.ap-northeast-2.amazonaws.com/syrup_img_90_moneyluck_level1_3.png",
  title: "안녕",
} as ComponentProps<typeof InvestEventCard>;
