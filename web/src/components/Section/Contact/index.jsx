import React from 'react'
import { array, string } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { openPopupWidget } from 'react-calendly'

import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import BlockText from 'Common/BlockText'
import ContactForm from 'Common/Contact'

import styles from './Contact.module.scss'
import ButtonStandard from 'Primitive/ButtonStandard'

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
  const data = useStaticQuery(graphql`
    query {
      appStore: file(relativePath: { eq: "app-store.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      googleStore: file(relativePath: { eq: "google-store.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      barcode: file(relativePath: { eq: "barcode.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const storeLinks = {
    apple: {
      link: 'https://apps.apple.com/gb/app/swipestation/id1012471579',
      image: data.appStore.childImageSharp.fluid
    },
    google: {
      link:
        'https://play.google.com/store/apps/details?id=com.adbibio.push&hl=en',
      image: data.googleStore.childImageSharp.fluid
    },
    barcode: {
      image: data.barcode.childImageSharp.fluid
    }
  }
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
        storeLinks={storeLinks}
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
