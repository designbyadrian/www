import React from 'react'
import Link from 'gatsby-link'

import styles from './card.module.sass'

const Card = post => (
  <Link to={`/${post.slug}`}>
    <div className={styles.card}>
      {post.headerThumbnail &&
        <img
          src={post.headerThumbnail.resolutions.src}
          srcSet={post.headerThumbnail.resolutions.srcSet}
        />
      }
      <h2 className={styles.cardTitle}>{post.title}</h2>
      <p className={styles.cardExcerpt}>{post.excerpt.excerpt}</p>
    </div>
  </Link>
)

export default Card
