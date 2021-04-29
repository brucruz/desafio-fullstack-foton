/* eslint-disable import/no-extraneous-dependencies */
import { Story, Meta } from '@storybook/react';

import { SnackbarContainer, SnackbarContainerProps } from './index';

export default {
  title: 'SnackbarContainer',
  component: SnackbarContainer,
  parameters: {
    backgrounds: {
      default: 'page-background',
      values: [
        { name: 'page-background', value: '#F2F2F2' },
        { name: 'white', value: '#fff' },
      ],
    },
  },
} as Meta;

const Template: Story<SnackbarContainerProps> = args => (
  <SnackbarContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  messages: [
    {
      id: 'message',
      message: 'Test message',
    },
  ],
};
