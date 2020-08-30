import React from 'react'
import { string, array, object } from 'prop-types'
import classNames from 'classnames'

import Image from 'Primitive/Image'
import Type from 'Primitive/Type'
import BlockText from 'Common/BlockText'

import styles from './Feature.module.scss'

const Feature = ({ title, _rawDescription, image, reverse }) => {
  return (
    <div className={classNames(styles.Feature, reverse && styles.reverse)}>
      <div className={styles.ImageWrapper}>
        <Image ratio={1} image={image} alt={title} />
      </div>
      <div className={styles.Content}>
        <Type as="h4" size="displayMedium" className={styles.Title}>
          {title}
        </Type>
        <BlockText blocks={_rawDescription} />
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
