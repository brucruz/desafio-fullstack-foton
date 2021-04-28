/* eslint-disable import/no-extraneous-dependencies */
import { Story, Meta } from "@storybook/react";

import { Input } from "./index";

export default {
  title: "Input",
  component: Input,
  parameters: {
    backgrounds: {
      default: "page-background",
      values: [
        { name: "page-background", value: "#FAFAFA" },
        { name: "white", value: "#fff" },
      ],
    },
  },
} as Meta;

const Template: Story = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
