import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import styles from './link.module.sass'

const Link = props => {
  console.log("Link props", props)
  return (
    <a className={`custom ${styles.link}`} href={props.href}>
      {props.icon &&
        <FontAwesomeIcon icon={[props.iconprefix || 'fal', props.icon]} />
      }
      &nbsp;{props.label}
    </a>
  )
}

export default Link
