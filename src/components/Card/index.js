import React from 'react'
import Link from 'gatsby-link'

import styles from './card.module.sass'

// https://medium.com/@kyle.robert.gill/ridiculously-easy-image-optimization-with-gatsby-js-59d48e15db6e

const Card = post => (
  <Link to={`/${post.slug}`}>
    <div className={styles.card}>
      {post.headerThumbnail &&
        <img
          alt={post.headerThumbnail.description}
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
