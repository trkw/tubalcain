import React, { Component, PropTypes } from "react"
import Page from "../Page"
import styles from "./index.css"
import moment from "moment"
import {
  FacebookButton,
  TwitterTweetButton,
  HatenabookmarkButton,
  LinkedinButton,
  PocketButton,
  GooglePlusButton,
  FeedlyButton,
} from "react-social-sharebuttons"

class Post extends Component {

  // it's up to you to choose what to do with this layout ;)

  isBrowser() {
    return !(typeof document === "undefined" || typeof window === "undefined")
  }

  render() {
    const { props } = this
    const { head } = props

    const pageDate = moment(head.date ? new Date(head.date) : null)
    const image = head.image ? "/assets/thumbnail/" + head.image : "default.jpg"

    let authors = head.authors ? head.authors.join(",") : undefined

    let url = ""

    if (this.isBrowser()) {
      url = window.location.href
    }

    let appId = "972356726110615"
    let layout = "button_count"
    let hatenaLayout = "standard-balloon"
    let linkdinCounter = "right"
    let feedlyUrl = "https://trkw.me"
    let feedlyLayout = "rectangle-volume-small-small"
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
          {
            <ul>
              <ol>
                <FacebookButton
                  url={ url }
                  layout={ layout }
                  appId={ appId }
                />
              </ol>
              <ol>
                <TwitterTweetButton
                  text={ head.title }
                />
              </ol>
              <ol><PocketButton /></ol>
              <ol>
                <HatenabookmarkButton url={ url } layout={ hatenaLayout } />
              </ol>
              <ol>
                <LinkedinButton url={ url } counter={ linkdinCounter } />
              </ol>
              <ol><GooglePlusButton /></ol>
              <ol>
                <FeedlyButton
                  feedurl={ feedlyUrl }
                  layout={ feedlyLayout }
                />
              </ol>
            </ul>
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