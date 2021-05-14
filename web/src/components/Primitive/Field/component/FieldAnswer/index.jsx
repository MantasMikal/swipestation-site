import React from 'react'
import { node } from 'prop-types'

const FieldAnswer = ({ children }) => <div>{children}</div>

FieldAnswer.propTypes = {
  children: node.isRequired
}

export default FieldAnswer
