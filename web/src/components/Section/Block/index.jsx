import React from 'react'
import { array, string } from 'prop-types'

import BlockContent from '../../Editor'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './Block.module.scss'

const Block = ({ blockContent, title, as }) => {
  return (
    <Container
      className={styles.Block}
      size="wide"
      center
      gutter
      spacious
      as="section"
    >
      {title && (
        <Type as={as || 'h3'} size="displayLarge" className={styles.Title}>
          {title}
        </Type>
      )}
      <BlockContent blocks={blockContent} />
    </Container>
  )
}

Block.propTypes = {
  blockContent: array,
  title: string
}

export default Block
