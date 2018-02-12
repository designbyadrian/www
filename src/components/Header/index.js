import React from 'react'
import Link from 'gatsby-link'

import Logo from '../Logo';

import styles from './header.module.sass'

const Header = () => (
  <div>
    <Logo />
    <h1 className={styles.name}>Design<span>by</span>Adrian</h1>
  </div>
)

export default Header
