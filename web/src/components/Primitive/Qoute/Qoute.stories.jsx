import React from 'react'
import { storiesOf } from '@storybook/react'

import Qoute from '.'

const stories = storiesOf('Core/Qoute', module)

stories.add(
  'Info',
  () => (
    <Qoute citation="Firstname Lastname" quotemarks>
      This is an amazing pull quote for an article
    </Qoute>
  ),
  {
    info: {
      inline: true,
      text: `
        Semantic markup for a quotation, with optional attribution.
      `
    }
  }
)

stories.add('Default', () => (
  <Qoute>This is an amazing pull quote for an article</Qoute>
))