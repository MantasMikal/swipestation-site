import React from 'react'
import { string, array } from 'prop-types'

import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import BlockText from 'Common/BlockText'
import FAQ from 'Common/FAQ'
import BlockContent from '../../Editor'

import styles from './FAQs.module.scss'

const FAQs = ({ title, description, faqs, body }) => {
  return (
    <Container gutter size="wide" spacious center className={styles.FAQs}>
      <Type size="displayLarge" as="h3" className={styles.Title}>
        {title}
      </Type>
      <div className={styles.Description}>
        <BlockText blocks={description} size="baseLarge" />
      </div>
      <div className={styles.Wrapper}>
        {faqs.map((faq, i) => (
          <div key={`FAQ-${faq.category}-${i}`} className={styles.FAQWrapper}>
            <FAQ {...faq} />
          </div>
        ))}
      </div>
      <div className={styles.BlockContent}>
        <BlockContent blocks={body} />
      </div>
    </Container>
  )
}

FAQs.propTypes = {
  title: string,
  description: array
}

export default FAQs
