import React from 'react'
import { array, string } from 'prop-types'

import BlockContent from '../../Editor'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './BlockSection.module.scss'

const BlockSection = ({ blockContent, title }) => {
  return (
    <Container
      className={styles.BlockSection}
      size="wide"
      center
      gutter
      spacious
      as="section"
    >
      {title && (
        <Type as="h1" size="displayLarge" className={styles.Title}>
          {title}
        </Type>
      )}
      <BlockContent blocks={blockContent} />
    </Container>
  )
}

BlockSection.propTypes = {
  blockContent: array,
  title: string
}

export default BlockSection
