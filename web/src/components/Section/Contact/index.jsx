import React from 'react'
import { array, string } from 'prop-types'

import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import BlockText from 'Common/BlockText'
import ContactForm from 'Common/Contact'

import styles from './Contact.module.scss'

/**
 * If deployed on Netlify the form will be handled automagically! Just check the 'Forms' section under site settings
 */
const Contact = ({
  _rawDescription,
  title,
  phone,
  email,
  address,
  ctaLabel,
  calendlyUrl,
  salesDeck
}) => {
  return (
    <Container
      className={styles.Contact}
      size="wide"
      center
      gutter
      spacious
      as="section"
      id="contact"
    >
      <Type as="h3" size="displayLarge" className={styles.Title}>
        {title}
      </Type>
      {_rawDescription && (
        <div className={styles.Description}>
          <BlockText blocks={_rawDescription} size="baseLarge" />
        </div>
      )}
      <ContactForm
        contactInfo={{ phone: phone, email: email, address: address }}
        ctaLabel={ctaLabel}
        calendlyUrl={calendlyUrl}
        salesDeck={salesDeck}
      />
    </Container>
  )
}

Contact.propTypes = {
  body: array,
  title: string,
  phone: string,
  email: string,
  address: string,
  ctaLabel: string
}

export default Contact
