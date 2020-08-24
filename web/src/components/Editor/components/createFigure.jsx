import React from 'react'
import cfg from '../../../../../config'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

import Zoomable from 'Primitive/Zoomable'
import Image from 'Primitive/Image'

const createFigure = (figure) => {
  if (!figure || !figure.asset || !figure.asset.mimeType) return null
  const { isZoomable, asset, alt, maxWidth } = figure
  if (asset.mimeType === 'image/gif') {
    return (
      <img
        src={asset.url}
        alt={alt || ' '}
        style={{ width: '100%' }}
        key={figure.asset.id}
      />
    )
  } else {
    const imageProps = getFluidGatsbyImage(
      asset._id,
      { maxWidth: maxWidth || 800 },
      cfg.project
    )
    const image = {
      asset: {
        fluid: imageProps
      }
    }

    const El = isZoomable ? Zoomable : Image
    return (
      <div key={figure._key} style={{ maxWidth: maxWidth }}>
        <El image={image} alt={alt || ' '} />
      </div>
    )
  }
}

export default createFigure
