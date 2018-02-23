import React from "react";
import Helmet from 'react-helmet'
import rehypeReact from "rehype-react"
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import CustomLink from '../components/Link'
import Feature from '../components/Feature'
import HeaderImage from '../components/HeaderImage'
import Image from '../components/Image'
import KeyFeatures from '../components/KeyFeatures'
import Lightbox from '../components/Lightbox'
import Quote from '../components/Quote'
import Tags from '../components/Tags'
import Years from '../components/Years'

import styles from './post.module.sass'

class Post extends React.PureComponent {

  constructor(props) {
    super(props);

    this.onZoom = this.onZoom.bind(this);
    this.onZoomOut = this.onZoomOut.bind(this);

    this.state = { lightbox: null };
  }

  onZoom(lightbox) {
    this.setState({ lightbox });
  }

  onZoomOut() {
    this.setState({ lightbox: null });
  }

  render() {
    const props = this.props;
    const post = props.data.contentfulPost;
    let tagString = post.tags ? post.tags.map(tag => tag.name).join(", ") : '';
    const hasHeaderImage = post.headerImage !== null;
    const edge2edge = post.edgeToEdgeHeaderImage;
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        'block-quote': Quote,
        'feature': Feature,
        'font-awesome': FontAwesomeIcon,
        'custom-image': props => <Image {...props} onZoom={this.onZoom} images={post.images} />,
        'key-features': KeyFeatures,
        'link': CustomLink,
        'years-since': Years,
      }
    }).Compiler;

    props.setTheme(post.theme);

    tagString = `${post.metaKeywords}, ${tagString}`;

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
        <Lightbox image={this.state.lightbox} onClose={this.onZoomOut} />
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
          <div key={post.slug} className={styles.post}>
            <Link to="/" className={styles.homeButton}>
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon="circle" color="#6e8898"/>
                <FontAwesomeIcon className={styles.homeButtonBg} icon="circle"/>
                <FontAwesomeIcon icon={['fas', 'times']} color="white" transform="shrink-2" />
              </span>
            </Link>
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
  }
};

export default Post;

export const query = graphql`
  query Post($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      theme
      metaKeywords,
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
          ...GatsbyContentfulSizes
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
          ...GatsbyContentfulSizes
        }
      }
    }
  }
`;
