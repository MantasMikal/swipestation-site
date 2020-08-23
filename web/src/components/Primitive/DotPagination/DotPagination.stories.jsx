import React from 'react'
import { action } from '@storybook/addon-actions'

import DotPagination from '.'

export default {
  title: 'Core/DotPagination',
  component: DotPagination
}

export const Default = (args) => (
  <DotPagination
    dots={10}
    onChangeIndex={action('Dot clicked')}
    activeIndex={5}
    {...args}
  />
)
