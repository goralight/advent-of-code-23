import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import HeaderWithRulers from './HeaderWithRulers'

const meta = {
  title: 'HeaderWithRulers',
  component: HeaderWithRulers,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    children: 'Heading'
  },
  argTypes: {
    children: {
      control: 'text'
    }
  }
} satisfies Meta<typeof HeaderWithRulers>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <HeaderWithRulers {...args} />
    </div>
  )
}
