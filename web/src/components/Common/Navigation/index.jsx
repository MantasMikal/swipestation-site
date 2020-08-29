import React from 'react'
import { func, bool, string, object, node } from 'prop-types'
import classnames from 'classnames'
import debounce from 'libs/debounce'

import Type from 'Primitive/Type'
import Icon from 'Primitive/Icon'
import SmartLink from 'Primitive/SmartLink'
import Image from 'Primitive/Image'
import Container from 'Primitive/Container'

import styles from './Navigation.module.scss'

class Navigation extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      prevScrollPos: typeof window !== 'undefined' ? window.pageYOffset : 0,
      visible: true
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  // Hide or show the menu.
  handleScroll = debounce(() => {
    const { prevScrollPos } = this.state

    const currentScrollPos =
      typeof window !== 'undefined' ? window.pageYOffset : 0
    const visible = prevScrollPos > currentScrollPos

    this.setState({
      prevScrollPos: currentScrollPos,
      visible
    })
  }, 10)

  render() {
    const { onHideNav, onShowNav, showNav, siteTitle, logo, id } = this.props
    const { visible } = this.state
    return (
      <Container
        as="nav"
        gutter
        size="wide"
        center
        className={classnames(
          styles.Root,
          showNav && styles.showNav,
          !visible && styles.hidden
        )}
        id={id}
      >
        <h1 hidden>{siteTitle}</h1>
        <div className={styles.Branding}>
          <SmartLink to="/">
            <Image image={logo} className={styles.Logo} alt={siteTitle} />
          </SmartLink>
        </div>
        <div className={styles.Links}>
          <LinkWrapper className={styles.NavLink} to="/contact/">
            Contact
          </LinkWrapper>
          <LinkWrapper className={styles.NavLink} to="/about/">
            About
          </LinkWrapper>
          {/* <div className={styles.Dropdown}>
          <SmartLink className={styles.DropdownBtn}>
            <Type as="span" size="menu">
              SubNav
            </Type>
          </SmartLink>
          <div className={styles.DropdownContent}>
            <LinkWrapper
              className={classnames(styles.NavLink, styles.DropdownLink)}
              to="/"
            >
              Sub Nav 1
            </LinkWrapper>
            <LinkWrapper
              className={classnames(styles.NavLink, styles.DropdownLink)}
              to="/"
            >
              SubNav 2
            </LinkWrapper>
            <LinkWrapper
              className={classnames(styles.NavLink, styles.DropdownLink)}
              to="/"
            >
              SubNav 3
            </LinkWrapper>
          </div>
        </div> */}
          <LinkWrapper className={styles.NavLink} to="/faqs/">
            FAQs
          </LinkWrapper>
          <LinkWrapper className={styles.NavLink} to="/faqs/">
            News
          </LinkWrapper>
          <LinkWrapper className={styles.NavLink} to="/faqs/">
            Case Study
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
}

Navigation.propTypes = {
  onHideNav: func,
  onShowNav: func,
  showNav: bool,
  siteTitle: string,
  logo: object,
  id: string
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
