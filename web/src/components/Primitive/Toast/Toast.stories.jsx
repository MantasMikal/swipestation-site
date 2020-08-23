import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Toast from '.'

const stories = storiesOf('Core/Toast', module)

stories.add('Info', () => <Toast status="notice">Content</Toast>, {
  info: {
    inline: true,
    text: `
      A fixed-position notification-style component with optional onDismiss prop
      to manually handle visibility.

      _Note: This component doesn’t include the state-based functionality
        required to dismiss: see \`<Toaster />\`_.

      TODO: future functionality may include:
      - stacking multiple Toasts
    `
  }
})

stories.add('Default state', () => <Toast>Content</Toast>)

stories.add('Notification-specific props', () => (
  <Toast icon="_placeholder" onDismiss={action('Dismiss')} status="error">
    Something happened that you need to know about
  </Toast>
))

const positions = [
  ['left', 'top'],
  ['center', 'top'],
  ['right', 'top'],
  ['left', 'bottom'],
  ['center', 'bottom'],
  ['right', 'bottom']
]

positions.map((position) => {
  const [x, y] = position
  stories.add(`Position: ${x}, ${y}`, () => (
    <Toast x={x} y={y}>
      Content
    </Toast>
  ))
})
