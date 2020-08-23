import React, { cloneElement, useState } from 'react'
import { node } from 'prop-types'

import Modal from '../Modal'

const ModalWithTrigger = ({ trigger, ...other }) => {
  const [open, toggleOpen] = useState(false)

  const handleToggleOpen = () => {
    toggleOpen(!open)
  }

  return (
    <>
      {cloneElement(trigger, { onClick: handleToggleOpen })}
      <Modal open={open} onClose={handleToggleOpen} {...other} />
    </>
  )
}

ModalWithTrigger.defaultProps = {}

ModalWithTrigger.propTypes = {
  trigger: node.isRequired
}

export default ModalWithTrigger
