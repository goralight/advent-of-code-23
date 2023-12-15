import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from './Checkbox'

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    defaultChecked: false,
    disabled: false
  },
  argTypes: {
    defaultChecked: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    onChange: {
      action: 'onChange'
    }
  }
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    defaultChecked: true,
    disabled: false
  }
}
