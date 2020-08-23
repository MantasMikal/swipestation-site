import React, { useState } from 'react'
// import {} from 'prop-types'

import Toast from '../Toast'

const Toaster = (props) => {
  const [visible, toggleVisible] = useState(true)

  const handleDismiss = () => {
    toggleVisible(false)
  }

  if (!visible) return null
  return <Toast {...props} onDismiss={handleDismiss} />
}

export default Toaster
