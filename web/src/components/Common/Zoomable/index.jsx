import React from 'react'
import { object, node } from 'prop-types'
import Zoom from 'react-medium-image-zoom'

import Media from 'Common/Media'

import styles from './Zoomable.module.scss'
import 'react-medium-image-zoom/dist/styles.css'

const imageStyles = {
  width: '100%'
}

// Can't be used with ResponsiveMedia

const ZoomableMedia = ({ media, children }) => {
  const component = children ? (
    children
  ) : (
    <Media imgWrapperStyle={imageStyles} imgStyle={imageStyles} media={media} />
  )
  return (
    <Zoom
      className={styles.ZoomableMedia}
      transitionDuration={200}
      overlayBgColorEnd="rgba(255, 255, 255, 0.8)"
      overlayBgColorStart="rgba(0, 0, 0, 0)"
      zoomMargin={20}
    >
      {component}
    </Zoom>
  )
}

ZoomableMedia.propTypes = {
  media: object,
  children: node
}

export default ZoomableMedia
