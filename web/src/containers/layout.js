import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../components/Layout/Layout'
import useScript from 'hooks/useScript'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      logo {
        asset {
          url
          _id
        }
      }
    }

    companyInfo: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
      facebookUrl
      twitterUrl
      linkedinUrl
      instagramUrl
    }

    awards: sanityAwards(_id: { regex: "/(drafts.|)awards/" }) {
      trustpilotReview {
        url
        image {
          asset {
            url
            _id
          }
        }
      }

      allAwards {
        title
        url
        image {
          asset {
            url
            _id
          }
        }
      }
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

  useScript(`
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2355349,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`)
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          )
        }

        const social = data.companyInfo
          ? {
              facebook: data.companyInfo.facebookUrl || null,
              twitter: data.companyInfo.twitterUrl || null,
              linkedin: data.companyInfo.linkedinUrl || null,
              instagram: data.companyInfo.instagramUrl || null
            }
          : {}

        const { site, awards } = data

        return (
          <>
            <Layout
              {...props}
              showNav={showNav}
              onHideNav={handleHideNav}
              onShowNav={handleShowNav}
              siteTitle={site && site.title}
              social={social}
              logo={site && site.logo}
              awards={awards || {}}
            />
          </>
        )
      }}
    />
  )
}

export default LayoutContainer
