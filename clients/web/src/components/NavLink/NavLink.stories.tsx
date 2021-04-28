/* eslint-disable import/no-extraneous-dependencies */
import { Story, Meta } from "@storybook/react";

import { NavLink, NavLinkProps } from "./index";
import Home from "../../assets/icons/home.svg";
import Plus from "../../assets/icons/plus.svg";

export default {
  title: "NavLink",
  component: NavLink,
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

const Template: Story<NavLinkProps> = (args) => <NavLink {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  text: "Home",
  selected: true,
  icon: Home,
};

export const NotSelected = Template.bind({});
NotSelected.args = {
  text: "Add Book",
  selected: false,
  icon: Plus,
};
