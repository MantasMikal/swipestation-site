import React from 'react'
import classNames from 'classnames'

import links from './links'

import SmartLink from 'Primitive/SmartLink'
import SocialLink from './component/SocialLink'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import Image from 'Primitive/Image'

import styles from './Footer.module.scss'

const Footer = ({ social, logo, siteTitle, awards, disableOverlay }) => {
  return (
    <Container
      gutter
      className={classNames(
        styles.Wrapper,
        disableOverlay && styles.disableOverlay
      )}
    >
      <div className={styles.ContactOverlay} />
      <div className={styles.FooterOverlay} />
      <footer className={styles.Footer}>
        <Container
          spacious
          gutter
          center
          size="wide"
          className={styles.Container}
        >
          <div className={styles.Branding}>
            <SmartLink href="/" className={styles.Logo}>
              <Image image={logo} alt={siteTitle} />
            </SmartLink>
            <div className={styles.Social}>
              <SocialLink type="twitter--white" url={social.twitter} />
              <SocialLink type="facebook--white" url={social.facebook} />
              <SocialLink type="instagram--white" url={social.instagram} />
              <SocialLink type="linkedin--white" url={social.linkedin} />
            </div>
          </div>
          <div className={styles.LinkListWrapper}>
            {links.map((linkList, i) => {
              return (
                <div key={i} className={styles.LinkList}>
                  {linkList.map((link, j) => (
                    <SmartLink
                      className={styles.Link}
                      key={j}
                      href={link.url}
                      target={link.isExternal && '_blank'}
                    >
                      <Type size="base">{link.text}</Type>
                    </SmartLink>
                  ))}
                </div>
              )
            })}
          </div>
        </Container>
      </footer>
      <Container gutter center className={styles.TrustPilotWrapper} size="wide">
        <SmartLink
          className={styles.TrustPilot}
          href={awards.trustpilotReview.url}
          target="__blank"
        >
          <Image image={awards.trustpilotReview.image} alt="Trustpilot" />
        </SmartLink>
      </Container>
      <Container className={styles.Awards} center gutter size="small">
        {awards.allAwards &&
          awards.allAwards.map((award, i) => (
            <SmartLink
              href={award.url}
              className={styles.Award}
              key={'award-' + i}
            >
              <Image image={award.image} alt={award.title} />
            </SmartLink>
          ))}
      </Container>
      <Type size="small" className={styles.Copyright}>
        Built by{' '}
        <SmartLink href="https://clock.co.uk" target="__blank">
          Clock
        </SmartLink>
      </Type>
      <Type size="small" className={styles.Copyright}>
        Copyright © {new Date().getFullYear()} SwipeStation Limited. All rights
        reserved
      </Type>
    </Container>
  )
}
export default Footer
