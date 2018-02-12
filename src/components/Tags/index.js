import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import styles from './tags.module.sass'

const Tags = props => {

  const clickHandler = slug => {
    console.log("clicked" + slug);
  }

  return (
    <div className={styles.tags}>
      {props.tags.map(tag =>
        <button className={styles.tag} onClick={() => clickHandler(tag.slug)} key={tag.slug}>{tag.name}</button>
      )}
    </div>
  );
}

Tags.propTypes = {
  tags: PropTypes.array,
  size: PropTypes.string,
  selectedTags: PropTypes.object,
}

export default Tags
