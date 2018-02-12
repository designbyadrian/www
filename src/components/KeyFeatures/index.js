import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import styles from './features.module.sass'

const Featyres = ({ children }) => (
  <div className={styles.features}>
    <ul>{children}</ul>
  </div>
)

export default Featyres
