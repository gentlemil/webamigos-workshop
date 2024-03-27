import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "UI/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Click me",
  },
};

export const _Red: Story = {
  args: {
    label: "Click me",
    className: "bg-wa-red",
  },
};

export const _Yellow: Story = {
  args: {
    label: "Click me",
    className: "bg-wa-yellow",
  },
};
