/* eslint-disable import/no-extraneous-dependencies */
import { Story, Meta } from "@storybook/react";

import { ActionButton, ActionButtonProps } from "./index";
import Book from "../../assets/icons/book-open.svg";

export default {
  title: "ActionButton",
  component: ActionButton,
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

const Template: Story<ActionButtonProps> = (args) => <ActionButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Read",
  icon: Book,
};
