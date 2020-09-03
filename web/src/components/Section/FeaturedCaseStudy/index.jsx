import React from 'react'
import { string, array } from 'prop-types'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './FeaturedCaseStudy.module.scss'
import BlockText from 'Common/BlockText'
import BlockContent from '../../Editor'
import Separator from 'Common/Seperator'

const FeaturedCaseStudy = ({ title, description, body, image }) => {
  return (
    <>
      <Container size="full" spacious className={styles.Wrapper}>
        <Container size="full" className={styles.FeaturedCaseStudy}>
          <Container
            className={styles.Content}
            spacious
            gutter
            size="wide"
            center
          >
            <Type size="displayLarge" as="h3" className={styles.Title}>
              {title}
            </Type>
            {description && (
              <div className={styles.Description}>
                <BlockText blocks={description} size="baseLarge" />
              </div>
            )}
            <div className={styles.Body}>
              <BlockContent blocks={body} />
            </div>
          </Container>
        </Container>
        {/* <Separator /> */}
      </Container>
    </>
  )
}

FeaturedCaseStudy.propTypes = {
  title: string,
  description: array
}

export default FeaturedCaseStudy
