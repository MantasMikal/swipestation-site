import React from 'react'
// import { string, array } from 'prop-types'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import TillCompare from 'Common/TillCompare'
import styles from './TillComparison.module.scss'
// import BlockText from 'Common/BlockText'

const TillComparison = ({}) => {
  return (
    <Container gutter size="wide" center className={styles.TillComparison}>
      <Type size="displayLarge" as="h3" className={styles.Title}>
        How do we eradicate queues?
      </Type>
      <div className={styles.Description}>
        <Type as="p" size="baseLarge">
          Lorem ipsum dolor sit amet, consectetu
        </Type>
      </div>
      <TillCompare />
    </Container>
  )
}

TillComparison.propTypes = {}

export default TillComparison
