import React, { useRef } from 'react'
import { node } from 'prop-types'
import classNames from 'classnames'
import useOnScreen from 'libs/use-on-screen'

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

const Bar = ({ bars, label, duration }) => {
  return (
    <div
      className={classNames(styles.BarWrapper, styles.animateBar)}
      style={{ animationDuration: `${duration * 5}ms` }}
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
        {onScreen && (
          <Bar
            bars={[{ number: 15, width: '25%', color: '#ffba00' }]}
            label="Swipestation Click & Collect"
            duration={150}
          />
        )}
      </div>

      <div className={styles.Wrapper}>
        {onScreen && (
          <Bar
            bars={[
              { number: 15, width: '25%', color: '#ffba00' },
              { number: 10, width: '12%', color: '#A4EDFF' }
            ]}
            label="Free Bar!"
            duration={250}
          />
        )}
      </div>

      <div className={styles.Wrapper}>
        {onScreen && (
          <Bar
            bars={[
              { number: 15, width: '25%', color: '#ffba00' },
              { number: 15, width: '25%', color: '#CE74BF' }
            ]}
            label="Other mobile Payment providers"
            duration={300}
          />
        )}
      </div>

      <div className={styles.Wrapper}>
        {onScreen && (
          <Bar
            bars={[
              { number: 15, width: '25%', color: '#ffba00' },
              { number: 10, width: '12%', color: '#7289DA' },
              { number: 15, width: '25%', color: '#CE74BF' },
              { number: 10, width: '12%', color: '#A4EDFF' }
            ]}
            label="Contactless"
            duration={500}
          />
        )}
      </div>

      <div className={styles.Wrapper}>
        {onScreen && (
          <Bar
            bars={[
              { number: 15, width: '25%', color: '#ffba00' },
              { number: 20, width: '30%', color: '#7289DA' },
              { number: 15, width: '25%', color: '#CE74BF' },
              { number: 10, width: '12%', color: '#A4EDFF' }
            ]}
            label="Cash"
            duration={600}
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
