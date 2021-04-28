/* eslint-disable import/no-extraneous-dependencies */
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./index";

export default {
  title: "Button",
  component: Button,
  parameters: {
    backgrounds: {
      default: "page-background",
      values: [
        { name: "page-background", value: "#F2F2F2" },
        { name: "white", value: "#fff" },
      ],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "primary",
  text: "Add new book",
};
