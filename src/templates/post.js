import React from "react";
import rehypeReact from "rehype-react";
import Img from 'react-image'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Feature from '../components/Feature'
import HeaderImage from '../components/HeaderImage'
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

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'block-quote': Quote,
    'feature': Feature,
    'font-awesome': FontAwesomeIcon,
    'key-features': KeyFeatures,
    'link': Link,
    'years-since': YearsSince,
  }
}).Compiler

export default ({ data }) => {
  const post = data.contentfulPost;
  const hasHeaderImage = post.headerImage !== null;

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
            edge2edge={post.edgeToEdgeHeaderImage}
            {...post.headerImage}
          />
        }
        <h1 className={!hasHeaderImage ? styles.postTitleTop : styles.postTitle}>{post.title}</h1>
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
      timestamp(formatString: "MMMM Do, YYYY")
      tags {
        name
        slug
      }
      headerImage {
        sizes(maxWidth: 1122) {
          sizes
          src
          srcSet
        }
        resize(width: 40, quality: 50) {
          src
        }
      }
      edgeToEdgeHeaderImage
      childContentfulPostContentTextNode {
			  childMarkdownRemark {
			    htmlAst
			  }
			}
    }
  }
`;
