import React from 'react'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import Contact from '../ContactForm'
import Years from '../Years'

import styles from './footer.module.sass'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.container}>
      <div className="row">
        <div className={`col-xs-12 col-sm-6 col-md-4 ${styles.colAbout}`}>
          <h4>About</h4>
          <p>My name is <span className="author">Adrian von Gegerfelt</span>, and I'm a web designer and developer with <Years since="2006" /> years of experience. With past work in graphics and interaction design, and studies in computer science and human-computer interaction (HCI), I am Designer Slash Developer.</p>
          <p><Link to="/about-me" className={styles.bounceHand}>Read more <FontAwesomeIcon icon={['fas', 'hand-point-right']} /></Link></p>
        </div>
        <div className={`col-xs-12 col-md-4 ${styles.colLinks}`}>
          <h4>I'm also on</h4>
          <p>
            <a href="https://www.linkedin.com/in/designbyadrian" target="_blank" title="LinkedIn"><FontAwesomeIcon size="4x" icon={['fab', 'linkedin']} /></a>&nbsp;
            <a href="https://twitter.com/DesignByAdrian" target="_blank" title="Twitter"><FontAwesomeIcon size="4x" icon={['fab', 'twitter-square']} /></a>&nbsp;
            <a href="https://github.com/designbyadrian" target="_blank" title="GitHub"><FontAwesomeIcon size="4x" icon={['fab', 'github-square']} /></a>
          </p>
        </div>
        <div className={`col-xs-12 col-sm-6 col-md-4 ${styles.colContact}`}>
          <h4>Get in touch</h4>
          <Contact />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12" style={{ textAlign: 'center', lineHeight: '1em' }}>
          <small>&copy; Design by Design by Adrian Ltd., all rights reserved.<br />Built with <a href="https://reactjs.org/" target="_blank">React</a> and <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a></small>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12" style={{ textAlign: 'center', marginTop: '1em' }}>
          <a href="https://www.contentful.com/" rel="nofollow" target="_blank"><img src="https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg" style={{maxWidth: '100px', width: '100%'}} alt="Powered by Contentful" /></a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
