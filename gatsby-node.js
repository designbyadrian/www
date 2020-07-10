const Promise = require("bluebird")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const results = await graphql(`
    {
      allContentfulArticle {
        nodes {
          body {
            childMarkdownRemark {
              htmlAst
              wordCount {
                words
              }
            }
          }
          createdAt(formatString: "DD MMMM, YYYY")
          excerpt {
            excerpt
          }
          slug
          tags {
            slug
            title
          }
          timestamp(formatString: "DD MMMM, YYYY")
          hero {
            fluid(maxWidth: 1200) {
              src
              sizes
              srcSet
              srcSetWebp
              srcWebp
              aspectRatio
              base64
            }
            fixed(width: 1200) {
              height
              width
              src
            }
            title
            description
          }
          heroMargins
          title
        }
      }
      allContentfulCategory {
        nodes {
          slug
          title
          article {
            title
            createdAt(formatString: "DD MMMM, YYYY")
            timestamp(formatString: "DD MMMM, YYYY")
            slug
            excerpt {
              excerpt
            }
            thumbnail {
              fluid(maxWidth: 600, quality: 30) {
                src
                sizes
                srcSet
                srcSetWebp
                srcWebp
                aspectRatio
                base64
              }
              title
              description
            }
          }
        }
      }
      allContentfulTag {
        nodes {
          slug
          title
          article {
            title
            createdAt(formatString: "DD MMMM, YYYY")
            timestamp(formatString: "DD MMMM, YYYY")
            slug
            excerpt {
              excerpt
            }
            thumbnail {
              fluid(maxWidth: 600, quality: 30) {
                src
                sizes
                srcSet
                srcSetWebp
                srcWebp
                aspectRatio
                base64
              }
              title
              description
            }
          }
        }
      }
    }
  `)

  /** Articles */
  results.data.allContentfulArticle.nodes.forEach(article => {
    createPage({
      path: `/${article.slug}/`,
      component: path.resolve("./src/templates/article.js"),
      context: {
        ...article,
      },
    })
  })

  /** Tag pages */
  results.data.allContentfulTag.nodes.forEach(tag => {
    createPage({
      path: `/tags/${tag.slug}/`,
      component: path.resolve("./src/templates/tags.js"),
      context: {
        ...tag,
      },
    })
  })

  /** Category pages */
  results.data.allContentfulCategory.nodes.forEach(category => {
    createPage({
      path: `/categories/${category.slug}/`,
      component: path.resolve("./src/templates/tags.js"),
      context: {
        ...category,
      },
    })
  })
}
