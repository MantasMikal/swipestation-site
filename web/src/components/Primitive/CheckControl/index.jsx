import React from 'react'
import { bool, node, oneOfType, string } from 'prop-types'

import CustomCheckControl from './CustomCheckControl'
import NativeCheckControl from './NativeCheckControl'
import ShrinkWrap from 'Primitive/ShrinkWrap'

/**
 * Styles check inputs (checkbox/radio) using CSS, by hiding the input and
 * showing a styled placeholder.
 */
const CheckControl = ({ children, native, ...other }) => {
  const CheckControlType = native ? NativeCheckControl : CustomCheckControl

  return (
    <ShrinkWrap as="label" vAlign="middle">
      <ShrinkWrap.Item shrink>
        <CheckControlType {...other} />
      </ShrinkWrap.Item>
      <ShrinkWrap.Item>{children}</ShrinkWrap.Item>
    </ShrinkWrap>
  )
}

CheckControl.propTypes = 'CheckControl'

CheckControl.propTypes = {
  children: oneOfType([string, node]).isRequired,
  native: bool
}

export default CheckControl
