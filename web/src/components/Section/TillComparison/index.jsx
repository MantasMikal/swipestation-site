import React from 'react'
import { string, array } from 'prop-types'

import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import TillCompare from 'Common/TillCompare'
import BlockContent from '../../Editor'

import styles from './TillComparison.module.scss'

const TillComparison = ({ title, description }) => {
  return (
    <Container
      gutter
      size="wide"
      spacious
      center
      className={styles.TillComparison}
    >
      <Type size="displayLarge" as="h3" className={styles.Title}>
        {title}
      </Type>
      {description && (
        <div className={styles.Description}>
          <BlockContent blocks={description} baseFontSize="baseLarge" />
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
