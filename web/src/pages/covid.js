import React from 'react'
import { graphql } from 'gatsby'

import BlockSection from 'Section/Block'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query Covid {
    page: sanityPage(_id: { regex: "/(drafts.|)covid/" }) {
      id
      title
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

const Covid = (props) => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page

  if (!page) {
    throw new Error(
      'Missing "Covid" page data. Open the studio at http://localhost:3333 and add "Covid" page data and restart the development server.'
    )
  }

  return (
    <Layout shouldHaveSpaceForNav disableFooterOverlay>
      <SEO title={page.title} slug="/covid" />
      <BlockSection
        as="h2"
        title={page.title}
        blockContent={page._rawBody || []}
      />
    </Layout>
  )
}

export default Covid
