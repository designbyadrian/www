import React from "react";
import Helmet from 'react-helmet'
import Index from '../components/Index'

export default ({ data }) => {

  const tag = data.contentfulTag;
  const title = `${tag.name} by Design by Adrian`;
  const description = tag.description || '';

  const tags = [{
    name: tag.name,
    slug: tag.slug,
  }]

  return (
    <span>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'twitter:site', content: '@designbyadrian' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:creator', content: '@designbyadrian'},
          { name: 'og:site_name', content: 'Design by Adrian' },
          { name: 'og:title', content: title },
          { name: 'og:description', content: description },
          { name: 'og:url', content: `http://designbyadrian.com/tag/${tag.slug}` },
          { name: 'og:image', content: '//images.contentful.com/d60afbtj8nr5/12GyuuzLvAiaEgISkmeEsk/07102008841d5ebc8e6daf5101e65f9b/face.jpg?w=1200&h=1200&fl=progressive&q=50&fit=fill'}
        ]}
      />
    <Index tags={tags} cards={tag.post} />
    </span>
  )
}

export const query = graphql`
  query Tag($slug: String!) {
    contentfulTag(slug: {eq: $slug}) {
      name
      slug
      description
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
