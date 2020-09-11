import React, { useRef, useState, useEffect } from 'react'
import { useChain, useTransition, animated, config } from 'react-spring'
import classNames from 'classnames'
import useOnScreen from 'libs/use-on-screen'

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

  return (
    <div className={styles.TillCompare}>
      <Till title="Regular till" pints={regularTillPints} pintCount={168} />
      <Till
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
const Till = ({ title, className, pints, pintCount }) => {
  const ref = useRef()
  const [isDone, setIsDone] = useState(false)
  const onScreen = useOnScreen(ref, '0%')

  return (
    <div ref={ref} className={classNames(styles.Till, className)}>
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
        {(onScreen || isDone) && (
          <Pints
            name={title}
            pints={pints}
            shouldAnimate={onScreen}
            handleFinish={() => setIsDone(true)}
          />
        )}
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
    trail: 15,
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
