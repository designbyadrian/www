import React from 'react'

import Index from '../components/Index'

export default ({ data }) => {
  const tags = data.allContentfulTag.edges.map(({ node }) => node);
  const cards = data.allContentfulPost.edges.map(({ node }) => node);

  return (
    <Index tags={tags} cards={cards} />
  )
};

export const query = graphql`
  query IndexQuery {
    allContentfulPost(sort: { fields: [timestamp], order: DESC }){
      edges{
        node{
          id
          title
          slug
          headerThumbnail {
            sizes(maxWidth: 400) {
              sizes
              src
              srcSet
            }
          }
          tags {
            name
            slug
          }
          excerpt {
            excerpt
          }
        }
      }
    },
    allContentfulTag {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
