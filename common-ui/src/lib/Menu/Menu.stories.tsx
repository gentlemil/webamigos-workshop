import type { Meta } from '@storybook/react';

import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

const meta = {
  title: 'UI/Molecules/Menu',
  component: Menu,
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;

export const Default = () => (
  <Menu>
    <MenuItem>
      <a href="#">Home</a>
    </MenuItem>
    <MenuItem>
      <a href="#">About</a>
    </MenuItem>
    <MenuItem>
      <a href="#">Contact</a>
    </MenuItem>
  </Menu>
);
