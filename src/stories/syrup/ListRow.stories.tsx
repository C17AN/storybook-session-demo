import React, { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ListRow from "../../syrup/components/ListRow";
import ChangeRate from "../../syrup/components/ChangeRate";

// 이 부분이 컴포넌트의 메타데이터가 됩니다.
export default {
  title: "Syrup/ListRow", // 컴포넌트 분류명 (필수)
  component: ListRow, // 사용할 컴포넌트 (필수)
} as Meta;

// 컴포넌트의 타입을 정의합니다.
type Story = StoryObj<typeof ListRow>;

export const DemoListRow: Story = {
  render: () => {
    return (
      <ListRow
        name="에코프로"
        icon="https://skp-resource-center.s3.ap-northeast-2.amazonaws.com/ecopro.png"
        content="523,000원"
        leftBottomAccessary="10주"
        rightBottomAccessary={
          <ChangeRate value={"24,132"} percentageValue={"-4.23"} />
        }
      />
    );
  },
};

export const WithoutBottomBorderListRow: Story = {
  render: () => {
    return (
      <>
        <ListRow
          name="에코프로"
          icon="https://skp-resource-center.s3.ap-northeast-2.amazonaws.com/ecopro.png"
          content="523,000원"
          leftBottomAccessary="10주"
          rightBottomAccessary={
            <ChangeRate value={"24,132"} percentageValue={"-4.23"} />
          }
        />
        <ListRow
          name="에코프로"
          icon="https://skp-resource-center.s3.ap-northeast-2.amazonaws.com/ecopro.png"
          content="523,000원"
          leftBottomAccessary="10주"
          rightBottomAccessary={
            <ChangeRate value={"24,132"} percentageValue={"+4.23"} />
          }
        />{" "}
        <ListRow
          name="에코프로"
          icon="https://skp-resource-center.s3.ap-northeast-2.amazonaws.com/ecopro.png"
          content="523,000원"
          leftBottomAccessary="10주"
          rightBottomAccessary={
            <ChangeRate value={"0"} percentageValue={"0"} />
          }
        />{" "}
        <ListRow
          name="에코프로"
          icon="https://skp-resource-center.s3.ap-northeast-2.amazonaws.com/ecopro.png"
          content="523,000원"
          leftBottomAccessary="10주"
          rightBottomAccessary={
            <ChangeRate value={"24,132"} percentageValue={"-4.23"} />
          }
          hideBorderBottom
        />
      </>
    );
  },
};
