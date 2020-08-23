import React from 'react'
import { object, node } from 'prop-types'
import Zoom from 'react-medium-image-zoom'

import Image from 'Primitive/Image'

import styles from './Zoomable.module.scss'
import 'react-medium-image-zoom/dist/styles.css'

const imageStyles = {
  width: '100%'
}

/**
 * Makes images or any component zoomable. Just pass image or wrap childrens
 */
const Zoomable = ({ image, children }) => {
  const component = children ? (
    children
  ) : (
    <Image imgWrapperStyle={imageStyles} imgStyle={imageStyles} image={image} />
  )
  return (
    <Zoom
      className={styles.Zoomable}
      transitionDuration={200}
      overlayBgColorEnd="rgba(255, 255, 255, 0.8)"
      overlayBgColorStart="rgba(0, 0, 0, 0)"
      zoomMargin={20}
    >
      {component}
    </Zoom>
  )
}

Zoomable.propTypes = {
  /**
   * Gatsby image props or image src
   */
  image: object,
  children: node
}

export default Zoomable
