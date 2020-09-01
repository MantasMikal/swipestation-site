import React from 'react'
import { string, array } from 'prop-types'

import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import TillCompare from 'Common/TillCompare'
import BlockText from 'Common/BlockText'

import styles from './TillComparison.module.scss'

const TillComparison = ({ title, description }) => {
  return (
    <Container gutter size="wide" center className={styles.TillComparison}>
      <Type size="displayLarge" as="h3" className={styles.Title}>
        {title}
      </Type>
      {description && (
        <div className={styles.Description}>
          <BlockText blocks={description} size="baseLarge" />
        </div>
      )}
      <TillCompare />
    </Container>
  )
}

TillComparison.propTypes = {
  title: string,
  description: array
}

export default TillComparison
