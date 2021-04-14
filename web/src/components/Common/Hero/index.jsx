import React from 'react'
import { useCountUp } from 'react-countup'

import Type from 'Primitive/Type'
import Container from 'Primitive/Container'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'

import styles from './Hero.module.scss'

const Hero = ({ title, subtitle, minutesSaved }) => {
  const { countUp } = useCountUp({
    start: 0,
    end: minutesSaved,
    duration: 4,
    easingFn: (t, b, c, d) => -c * (t /= d) * (t - 2) + b // easeOutQuad
  })

  return (
    <div className={styles.Hero}>
      <ResponsiveMedia className={styles.DesktopHero} ratio={9 / 16}>
        <div className={styles.Overlay} />
        <div className={styles.EmbedContainer}>
          <iframe
            className={styles.Video}
            src="https://player.vimeo.com/video/455515299?background=1"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            muted
            autoPlay
            title="Swipestation explainer video"
          />
        </div>
      </ResponsiveMedia>
      <Container size="wide" gutter center className={styles.Content}>
        <Type size="displayLarge" as="h2" className={styles.Title}>
          {title}
        </Type>
        {subtitle && (
          <Type size="subtitle" as="p" className={styles.Subtitle}>
            {subtitle}
          </Type>
        )}
        <div className={styles.MinutesSaved}>
          <Type size="displayLarge" className={styles.MinutesWrapper}>
            {countUp || 0}
          </Type>
          <Type size="displayLarge" className={styles.SavedText}>
            Minutes saved queuing
          </Type>
        </div>
      </Container>
    </div>
  )
}

Hero.propTypes = {}

export default Hero
