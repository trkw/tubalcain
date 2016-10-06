import React, { Component, PropTypes } from "react"
import Page from "../Page"
import styles from "./index.css"
import moment from "moment"
import Link from "react-router/lib/Link"
import FaChevronRight from "react-icons/fa/chevron-right"
import FaChevronLeft from "react-icons/fa/chevron-left"

import {
  FacebookButton,
  TwitterTweetButton,
  HatenabookmarkButton,
  PocketButton,
} from "react-social-sharebuttons"

class Post extends Component {

  // it's up to you to choose what to do with this layout ;)
  isBrowser() {
    return !(typeof document === "undefined" || typeof window === "undefined")
  }

  render() {
    const { props } = this
    const { head, navigation } = props
    console.log(navigation)

    const pageDate = moment(head.date ? new Date(head.date) : null)
    const coverDir = "/assets/thumbnail/"

    const authors = head.authors ? head.authors.join(",") : undefined

    let url = ""

    if (this.isBrowser()) {
      url = window.location.href
    }

    const appId = "972356726110615"
    const layout = "button_count"
    const hatenaLayout = "standard-balloon"

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
            head.image &&
            <img
              src={ coverDir + head.image }
              className={ styles.cover }
            />
          }
          </header>
        }
        footer={
          <footer>
            <ul className={ styles.sns }>
              <li>
                <FacebookButton
                  url={ url }
                  layout={ layout }
                  appId={ appId }
                />
              </li>
              <li>
                <TwitterTweetButton
                  text={ head.title }
                />
              </li>
              <li><PocketButton /></li>
              <li>
                <HatenabookmarkButton
                  url={ url }
                  layout={ hatenaLayout }
                />
              </li>
            </ul>
            <nav>
              <ul className={ styles.paging }>
                <li className={ styles.paging__container }>
                {
                  navigation.next &&
                  <div className={ styles.paging__item }>
                    <div className={ styles.paging__item__header }>
                      { "Newer" }
                    </div>
                    <FaChevronLeft
                      className={ styles.paging__item__arrow }
                    />
                    <Link
                      to={ navigation.next.__url }
                      className={ styles.paging__item__anchor }
                    >
                      { navigation.next.title }
                    </Link>
                  </div>
                }
                </li>
                <li className={ styles.paging__container }>
                {
                  navigation.previous &&
                  <div className={ styles.paging__item }>
                    <div className={ styles.paging__item__header }>
                      { "Older" }
                    </div>
                    <FaChevronRight
                      className={ styles.paging__item__arrow }
                    />
                    <Link
                      to={ navigation.previous.__url }
                      className={ styles.paging__item__anchor }
                    >
                      { navigation.previous.title }
                    </Link>
                  </div>
                }
                </li>
              </ul>
            </nav>
          </footer>
        }
      />
    )
  }
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
  navigation: PropTypes.shape({
    next: PropTypes.object,
    previous: PropTypes.object,
  }).isRequired,
}

export default Post
