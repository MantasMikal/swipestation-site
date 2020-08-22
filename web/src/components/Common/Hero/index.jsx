import React from 'react'

import Type from 'Primitive/Type'
import Container from 'Primitive/Container'
import Media from 'Common/Media'

import styles from './Hero.module.scss'

const Hero = ({ heroImage, title, subtitle }) => {
  return (
    <div className={styles.Hero}>
      <Media media={heroImage} />
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
