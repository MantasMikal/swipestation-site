## Links

Site: https://swipestation.co.uk

Live preview: https://swipestation.herokuapp.com/

CMS: https://swipestation.sanity.studio

[![Netlify Status](https://api.netlify.com/api/v1/badges/2360ecf2-68e4-49a4-b6b1-0c05c9f67014/deploy-status)](https://swipestation.co.uk)

## Setup

Use NPM!

```bash
# Install deps
cd swipestation-site && npm i && npm i -g @sanity/cli gatsby-cli

# Run
# Studio at http://localhost:3333
# Web frontend at http://localhost:8000
# GraphiQL explorer at http://localhost:8000/___graphql
npm start

# Format and lint
npm run lint
npm run fix

# Build
npm run build

# Deploy Sanity Graphql API
npm run graphql-deploy

# Deploy the Sanity Studio to *.sanity.studio
npm run sanity-deploy

# Run storybook
npm run storybook

```

## Read the docs

Run Storybook to learn how components work

[Getting started with Sanity.io](https://www.sanity.io/blog/get-started-with-gatsby-and-structured-content)

[Sanity.io](https://www.sanity.io/blog/get-started-with-gatsby-and-structured-content)

[gatsby-source-sanity](https://github.com/sanity-io/gatsby-source-sanity)
