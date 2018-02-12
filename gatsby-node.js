/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const postTemplate = `./src/templates/post.js`;
  const tagTemplate = `./src/templates/tag.js`;

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
    ).then(result => {
        result.data.allContentfulPost.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(postTemplate),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadTags = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
    ).then(result => {
        result.data.allContentfulTag.edges.forEach(({ node }) => {
        createPage({
          path: `tag/${node.slug}`,
          component: path.resolve(tagTemplate),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadPosts, loadTags])
};
