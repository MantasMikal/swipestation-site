import React from 'react'
import Video from 'Primitive/Video'

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

const createVideo = (video) => {
  if (!video || !video.videoId || !video.videoType) return null
  const { maxWidth, floating } = video
  const floatStyle = floatStyleMap[floating]
  return (
    <div
      style={{
        maxWidth: maxWidth || 'auto',
        ...floatStyle,
        padding: '0px 0 16px'
      }}
    >
      <Video
        key={video._key}
        videoType={video.videoType}
        videoId={video.videoId}
      />
    </div>
  )
}

export default createVideo
