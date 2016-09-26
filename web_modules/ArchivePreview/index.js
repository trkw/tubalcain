import React, { PropTypes } from "react"
import { Link } from "react-router"
import moment from "moment"
import styles from "./index.css"

const ArchivePreview = ({ __url, title, description, authors, date }) => {
  const pageDate = moment(date ? new Date(date) : null)
  const author = authors ? authors.join(",") : undefined

  return (
    <div className={ styles.card }>
      <div className={ styles.headData }>
        {
          pageDate &&
          <time key={ pageDate.toISOString() }>
            { pageDate.locale("ja").format("YYYY/MM/DD") }
          </time>
        }
      </div>
      <Link to={ __url } className={ styles.title }>
        { title }
      </Link>
      <div className={ styles.headAuthor }>
        { author }
      </div>
      <div className={ styles.supportingtext }>
        { description }
      </div>
    </div>
  )
}

ArchivePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  authors: PropTypes.array,
  date: PropTypes.string,
}

export default ArchivePreview
