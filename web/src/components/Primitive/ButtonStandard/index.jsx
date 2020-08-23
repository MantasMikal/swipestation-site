import React from 'react'
import { bool, node, string } from 'prop-types'
import classNames from 'classnames'

import styles from './ButtonStandard.module.scss'

import ButtonBase from 'Primitive/ButtonBase'
import Spinner from 'Primitive/Spinner'

/**
 * Basic button component, building on the ButtonBase component.
 */
const ButtonStandard = ({
  children,
  className,
  disabled,
  loading,
  ...other
}) => (
  <ButtonBase
    className={classNames(
      styles.ButtonStandard,
      disabled && styles.disabled,
      loading && styles.loading,
      className
    )}
    disabled={disabled}
    {...other}
  >
    <span className={styles.ButtonStandardContent}>{children}</span>
    {loading && (
      <span className={styles.ButtonStandardSpinner}>
        <Spinner revealDelay={200} />
      </span>
    )}
  </ButtonBase>
)

ButtonStandard.propTypes = {
  children: node,
  className: string,
  disabled: bool,
  loading: bool
}

export default ButtonStandard
