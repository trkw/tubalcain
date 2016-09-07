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
          <header className={ styles.post__header }>
          {
            pageDate &&
            <time
              className={ styles.post__date }
              key={ pageDate.toISOString() }
            >
              { pageDate.locale("ja").format("YYYY/MM/DD dddd") }
            </time>
          }
          {
            <div>
              { authors }
            </div>
          }
          {
            <img src={ image } width="100%" />
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