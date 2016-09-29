import React, { PropTypes } from "react"
import { Link } from "react-router"
import moment from "moment"
import styles from "./index.css"

const PagePreview = ({ __url, title, description, authors, image, date }) => {
  const pageDate = moment(date ? new Date(date) : null)
  const author = authors ? authors.join(",") : undefined
  const coverDir = "/assets/thumbnail/"
  const imgUrl = image ? coverDir + image : undefined
  const linkStyle = {
    color: "white",
    backgroundImage: "url(" + imgUrl + ")",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    WebkitTransition: "all",
    msTransition: "all",
  }

  return (
    <div className={ styles.card }>
      <Link to={ __url } className={ styles.title } style={ linkStyle }>
        <div className={ styles.cardExpand } />
        <div className={ styles.cardTitle } style={
        {
          height: "52px",
          width: "100%",
          padding: "16px",
          background: "rgba(0, 0, 0, 0.2)",
        }
        }>
          <span style={
          {
            color: "#fff",
            fontSize: "14px",
            fontWeight: "500",
          }
          }>
            { title }
          </span>
        </div>
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
  image: PropTypes.string,
  date: PropTypes.string,
}

export default PagePreview
