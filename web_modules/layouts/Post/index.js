import React, { Component, PropTypes } from "react"
import Page from "../Page"
import styles from "./index.css"
import moment from "moment"

class Post extends Component {

  // it's up to you to choose what to do with this layout ;)

  render() {
    const { props } = this
    const { head } = props

    const pageDate = moment(head.date ? new Date(head.date) : null)
    const image = head.image ? "/assets/thumbnail/" + head.image : "default.jpg"

    let authors = head.authors ? head.authors.join(",") : undefined

    return (
      <Page
        { ...props }
        header={
          <header className={ styles.header }>
          {
            pageDate &&
            <time
              className={ styles.date }
              key={ pageDate.toISOString() }
            >
              { pageDate.locale("ja").format("YYYY/MM/DD dddd") }
            </time>
          }
          {
            <div
              className={ styles.authors }
            >
              { authors }
            </div>
          }
          {
            <img
              src={ image }
              className={ styles.cover }
            />
          }
          </header>
        }
      />
    )
  }
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post