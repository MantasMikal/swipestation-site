import React from 'react'
import useMedia from 'lib/use-media'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel'
import classNames from 'classnames'
import Icon from 'Primitive/Icon'

import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from './Carousel.module.scss'

const Carousel = (props) => {
  const isTablet = useMedia('(max-width: 960px)')
  const isPhone = useMedia('(max-width: 600px)')
  const slidesToShow = isTablet ? (isPhone ? 1 : 2) : 3

  return (
    <CarouselProvider
      naturalSlideWidth={500}
      naturalSlideHeight={500}
      totalSlides={props.children.length + 1}
      visibleSlides={slidesToShow || 3}
      isIntrinsicHeight
      className={styles.Carousel}
      dragStep={!isPhone && !isTablet ? 3 : 1}
      step={slidesToShow || 3}
    >
      <Slider moveThreshold={0.5} className={styles.Slider}>
        {props.children.map((child, i) => (
          <Slide key={`Slide-${i}`} className={styles.Slide} index={i}>
            {child}
          </Slide>
        ))}
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
  )
}
export default Carousel
