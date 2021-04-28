/* eslint-disable import/no-extraneous-dependencies */
import { Story, Meta } from "@storybook/react";

import { ActionBar, ActionBarProps } from "./index";
import Book from "../../assets/icons/book-open.svg";
import Headphone from "../../assets/icons/headphones.svg";
import Share from "../../assets/icons/share.svg";

export default {
  title: "ActionBar",
  component: ActionBar,
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

const Template: Story<ActionBarProps> = (args) => <ActionBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttons: [
    {
      text: "Read",
      icon: Book,
      selected: true,
    },
    {
      text: "Listen",
      icon: Headphone,
      selected: false,
    },
    {
      text: "Share",
      icon: Share,
      selected: false,
    },
  ],
};
