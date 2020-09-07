import React from 'react'
import CountUp from 'react-countup'

import Type from 'Primitive/Type'
import Container from 'Primitive/Container'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'

import heroVideo from '../../../assets/hero-video.mp4'
import heroPoster from '../../../assets/hero-poster.jpg'

import styles from './Hero.module.scss'
import Image from 'Primitive/Image'
import useMedia from 'hooks/useMedia'

const Hero = ({ mobileHero, title, subtitle, minutesSaved }) => {
  const isTablet = useMedia('(max-width: 576px)')
  return (
    <div className={styles.Hero}>
      <div className={styles.MobileHero}>
        <Image image={mobileHero} alt="" />
      </div>
      <ResponsiveMedia className={styles.DesktopHero} ratio={9 / 16}>
        <div className={styles.Overlay} />
        {!isTablet && (
          <video
            className={styles.VideoFrame}
            poster={heroPoster}
            autoPlay
            muted
            loop
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
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
            <CountUp
              begin={0}
              easing="outSine"
              time={10000}
              end={minutesSaved}
            />
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
