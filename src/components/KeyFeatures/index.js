import React from 'react'

import styles from './features.module.sass'

const Features = ({ children }) => (
  <div className={styles.features}>
    <ul>{children}</ul>
  </div>
)

export default Features
