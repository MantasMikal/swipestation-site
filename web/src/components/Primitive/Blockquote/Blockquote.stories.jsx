import React from 'react'

import Blockquote from '.'

export default {
  title: 'Core/Blockqoute',
  component: Blockquote,
  args: {
    citation: 'Firstname Lastname',
    quoteMarks: true
  }
}

export const Default = (args) => (
  <Blockquote {...args}>
    This is an amazing pull quote for an article
  </Blockquote>
)
