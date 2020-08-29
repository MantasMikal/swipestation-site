import React from 'react'
import { string, array } from 'prop-types'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './Example.module.scss'
import BlockText from 'Common/BlockText'

const Example = ({ title, description }) => {
  return (
    <Container gutter size="wide" center className={styles.Example}>
      <Type size="displayLarge" as="h3" className={styles.Title}>
        {title}
      </Type>
      <div className={styles.Description}>
        <BlockText blocks={description} />
      </div>
    </Container>
  )
}

Example.propTypes = {
  title: string,
  description: array
}

export default Example
