import React from "react";
import Helmet from 'react-helmet'
import rehypeReact from "rehype-react";
import Img from 'react-image'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Feature from '../components/Feature'
import HeaderImage from '../components/HeaderImage'
import Image from '../components/Image'
import KeyFeatures from '../components/KeyFeatures'
import Link from '../components/Link'
import Quote from '../components/Quote'
import Tags from '../components/Tags'

import styles from './post.module.sass'

const YearsSince = props => {
  const date = new Date();
  const years = date.getFullYear() - parseInt(props.since, 10);

  return (
    <span>{years}</span>
  )
}

export default (props) => {
  const post = props.data.contentfulPost;
  const tagString = post.tags ? post.tags.map(tag => tag.name).join(", ") : '';
  const hasHeaderImage = post.headerImage !== null;
  const edge2edge = post.edgeToEdgeHeaderImage;
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'block-quote': Quote,
      'feature': Feature,
      'font-awesome': FontAwesomeIcon,
      'custom-image': props => <Image {...props} images={post.images} />,
      'key-features': KeyFeatures,
      'link': Link,
      'years-since': YearsSince,
    }
  }).Compiler;

  props.setTheme(post.theme);

  const meta = [
    { name: 'description', content: post.excerpt.excerpt },
    { name: 'keywords', content: tagString },
    { name: 'twitter:site', content: '@designbyadrian' },
    { name: 'twitter:title', content: post.title },
    { name: 'twitter:description', content: post.excerpt.excerpt },
    { name: 'twitter:creator', content: '@designbyadrian'},
    { name: 'og:site_name', content: 'Design by Adrian' },
    { name: 'og:title', content: post.title },
    { name: 'og:description', content: post.excerpt.excerpt },
    { name: 'og:type', content: 'article' },
    { name: 'og:url', content: `http://designbyadrian.com/${post.slug}` },
    { name: 'og:image', content: post.ogFacebookImage.resize.src },
  ];

  if (post.ogTwitterImage) {
    meta.push({ name: 'twitter:card', content: post.ogTwitterImage.resize.src });
  }

  return (
    <span>
      <Helmet
        title={`${post.title} by Design by Adrian`}
        meta={meta}
      />
      <ReactCSSTransitionGroup
        transitionName={{
          appear: styles.postAppear,
          appearActive: styles.postAppearActive
        }}
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div key={post.slug} className={`${styles.post}`}>
          {post.headerImage &&
            <HeaderImage
              edge2edge={edge2edge}
              {...post.headerImage}
            />
          }
          <h1 className={styles.postTitle}>{post.title}</h1>
          <p className={styles.postDate}>{post.timestamp}</p>

          <div className={styles.contentWrapper}>
            {post.tags &&
              <Tags tags={post.tags} />
            }
            <div className={styles.postContent}>
              {renderAst(post.childContentfulPostContentTextNode.childMarkdownRemark.htmlAst)}
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    </span>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      theme
      excerpt {
        excerpt
      }
      timestamp(formatString: "MMMM Do, YYYY")
      tags {
        name
        slug
      }
      ogTwitterImage: headerImage{
        resize(width: 1200, height: 660) {
          src
        }
      }
      ogFacebookImage: headerThumbnail{
        resize(width: 1200, height: 1200) {
          src
        }
      }
      headerImage {
        description
        sizes(maxWidth: 1122) {
          sizes
          src
          srcSet
        }
        resize(width: 60, quality: 50) {
          src
        }
      }
      edgeToEdgeHeaderImage
      childContentfulPostContentTextNode {
			  childMarkdownRemark {
			    htmlAst
			  }
			}
      images {
        title
        description
        sizes (maxWidth: 1122) {
          src
          srcSet
        }
      }
    }
  }
`;
