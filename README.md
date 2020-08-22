<p align="center">
   <img width="300" src='https://i.imgur.com/GhcxkhC.png'>
</p>
<p align="center">
  An opinionted starter that contains everything you need to quickly ship any type of site.
</p>
<p>
</p>
  <br>
<p align="center">
  <a href="https://github.com/MantasMikal/gatsby-starter-picks/issues">
    <img
      src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"
      alt="Contributions welcome"
    />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img
      src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"
      alt="styled with prettier"
    />
  </a>
  <a href="https://app.netlify.com/sites/gatsby-starter-picks/deploys">
    <img
      src="https://api.netlify.com/api/v1/badges/93ecc1ca-2fd8-427a-96de-245af6e0d17a/deploy-status"
      alt="Netlify Status"
    />
  </a>
  
<p>

<p align="center">
  <img width="500" src="https://i.imgur.com/Md3UTQ9.png" alt="Google lighthouse"/>
</p>

## Demo

[Gatsby Starter Picks](https://gatsby-starter-picks.netlify.com)

## Features

- Sanity.io CMS integration
- SCSS Modules
- Buletproof base level component library to get the boring stuff out of the way
- Useful set of SCSS utility [mixins](https://www.npmjs.com/package/backline-mixins) to aid development
- Storybook integration
- Optimised with Google Lighthouse
- Inline SVG support
- PWA Support
- Sitemap support
- ESLint

## Setup

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/MantasMikal/gatsby-starter-picks)

```
# Install deps
cd gatsby-starter-picks && npm i && npm i -g @sanity/cli gatsby-cli

# Runs out of the box
npm start

# Quickly setup Sanity.io CMS
# Create a project and deploy Graphql API
cd studio && sanity login && sanity init && npm run graphql-deploy

# Format and lint
npm run lint
npm run fix

# Build
npm run build

# Deploy Sanity Graphql API
npm run graphql-deploy

```

## Credits

A massive thanks [@jackbrewer](https://github.com/jackbrewer) for creating and mainting [Picks](https://github.com/jackbrewer/picks) component library and SASS utility [mixins](https://www.npmjs.com/package/backline-mixins)
