import React from 'react'
import { string, array } from 'prop-types'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import BlockText from 'Common/BlockText'

import Image from 'Primitive/Image'
import SmartLink from 'Primitive/SmartLink'
import SponsorCarousel from 'Common/SponsorCarousel'

import styles from './Sponsors.module.scss'

const Sponsors = ({ sponsors, title, _rawDescription }) => {
  console.log('🚀 ~ file: index.jsx ~ line 15 ~ Sponsors ~ sponsors', sponsors)
  return (
    <Container gutter size="wide" center className={styles.Sponsors}>
      <Type size="displayLarge" as="h3" className={styles.Title}>
        {title}
      </Type>
      {_rawDescription && (
        <div className={styles.MainDescription}>
          <BlockText blocks={_rawDescription} size="baseLarge" />
        </div>
      )}
      {sponsors &&
        sponsors.map(
          (sponsor, i) =>
            sponsor && (
              <SponsorsRow
                key={`Sponsors-${i}`}
                title={sponsor.title}
                description={sponsor._rawDescription}
                sponsors={sponsor.sponsors}
              />
            )
        )}
    </Container>
  )
}

export const Testimonials = ({
  title,
  description,
  sponsors,
  withTestimonials
}) => {
  return (
    <Container size="wide" center spacious gutter>
      <Type size="displayEditorSmall" as="h4" className={styles.Title}>
        {title}
      </Type>
      {description && (
        <div className={styles.Description}>
          <BlockText blocks={description} size="baseLarge" />
        </div>
      )}
      {withTestimonials && (
        <div className={styles.SponsorCarousel}>
          <SponsorCarousel
            sponsors={sponsors.filter((sponsor) => sponsor.isFeatured)}
          />
        </div>
      )}
    </Container>
  )
}

export const SponsorsRow = ({
  title,
  description,
  sponsors,
  withTestimonials
}) => {
  return (
    <Container size="full" center spacious noBottomSpace>
      <Type size="displayEditorSmall" as="h4" className={styles.Title}>
        {title}
      </Type>
      {description && (
        <div className={styles.Description}>
          <BlockText blocks={description} size="baseLarge" />
        </div>
      )}
      {withTestimonials && (
        <div className={styles.SponsorCarousel}>
          <SponsorCarousel
            sponsors={sponsors.filter((sponsor) => sponsor.isFeatured)}
          />
        </div>
      )}
      {!withTestimonials && (
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
      )}
    </Container>
  )
}

SponsorsRow.propTypes = {
  title: string,
  description: array
}

export default Sponsors
