import React from 'react'
import { node, oneOf, string } from 'prop-types'
import classNames from 'classnames'

import styles from './Hide.module.scss'

export const widths = ['tablet', 'desktop']

const Hide = ({ as, at, below, children }) => {
  const HideEl = as

  return (
    <HideEl
      as={as}
      className={classNames(
        styles.Hide,
        at && styles[`at-${at}`],
        below && styles[`below-${below}`]
      )}
    >
      {children}
    </HideEl>
  )
}

Hide.defaultProps = {
  as: 'div'
}

Hide.propTypes = {
  as: string,
  at: oneOf(widths),
  below: oneOf(widths),
  children: node.isRequired
}

export default Hide
