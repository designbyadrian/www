import React from 'react'
import Link from 'gatsby-link'

import Nav from '../components/Nav'
import Stack from '../components/Stack'

class IndexPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedTags: new Set([]),
    };

    this.toggleFilter = this.toggleFilter.bind(this);
    this.hasCurrentTags = this.hasCurrentTags.bind(this);
  }


  toggleFilter(slug) {
    const selectedTags = new Set(this.state.selectedTags);
    if (selectedTags.has(slug)) {
      selectedTags.delete(slug);
    } else {
      selectedTags.add(slug);
    }
    this.setState({ selectedTags });
  }

  hasCurrentTags(tags) {
    if (!tags && this.state.selectedTags.size === 0) {
      return true;
    } else if (!tags) {
      return false;
    }

    if (this.state.selectedTags.size < 1) {
      return true;
    }

    const slugs = new Set(tags.map(tag => tag.slug));

    for (var slug of this.state.selectedTags) {
      if (!slugs.has(slug)) {
        return false;
      }
    }

    return true;
  }

  render() {
    const { data } = this.props;
    const tags = data.allContentfulTag.edges.map(({ node }) => node);
    const cards = data.allContentfulPost.edges.map(({ node }) => node);

    return  (
      <div>
        <Nav
          tags={tags}
          onSelect={this.toggleFilter}
          selectedTags={this.state.selectedTags}
        />
      <Stack
        cards={cards}
        hasCurrentTags={this.hasCurrentTags}
      />
      </div>
    )
  }
}

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

export default IndexPage
