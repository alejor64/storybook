import { Meta, StoryObj } from "@storybook/react";
import { LabelTest } from "../components/LabelTest";

const meta = {
  title: 'UI/LabelTest',
  component: LabelTest,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: { control: 'inline-radio' },
    fontColor: { control: 'color' },
  }
} satisfies Meta<typeof LabelTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic label',
    size: 'normal',
  }
};

export const AllCaps: Story = {
  args: {
    label: 'All caps label',
    size: 'normal',
    allCaps: true,
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secondary label',
    size: 'normal',
    color: 'text-secondary'
  }
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Color label',
    size: 'normal',
    fontColor: '#ee6c4d',
  }
};