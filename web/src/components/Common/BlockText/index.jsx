import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'

import Type from 'Primitive/Type'

const serializers = (size) => ({
  types: {
    block(props) {
      switch (props.node.style) {
        default:
          return (
            <Type as="p" size={size || 'base'}>
              {props.children}
            </Type>
          )
      }
    }
  }
})

const BlockText = ({ blocks, size }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers(size)} />
)

export default BlockText
