import React from 'react'
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

  let imgCmp = <Image image={figure} />

  if (asset.mimeType === 'image/gif') {
    imgCmp = (
      <img
        src={asset.url}
        alt={alt || ''}
        style={{ width: '100%', ...floatStyle }}
      />
    )
  }

  return (
    <div key={figure._key} style={{ maxWidth: maxWidth, marginBottom: '10px' }}>
      {!isZoomable ? imgCmp : <Zoomable>{imgCmp}</Zoomable>}
    </div>
  )
}

export default createFigure
