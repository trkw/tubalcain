import React, { PropTypes } from "react"
import ArchivePreview from "../ArchivePreview"

const ArchiveList = ({ pages }) => {
  return (
    <div>
    {
      pages.length
      ? (
        <ul>
        {
          pages.map((page) => (
            <li key={ page.title }><ArchivePreview { ...page } /></li>
          ))
        }
        </ul>
      )
      : "No posts yet."
    }
    </div>
  )
}

ArchiveList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default ArchiveList
