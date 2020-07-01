import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "@components/Layout"
import SEO from "@components/SEO"
import Stack from "@components/Stack"

const IndexPage = ({ data }) => {
  const {
      allContentfulArticle: { edges },
    } = data,
    posts = edges.map(edge => ({
      ...edge.node,
      excerpt: edge.node.excerpt?.excerpt,
    }))

  return (
    <Layout>
      <SEO title="Home" />
      <Stack items={posts} />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulArticle {
      edges {
        node {
          tags {
            slug
            title
          }
          title
          createdAt(formatString: "DD MMMM, YYYY")
          slug
          excerpt {
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
