import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"

import "material-design-lite/material.min.css"
import "./index.global.css"
import styles from "./index.css"

import Header from "../Header"
import Footer from "../Footer"
import GATracker from "../GATracker/GATracker"

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    params: PropTypes.object,
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <div className={ "mdl-layout" } >
        <GATracker params={ this.props.params }>
          <Helmet
            meta={ [
              {
                name: "generator", content: `${
                process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
              },
              { property: "og:site_name", content: pkg.name },
              { name: "twitter:site", content: `@${ pkg.twitter }` },
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

          <Header />
          <main className={ styles.content }>
            { this.props.children }
          </main>
          <Footer />
        </GATracker>
      </div>
    )
  }
}
