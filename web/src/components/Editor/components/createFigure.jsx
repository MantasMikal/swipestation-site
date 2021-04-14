import React from 'react'
import cfg from '../../../../../config'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

import Zoomable from 'Primitive/Zoomable'
import Image from 'Primitive/Image'

const floatStyleMap = {
  right: {
    display: 'inline',
    float: 'right',
    padding: '0 0px 16px 16px',
    width: '100%'
  },
  left: {
    display: 'inline',
    float: 'left',
    padding: '0 16px 16px 0',
    width: '100%'
  },
  center: { margin: 'auto' }
}

const createFigure = (figure) => {
  if (!figure || !figure.asset || !figure.asset.mimeType) return null
  const { isZoomable, asset, alt, maxWidth, floating } = figure
  const floatStyle = floatStyleMap[floating]

  if (asset.mimeType === 'image/gif') {
    return (
      <img
        src={asset.url}
        alt={alt || ' '}
        style={{ width: '100%', ...floatStyle }}
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
      <div
        key={figure._key || figure._id}
        style={{ maxWidth: maxWidth, ...floatStyle }}
      >
        <El image={image} alt={alt || ' '} />
      </div>
    )
  }
}

export default createFigure
