/* eslint-disable import/no-extraneous-dependencies */
import { Story, Meta } from "@storybook/react";

import { NavBar, NavBarProps } from "./index";
import Home from "../../assets/icons/home.svg";
import Plus from "../../assets/icons/plus.svg";
import User from "../../assets/icons/user.svg";

export default {
  title: "NavBar",
  component: NavBar,
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

const Template: Story<NavBarProps> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  links: [
    {
      text: "Home",
      icon: Home,
      selected: true,
    },
    {
      text: "Add Book",
      icon: Plus,
      selected: false,
    },
    {
      text: "Profile",
      icon: User,
      selected: false,
    },
  ],
};
