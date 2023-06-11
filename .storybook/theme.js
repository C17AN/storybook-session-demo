import { create } from "@storybook/theming/create";
import image from "../public/logo.png";

export default create({
  base: "light",
  brandTitle: "SKP UX Group",
  brandUrl: "https://example.com",
  brandImage: image,
  brandTarget: "_self",
});
