import React from 'react'
import { string, array } from 'prop-types'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import BlockText from 'Common/BlockText'

import styles from './Sponsors.module.scss'
import Image from 'Primitive/Image'
import SmartLink from 'Primitive/SmartLink'

const Sponsors = ({ title, description, sponsors }) => {
  return (
    <Container gutter size="wide" center spacious className={styles.Sponsors}>
      <Type size="displayLarge" as="h3" className={styles.Title}>
        {title}
      </Type>
      <div className={styles.Description}>
        <BlockText blocks={description} size="baseLarge" />
      </div>
      <div className={styles.SponsorsWrapper}>
        {sponsors &&
          sponsors.map((sponsor, i) => (
            <SmartLink
              className={styles.Sponsor}
              href={sponsor.url}
              target="__blank"
            >
              <Image
                key={sponsor.name + i}
                image={sponsor.image}
                alt={sponsor.name}
              />
            </SmartLink>
          ))}
      </div>
    </Container>
  )
}

Sponsors.propTypes = {
  title: string,
  description: array
}

export default Sponsors
