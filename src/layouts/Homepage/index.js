import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import PagesList from "../../components/PagesList"
import styles from "./index.css"

const numberOfLatestPosts = 10

const Homepage = (props, { collection }) => {
  const latestPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })
  .slice(0, numberOfLatestPosts)

  return (
    <div className={ styles.wrapper }>
      <div className={ styles.postList }>
        <PagesList pages={ latestPosts } />
      </div>
      <div className={ styles.joinus }>
        <h1
          className={ [ styles.heading, styles.tac ].join(" ") }
        >
          { "JOIN US" }
        </h1>
        <p className={ styles.tac }>
          { "trkwへコミットしてくれる方をお待ちしてます。" }
        </p>
      </div>
    </div>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage
