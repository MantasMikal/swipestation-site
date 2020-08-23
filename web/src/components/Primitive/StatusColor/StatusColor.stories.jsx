import React from 'react'

import { StatusContextProvider } from '../../Context/StatusContext'

import StatusColor from '.'

export default {
  title: 'Utility/StatusColor',
  component: StatusColor,
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: ['success', 'error', 'warning', 'notice']
      }
    }
  }
}

export const Default = (args) => <StatusColor {...args}>Content</StatusColor>

export const WithContext = () => (
  <StatusContextProvider status="error">
    <StatusColor>Content</StatusColor>
  </StatusContextProvider>
)
