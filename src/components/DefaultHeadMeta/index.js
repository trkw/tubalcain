import React, { PropTypes } from "react"
import Helmet from "react-helmet"

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      meta={ [
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${ pkg.twitter }` },
      ] }
      link={ [
        {
          "rel": "apple-touch-icon",
          "sizes": "180x180",
          "href": "/assets/apple-touch-icon.png",
        },
        {
          "rel": "icon",
          "type": "image/png",
          "href": "/assets/favicon-32x32.png",
          "sizes": "32x32",
        },
        {
          "rel": "icon",
          "type": "image/png",
          "href": "/assets/favicon-32x32.png",
          "sizes": "16x16",
        },
        {
          "rel": "manifest",
          "type": "image/png",
          "href": "/assets/manifest.json",
          "sizes": "16x16",
        },
        {
          "rel": "mask-icon",
          "href": "/assets/trkw.svg",
          "color": "#4078c0",
        },
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
      ] }
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [ {
        name: "viewport", content: "width=device-width, initial-scale=1",
      } ] }
    />
    <style>{ "@-ms-viewport { width: device-width; }" }</style>
  </div>
)

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
