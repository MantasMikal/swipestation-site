import React from 'react'
import { arrayOf, shape, string, object } from 'prop-types'
import classNames from 'classnames'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel'
import SponsorSlide from './SponsorSlide'
import Icon from 'Primitive/Icon'
import styles from './SponsorCarousel.module.scss'

const SponsorCarousel = ({ sponsors }) => {
  return (
    <div className={styles.SponsorCarousel}>
      <CarouselProvider
        naturalSlideWidth={500}
        naturalSlideHeight={300}
        totalSlides={sponsors.length}
        isIntrinsicHeight
        infinite
      >
        <Slider className={styles.Slider}>
          {sponsors.map(
            (sponsor, i) =>
              sponsor.quoteHeading &&
              sponsor.quoteBody && (
                <Slide key={`Slide-${i}`} className={styles.Slide} index={i}>
                  <SponsorSlide
                    heading={sponsor.quoteHeading}
                    body={sponsor.quoteBody}
                    alt={sponsor.image.alt}
                    image={sponsor.image}
                    url={sponsor.url}
                  />
                </Slide>
              )
          )}
        </Slider>
        <ButtonBack className={classNames(styles.Button, styles.Back)}>
          <Icon
            className={styles.ControlIcon}
            type="chevron-left"
            width={24}
            height={30}
            a11yText="Previous Slide"
          />
        </ButtonBack>
        <ButtonNext className={classNames(styles.Button, styles.Next)}>
          <Icon
            className={styles.ControlIcon}
            type="chevron-right"
            width={24}
            height={30}
            a11yText="Previous Slide"
          />
        </ButtonNext>
      </CarouselProvider>
    </div>
  )
}
SponsorCarousel.propTypes = {
  sponsors: arrayOf(
    shape({
      image: object,
      alt: string,
      heading: string,
      body: string,
      url: string
    })
  )
}

export default SponsorCarousel
