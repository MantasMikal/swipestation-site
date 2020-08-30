import React from 'react'
import { string, array } from 'prop-types'
import { Parallax } from 'react-scroll-parallax'
import { ParallaxProvider } from 'react-scroll-parallax'
import Container from 'Primitive/Container'
import BlockText from 'Common/BlockText'
import Feature from 'Common/Feature'
import Type from 'Primitive/Type'
import ButtonStandard from 'Primitive/ButtonStandard'
import SmartLink from 'Primitive/SmartLink'

import styles from './Features.module.scss'

const Features = ({ title, description, features }) => {
  return (
    <ParallaxProvider>
      <Container gutter size="wide" center spacious className={styles.Features}>
        <Type size="displayLarge" as="h3" className={styles.Title}>
          {title}
        </Type>
        <div className={styles.Description}>
          <BlockText size="baseLarge" blocks={description} />
        </div>
        {features &&
          features.map((feat, i) => (
            <Parallax
              y={[20, -20]}
              className={styles.FeatureWrapper}
              key={feat.title}
            >
              <Feature reverse={i % 2 !== 0} {...feat} />
            </Parallax>
          ))}
        <div className={styles.LearnMoreWrapper}>
          <Type className={styles.LearnMoreText} size="displaySmall">
            Learn more by reading
          </Type>
          <ButtonStandard>
            <SmartLink to="/faqs">
              <Type size="displaySmall">FAQS</Type>
            </SmartLink>
          </ButtonStandard>
        </div>
      </Container>
    </ParallaxProvider>
  )
}

Features.propTypes = {
  title: string,
  description: array,
  features: array
}

export default Features
