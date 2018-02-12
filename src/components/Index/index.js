import React from 'react'
import PropTypes from 'prop-types'

import Nav from '../Nav'
import Stack from '../Stack'

class Index extends React.PureComponent {
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
    return  (
      <div>
        <Nav
          tags={this.props.tags}
          onSelect={this.toggleFilter}
          selectedTags={this.state.selectedTags}
        />
        <Stack
          cards={this.props.cards}
          hasCurrentTags={this.hasCurrentTags}
        />
      </div>
    )
  }
}

export default Index
