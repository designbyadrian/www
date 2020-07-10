import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/Layout"
import SEO from "components/SEO"
import Stack from "components/Stack"
import Wrapper from "components/Wrapper"

const TagsPage = ({ pageContext }) => {
  const { article, slug, title } = pageContext

  let posts = []

  if (article && Array.isArray(article)) {
    posts = article.map(art => ({
      ...art,
      excerpt: art.excerpt?.excerpt,
    }))
  } else if (article) {
    posts = [
      {
        ...article,
        excerpt: article.excerpt?.excerpt,
      },
    ]
  }

  return (
    <Layout>
      <SEO title={title} />
      <Wrapper>
        <h2>{title}</h2>
      </Wrapper>
      <Stack items={posts} />
    </Layout>
  )
}

export default TagsPage
