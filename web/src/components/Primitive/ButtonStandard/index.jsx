import React from 'react'
import { bool, string, oneOf } from 'prop-types'
import classNames from 'classnames'

import ButtonBase from 'Primitive/ButtonBase'

import styles from './ButtonStandard.module.scss'

/**
 * Basic button component, building on the ButtonBase component.
 */
const ButtonStandard = ({ className, disabled, size, override, ...other }) => (
  <ButtonBase
    className={classNames(
      styles.ButtonStandard,
      disabled && styles.disabled,
      size && styles[size],
      override && styles.override,
      className
    )}
    {...other}
  />
)

ButtonStandard.propTypes = {
  className: string,
  disabled: bool,
  size: oneOf(['large', 'medium', 'small'])
}

export default ButtonStandard
