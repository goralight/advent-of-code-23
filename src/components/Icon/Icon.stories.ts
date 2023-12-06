import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'
import { iconNames, iconSizes, iconColors } from './Icon.types'

const meta = {
  title: 'Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    icon: 'thumbsUp',
    size: 'md',
    color: 'red'
  },
  argTypes: {
    icon: {
      control: 'select',
      options: iconNames
    },
    size: {
      control: 'select',
      options: iconSizes
    },
    color: {
      control: 'select',
      options: iconColors
    }
  }
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    icon: 'thumbsUp',
    size: 'md',
    color: 'red'
  }
}
