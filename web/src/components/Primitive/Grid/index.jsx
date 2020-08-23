import React from 'react'
import { object, node } from 'prop-types'

import styles from './Grid.module.scss'

/**
 * Used by portable text editor for grid customisation
 * See Editor/components/createGrid.jsx
 */
const Grid = ({ style, children }) => {
  return (
    <div className={styles.Grid} style={style}>
      {children}
    </div>
  )
}

Grid.propTypes = {
  style: object,
  children: node
}

export default Grid
