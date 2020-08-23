import React from 'react'
import { node } from 'prop-types'

import Spacer from '.'

const ContentTile = ({ children }) => (
  <div
    style={{
      backgroundColor: 'lightblue',
      height: '80px',
      borderRadius: '5px',
      lineHeight: '16px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center'
    }}
  >
    {children}
  </div>
)

ContentTile.propTypes = {
  children: node
}

export default {
  title: 'Utility/Spacer',
  component: Spacer,
  args: {
    px: 2,
    pt: 1,
    pb: '5px'
  }
}

export const Default = (args) => (
  <Spacer {...args} style={{ outline: '2px dotted lime' }}>
    <ContentTile />
  </Spacer>
)

export const Margin2x = () => (
  <div>
    <Spacer m={2} style={{ outline: '2px dotted lime' }}>
      <ContentTile />
    </Spacer>
    <ContentTile />
  </div>
)

export const Padding2x = () => (
  <div>
    <Spacer p={2} style={{ outline: '2px dotted lime' }}>
      <ContentTile />
    </Spacer>
    <ContentTile />
  </div>
)
