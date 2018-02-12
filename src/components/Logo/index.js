import React from 'react'
import Link from 'gatsby-link'

import styles from './logo.module.sass'

const Logo = () => (
  <div className={styles.logo}>
    <div className={styles.pyramid}>
      <div className={styles.front}></div>
      <div className={styles.right}></div>
      <div className={styles.back}></div>
      <div className={styles.left}></div>
    </div>
  </div>
)

export default Logo
