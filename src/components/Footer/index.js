import React from 'react'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import styles from './footer.module.sass'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.container}>
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <h4>About</h4>
          <p>Web designer and developer with 12 years of experience. With past work in graphics and interaction design, and studies in computer science and human-computer interaction (HCI), I am Designer Slash Developer.</p>
          <p><Link to="/about-me" className={styles.bounceHand}>Read more <FontAwesomeIcon icon={['fas', 'hand-point-right']} /></Link></p>
        </div>
        <div className="col-xs-12 col-md-4">
          <h4>I'm also on</h4>
          <p>
            <a href="https://www.linkedin.com/in/designbyadrian" target="_blank" title="LinkedIn"><FontAwesomeIcon size="4x" icon={['fab', 'linkedin']} /></a>&nbsp;
            <a href="https://twitter.com/DesignByAdrian" target="_blank" title="Twitter"><FontAwesomeIcon size="4x" icon={['fab', 'twitter-square']} /></a>&nbsp;
            <a href="https://github.com/designbyadrian" target="_blank" title="GitHub"><FontAwesomeIcon size="4x" icon={['fab', 'github-square']} /></a>
          </p>
        </div>
        <div className="col-xs-12 col-md-4">
          <h4>Get in touch</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12" style={{ textAlign: 'center' }}>
          <a href="https://www.contentful.com/" rel="nofollow" target="_blank"><img src="https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg" style={{maxWidth: '100px', width: '100%'}} alt="Powered by Contentful" /></a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
