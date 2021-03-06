import React from 'react'
import { object, array, string } from 'prop-types'
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="https://use.typekit.net/pze1zot.css" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script src="https://swipestation.prod.kulea.marketing/k.js" />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: object,
  headComponents: array,
  bodyAttributes: object,
  preBodyComponents: array,
  body: string,
  postBodyComponents: array
}
