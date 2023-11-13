import React from 'react'
//import { action } from '@storybook/addon-actions'
import Button from './button.js'
//👇 This default export determines where your story goes in the story list
export default {
  title: 'Widgets/Button',
  component: Button,
}

export const Buttons = {
  args: {
    //👇 The args you need here will depend on your component
    loading: false,
  },
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' },
  },
  decorators: [(Story) => <Story />],
}
