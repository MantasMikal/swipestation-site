import React from 'react'

import { graphql } from 'gatsby'
import FAQs from 'Section/FAQs'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query FAQPageQuery {
    page: sanityFaqPage(_id: { regex: "/(drafts.|)faqPage/" }) {
      id
      title
      _rawDescription
      _rawBody
      faqs {
        category
        faqs {
          question
          _rawAnswer
        }
      }
    }
  }
`

const AboutPage = (props) => {
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
      'Missing "Faq" page data. Open the studio at http://localhost:3333 and add "Faq" page data and restart the development server.'
    )
  }

  return (
    <Layout shouldHaveSpaceForNav disableFooterOverlay>
      <SEO title={page.title} slug="/faqs" />
      <FAQs
        title={page.title}
        description={page._rawDescription}
        faqs={page.faqs}
        body={page._rawBody}
      />
    </Layout>
  )
}

export default AboutPage
