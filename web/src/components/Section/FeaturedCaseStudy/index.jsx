import React from 'react'
import { array, object } from 'prop-types'

import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import BlockText from 'Common/BlockText'
import CaseStudyPreview from 'Common/CaseStudyPreview'

import styles from './FeaturedCaseStudy.module.scss'

const FeaturedCaseStudy = ({ _rawDescription, caseStudy }) => {
  const { title, _rawExcerpt, image } = caseStudy
  return (
    <>
      <Container id="caseStudy" size="full" spacious className={styles.Wrapper}>
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
            {_rawDescription && (
              <div className={styles.Description}>
                <BlockText blocks={_rawDescription} size="baseLarge" />
              </div>
            )}
            <CaseStudyPreview image={image} excerpt={_rawExcerpt} />
          </Container>
        </Container>
      </Container>
    </>
  )
}

FeaturedCaseStudy.propTypes = {
  _rawDescription: array,
  caseStudy: object
}

export default FeaturedCaseStudy
