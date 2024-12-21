import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Slug from './Slug'

const meta = {
  title: 'Slug',
  component: Slug,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Slug>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <Slug {...args} />
    </div>
  )
}
