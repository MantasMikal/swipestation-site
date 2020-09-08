import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

const NotFoundPage = () => (
  <Layout shouldHaveSpaceForNav disableFooterOverlay>
    <SEO title="404: Not found" slug={'/404'} />
    <Container size="wide" center gutter spacious as="section">
      <div style={{ marginTop: '80px' }} />
      <Type as="h1" size="displayLarge">
        Not found
      </Type>
      <Type as="p" size="baseLarge">
        You just hit a route that doesn&#39;t exist... the sadness.
      </Type>
    </Container>
  </Layout>
)

export default NotFoundPage
