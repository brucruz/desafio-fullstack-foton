/* eslint-disable import/no-extraneous-dependencies */
import { Story, Meta } from '@storybook/react';

import { Snackbar, SnackbarProps } from './index';

export default {
  title: 'Snackbar',
  component: Snackbar,
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

const Template: Story<SnackbarProps> = args => <Snackbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  message: {
    id: 'message',
    message: 'Test message',
  },
};
