import React, { useRef, useState, useEffect } from 'react'
import { node } from 'prop-types'
import { useSpring, animated } from 'react-spring'
import useOnScreen from 'libs/use-on-screen'
import { easeCubicOut } from 'd3-ease'

import Type from 'Primitive/Type'

import styles from './Diagram.module.scss'

const BarBlock = ({ number, width, color }) => (
  <div className={styles.Bar} style={{ width: width, backgroundColor: color }}>
    <Type className={styles.Number} size="displayTiny">
      {number}
    </Type>
    <Type className={styles.Label} size="displayTiny">
      seconds
    </Type>
  </div>
)

const Bar = ({ bars, label, delay, shouldAnimate, onFinish, duration }) => {
  const bar = useSpring({
    from: {
      transform: 'translate(-100%)'
    },
    to: {
      transform: 'translate(0%)'
    },
    delay: 0,
    config: {
      duration: duration,
      easing: easeCubicOut
    }
  })

  useEffect(() => {
    if (shouldAnimate) {
      onFinish && onFinish()
    }
  }, [shouldAnimate, onFinish])

  return (
    <animated.div style={bar} className={styles.BarWrapper}>
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
    </animated.div>
  )
}

const Diagram = () => {
  const diagramRef = useRef()
  const onScreen = useOnScreen(diagramRef, '-7%')
  const [isDone, setIsDone] = useState(false)

  return (
    <div ref={diagramRef} className={styles.Diagram}>
      <div className={styles.Wrapper}>
        {(isDone || onScreen) && (
          <Bar
            bars={[{ number: 15, width: '25%', color: '#ffba00' }]}
            label="Swipestation Click'n Collect"
            delay={0}
            duration={1000}
            shouldAnimate={onScreen}
            onFinish={() => setIsDone(true)}
          />
        )}
      </div>

      <div className={styles.Wrapper}>
        {(isDone || onScreen) && (
          <Bar
            bars={[
              { number: 15, width: '25%', color: '#ffba00' },
              { number: 10, width: '12%', color: '#A4EDFF' }
            ]}
            label="Free Bar!"
            delay={100}
            duration={1500}
            shouldAnimate={onScreen}
          />
        )}
      </div>

      <div className={styles.Wrapper}>
        {(isDone || onScreen) && (
          <Bar
            bars={[
              { number: 15, width: '25%', color: '#ffba00' },
              { number: 15, width: '25%', color: '#CE74BF' }
            ]}
            label="Other mobile Payment providers"
            delay={500}
            duration={2000}
            shouldAnimate={onScreen}
          />
        )}
      </div>

      <div className={styles.Wrapper}>
        {(isDone || onScreen) && (
          <Bar
            bars={[
              { number: 15, width: '25%', color: '#ffba00' },
              { number: 10, width: '12%', color: '#E6E6E6' },
              { number: 15, width: '25%', color: '#CE74BF' },
              { number: 10, width: '12%', color: '#A4EDFF' }
            ]}
            label="Contactless"
            delay={200}
            duration={2200}
            shouldAnimate={onScreen}
          />
        )}
      </div>

      <div className={styles.Wrapper}>
        {(isDone || onScreen) && (
          <Bar
            bars={[
              { number: 15, width: '25%', color: '#ffba00' },
              { number: 20, width: '30%', color: '#E6E6E6' },
              { number: 15, width: '25%', color: '#CE74BF' },
              { number: 10, width: '12%', color: '#A4EDFF' }
            ]}
            label="Cash"
            delay={300}
            duration={2500}
            shouldAnimate={onScreen}
          />
        )}
      </div>
    </div>
  )
}

Diagram.propTypes = {
  children: node.isRequired
}

export default Diagram
