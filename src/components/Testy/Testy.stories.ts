import type { Meta, StoryObj } from '@storybook/react'

import Testy from './Testy'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Testy',
  component: Testy,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    size: 'md',
    children: 'Testy'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sml', 'md', 'lrg']
    },
    children: {
      control: {
        type: 'text'
      }
    }
  }
} satisfies Meta<typeof Testy>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    size: 'md',
    children: 'Testy - Primary'
  }
}

export const Small: Story = {
  args: {
    size: 'sml',
    children: 'Small'
  }
}

export const Large: Story = {
  args: {
    size: 'lrg',
    children: 'Large'
  }
}
