import React from 'react'
import { graphql } from 'gatsby'

import BlockSection from 'Section/Block'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Sponsors from 'Section/Sponsors'
import Team from 'Section/Team'
import Locations from 'Section/Locations'

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
              fluid(maxWidth: 350) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      locations {
        title
        _rawDescription
        locations {
          address
          city
          location {
            lat
            lng
          }
        }
      }
      sponsors {
        title
        _rawDescription
        sponsors {
          name
          url
          isFeatured
          image {
            asset {
              fluid(maxWidth: 350) {
                ...GatsbySanityImageFluid
              }
            }
          }
          quoteHeading
          quoteBody
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

  const { sponsors, team, locations } = page

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
      {sponsors && (
        <Sponsors
          title={sponsors.title}
          description={sponsors._rawDescription}
          sponsors={sponsors.sponsors}
          withTestimonials
        />
      )}
    </Layout>
  )
}

export default AboutPage
