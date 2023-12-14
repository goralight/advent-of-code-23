import type { Meta, StoryObj } from '@storybook/react'

import BurgerMenu from './BurgerMenu'

const meta = {
  title: 'BurgerMenu',
  component: BurgerMenu,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BurgerMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
