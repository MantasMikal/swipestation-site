import React from 'react'
import { arrayOf, number, oneOfType } from 'prop-types'

import styles from './Progress.module.scss'

const Progress = ({ value }) => {
  const progressArr = Array.isArray(value) ? value : [value]

  return (
    <div className={styles.Progress}>
      <div className={styles.ProgressTrack}>
        {progressArr.map((progress, i) => (
          <div
            key={`ProgressBar${i}`}
            className={styles.ProgressBar}
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        ))}
      </div>
    </div>
  )
}

Progress.defaultProps = {
  value: 0
}

Progress.propTypes = {
  value: oneOfType([number, arrayOf(number)])
}

export default Progress
