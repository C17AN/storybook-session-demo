import React from "react";
import { Meta } from "@storybook/react";
import Text from "../../syrup/components/Text";

// 이 부분이 컴포넌트의 메타데이터가 됩니다.
export default {
  title: "Syrup/Text", // 컴포넌트 분류명 (필수)
  component: Text, // 사용할 컴포넌트 (필수)
} satisfies Meta<typeof Text>;

const DemoText = () => {
  return (
    <>
      <Text typography="t300">
        SK플래닛은 데이터 기반으로 비즈니스에 새로운 가치를 창출하는 선도적인
        Data & Tech 기업입니다.
      </Text>
      <br />
      <Text typography="t500">
        SK플래닛은 데이터 기반으로 비즈니스에 새로운 가치를 창출하는 선도적인
        Data & Tech 기업입니다.
      </Text>
      <br />
      <Text typography="t700">
        SK플래닛은 데이터 기반으로 비즈니스에 새로운 가치를 창출하는 선도적인
        Data & Tech 기업입니다.
      </Text>
      <br />
      <Text typography="t900">
        SK플래닛은 데이터 기반으로 비즈니스에 새로운 가치를 창출하는 선도적인
        Data & Tech 기업입니다.
      </Text>
    </>
  );
};

export const DefaultText = {
  render: () => <DemoText />,
};
