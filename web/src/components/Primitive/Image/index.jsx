import React from 'react'
import { object, number, string, oneOfType } from 'prop-types'

import GatsbyImage from 'gatsby-image'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'

/**
 * Component to hanlde all types images with ratio support
 */
const Image = ({ image, ratio, imgWrapperStyle, imgStyle, alt, ...other }) => {
  if (!image) return null

  const fixedImg =
    image.asset && image.asset.fixed ? image.asset.fixed : undefined
  const fluidImg =
    image.asset && image.asset.fluid ? image.asset.fluid : undefined
  const regularImg = image

  if (fixedImg || fluidImg) {
    return ratio ? (
      <ResponsiveMedia ratio={ratio}>
        <GatsbyImage
          style={imgWrapperStyle}
          imgStyle={imgStyle}
          fixed={fixedImg}
          fluid={fluidImg}
          alt={image.alt || alt}
          {...other}
        />
      </ResponsiveMedia>
    ) : (
      <GatsbyImage
        style={imgWrapperStyle}
        imgStyle={imgStyle}
        fixed={fixedImg}
        fluid={fluidImg}
        alt={image.alt || alt}
        {...other}
      />
    )
  }

  if (regularImg) {
    return ratio ? (
      <ResponsiveMedia ratio={ratio}>
        <img src={regularImg} alt={alt} {...other} />
      </ResponsiveMedia>
    ) : (
      <img src={regularImg} alt={alt} {...other} />
    )
  }
}

Image.propTypes = {
  image: oneOfType([string, object]),
  ratio: number,
  imgWrapperStyle: object,
  imgStyle: object,
  alt: string
}

export default Image
