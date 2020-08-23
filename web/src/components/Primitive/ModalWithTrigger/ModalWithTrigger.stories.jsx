import React from 'react'
import { storiesOf } from '@storybook/react'

import ModalWithTrigger from '.'

import ButtonStandard from '../ButtonStandard'

const stories = storiesOf('Core/ModalWithTrigger', module)

stories.add(
  'Info',
  () => (
    <ModalWithTrigger
      ariaLabel="Example ModalWithTrigger"
      trigger={<ButtonStandard>Toggle Modal</ButtonStandard>}
    >
      Example Content
    </ModalWithTrigger>
  ),
  {
    info: {
      inline: true,
      text: `
        Combines the \`<Modal />\` component with a trigger element to handle
        show/hide state management.
      `
    }
  }
)

stories.add('Default state', () => (
  <ModalWithTrigger
    ariaLabel="Example ModalWithTrigger"
    trigger={<ButtonStandard>Toggle Modal</ButtonStandard>}
  >
    Example Content
  </ModalWithTrigger>
))
