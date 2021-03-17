import React from 'react'
import { graphql } from 'gatsby'

import BlockSection from 'Section/Block'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import FeaturedCaseStudy from 'Section/FeaturedCaseStudy'
import CaseStudySection from 'Section/CaseStudy'

export const query = graphql`
  query CaseStudy {
    caseStudies: allSanityCaseStudy {
      edges {
        node {
          _rawBody(resolveReferences: { maxDepth: 10 })
          _rawExcerpt(resolveReferences: { maxDepth: 10 })
          title
          image {
            alt
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

const CaseStudy = (props) => {
  const { data, errors } = props
  console.log('🚀 ~ file: case-study.js ~ line 35 ~ CaseStudy ~ data', data)

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data.caseStudies.edges[0].node

  if (!page) {
    throw new Error(
      'Missing "Case Study" page data. Open the studio at http://localhost:3333 and add "Case Study" page data and restart the development server.'
    )
  }

  return (
    <Layout shouldHaveSpaceForNav disableFooterOverlay>
      <SEO title={page.title} slug="/case-study" />
      <CaseStudySection {...page} />
    </Layout>
  )
}

export default CaseStudy
