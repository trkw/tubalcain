import React, { PropTypes } from "react"
import { Link } from "react-router"
import moment from "moment"
import styles from "./index.css"

const PagePreview = ({ __url, title, description, authors, date }) => {
  const pageDate = moment(date ? new Date(date) : null)
  const author = authors ? authors.join(",") : undefined

  return (
    <div className={ styles.card }>
      <Link to={ __url } className={ styles.title }>
        { title }
      </Link>
      <div>
        <p className={ styles.headData }>
          {
            pageDate &&
            <time key={ pageDate.toISOString() }>
              { pageDate.locale("ja").format("YYYY/MM/DD") }
            </time>
          }
        </p>
        <p className={ styles.headAuthor }>
          { author }
        </p>
      </div>
      <div className={ styles.supportingtext }>
        { description }
      </div>
      <div className={ styles.actions }>
        <Link to={ __url } className={ styles.button }>
          { "続きを読む" }
        </Link>
      </div>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  authors: PropTypes.array,
  date: PropTypes.string,
}

export default PagePreview
