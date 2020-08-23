import React from 'react'
import { storiesOf } from '@storybook/react'

import Progress from '.'

const stories = storiesOf('Core/Progress', module)

stories.add('Info', () => <Progress value={50} />, {
  info: {
    inline: true,
    text: `
      Shows progress, just like an HTML \`<progress>\` element, but with better
      cross-browser styling possibilities. Also supports stacked values.

      To use, pass an integer between 0-100, or an array of integers whose
      values total no more than 100.
    `
  }
})

stories.add('Default state', () => <Progress value={50} />)

stories.add('Empty state', () => <Progress />)

stories.add('Filled state', () => <Progress value={100} />)

stories.add('Stacked values', () => <Progress value={[25, 20, 10, 25]} />)
