import type { Meta, StoryObj } from '@storybook/react'

import PasswordToggle from './PasswordToggle'

const meta = {
  title: 'PasswordToggle',
  component: PasswordToggle,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof PasswordToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
