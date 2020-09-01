import React from 'react'
import { bool, func, node, string, object } from 'prop-types'
import classNames from 'classnames'

import Navigation from 'Common/Navigation'
import A11yNavigation from 'Primitive/A11yNavigation'
import Footer from 'Common/Footer'

import styles from './Layout.module.scss'

const sectionsWithSpaceForNav = [
  'news',
  'case-study',
  'faqs',
  'about',
  'contact',
  '404'
]

const shouldHaveSpaceForNav = () => {
  const path =
    typeof window !== 'undefined' ? window.location.pathname.split('/') : ''

  if (path && !path[2] && sectionsWithSpaceForNav.includes(path[1])) {
    return true
  }

  return false
}

const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  social,
  logo,
  awards
}) => {
  return (
    <div
      className={classNames(
        styles.Wrapper,
        shouldHaveSpaceForNav() && styles.withNavSpace
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
