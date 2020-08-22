import React from 'react'
import { node, string } from 'prop-types'
import classNames from 'classnames'

import styles from './Qoute.module.scss'

const Qoute = ({ children, className, ...rest }) => {

  return (
    <blockquote
      className={classNames(styles.baseLarge, styles.qoute, styles.common, className)}
      {...rest}
    >
      {children}
    </blockquote>
  )
}

Qoute.displayName = 'Qoute'

Qoute.propQoutes = {
  children: node.isRequired,
  className: string
}

export default Qoute
