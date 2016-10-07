import React, { PropTypes } from "react"
import { Link } from "react-router"
import styles from "./index.css"

const badgeUrl = "./assets/badge/"

const PagePreview = ({ __url, title, description, badge }) => {

  const isBadge = (badge) ? 1 : 0

  return (
    <div className={ styles.card }>
      <Link to={ __url } className={ styles.cardLink }>
        <div className={ styles.bucket }>
          <div className={ styles.bucketMedia }>
            <div className={ styles.badge }>
              {
                isBadge
                ? (
                  <img
                    className={ styles.badgeImg }
                    src={ badgeUrl + badge }
                  />
                  )
                : (
                  <img
                    className={ styles.badgeImg }
                    src={ badgeUrl + "default.svg" }
                  />
                  )
              }
            </div>
          </div>
          <div className={ styles.bucketContent }>
            <h2 className={ styles.pathTitle }>
              <span className={ styles.pathTitleLink }>
                { title }
              </span>
            </h2>
            <p className={ styles.description }>
              { description }
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
}

export default PagePreview
