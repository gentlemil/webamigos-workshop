import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'UI/Molecules/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Name',
  },
};

export const WithEmailType: Story = {
  args: {
    label: 'E-mail',
    type: 'email',
  },
};

export const WithPasswordType: Story = {
  args: {
    label: 'Password',
    type: 'password',
  },
};
