import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

// src?: string
// indicator?: 'online' | 'busy' | 'unknown'
// initial?: string
// isHidden?: boolean
// showFlair?: boolean

const meta = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    src: '',
    indicator: 'online',
    initial: 'J',
    isHidden: false,
    showFlair: false
  },
  argTypes: {
    src: {
      control: 'text'
    },
    indicator: {
      control: 'select',
      options: ['online', 'busy', 'unknown']
    },
    initial: {
      control: 'text'
    },
    isHidden: {
      control: 'boolean'
    },


    showFlair: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    src: '',
    indicator: 'online',
    initial: 'J',
    isHidden: false,
    showFlair: false
  }
}
