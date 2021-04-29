/* eslint-disable import/no-extraneous-dependencies */
import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from './index';

import SearchIcon from '../../assets/icons/search.svg';

export default {
  title: 'Input',
  component: Input,
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

const Template: Story<InputProps> = args => <Input {...args} />;

export const SearchEmpty = Template.bind({});
SearchEmpty.parameters = {
  fileName: 'Search - Empty',
};
SearchEmpty.args = {
  id: 'Search - Empty',
  placeholder: 'Search book',
  icon: <SearchIcon />,
};

export const SearchTyped = Template.bind({});
SearchTyped.parameters = {
  fileName: 'Search - Typed',
};
SearchTyped.args = {
  id: 'Search - Typed',
  placeholder: 'Search book',
  value: 'Harry Pott',
  icon: <SearchIcon />,
};

export const FormInput = Template.bind({});
FormInput.parameters = {
  fileName: 'Form Input - Empty',
};
FormInput.args = {
  id: 'Form Input - Empty',
  label: 'Name',
};

export const FormTextArea = Template.bind({});
FormTextArea.parameters = {
  fileName: 'Form Text Area - Empty',
};
FormTextArea.args = {
  id: 'Form Text Area - Empty',
  label: 'Description',
  format: 'textArea',
};

export const FormInputError = Template.bind({});
FormInputError.parameters = {
  fileName: 'Form Input - Error',
};
FormInputError.args = {
  id: 'Form Input - Error',
  label: 'Name',
  error: {
    message: 'Incorrect value',
  },
};

export const FormTextAreaError = Template.bind({});
FormTextAreaError.parameters = {
  fileName: 'Form Text Area - Error',
};
FormTextAreaError.args = {
  id: 'Form Text Area - Error',
  label: 'Description',
  format: 'textArea',
  error: {
    message: 'Incorrect value',
  },
};
