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

    const authors = head.authors ? head.authors.join(",") : undefined

    let url = ""

    if (this.isBrowser()) {
      url = window.location.href
    }

    const appId = "972356726110615"
    const layout = "button_count"
    const hatenaLayout = "standard-balloon"
    const linkdinCounter = "right"

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