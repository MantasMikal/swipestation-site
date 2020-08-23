import React from 'react'

import Icon, { types } from '.'

export default {
  title: 'Core/Icon',
  component: Icon,
  args: {
    width: 32,
    height: 32,
    type: 'burger'
  },
  argTypes: {
    type: {
      control: {
        options: [...types],
        type: 'select'
      }
    }
  }
}

export const Default = (args) => <Icon {...args} />

export const AllAvailableTypes = (args) => (
  <div>
    {types.map((type, i) => (
      <div style={{ margin: '5px 0' }} key={`icon-${i}`}>
        <Icon {...args} type={type} a11yText={`${type} icon`} />{' '}
        <code>{type}</code>
      </div>
    ))}
  </div>
)
