import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout/Layout'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      logo {
        asset {
          fluid(maxWidth: 300) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }

    companyInfo: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
      facebookUrl
      twitterUrl
      youtubeUrl
      instagramUrl
    }
  }
`

const LayoutContainer = (props) => {
  const [showNav, setShowNav] = useState(false)
  function handleShowNav() {
    setShowNav(true)
  }
  function handleHideNav() {
    setShowNav(false)
  }

  return (
    <StaticQuery
      query={query}
      render={(data) => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          )
        }
        if (!data.companyInfo) {
          throw new Error(
            'Missing "Company info". Open the studio at http://localhost:3333 and add "Company info" data'
          )
        }
        const social = {
          facebook: data.companyInfo.facebookUrl || null,
          twitter: data.companyInfo.twitterUrl || null,
          youtube: data.companyInfo.youtubeUrl || null,
          instagram: data.companyInfo.instagramUrl || null
        }

        const { site } = data

        return (
          <Layout
            {...props}
            showNav={showNav}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
            siteTitle={site && site.title}
            social={social}
            logo={site && site.logo}
          />
        )
      }}
    />
  )
}

export default LayoutContainer
