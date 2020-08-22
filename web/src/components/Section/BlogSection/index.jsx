import React from 'react'
import { array } from 'prop-types'

import BlogPostPreview from 'Common/BlogPostPreview'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import MasonryLayout from 'Common/MasonryLayout'

import styles from './BlogSection.module.scss'

const BlogSection = ({ blogNodes }) => {
  let blogposts = []
  for (let i = 0; i < blogNodes.length; i++) {
    blogposts.push(
      <BlogPostPreview
        key={blogNodes[i].id}
        className={styles.BlogPostPreview}
        {...blogNodes[i]}
        surround
      />
    )
  }

  return (
    <Container
      className={styles.Root}
      size="wide"
      center
      gutter
      spacious
      withNavSpace
      as="section"
    >
      <Type as="h1" size="displayLarge" className={styles.Title}>
        Blog
      </Type>
      <MasonryLayout items={blogposts} gap={25} />
    </Container>
  )
}

BlogSection.propTypes = {
  galleryNodes: array
}

export default BlogSection
