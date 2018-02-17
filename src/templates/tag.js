import React from "react";
import Index from '../components/Index'

export default ({ data }) => {
  const tags = [{
    name: data.contentfulTag.name,
    slug: data.contentfulTag.slug,
  }]

  return (
    <Index tags={tags} cards={data.contentfulTag.post} />
  )
}

export const query = graphql`
  query Tag($slug: String!) {
    contentfulTag(slug: {eq: $slug}) {
      name
      slug
      post {
        id
        title
        slug
        headerThumbnail {
          description
          resolutions(width: 400, height: 400) {
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
  }
`;
