import React, { useRef } from 'react'
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
  // const isTablet = useMedia('(max-width: 960px)')
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
        <Pints name={title} pints={pints} shouldAnimate={isOnScreen} />
      </div>
    </div>
  )
}

// Animates pints on the screen
const Pints = ({ pints, shouldAnimate }) => {
  return pints.map((item, i) => (
    <div
      className={classNames(styles.Pint, shouldAnimate && styles.animatePint)}
      key={item.key}
      style={{ animationDelay: `${i * 10}ms` }}
    >
      <Icon
        type="glass"
        width={8}
        height={15}
        className={styles.GlassIcon}
        a11yText="Pint"
      />
    </div>
  ))
}
