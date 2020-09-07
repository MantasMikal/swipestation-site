import React from 'react'
import { string, object } from 'prop-types'
import Container from 'Primitive/Container'

import ResponsiveMedia from 'Primitive/ResponsiveMedia'
import VideoPlayer from 'Primitive/Video'
import RoundedOverlay from 'Common/RoundedOverlay'

import styles from './Video.module.scss'
import Type from 'Primitive/Type'

const Video = ({ title, video }) => {
  const { videoId, videoType, alt, caption } = video
  return (
    <Container size="full" className={styles.Video}>
      <RoundedOverlay className={styles.VideoOverlay} />
      <Container
        size="large"
        spacious
        center
        gutter
        className={styles.VideoInner}
      >
        {title && (
          <Type className={styles.Title} size="displayLarge" as="h3">
            {title}
          </Type>
        )}
        <ResponsiveMedia className={styles.VideoWrapper} ratio={9 / 16}>
          <VideoPlayer
            videoId={videoId}
            videoType={videoType}
            alt={alt}
            caption={caption}
          />
        </ResponsiveMedia>
      </Container>
    </Container>
  )
}

Video.propTypes = {
  title: string,
  video: object
}

export default Video
