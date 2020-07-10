import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/Layout"
import SEO from "components/SEO"
import Stack from "components/Stack"

const IndexPage = ({ data }) => {
  const {
      allContentfulArticle: { nodes },
    } = data,
    posts = nodes.map(post => ({
      ...post,
      excerpt: post.excerpt?.excerpt,
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
    allContentfulArticle(sort: { fields: [timestamp], order: DESC }) {
      nodes {
        tags {
          slug
          title
        }
        title
        createdAt(formatString: "DD MMMM, YYYY")
        timestamp(formatString: "DD MMMM, YYYY")
        slug
        excerpt {
          excerpt
        }
        thumbnail {
          fluid(maxWidth: 600, quality: 30) {
            ...GatsbyContentfulFluid_withWebp
          }
          title
          description
        }
      }
    }
  }
`

export default IndexPage
