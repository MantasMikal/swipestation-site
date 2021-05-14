import React from 'react'
import { string, object } from 'prop-types'

import Type from 'Primitive/Type'
import SmartLink from 'Primitive/SmartLink'
import Image from 'Primitive/Image'

import styles from './SponsorSlide.module.scss'

const SponsorSlide = ({ image, alt, heading, body, url }) => {
  console.log(
    '🚀 ~ file: SponsorSlide.jsx ~ line 11 ~ SponsorSlide ~ image',
    image
  )
  return (
    <SmartLink href={url} className={styles.Slide} target="_blank">
      <div className={styles.ImageWrapper}>
        <Image image={image} alt={alt} />
      </div>
      <Type size="subtitle" as="h5" className={styles.Heading}>
        {heading}
      </Type>
      <Type className={styles.QouteBody} size="base" as="p" italic>
        {body}
      </Type>
    </SmartLink>
  )
}

SponsorSlide.propTypes = {
  image: object,
  alt: string,
  heading: string,
  body: string,
  url: string
}

export default SponsorSlide
