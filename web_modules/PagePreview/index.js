import React, { PropTypes } from "react"
import { Link } from "react-router"
import styles from "./index.css"
import moment from "moment"

const PagePreview = ({ __url, title, date, authors, description }) => {
  const pageDate = moment(date ? new Date(date) : null)

  return (
    <div>
      <Link to={ __url }>
        { title }
      </Link>
      <small>
        { description }
      </small>  
      {
        authors && authors[0] &&
        <div className={ styles.author }>
          { authors[0] }
        </div>
      }
      {
        pageDate &&
        <div className={ styles.date }>
          { " " }
          <time key={ pageDate.toISOString() }>
            { pageDate.locale("ja").format("YYYY/MM/DD dddd") }
          </time>
        </div>
      }
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  authors: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
}

export default PagePreview
