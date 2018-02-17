import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import styles from './link.module.sass'

export default (props) => (
  <a className={styles.link} href={props.href}>
    {props.icon &&
      <FontAwesomeIcon icon={[props.iconprefix || 'fal', props.icon]} />
    }
    &nbsp;{props.label}
  </a>
)
