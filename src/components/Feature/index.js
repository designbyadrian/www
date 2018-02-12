import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import styles from './feature.module.sass'

const Feature = props => (
  <div className={styles.feature}>
    <div className={styles.icon}>
      <div>
        <FontAwesomeIcon icon={[props.iconPrefix || 'fal', props.icon]} />
        <img className={styles.balloon} src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/>
      </div>
    </div>
    <h4 className={styles.title}>{props.title}</h4>
    <div className={styles.content}>{props.children}</div>
  </div>
)

export default Feature
