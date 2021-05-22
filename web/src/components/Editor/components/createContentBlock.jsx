import React from 'react'
import BlockContent from '../index'

const createContentBlock = (block) => {
  const margin = block.margin ? { margin: `${block.margin}` } : null
  const padding = block.padding ? { padding: `${block.padding}` } : null
  const border = block.border ? { border: `${block.border}` } : null

  const styles = Object.assign({}, padding, margin, border, { width: '100%' })
  return block.contentBlock ? (
    <div key={block._key || block._id} style={styles}>
      <BlockContent blocks={block.contentBlock} />
    </div>
  ) : null
}

export default createContentBlock
