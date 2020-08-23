import React from 'react'

import ButtonStandard from '.'

export default {
  title: 'Core/ButtonStandard',
  component: ButtonStandard,
  argTypes: {
    block: {
      type: { name: 'boolean', required: false }
    }
  }
}

export const Default = (args) => (
  <ButtonStandard {...args}>Standard Button</ButtonStandard>
)

export const AsAnchor = (args) => (
  <ButtonStandard {...args} href="#">
    Anchor
  </ButtonStandard>
)
