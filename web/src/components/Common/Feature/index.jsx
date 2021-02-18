import React from 'react'
import { string, array, object } from 'prop-types'
import classNames from 'classnames'

import Image from 'Primitive/Image'
import Type from 'Primitive/Type'
import BlockContent from '../../Editor'

import styles from './Feature.module.scss'

const Feature = ({ title, _rawDescription, image, reverse, smallTitle }) => {
  return (
    <div className={classNames(styles.Feature, reverse && styles.reverse)}>
      <div className={styles.ImageWrapper}>
        <Image image={image} alt={title} />
      </div>
      <div className={styles.Content}>
        <Type
          as="h4"
          size={smallTitle ? 'displayEditorSmall' : 'displayMedium'}
          className={styles.Title}
        >
          {title}
        </Type>
        <BlockContent blocks={_rawDescription} />
      </div>
    </div>
  )
}

Feature.propTypes = {
  title: string,
  _rawDescription: array,
  image: object
}

export default Feature
