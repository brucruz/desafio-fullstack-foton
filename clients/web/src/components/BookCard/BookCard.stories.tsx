/* eslint-disable import/no-extraneous-dependencies */
import { Story, Meta } from "@storybook/react";

import { BookCard, BookCardProps } from "./index";

export default {
  title: "BookCard",
  component: BookCard,
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

const Template: Story<BookCardProps> = (args) => <BookCard {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  title: "The One Thing",
  author: "Gary Keller",
  thumbnail:
    "http://books.google.com/books/content?id=rB2ZDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
};
