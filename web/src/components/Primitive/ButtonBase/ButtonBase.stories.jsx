import React from 'react'
import ButtonBase from '.'

export default {
  title: 'Core/ButtonBase',
  component: ButtonBase
}

export const Default = (args) => <ButtonBase {...args}>Base Button</ButtonBase>
export const AsAnchor = (args) => (
  <ButtonBase {...args} href="#">
    Anchor
  </ButtonBase>
)
AsAnchor.args = {
  href: '#'
}
