import React from 'react'
import Img from 'gatsby-image'

import styles from './header.module.sass'

const HeaderImage = props => (
  <div className={props.edge2edge ? styles.hero : styles.heroPadded}>
    <Img
      alt={props.description}
      sizes={props.sizes}
    />
  </div>
)

export default HeaderImage;
