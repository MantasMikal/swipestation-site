## Setup

Use NPM

```bash
# Install deps
cd gatsby-starter-picks && npm i && npm i -g @sanity/cli gatsby-cli

# Runs out of the box
# Studio at http://localhost:3333
# Web frontend at http://localhost:8000
# GraphiQL explorer at http://localhost:8000/___graphql
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
