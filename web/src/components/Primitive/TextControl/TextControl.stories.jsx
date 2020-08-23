import React from 'react'

import { StatusContextProvider } from '../../Context/StatusContext'
import TextControl from '.'

export default {
  title: 'Form/TextControl',
  component: TextControl,
  args: {
    placeholder: 'Example placeholder',
    value: 'Placeholder text'
  },
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: ['success', 'error', 'warning', 'notice']
      }
    }
  }
}

export const Default = (args) => (
  <TextControl name="exampleText" type="text" {...args} />
)

export const WithContext = () => (
  <StatusContextProvider status="success">
    <TextControl name="exampleText" type="text" />
  </StatusContextProvider>
)

export const TextArea = (args) => (
  <TextControl
    {...args}
    name="exampleTextarea"
    placeholder="Example placeholder"
    multiLine
  />
)
