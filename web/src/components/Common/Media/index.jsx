import React from 'react'
import { object, number, string } from 'prop-types'
import Image from 'gatsby-image'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'

const Media = ({ media, ratio, imgWrapperStyle, imgStyle, alt }) => {
  const fixedImg =
    media && media.asset && media.asset.fixed ? media.asset.fixed : undefined
  const fluidImg =
    media && media.asset && media.asset.fluid ? media.asset.fluid : undefined

  if (!media) return null

  if (ratio)
    return (
      (fixedImg || fluidImg) && (
        <ResponsiveMedia ratio={ratio}>
          <Image
            style={imgWrapperStyle}
            imgStyle={imgStyle}
            fixed={fixedImg}
            fluid={fluidImg}
            alt={alt}
          />
        </ResponsiveMedia>
      )
    )
  return (
    (fixedImg || fluidImg) && (
      <Image
        style={imgWrapperStyle}
        imgStyle={imgStyle}
        fixed={fixedImg}
        fluid={fluidImg}
        alt={media.alt}
      />
    )
  )
}

Media.propTypes = {
  media: object,
  ratio: number,
  imgWrapperStyle: object,
  imgStyle: object,
  alt: string
}

export default Media
