import React from 'react'

import { StatusContextProvider } from '../../Context/StatusContext'
import SelectControl from '.'

const options = [
  <option value="one" key="1">
    Example One
  </option>,
  <option value="two" key="2">
    Example Two
  </option>,
  <option value="three" key="3">
    Example Three
  </option>,
  <option value="four" key="4">
    Example Four
  </option>
]

export default {
  title: 'Form/SelectControl',
  component: SelectControl,
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: ['success', 'error', 'warning', 'notice']
      }
    },
    size: {
      control: {
        type: 'number'
      }
    },
    multiple: {
      control: {
        type: 'boolean'
      }
    }
  }
}

export const Default = (args) => (
  <SelectControl {...args} name="exampleSelect" onChange={() => {}}>
    {options}
  </SelectControl>
)

export const WithContext = (args) => (
  <StatusContextProvider status="success">
    <SelectControl {...args} name="exampleSelect" type="text">
      {options}
    </SelectControl>
  </StatusContextProvider>
)

export const MultiSelect = (args) => (
  <SelectControl {...args} name="exampleSelect" multiple>
    {options}
  </SelectControl>
)
