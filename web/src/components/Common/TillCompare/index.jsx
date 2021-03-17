import React, { useRef, useState, useEffect } from 'react'
import { useChain, useTransition, animated, config } from 'react-spring'
import classNames from 'classnames'
import useOnScreen from 'libs/use-on-screen'
import useMedia from 'hooks/useMedia'
import Icon from 'Primitive/Icon'
import Type from 'Primitive/Type'

import styles from './TillCompare.module.scss'

const TillCompare = () => {
  const regularTillPints = Array(168)
    .fill()
    .map((_, i) => ({ key: `regular-${i}` }))
  const swipeStationPints = Array(355)
    .fill()
    .map((_, i) => ({ key: `regular-${i}` }))

  const ref = useRef()
  const onScreen = useOnScreen(ref, '150px')

  return (
    <div ref={ref} className={styles.TillCompare}>
      <Till
        isOnScreen={onScreen}
        title="Regular till"
        pints={regularTillPints}
        pintCount={168}
      />
      <Till
        isOnScreen={onScreen}
        title="SwipeStation Fast Lane"
        className={styles.SwipeStationTill}
        pints={swipeStationPints}
        pintCount={355}
      />
    </div>
  )
}

TillCompare.propTypes = {}

export default TillCompare

// Wrapper for till
const Till = ({ title, className, pints, pintCount, isOnScreen }) => {
  const [isDone, setIsDone] = useState(false)
  const isTablet = useMedia('(max-width: 960px)')

  return (
    <div className={classNames(styles.Till, className)}>
      <Type className={styles.TillTitle} as="h4" size="displayMedium">
        {title}
      </Type>
      <div className={styles.Server}>
        <div className={styles.Person}>
          <Icon
            width={30}
            height={30}
            className={styles.PersonIcon}
            type="person"
            a11yText="Server"
          />
          <Type className={styles.PersonLabel} size="displayTiny">
            1 server
          </Type>
        </div>
        <Type className={styles.PintCount} size="displayTiny">
          {pintCount} Pints
        </Type>
      </div>
      <div className={styles.PintsWrapper}>
        {(isOnScreen || isDone) && !isTablet && (
          <Pints
            name={title}
            pints={pints}
            shouldAnimate={isOnScreen}
            handleFinish={() => setIsDone(true)}
          />
        )}
        {isTablet && <PintsNoAnimation pints={pints} />}
      </div>
    </div>
  )
}

// Animates pints on the screen
const Pints = ({ pints, handleFinish, shouldAnimate }) => {
  const transRef = useRef()
  const transitions = useTransition(pints, (item) => item.key, {
    ref: transRef,
    unique: true,
    trail: 8,
    from: { opacity: '0', transform: 'scale(0.6) translateY(20px)' },
    enter: { opacity: '1', transform: 'scale(1) translateY(0px)' },
    config: { ...config.stiff, precision: 0.1 }
  })

  useEffect(() => {
    if (shouldAnimate) {
      handleFinish()
    }
  }, [shouldAnimate, handleFinish])

  useChain([transRef], [0])

  return transitions.map(({ item, props, key }) => (
    <animated.div className={styles.Pint} key={key} style={props}>
      <Icon
        type="glass"
        width={8}
        height={15}
        className={styles.GlassIcon}
        a11yText="Pint"
      />
    </animated.div>
  ))
}

const PintsNoAnimation = ({ pints }) =>
  pints.map((p) => (
    <div className={styles.Pint} key={p.key}>
      <Icon
        type="glass"
        width={8}
        height={15}
        className={styles.GlassIcon}
        a11yText="Pint"
      />
    </div>
  ))
