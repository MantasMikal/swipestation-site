import React from 'react'

import Type from 'Primitive/Type'
import Container from 'Primitive/Container'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'

import heroVideo from '../../../assets/hero-video.mp4'
import heroPoster from '../../../assets/hero-poster.jpg'

import styles from './Hero.module.scss'

const Hero = ({ title, subtitle }) => {
  return (
    <div className={styles.Hero}>
      <ResponsiveMedia ratio={9 / 16}>
        <video
          className={styles.VideoFrame}
          poster={heroPoster}
          autoPlay
          muted
          loop
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </ResponsiveMedia>
      <Container size="wide" gutter center className={styles.Content}>
        <Type size="displayHero" as="h2" className={styles.Title}>
          {title}
        </Type>
        <Type size="subtitle" as="p" className={styles.Subtitle}>
          {subtitle}
        </Type>
      </Container>
    </div>
  )
}

Hero.propTypes = {}

export default Hero
