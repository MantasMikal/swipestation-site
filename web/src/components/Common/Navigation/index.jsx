import React from "react";
import { cn } from "lib/helpers";

import Type from "Primitive/Type";
import Icon from "Primitive/Icon";
import SmartLink from "Primitive/SmartLink";

import styles from "./Navigation.module.scss";

const LinkWrapper = ({ children, to, className, highlight }) => (
  <SmartLink className={cn(className, highlight && styles.highlight)} to={to}>
    <Type as="span" size="menu">
      {children}
    </Type>
  </SmartLink>
);

const Navigation = ({ onHideNav, onShowNav, showNav, siteTitle, id }) => {
  return (
    <nav className={cn(styles.Root, showNav && styles.showNav)} id={id}>
      <h1 hidden>{siteTitle}</h1>
      <div className={styles.Branding}>
        <SmartLink to="/">
          <img src="/asset/logo.png" className={styles.Logo} />
        </SmartLink>
      </div>
      <LinkWrapper className={styles.NavLink} to="/contact/">
        Contact
      </LinkWrapper>
      <LinkWrapper className={styles.NavLink} to="/blog/">
        Blog
      </LinkWrapper>
      <div className={styles.Dropdown}>
        <button className={styles.DropdownBtn}>
          <Type as="span" size="menu">
            SubNav
          </Type>
        </button>
        <div className={styles.DropdownContent}>
          <LinkWrapper
            className={cn(styles.NavLink, styles.DropdownLink)}
            to="/"
          >
            Sub Nav 1
          </LinkWrapper>
          <LinkWrapper
            className={cn(styles.NavLink, styles.DropdownLink)}
            to="/"
          >
            SubNav 2
          </LinkWrapper>
          <LinkWrapper
            className={cn(styles.NavLink, styles.DropdownLink)}
            to="/"
          >
            SubNav 3
          </LinkWrapper>
        </div>
      </div>
      <LinkWrapper className={styles.NavLink} to="/about/">
        About
      </LinkWrapper>
      <button
        className={styles.ToggleNavButton}
        onClick={showNav ? onHideNav : onShowNav}
      >
        {showNav ? (
          <Icon a11yText="Close" type="close" width={24} height={24} />
        ) : (
          <Icon a11yText="Open Menu" type="burger" width={24} height={24} />
        )}
      </button>
    </nav>
  );
};

export default Navigation;
