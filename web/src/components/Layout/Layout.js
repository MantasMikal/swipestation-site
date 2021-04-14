import React from 'react'
import { bool, func, node, string, object } from 'prop-types'
import classNames from 'classnames'

import Navigation from 'Common/Navigation'
import A11yNavigation from 'Primitive/A11yNavigation'
import Footer from 'Common/Footer'

import styles from './Layout.module.scss'

const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  social,
  logo,
  awards,
  shouldHaveSpaceForNav,
  disableFooterOverlay,
  hideBrandingBg
}) => {
  console.log('RENDER THE LAYOUT')
  return (
    <div
      className={classNames(
        styles.Wrapper,
        shouldHaveSpaceForNav && styles.withNavSpace
      )}
    >
      <A11yNavigation>
        <a href="#content">Jump to main content</a>
        <a href="#navigation">Jump to primary navigation</a>
      </A11yNavigation>
      <Navigation
        siteTitle={siteTitle}
        onHideNav={onHideNav}
        onShowNav={onShowNav}
        showNav={showNav}
        logo={logo}
        hideBrandingBg={hideBrandingBg}
        id="navigation"
      />
      <div className={styles.Content} id="content">
        {children}
      </div>
      <Footer
        social={social}
        logo={logo}
        siteTitle={siteTitle}
        awards={awards}
        disableOverlay={disableFooterOverlay}
      />
    </div>
  )
}

Layout.propTypes = {
  children: node,
  onHideNav: func,
  onShowNav: func,
  showNav: bool,
  siteTitle: string,
  logo: object,
  awards: object
}

export default Layout
