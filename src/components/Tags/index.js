import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import styles from './tags.module.sass'

const Tags = props => (
  <div className={styles.tags}>
    {props.tags.map(tag =>
      <Link className={styles.tag} to={`/tag/${tag.slug}`} key={tag.slug}>{tag.name}</Link>
    )}
  </div>
)

Tags.propTypes = {
  tags: PropTypes.array,
  size: PropTypes.string
}

export default Tags
