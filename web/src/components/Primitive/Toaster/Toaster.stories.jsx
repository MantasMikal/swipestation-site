import React from 'react'
import { storiesOf } from '@storybook/react'

import Toaster from '.'

const stories = storiesOf('Core/Toaster', module)

stories.add('Info', () => <Toaster>Content</Toaster>, {
  info: {
    inline: true,
    text: `
      Simple state management for the \`<Toast />\` component, handling dismiss
      functionality.

      TODO: future functionality may include:
      - auto-dismiss functionality
      - auto-dismiss progress bar
      - pause/cancel auto-timeout on focus/hover
      - reveal delay
      - Multiple notifications stacked
    `
  }
})

stories.add('Default state', () => <Toaster>Content</Toaster>)
