import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // Note: 스토리북은 sass-loader, css-loader, style-loader 없이 추가 로더만 정의해주면 된다.
    config.module.rules.push({
      test: /\.(s[ac]ss)$/i,
      use: ["json-dsl-parser"],
      exclude: /node_modules/,
    });

    config.resolveLoader.alias["json-dsl-parser"] = path.resolve(
      __dirname,
      "json-dsl-parser.js"
    );

    return config;
  },
};

export default config;
