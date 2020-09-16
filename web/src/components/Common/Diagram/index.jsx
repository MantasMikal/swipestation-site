import React, { useRef, useState } from 'react'
import { node } from 'prop-types'
import classNames from 'classnames'

import useOnScreen from 'libs/use-on-screen'
import Type from 'Primitive/Type'

import styles from './Diagram.module.scss'

const BarBlock = ({ number, width, color, style }) => (
  <div
    className={styles.Bar}
    style={{ width: width, backgroundColor: color, ...style }}
  >
    <Type className={styles.Number} size="displayTiny">
      {number}
    </Type>
    <Type className={styles.Label} size="displayTiny">
      seconds
    </Type>
  </div>
)

const Bar = ({ bars, label, delay, shouldAnimate }) => {
  const [isDone, setIsDone] = useState(false)
  return (
    <div
      className={classNames(
        styles.BarWrapper,
        shouldAnimate && styles.animate,
        isDone && styles.isDone
      )}
      style={{ animationDelay: `${delay}ms` }}
      onAnimationEnd={() => setIsDone(true)}
    >
      {bars.map((bar, i) => (
        <BarBlock
          key={`${label}-${i}`}
          number={bar.number}
          width={bar.width}
          color={bar.color}
        />
      ))}
      <Type as="label" size="displayTiny" className={styles.DiagramLabel}>
        {label}
      </Type>
    </div>
  )
}

const Diagram = () => {
  const diagramRef = useRef()
  const onScreen = useOnScreen(diagramRef, '-7%')

  return (
    <div ref={diagramRef} className={styles.Diagram}>
      <div className={styles.Wrapper}>
        <Bar
          bars={[{ number: 15, width: '25%', color: '#ffba00' }]}
          label="Swipestation"
          delay={0}
          shouldAnimate={onScreen}
        />
      </div>

      <div className={styles.Wrapper}>
        <Bar
          bars={[
            { number: 15, width: '25%', color: '#ffba00' },
            { number: 10, width: '12%', color: '#A4EDFF' }
          ]}
          label="Free Bar!"
          delay={250}
          shouldAnimate={onScreen}
        />
      </div>

      <div className={styles.Wrapper}>
        <Bar
          bars={[
            { number: 15, width: '25%', color: '#ffba00' },
            { number: 15, width: '25%', color: '#CE74BF' }
          ]}
          label="Other mobile Payment providers"
          delay={500}
          shouldAnimate={onScreen}
        />
      </div>

      <div className={styles.Wrapper}>
        <Bar
          bars={[
            { number: 15, width: '25%', color: '#ffba00' },
            { number: 10, width: '12%', color: '#E6E6E6' },
            { number: 15, width: '25%', color: '#CE74BF' },
            { number: 10, width: '12%', color: '#A4EDFF' }
          ]}
          label="Contactless"
          delay={750}
          shouldAnimate={onScreen}
        />
      </div>

      <div className={styles.Wrapper}>
        <Bar
          bars={[
            { number: 15, width: '25%', color: '#ffba00' },
            { number: 20, width: '30%', color: '#E6E6E6' },
            { number: 15, width: '25%', color: '#CE74BF' },
            { number: 10, width: '12%', color: '#A4EDFF' }
          ]}
          label="Cash"
          delay={1000}
          shouldAnimate={onScreen}
        />
      </div>
    </div>
  )
}

Diagram.propTypes = {}

export default Diagram
