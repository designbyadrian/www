import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import styles from './header.module.sass'

const HeaderImage = props => (
  <div className={`${styles.image} ${!props.edge2edge ? styles.edge2edge : ''}`}>
    <div>
      <img
        src={props.sizes.src}
        srcSet={props.sizes.srcSet}
        sizes={props.sizes.sizes}
      />
    </div>
    <img
      src={props.resize.src}
    />
  </div>
)

export default HeaderImage
