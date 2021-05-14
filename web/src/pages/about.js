import React from 'react'
import { graphql } from 'gatsby'

import BlockSection from 'Section/Block'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Team from 'Section/Team'

export const query = graphql`
  query AboutPageQuery {
    page: sanityAboutPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      _rawBody(resolveReferences: { maxDepth: 5 })
      team {
        title
        _rawDescription
        team {
          name
          position
          _rawDescription
          social {
            type
            url
          }
          image {
            asset {
              url
              _id
            }
          }
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
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  const { team } = page

  return (
    <Layout shouldHaveSpaceForNav disableFooterOverlay>
      <SEO title={page.title} slug="/about" />
      <BlockSection title={page.title} blockContent={page._rawBody || []} />
      {/* <Locations
        title={locations.title}
        description={locations._rawDescription}
        locations={locations.locations && locations.locations}
      /> */}
      <Team
        team={team.team}
        title={team.title}
        description={team._rawDescription}
      />
    </Layout>
  )
}

export default AboutPage
