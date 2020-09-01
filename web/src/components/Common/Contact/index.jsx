import React from 'react'
import { node } from 'prop-types'
import classNames from 'classnames'
import slugify from 'slugify'

import TextControl from 'Primitive/TextControl'
import FieldTemplate from 'Primitive/FieldTemplate'
import ButtonStandard from 'Primitive/ButtonStandard'
import Type from 'Primitive/Type'
import SmartLink from 'Primitive/SmartLink'
import Icon from 'Primitive/Icon'

import styles from './Contact.module.scss'
import GatsbyImage from 'gatsby-image'

const Contact = ({ contactInfo, storeLinks }) => (
  <div className={styles.Contact}>
    <div className={styles.Details}>
      <div className={styles.ContactDetails}>
        <div className={styles.ContactDetail}>
          <Icon
            type="email"
            width={25}
            height={20}
            className={classNames(styles.Icon, styles.email)}
            a11yText="Email"
          />
          <SmartLink href={`mailto:${contactInfo.email}`}>
            <Type size="base" className={styles.ContactText}>
              {contactInfo.email}
            </Type>
          </SmartLink>
        </div>
        <div className={styles.ContactDetail}>
          <Icon
            type="phone"
            width={20}
            height={20}
            a11yText="Phone"
            className={classNames(styles.Icon, styles.phone)}
          />
          <SmartLink href={`tel:${contactInfo.phone}`}>
            <Type size="base" className={styles.ContactText}>
              {contactInfo.phone}
            </Type>
          </SmartLink>
        </div>
        <div className={styles.ContactDetail}>
          <Icon
            type="location"
            width={18}
            height={20}
            a11yText="Location"
            className={classNames(styles.Icon, styles.location)}
          />
          <SmartLink
            href={`https://www.google.com/maps/search/?api=1&query=${slugify(
              'SwipeStation' + contactInfo.address,
              '+'
            )}`}
          >
            <Type size="base" className={styles.ContactText}>
              {contactInfo.address}
            </Type>
          </SmartLink>
        </div>
      </div>
      <div className={styles.StoreLinksWrapper}>
        <div className={styles.StoreLinks}>
          <SmartLink
            className={styles.StoreLink}
            href={storeLinks.apple.link}
            target="__blank"
          >
            <GatsbyImage fluid={storeLinks.apple.image} alt="App Store" />
          </SmartLink>
          <SmartLink
            className={styles.StoreLink}
            href={storeLinks.google.link}
            target="__blank"
          >
            <GatsbyImage
              fluid={storeLinks.google.image}
              alt="Google Play Store"
            />
          </SmartLink>
        </div>
        <div className={styles.Barcode}>
          <GatsbyImage fluid={storeLinks.barcode.image} alt="QR Code" />
        </div>
      </div>
    </div>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={styles.Form}
    >
      <input type="hidden" name="form-name" value="contact" />
      <FieldTemplate label="Name" required controlName="name">
        <TextControl
          placeholder="Your Full Name"
          name="name"
          type="text"
          required
        />
      </FieldTemplate>
      <FieldTemplate label="Email" required controlName="email">
        <TextControl
          name="email"
          type="email"
          required
          placeholder="Your Email"
        />
      </FieldTemplate>
      <FieldTemplate label="Phone" required controlName="phone">
        <TextControl
          name="phone"
          type="phone"
          required
          placeholder="Your Phone"
        />
      </FieldTemplate>
      <FieldTemplate label="Message" required controlName="message">
        <TextControl
          name="message"
          placeholder="Say hi!"
          multiLine
          rows={10}
          required
        />
      </FieldTemplate>
      <div className={styles.ButtonWrapper}>
        <ButtonStandard className={styles.SubmitButton} type="submit">
          <Type size="displayTiny">Contact</Type>
        </ButtonStandard>
      </div>
    </form>
  </div>
)

Contact.propTypes = {
  children: node.isRequired
}

export default Contact
