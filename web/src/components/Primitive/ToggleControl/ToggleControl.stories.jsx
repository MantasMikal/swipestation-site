import React from 'react'
import { storiesOf } from '@storybook/react'

import { StatusContextProvider } from 'Context/StatusContext'
import ToggleControl from '.'

const stories = storiesOf('Form/ToggleControl', module)

stories.add(
  'Info',
  () => (
    <label htmlFor="id-1">
      <ToggleControl id="id-1" name="exampleToggleControl" value="true" />
    </label>
  ),
  {
    info: {
      inline: true,
      text: `
        A toggle control similar to native controls on touch devices. As with
        all control components, this needs to be associated with a <label>
        for correct accessibility.
      `
    }
  }
)

stories.add('Unchecked state', () => (
  <label htmlFor="id-1">
    <ToggleControl id="id-1" name="exampleToggleControl" value="true" />
  </label>
))

stories.add('Checked state', () => (
  <label htmlFor="id-1">
    <ToggleControl id="id-1" checked name="exampleToggleControl" value="true" />
  </label>
))

stories.add('Loading state', () => (
  <label htmlFor="id-1">
    <ToggleControl id="id-1" loading name="exampleToggleControl" value="true" />
  </label>
))

stories.add('Disabled state', () => (
  <label htmlFor="id-1">
    <ToggleControl
      id="id-1"
      disabled
      name="exampleToggleControl"
      value="true"
    />
  </label>
))

stories.add('Custom labels', () => (
  <div>
    <label htmlFor="id-1">
      <ToggleControl
        id="id-1"
        textChecked="On"
        textUnchecked="Off"
        name="exampleToggleControl"
        value="true"
      />
    </label>
    <label htmlFor="id-2">
      <ToggleControl
        id="id-2"
        textChecked="I"
        textUnchecked="O"
        name="exampleToggleControl"
        value="true"
      />
    </label>
    <label htmlFor="id-3">
      <ToggleControl
        id="id-3"
        textChecked="👍"
        textUnchecked="☠️"
        name="exampleToggleControl"
        value="true"
      />
    </label>
  </div>
))

stories.add('With status (direct)', () => (
  <label htmlFor="id-1">
    <ToggleControl
      id="id-1"
      name="exampleToggleControl"
      value="true"
      status="error"
    />
  </label>
))

stories.add('With status (via context)', () => (
  <StatusContextProvider status="success">
    <label htmlFor="id-1">
      <ToggleControl id="id-1" name="exampleToggleControl" value="true" />
    </label>
  </StatusContextProvider>
))
