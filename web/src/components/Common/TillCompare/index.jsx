import React, { useRef, useState, useEffect } from 'react'
import classNames from 'classnames'
import useOnScreen from 'libs/use-on-screen'

import Icon from 'Primitive/Icon'
import Type from 'Primitive/Type'

import styles from './TillCompare.module.scss'

const TillCompare = () => {
  return (
    <div className={styles.TillCompare}>
      <Till title="Regular till" pintCount={168} />
      <Till
        title="SwipeStation Fast Lane"
        className={styles.SwipeStationTill}
        pintCount={355}
      />
    </div>
  )
}

TillCompare.propTypes = {}

export default TillCompare

// Wrapper for till
const Till = ({ title, className, pintCount }) => {
  const ref = useRef()
  const [isDone, setIsDone] = useState(false)
  const onScreen = useOnScreen(ref, '-7%')
  return (
    <div ref={ref} className={classNames(styles.Till, className)}>
      <Type className={styles.TillTitle} as="h4" size="displayMedium">
        {title}
      </Type>
      <div className={styles.Server}>
        <div className={styles.Person}>
          <Icon
            width={70}
            height={70}
            className={styles.PersonIcon}
            type="person"
            a11yText="Server"
          />
          <Type className={styles.PersonLabel} size="displayTiny">
            1 server
          </Type>
        </div>
        <Type size="titleMedium">{pintCount} Pints</Type>
      </div>
      <div className={styles.PintsWrapper}>
        {(onScreen || isDone) && (
          <Pints
            name={title}
            pintCount={pintCount}
            title={title}
            shouldAnimate={onScreen}
            handleFinish={() => setIsDone(true)}
          />
        )}
      </div>
    </div>
  )
}

// Animates pints on the screen
const Pints = ({ pintCount, title, handleFinish, shouldAnimate }) => {
  // Don't repeat animations when on screen again
  useEffect(() => {
    if (shouldAnimate) {
      handleFinish()
    }
  }, [shouldAnimate, handleFinish])

  return Array(pintCount)
    .fill()
    .map((_, i) => (
      <div
        key={`Pint-${i}-${title}`}
        style={{
          animationDelay: `${i * 19}ms`,
          animationDuration: `${80 + i * 0.2}ms`
        }}
        className={styles.Pint}
      >
        <Icon
          type="glass"
          width={17}
          height={28}
          className={styles.GlassIcon}
          a11yText="Pint"
        />
      </div>
    ))
}
