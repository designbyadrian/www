import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import styles from './page.module.sass'

export default () => (
  <span>
    <Helmet
      title={`Thank you from Design by Adrian`}
    />
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.heart} size="7x" icon={['fas', 'heart']} />
      <h1 className={styles.header}>Thank you</h1>
      <p className={styles.p}>Your message has been received, and I usually respond within the same century!<br />Meanwhile...</p>
      <Link to="/" className={styles.button}><FontAwesomeIcon icon={['fas', 'hand-point-left']} /> Enjoy more content</Link>
    </div>
  </span>
)
