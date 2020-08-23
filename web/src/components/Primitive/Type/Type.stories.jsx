import React from 'react'

import Type, { sizes } from '.'

export default {
  title: 'Core/Type',
  component: Type
}

export const Default = (args) => <Type {...args}>Example Type</Type>

export const AllSizes = () => (
  <div>
    {sizes.map((size) => (
      <div style={{ margin: '5px 0 20px' }} key={`Type${size}`}>
        <code style={{ display: 'block' }}>{size}</code>
        <Type size={size}>Example content</Type>
      </div>
    ))}
  </div>
)
