import React from 'react'
import { graphql } from 'gatsby'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Sponsors from 'Section/Sponsors'
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
                name
                url
                image {
                  asset {
                    fluid(maxWidth: 300) {
                      ...GatsbySanityImageFluid
                    }
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
  console.log('🚀 ~ file: clients.js ~ line 52 ~ Clients ~ page', page)

  const { sponsorList } = page[0]

  if (!page) {
    throw new Error(
      'Missing "Clients" page data. Open the studio at http://localhost:3333 and add "Clients" page data and restart the development server.'
    )
  }

  return (
    <Layout shouldHaveSpaceForNav disableFooterOverlay>
      <SEO title="Clients" slug="/clients" />
      <Container spacious>
        {sponsorList && <Sponsors {...sponsorList} />}
      </Container>
    </Layout>
  )
}

export default Clients
