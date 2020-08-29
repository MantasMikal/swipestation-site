import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../libs/helpers'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Hero from 'Common/Hero'
import BlogPostCarouselSection from 'Section/BlogPostCarousel'
import BlockSection from 'Section/Block'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    home: sanityHomePage(_id: { regex: "/(drafts.|)homePage/" }) {
      title
      subtitle
      _rawSections(resolveReferences: { maxDepth: 10 })
      minutesSaved
      mobileHero {
        asset {
          fluid(maxWidth: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }

    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { isFeatured: { eq: true } }
    ) {
      edges {
        node {
          id
          publishedAt
          isFeatured
          mainImage {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
          category {
            color {
              hex
            }
            title
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = (props) => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  console.log(data)

  const site = (data || {}).site
  const home = (data || {}).home

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  if (!home) {
    throw new Error(
      'Missing "Home content". Open the studio at http://localhost:3333 and add some content to "Pages/Home" and restart the development server.'
    )
  }

  const { title, subtitle, _rawSections, mobileHero, minutesSaved } = home

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <h1 hidden>Welcome to {site.title}</h1>
      {home && (
        <Hero
          title={title}
          mobileHero={mobileHero}
          subtitle={subtitle}
          minutesSaved={minutesSaved}
        />
      )}
      {_rawSections &&
        _rawSections.map((section) => (
          <div key={section._key}>
            <BlockSection blockContent={section.body} title={section.title} />
          </div>
        ))}
      {postNodes.length > 0 && (
        <BlogPostCarouselSection
          postNodes={postNodes}
          browseMoreHref="/blog/"
          title="Featured blog posts"
        />
      )}
    </Layout>
  )
}

export default IndexPage
