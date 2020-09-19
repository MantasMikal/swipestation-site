import React from 'react'
import { string, object } from 'prop-types'
import GatsbyImage from 'gatsby-image'

import Type from 'Primitive/Type'
import SmartLink from 'Primitive/SmartLink'

import styles from './SponsorSlide.module.scss'

const SponsorSlide = ({ image, alt, heading, body, url }) => {
  return (
    <SmartLink href={url} className={styles.Slide} target="_blank">
      <div className={styles.ImageWrapper}>
        <GatsbyImage fluid={image} alt={alt} />
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
