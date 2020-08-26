import React from 'react'
import Carousel from 'Primitive/Carousel'
import createMedia from './createMedia'

// TODO:
// Add controls like
// - slide width
// - slides per page

const createSlideshow = (node) => {
  return <Carousel>{node.slides.map((item) => createMedia(item))}</Carousel>
}

createSlideshow.propTypes = {}

export default createSlideshow
