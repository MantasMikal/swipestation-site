import React from 'react'

import links from './links'

import List from 'Primitive/List'
import SmartLink from 'Primitive/SmartLink'
import SocialLink from './component/SocialLink'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './Footer.module.scss'
import Media from 'Common/Media'

// TODO
// Use logo from CMS

const Footer = ({ social, logo, siteTitle }) => {

  return (
    <div className={styles.Wrapper}>
      <footer className={styles.Footer}>
        <Container gutter center size='wide' className={styles.Container}>
          <div className={styles.Branding}>
            <SmartLink href='/' className={styles.Logo}>
              <Media media={logo} alt={siteTitle} />
            </SmartLink>
            <div className={styles.Social}>
              <SocialLink type='twitter' url={social.twitter} />
              <SocialLink type='facebook-round' url={social.facebook} />
              <SocialLink type='youtube' url={social.youtube} />
              <SocialLink type='instagram' url={social.instagram} />
            </div>
          </div>
          <div className={styles.LinkListWrapper}>
            {links.map((linkList, i) => (
              <List key={i} className={styles.LinkList}>
                {linkList.map((link, j) => (
                  <SmartLink className={styles.Link} key={j} href={link.url}>
                    <Type size='base'>{link.text}</Type>
                  </SmartLink>
                ))}
              </List>
            ))}
          </div>
        </Container>
      </footer>
    </div>
  )
}
export default Footer
