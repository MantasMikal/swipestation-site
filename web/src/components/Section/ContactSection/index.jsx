import React from 'react'
import { array, string } from 'prop-types'

import BlockContent from '../../Editor'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './ContactSection.module.scss'

const ContactSection = ({ body, title }) => {
  return (
    <Container size="wide" center gutter spacious withNavSpace as="section">
      <Type as="h1" size="displayLarge" className={styles.Title}>
        {title}
      </Type>
      {body && (
        <div className={styles.Body}>
          <BlockContent blocks={body} />
        </div>
      )}
    </Container>
  )
}

ContactSection.propTypes = {
  body: array,
  title: string
}

export default ContactSection
