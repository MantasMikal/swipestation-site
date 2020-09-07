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
import Sponsors from 'Section/Sponsors'
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
      mobileHero {
        asset {
          fluid(maxWidth: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
      features {
        title
        _rawDescription
        features {
          title
          _rawDescription
          image {
            asset {
              fluid(maxWidth: 700) {
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
        title
        _rawDescription
        image {
          alt
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _rawExcerpt(resolveReferences: { maxDepth: 10 })
      }
      video {
        title
        video {
          videoType
          videoId
          caption
          alt
        }
      }
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
      contactSection {
        title
        _rawDescription
        email
        phone
        address
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
    sponsors,
    featuredCaseStudy,
    goCashless,
    video
  } = home

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
      {features && (
        <Features
          title={features.title}
          description={features._rawDescription}
          features={features.features}
        />
      )}
      {video && <Video {...video} />}
      {tillComparison && (
        <TillComparison
          title={tillComparison.title}
          description={tillComparison._rawDescription}
        />
      )}
      {goCashless && (
        <GoCashless
          title={goCashless.title}
          description={goCashless._rawDescription}
        />
      )}
      {featuredCaseStudy && (
        <FeaturedCaseStudy
          title={featuredCaseStudy.title}
          description={featuredCaseStudy._rawDescription}
          excerpt={featuredCaseStudy._rawExcerpt}
          image={featuredCaseStudy.image}
        />
      )}
      {postNodes.length > 0 && (
        <BlogPostCarouselSection
          postNodes={postNodes}
          browseMoreHref="/news/"
          title="Latest news"
        />
      )}
      {sponsors && (
        <Sponsors
          title={sponsors.title}
          description={sponsors._rawDescription}
          sponsors={sponsors.sponsors}
        />
      )}
      {contactSection && <Contact {...contactSection} />}
    </Layout>
  )
}

export default IndexPage
