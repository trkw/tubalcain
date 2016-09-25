import React, { PropTypes } from "react"

import PagePreview from "../PagePreview"

const PagesList = ({ pages }) => {
  return (
    <div>
    {
      pages.length
      ? (
        <div>
        {
          pages.map((page) => (
            <div key={ page.title }><PagePreview { ...page } /></div>
          ))
        }
        </div>
      )
      : "No posts yet."
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
