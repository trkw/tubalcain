import React, { Component, PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import ArchiveList from "../../ArchiveList"

export default class Archive extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {
    const posts = enhanceCollection(this.context.collection, {
      filter: { layout: "Post" },
      sort: "date",
      reverse: true,
    })

    return (
      <Page { ...this.props }>
        <div className="container">
          <ArchiveList pages={ posts } />
        </div>
      </Page>
    )
  }
}
