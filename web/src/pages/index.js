import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../libs/helpers'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Hero from 'Common/Hero'
import BlogPostCarouselSection from 'Section/BlogPostCarousel'
import Features from 'Section/Features'
import TillComparison from 'Section/TillComparison'
import Contact from 'Section/Contact'
import FeaturedCaseStudy from 'Section/FeaturedCaseStudy'
import GoCashless from 'Section/GoCashless'
import Video from 'Section/Video'

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
      minutesSaved
      features {
        title
        _rawDescription
        features {
          title
          _rawDescription
          smallTitle
          image {
            asset {
              mimeType
              url
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      tillComparison {
        title
        _rawDescription
      }
      goCashless {
        title
        _rawDescription
      }
      featuredCaseStudy {
        _rawDescription
        caseStudy {
          title
          _rawExcerpt(resolveReferences: { maxDepth: 10 })
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

      contactSection {
        title
        _rawDescription
        email
        phone
        address
        ctaLabel
        calendlyUrl
        salesDeck {
          asset {
            url
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

  const {
    title,
    subtitle,
    mobileHero,
    minutesSaved,
    features,
    tillComparison,
    contactSection,
    featuredCaseStudy,
    goCashless,
    video
  } = home

  return (
    <Layout hideBrandingBg location={props.location}>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      {home && (
        <Hero
          title={title}
          mobileHero={mobileHero}
          subtitle={subtitle}
          minutesSaved={minutesSaved}
        />
      )}
      {features && (
        <Features
          title={features.title}
          description={features._rawDescription}
          features={features.features}
        />
      )}

      {/* {video && <Video {...video} />} */}
      {goCashless && (
        <GoCashless
          title={goCashless.title}
          description={goCashless._rawDescription}
        />
      )}
      {tillComparison && (
        <TillComparison
          title={tillComparison.title}
          description={tillComparison._rawDescription}
        />
      )}
      {featuredCaseStudy && <FeaturedCaseStudy {...featuredCaseStudy} />}
      {postNodes.length > 0 && (
        <BlogPostCarouselSection
          postNodes={postNodes}
          browseMoreHref="/news/"
          title="Latest news"
        />
      )}
      {contactSection && <Contact {...contactSection} />}
    </Layout>
  )
}

export default IndexPage
