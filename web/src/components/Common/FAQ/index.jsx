import React from 'react'
import { array, string } from 'prop-types'

import styles from './FAQ.module.scss'
import Type from 'Primitive/Type'
import Accordion from 'Primitive/Accordion'
import BlockContent from '../../Editor'

const FAQ = ({ category, faqs }) => {
  console.log('{ category, faqs }', { category, faqs })
  return (
    <div className={styles.FAQ}>
      <Type size="displayMedium" className={styles.Title}>
        {category}
      </Type>
      <div className={styles.Questions}>
        {faqs.map((faq, i) => (
          <div key={`${faq.question}-${i}`} className={styles.FAQWrapper}>
            <Accordion
              title={faq.question}
              content={<BlockContent blocks={faq._rawAnswer} />}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

FAQ.propTypes = {
  faqs: array,
  category: string
}

export default FAQ
