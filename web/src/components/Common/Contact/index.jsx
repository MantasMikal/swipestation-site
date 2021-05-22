import React from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'
import slugify from 'slugify'
import { openPopupWidget } from 'react-calendly'

import TextControl from 'Primitive/TextControl'
import FieldTemplate from 'Primitive/FieldTemplate'
import ButtonStandard from 'Primitive/ButtonStandard'
import Type from 'Primitive/Type'
import SmartLink from 'Primitive/SmartLink'
import Icon from 'Primitive/Icon'
import { StaticImage } from 'gatsby-plugin-image'

import styles from './Contact.module.scss'

const Contact = ({ contactInfo, ctaLabel, calendlyUrl, salesDeck }) => {
  return (
    <div className={styles.Contact}>
      {/* MOBILE ONLY */}
      <div className={styles.ButtonWrapperMobile}>
        <ButtonStandard
          tight
          onClick={() => openPopupWidget({ url: calendlyUrl })}
        >
          <Type className={styles.ButtonText} size="displayTiny">
            <Icon
              type="calendar"
              a11yText="Book a demo"
              width={24}
              height={24}
              className={styles.Icon}
            />
            Book a demo
          </Type>
        </ButtonStandard>
        <SmartLink
          href={salesDeck && salesDeck.asset && salesDeck.asset.url}
          target="__blank"
        >
          <ButtonStandard tight>
            <Type className={styles.ButtonText} size="displayTiny">
              {' '}
              <Icon
                type="download"
                width={24}
                height={24}
                className={styles.Icon}
                a11yText="Download"
              />
              Download our latest deck
            </Type>
          </ButtonStandard>
        </SmartLink>
      </div>
      {/* MOBILE ONLY */}

      <div className={styles.Details}>
        <div className={styles.ButtonWrapper}>
          <ButtonStandard
            tight
            onClick={() => openPopupWidget({ url: calendlyUrl })}
          >
            <Type className={styles.ButtonText} size="displayTiny">
              <Icon
                type="calendar"
                a11yText="Book a demo"
                width={24}
                height={24}
                className={styles.Icon}
              />
              Book a demo
            </Type>
          </ButtonStandard>
          <SmartLink
            href={salesDeck && salesDeck.asset && salesDeck.asset.url}
            target="__blank"
          >
            <ButtonStandard tight>
              <Type className={styles.ButtonText} size="displayTiny">
                {' '}
                <Icon
                  type="download"
                  width={24}
                  height={24}
                  a11yText="Download"
                  className={styles.Icon}
                />
                Download our latest deck
              </Type>
            </ButtonStandard>
          </SmartLink>
        </div>
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
              target="_blank"
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
        <Type className={styles.CTA} size="displaySmall">
          {ctaLabel}
        </Type>
        <div className={styles.StoreLinksWrapper}>
          <div className={styles.StoreLinks}>
            <SmartLink
              className={styles.StoreLink}
              href={'https://apps.apple.com/gb/app/swipestation/id1012471579'}
              target="__blank"
            >
              <StaticImage
                placeholder="blurred"
                src={'../../../assets/images/app-store.png'}
                alt="App Store"
              />
            </SmartLink>
            <SmartLink
              className={styles.StoreLink}
              href={
                'https://play.google.com/store/apps/details?id=com.adbibio.push&hl=en'
              }
              target="__blank"
            >
              <StaticImage
                placeholder="blurred"
                src={'../../../assets/images/google-store.png'}
                alt="Google Play Store"
              />
            </SmartLink>
          </div>
          <div className={styles.Barcode}>
            <StaticImage
              placeholder="blurred"
              src={'../../../assets/images/barcode.png'}
              alt="QR Code"
            />
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
            placeholder="Your message"
            multiLine
            rows={10}
            required
          />
        </FieldTemplate>
        <div className={styles.SubmitButton}>
          <ButtonStandard className={styles.SubmitButton} type="submit">
            <Type className={styles.ButtonText} size="displayTiny">
              Contact
            </Type>
          </ButtonStandard>
        </div>
      </form>
    </div>
  )
}

Contact.propTypes = {
  ctaLabel: string
}

export default Contact
