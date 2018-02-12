import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import styles from './nav.module.sass'

const Nav = props => {

  const isSelected = slug => {
    return props.selectedTags.has(slug);
  }

  let nav;

  if (!props.tags || props.tags.length < 2) {
    nav = (
      <nav className={styles.navLeft}>
        <Link to="/" className={styles.button}>View all</Link>
        {props.tags &&
          <span>
          {props.tags.map(tag =>
            <button className={styles.tagSelected} key={tag.slug}>{tag.name}</button>
          )}
          </span>
        }
      </nav>
    )
  } else {
    nav = (
      <nav className={styles.nav}>
        {props.tags.map(tag =>
          <button className={isSelected(tag.slug) ? styles.tagSelected : styles.tag} onClick={() => props.onSelect(tag.slug)} key={tag.slug}>{tag.name}</button>
        )}
      </nav>
    );
  }

  return nav;
}

Nav.propTypes = {
  tags: PropTypes.array,
  onSelect: PropTypes.func,
  selectedTags: PropTypes.object,
}

export default Nav
