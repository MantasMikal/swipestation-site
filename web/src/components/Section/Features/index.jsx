import React from 'react'
import { string, array } from 'prop-types'
import classNames from 'classnames'

import Container from 'Primitive/Container'
import BlockContent from '../../Editor'
import Feature from 'Common/Feature'
import Type from 'Primitive/Type'
import ButtonStandard from 'Primitive/ButtonStandard'
import SmartLink from 'Primitive/SmartLink'
import VideoPlayer from 'Primitive/Video'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'

import styles from './Features.module.scss'

const Features = ({ title, description, features }) => {
  return (
    <Container gutter size="wide" center spacious className={styles.Features}>
      <Type size="displayMedium" as="h3" className={styles.Title}>
        {title}
      </Type>
      {description && (
        <div className={styles.Description}>
          <BlockContent baseFontSize="baseLarge" blocks={description} />
        </div>
      )}
      {features &&
        features.map((feat, i) => (
          <div
            className={classNames(
              styles.FeatureWrapper,
              i === features.length - 1 && styles.last,
              i === 0 && styles.first
            )}
            key={feat.title}
          >
            <Feature reverse={i % 2 !== 0} {...feat} />
          </div>
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
  )
}

Features.propTypes = {
  title: string,
  description: array,
  features: array
}

export default Features
