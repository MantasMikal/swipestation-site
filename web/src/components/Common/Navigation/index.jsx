import React, { useState, useEffect } from 'react'
import { func, bool, string, object, node } from 'prop-types'
import classnames from 'classnames'
import debounce from 'libs/debounce'

import Type from 'Primitive/Type'
import Icon from 'Primitive/Icon'
import SmartLink from 'Primitive/SmartLink'
import Image from 'Primitive/Image'
import Container from 'Primitive/Container'

import styles from './Navigation.module.scss'

const MemoImage = React.memo(Image)

const Navigation = ({
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  hideBrandingBg,
  logo,
  id
}) => {
  return (
    <Container
      as="nav"
      gutter
      size="wide"
      center
      className={classnames(styles.Root)}
      id={id}
    >
      <h1 hidden>{siteTitle}</h1>
      <div className={styles.Branding}>
        <SmartLink to="/">
          <MemoImage
            image={logo}
            className={styles.Logo}
            alt={siteTitle}
            loading="eager"
          />
        </SmartLink>
      </div>
      <div className={styles.Links}>
        <LinkWrapper to="/#contact" className={styles.NavLink}>
          Contact
        </LinkWrapper>
        <LinkWrapper className={styles.NavLink} to="/about/">
          About
        </LinkWrapper>
        <LinkWrapper className={styles.NavLink} to="/faqs/">
          FAQs
        </LinkWrapper>
        <LinkWrapper className={styles.NavLink} to="/case-study">
          Case Study
        </LinkWrapper>
        <LinkWrapper className={styles.NavLink} to="/clients/">
          Clients
        </LinkWrapper>
        <LinkWrapper className={styles.NavLink} to="/news/">
          News
        </LinkWrapper>
        <LinkWrapper className={styles.NavLink} to="/covid/">
          Covid
        </LinkWrapper>
        <button
          className={styles.ToggleNavButton}
          onClick={showNav ? onHideNav : onShowNav}
        >
          {showNav ? (
            <Icon a11yText="Close" type="close" width={24} height={24} />
          ) : (
            <Icon a11yText="Open Menu" type="menu" width={24} height={24} />
          )}
        </button>
      </div>
    </Container>
  )
}

Navigation.propTypes = {
  onHideNav: func,
  onShowNav: func,
  showNav: bool,
  siteTitle: string,
  logo: object,
  id: string,
  hideBrandingBg: bool
}

export default Navigation

const LinkWrapper = ({ children, to, className, highlight, ...other }) => (
  <SmartLink
    className={classnames(className, highlight && styles.highlight)}
    to={to}
    {...other}
  >
    <Type as="span" size="menu">
      {children}
    </Type>
  </SmartLink>
)

LinkWrapper.propTypes = {
  children: node,
  to: string,
  className: string,
  highlight: string
}
