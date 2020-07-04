const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const article = path.resolve("./src/templates/article.js")
    resolve(
      graphql(`
        {
          allContentfulArticle {
            edges {
              node {
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
                }
                title
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulArticle.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/${post.node.slug}/`,
            component: article,
            context: {
              ...post.node,
            },
          })
        })
      })
    )
  })
}
