import React from 'react'
import Helmet from 'react-helmet'
import Index from '../components/Index'

export default (props) => {

  const { data } = props;

  props.setTheme(null);

  const tags = data.allContentfulTag.edges.map(({ node }) => node);
  const cards = data.allContentfulPost.edges.map(({ node }) => node);

  const title = "Design by Adrian";
  const keywords = 'web development, javascript, angular, react, nodejs, graphics design';
  const description = 'Designer Slash Developer';

  return (
    <span>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
          { name: 'twitter:site', content: '@designbyadrian' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:creator', content: '@designbyadrian'},
          { name: 'og:site_name', content: 'Design by Adrian' },
          { name: 'og:title', content: title },
          { name: 'og:description', content: description },
          { name: 'og:url', content: `http://designbyadrian.com` },
          { name: 'og:image', content: '//images.contentful.com/d60afbtj8nr5/12GyuuzLvAiaEgISkmeEsk/07102008841d5ebc8e6daf5101e65f9b/face.jpg?w=1200&h=1200&fl=progressive&q=50&fit=fill'}
        ]}
      />
      <Index tags={tags} cards={cards} />
    </span>
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
            description
            sizes(maxWidth: 522) {
              ...GatsbyContentfulSizes
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
