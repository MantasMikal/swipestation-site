import React from 'react'
import { string, array } from 'prop-types'
import Container from 'Primitive/Container'
import BlockText from 'Common/BlockText'
import Feature from 'Common/Feature'
import Type from 'Primitive/Type'

import styles from './Features.module.scss'

const Features = ({ title, description, features }) => {
  console.log('Features -> features', features)
  return (
    <Container gutter size="wide" center spacious className={styles.Features}>
      <Type size="displayLarge" as="h3" className={styles.Title}>
        {title}
      </Type>
      <div className={styles.Description}>
        <BlockText size="baseLarge" blocks={description} />
      </div>
      {features &&
        features.map((feat, i) => (
          <div className={styles.FeatureWrapper} key={feat.title}>
            <Feature reverse={i % 2 !== 0} {...feat} />
          </div>
        ))}
    </Container>
  )
}

Features.propTypes = {
  title: string,
  description: array,
  features: array
}

export default Features
