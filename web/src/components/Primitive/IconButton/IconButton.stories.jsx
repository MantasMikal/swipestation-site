import React from 'react'
import IconButton from '.'
import { types } from 'Primitive/Icon'

export default {
  title: 'Core/IconButton',
  component: IconButton,
  args: {
    iconWidth: 32,
    iconHeight: 32,
    icon: 'burger',
    solid: true
  },
  argTypes: {
    icon: {
      control: {
        options: [...types],
        type: 'select'
      }
    }
  }
}

export const Default = (args) => <IconButton {...args} type="button" />
