import React from 'react'
import { storiesOf } from '@storybook/react'

import Hide from '.'

const stories = storiesOf('Layout/Hide', module)

stories.add(
  'Info',
  () => (
    <div>
      Here is content{' '}
      <Hide as="span" at="tablet">
        <span style={{ background: 'orange' }}>
          hidden at Tablet width and above
        </span>
      </Hide>
      <Hide as="span" below="tablet">
        <span style={{ background: 'lightblue' }}>
          hidden below Tablet width
        </span>
      </Hide>
    </div>
  ),
  {
    info: {
      inline: true,
      text: `
        A primitive method of visually showing/hiding content using pre-defined
        breakpoints to hide content. Uses \`display: none\`, so all markup still
        appears in the DOM - good enough for current basic needs, but
        accessibility should be considered for each use.

        For more robust Media conditional rendering, look at something like:
        https://github.com/ReactTraining/react-media
      `
    }
  }
)

stories.add('Default state', () => (
  <div>
    Here is content{' '}
    <Hide as="span" at="tablet">
      <span style={{ background: 'orange' }}>
        hidden at Tablet width and above
      </span>
    </Hide>
    <Hide as="span" below="tablet">
      <span style={{ background: 'lightblue' }}>hidden below Tablet width</span>
    </Hide>
  </div>
))
