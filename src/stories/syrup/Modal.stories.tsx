import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
// Note: 절대 경로 임포트가 어려워, GSD로 상대경로를 사용한다.
import Modal from "../../syrup/components/Modal";
import CTAButton from "../../syrup/components/Button/CTAButton";
import Text from "../../syrup/components/Text";
import Spacing from "../../syrup/components/Spacing";
import RoundedButton from "../../syrup/components/Button/RoundedButton";

// 이 부분이 컴포넌트의 메타데이터가 됩니다.
export default {
  title: "Syrup/Modal", // 컴포넌트 분류명 (필수)
  component: Modal, // 사용할 컴포넌트 (필수)
} as Meta;

type Story = StoryObj<typeof Modal>;

export const DemoModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Text typography="t700" as="h3" color="#222222" textAlign="center">
            삼성증권 X 시럽 투자캐시백
            <br />
            통장을 보유하고 있어요
          </Text>
          <Spacing size={10} />
          <Text typography="b300" as="h3" color="#464646" textAlign="center">
            불리기 탭에서 삼성증권 계좌를
            <br />
            확인해 주세요.
          </Text>
          <Spacing size={28} />
          <RoundedButton onClick={() => {}} block>
            <Text typography="t1300" as="span" color="#fff">
              확인
            </Text>
          </RoundedButton>
        </Modal>
        <CTAButton onClick={() => setOpen(true)}>열기</CTAButton>
      </>
    );
  },
};
