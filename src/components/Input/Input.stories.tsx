import type { Meta, StoryObj } from '@storybook/react'

import Input from './Input'

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    type: 'text',
    label: 'Name'
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'telephone']
    },
    label: {
      control: 'text'
    }
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'email',
    label: 'Email'
  }
}
