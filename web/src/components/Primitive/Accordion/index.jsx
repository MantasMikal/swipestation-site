import React, { useState, useRef } from 'react'
import { node } from 'prop-types'
import classNames from 'classnames'

import Type from 'Primitive/Type'

import styles from './Accordion.module.scss'
import Icon from 'Primitive/Icon'

const Accordion = ({ title, content }) => {
  const [isActive, setActive] = useState('')
  const [setHeight, setHeightState] = useState('0px')

  const contentRef = useRef(null)

  const handleToggle = () => {
    setActive(!isActive)
    setHeightState(isActive ? '0px' : `${contentRef.current.scrollHeight}px`)
  }

  return (
    <div
      className={classNames(styles.AccordionWrapper, isActive && styles.active)}
    >
      <button className={styles.Accordion} onClick={() => handleToggle()}>
        <Type size="displayRegular" className={styles.Title}>
          {title}
        </Type>
        <Icon
          type={isActive ? 'minus' : 'plus'}
          width={24}
          height={24}
          className={styles.Icon}
        />
      </button>
      <div
        style={{ maxHeight: `${setHeight}` }}
        ref={contentRef}
        className={styles.Content}
      >
        <div className={styles.ContentInner}>{content}</div>
      </div>
    </div>
  )
}

Accordion.propTypes = {
  children: node.isRequired
}

export default Accordion
