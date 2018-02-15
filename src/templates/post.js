import React from "react";
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

  return (
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

        <div className={styles.postContent}>
          {post.tags &&
            <Tags tags={post.tags} />
          }
          {renderAst(post.childContentfulPostContentTextNode.childMarkdownRemark.htmlAst)}
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      theme
      timestamp(formatString: "MMMM Do, YYYY")
      tags {
        name
        slug
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
