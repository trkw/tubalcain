import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"
import styles from "./index.css"

const setImgsRoot = () => {
  const bc = document.getElementsByClassName("phenomic-BodyContainer")[0]
  const imgs = bc.getElementsByTagName("img")

  for (let i = 0; i < imgs.length; i++) {
    let el = imgs[i]
    while (el.parentElement !== bc) {
      el = el.parentElement
    }
    el.setAttribute("class", "hasImg")
  }

}
class Page extends Component {

  componentDidMount() {
    setImgsRoot()
  }
  componentDidUpdate() {
    setImgsRoot()
  }
  render() {
    const { props, context } = this

    const {
      pkg,
    } = context.metadata

    const {
      __filename,
      __url,
      head,
      body,
      header,
      footer,
    } = props

    invariant(
      typeof head.title === "string",
      `Your page '${ __filename }' needs a title`
    )

    const htmlAttributes = { lang: "ja" }

    const metaTitle = head.layout === "Homepage"
    ? pkg.name
    : [
      head.metaTitle ? head.metaTitle : head.title,
      pkg.name,
    ].join(" | ")

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      {
        property: "og:url",
        content: joinUri(process.env.PHENOMIC_USER_URL, __url),
      },
      { property: "og:description", content: head.description },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:creator", content: `@${ pkg.twitter }` },
      { name: "twitter:description", content: head.description },
      { name: "description", content: head.description },
      {
        name: "google-site-verification",
        content: "VzdhRC0A5qKJzVL9MFmeLbTY3DF08o43EZpDa5b-CVM",
      },
    ]

    return (
      <article className={ styles.page }>
        <Helmet
          htmlAttributes={ htmlAttributes }
          title={ metaTitle }
          meta={ meta }
        />

        {
          head.title &&
          <h1 className={ styles.page__title }>{ head.title }</h1>
        }
        { header }
        <section className={ styles.page__body }>
          <BodyContainer>{ body }</BodyContainer>
          { props.children }
        </section>
        { footer }
      </article>
    )
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  __filename: PropTypes.string.isRequired,
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
