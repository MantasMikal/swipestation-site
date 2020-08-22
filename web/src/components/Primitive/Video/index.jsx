import React from 'react'
import { string } from 'prop-types'

import Type from 'Primitive/Type'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'

import YouTubeEmbed from './YouTubeEmbed'
import VimeoEmbed from './VimeoEmbed'

import styles from './Video.module.scss'

const Video = ({ videoType, videoId, caption, className }) => {
  switch (videoType) {
    case 'youtube':
      return (
        <div className={styles.Video} className={className}>
          <ResponsiveMedia ratio={9 / 16}>
            <YouTubeEmbed videoId={videoId} width="100%" height="100%" />
          </ResponsiveMedia>
          {caption && (
            <Type className={styles.Caption} size="base" italic>
              {caption}
            </Type>
          )}
        </div>
      )

    case 'vimeo':
      return (
        <div className={styles.Video} className={className}>
          <ResponsiveMedia ratio={9 / 16}>
            <VimeoEmbed videoId={videoId} width="100%" height="100%" />
          </ResponsiveMedia>
          {caption && (
            <Type className={styles.Caption} size="base" italic>
              {caption}
            </Type>
          )}
        </div>
      )

    default:
      return <div>Video type is not supported...</div>
  }
}

Video.propTypes = {
  videoType: string,
  videoId: string,
  alt: string
}

export default Video
