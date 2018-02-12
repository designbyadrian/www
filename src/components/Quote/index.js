import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import styles from './quote.module.sass'

const Quote = ({ children }) => (
  <div className={styles.quote}>
    <div><FontAwesomeIcon icon={['fas', 'quote-left']} transform="up-6" /></div>
    <div>{children}</div>
    <div><FontAwesomeIcon icon={['fas', 'quote-right']} transform="down-6" /></div>
  </div>
)

export default Quote
