import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "./reset.css";
import "./global.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone12",
    },
    // Note: 미리보기 UI의 패딩을 제거하기 위해 적용한다. (https://github.com/storybookjs/storybook/issues/12109)
    // layout: "fullscreen",
  },
};

export default preview;
