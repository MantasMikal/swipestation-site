import React from 'react'
import classNames from 'classnames'
import Zoomable from 'Primitive/Zoomable'
import BlockContent from '../../Editor'
import Image from 'Primitive/Image'

import styles from './CaseStudyPreview.module.scss'

const CaseStudyPreview = ({ image, excerpt, black }) => (
  <div className={classNames(styles.CaseStudyPreview, black && styles.black)}>
    <div className={styles.Image}>
      <Zoomable>
        <Image image={image} alt={image.alt} />
      </Zoomable>
    </div>
    <div className={styles.Excerpt}>
      <BlockContent blocks={excerpt} />
    </div>
  </div>
)

CaseStudyPreview.propTypes = {}

export default CaseStudyPreview
