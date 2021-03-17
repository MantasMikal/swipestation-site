import React from 'react'
import { array, object } from 'prop-types'

import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import CaseStudyPreview from 'Common/CaseStudyPreview'

import styles from './CaseStudy.module.scss'
import BlockContent from '../../Editor'

const CaseStudy = ({ title, _rawExcerpt, image, _rawBody }) => {
  return (
    <Container className={styles.Content} spacious gutter size="wide" center>
      <Type size="displayLarge" as="h3" className={styles.Title}>
        {title}
      </Type>
      <CaseStudyPreview image={image} excerpt={_rawExcerpt} black />
      <BlockContent blocks={_rawBody} />
    </Container>
  )
}

CaseStudy.propTypes = {
  _rawDescription: array,
  caseStudy: object
}

export default CaseStudy
