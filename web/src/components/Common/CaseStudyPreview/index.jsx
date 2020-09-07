import React from 'react'
import { node } from 'prop-types'
import ZoomableImage from 'Primitive/Zoomable'
import BlockContent from '../../Editor'

import styles from './CaseStudyPreview.module.scss'

const CaseStudyPreview = ({ image, excerpt }) => (
  <div className={styles.CaseStudyPreview}>
    <div className={styles.Image}>
      <ZoomableImage image={image} alt={image.alt} />
    </div>
    <div className={styles.Excerpt}>
      <BlockContent blocks={excerpt} />
    </div>
  </div>
)

CaseStudyPreview.propTypes = {
  children: node.isRequired
}

export default CaseStudyPreview
