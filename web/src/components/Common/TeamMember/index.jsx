import React from 'react'
import { node } from 'prop-types'

import Image from 'Primitive/Image'
import Type from 'Primitive/Type'
import ModalWithTrigger from 'Primitive/ModalWithTrigger'

import SocialLink from 'Common/Footer/component/SocialLink'

import styles from './TeamMember.module.scss'
import BlockText from 'Common/BlockText'

export const Card = ({ name, position, image, social, onClick }) => (
  <div className={styles.TeamMember} onClick={onClick}>
    <div className={styles.ImageWrapper}>
      <Image className={styles.Image} ratio={1} image={image} alt={name} />
    </div>

    <div className={styles.Details}>
      <Type className={styles.Name} size="subtitle" bold>
        {name}
      </Type>
      <Type className={styles.Position} size="base">
        {position}
      </Type>
      <div className={styles.SocialLinks}>
        {social &&
          social.map((soc, i) => (
            <div
              className={styles.SocialLink}
              key={`Social-link-${soc.url}-${i}`}
            >
              <SocialLink type={soc.type.toLowerCase()} url={soc.url} />
            </div>
          ))}
      </div>
    </div>
  </div>
)

export const Page = (props) => {
  const { name, position, image, _rawDescription, social } = props
  return (
    <div className={styles.Page}>
      <div className={styles.PageImage}>
        <Image image={image} alt={name} ratio={1} />
      </div>
      <Type className={styles.Name} size="subtitle" bold>
        {name}
      </Type>
      <Type className={styles.Position} size="base">
        {position}
      </Type>
      <div className={styles.Description}>
        <BlockText blocks={_rawDescription} />
      </div>
      <div className={styles.SocialLinks}>
        {social &&
          social.map((soc, i) => (
            <div
              className={styles.SocialLink}
              key={`Social-link-${soc.url}-${i}`}
            >
              <SocialLink type={soc.type.toLowerCase()} url={soc.url} />
            </div>
          ))}
      </div>
    </div>
  )
}
