import React, { ComponentProps } from "react";
import { Meta } from "@storybook/react";
import LuxuryPieceItem from "../../../syrup/components/LuxuryPieceItem";

export default {
  title: "Syrup/LuxuryPieceItem",
  component: LuxuryPieceItem,
} as Meta;

const Template = (args: ComponentProps<typeof LuxuryPieceItem>) => (
  <LuxuryPieceItem {...args} />
);

export const DemoLuxuryPieceItem = Template.bind({});

DemoLuxuryPieceItem.args = {
  upperTitle: "복주머니",
  imageSrc:
    "https://skp-resource-center.s3.ap-northeast-2.amazonaws.com/pointbag_test1%201.png",
  openCountDown: 20,
  syrupOnly: true,
  openDday: "22",
  price: "20000",
  lowerTitle: "멋진 복주머니",
  targetPieceCount: 20000,
  currentPieceCount: 13333,
  expectedReturnRate: "22",
} as ComponentProps<typeof LuxuryPieceItem>;
