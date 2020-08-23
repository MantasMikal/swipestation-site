import React from 'react'

import { StatusContextProvider } from '../../Context/StatusContext'
import CheckControl from '.'

export default {
  title: 'Form/CheckControl',
  component: CheckControl,
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: ['success', 'error', 'warning', 'notice']
      }
    }
  }
}

export const Checkbox = (args) => (
  <CheckControl type="checkbox" value="1" name="exampleCheck" {...args}>
    Example text
  </CheckControl>
)

export const CheckboxWithContext = (args) => (
  <StatusContextProvider status="success">
    <CheckControl {...args} type="checkbox" value="1" name="exampleCheck">
      Example text
    </CheckControl>
  </StatusContextProvider>
)

export const Radio = (args) => (
  <CheckControl {...args} name="exampleCheck" value="1" type="radio">
    Example text
  </CheckControl>
)
