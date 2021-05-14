import React from 'react'
import { graphql } from 'gatsby'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Sponsors, { Testimonials } from 'Section/Sponsors'
import { mapEdgesToNodes } from 'libs/helpers'
import Container from 'Primitive/Container'

export const query = graphql`
  query Clients {
    page: allSanityClientPage {
      edges {
        node {
          sponsorList {
            title
            _rawDescription
            sponsors {
              title
              _rawDescription
              sponsors {
                isFeatured
                name
                url
                quoteHeading
                quoteBody
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
      }
    }
  }
`

const Clients = (props) => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = (data || {}).page ? mapEdgesToNodes(data.page) : []
  const { sponsorList } = page[0]

  if (!page) {
    throw new Error(
      'Missing "Clients" page data. Open the studio at http://localhost:3333 and add "Clients" page data and restart the development server.'
    )
  }

  const allSponsors =
    sponsorList &&
    sponsorList.sponsors.map((sponsorCat) => sponsorCat.sponsors).flat()

  return (
    <Layout shouldHaveSpaceForNav disableFooterOverlay>
      <SEO title="Clients" slug="/clients" />
      <Container spacious>
        {sponsorList && <Sponsors {...sponsorList} />}
        {sponsorList && (
          <Testimonials title="Testimonials" sponsors={allSponsors} />
        )}
      </Container>
    </Layout>
  )
}

export default Clients
