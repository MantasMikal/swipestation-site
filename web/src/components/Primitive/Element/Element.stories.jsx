import React from 'react'

import Element from '.'

export default {
  title: 'Core/Element',
  component: Element
}

export const Default = (args) => (
  <Element {...args} as="h1">
    Content wrapped in h1
  </Element>
)
