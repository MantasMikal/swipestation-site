import React from 'react'
import classNames from 'classnames'
import { bool, node, oneOf } from 'prop-types'
// import sassKeysToArray from '@/lib/sass-keys-to-array'

import styles from './Inline.module.scss'

// const gaps = sassKeysToArray(styles.gaps)
const gaps = ['small', 'medium', 'large']

const Inline = ({ children, gap, shrink }) => (
  <div
    className={classNames(
      styles.Inline,
      gap && styles[gap],
      shrink && styles.shrink
    )}
  >
    {children}
  </div>
)

Inline.defaultProps = {
  gap: 'medium'
}

Inline.propTypes = {
  children: node.isRequired,
  gap: oneOf(gaps),
  shrink: bool
}

export default Inline
