import React from 'react'
import { string, array } from 'prop-types'
import classNames from 'classnames'

import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import BlockText from 'Common/BlockText'
import Diagram from 'Common/Diagram'

import styles from './GoCashless.module.scss'

const GoCashless = ({ title, description }) => {
  return (
    <Container gutter size="wide" center spacious className={styles.GoCashless}>
      <Type size="displayLarge" as="h3" className={styles.Title}>
        {title}
      </Type>
      {description && (
        <div className={styles.Description}>
          <BlockText blocks={description} size="baseLarge" />
        </div>
      )}
      <div className={styles.Wrapper}>
        <div className={styles.DiagramWrapper}>
          <Diagram />
          <div className={styles.Labels}>
            <Type
              size="displayTiny"
              className={classNames(styles.Label, styles.Ordering)}
            >
              Ordering
            </Type>
            <Type
              size="displayTiny"
              className={classNames(styles.Label, styles.Processing)}
            >
              Processing
            </Type>
            <Type
              size="displayTiny"
              className={classNames(styles.Label, styles.Payment)}
            >
              Payment
            </Type>
            <Type
              size="displayTiny"
              className={classNames(styles.Label, styles.Service)}
            >
              Service
            </Type>
          </div>
        </div>
        <div className={styles.TimesFaster}>
          <Type size="displayLarge">3X</Type>
          <Type className={styles.FasterText} size="displaySmall">
            Faster than cashless
          </Type>
        </div>
      </div>
    </Container>
  )
}

GoCashless.propTypes = {
  title: string,
  description: array
}

export default GoCashless
