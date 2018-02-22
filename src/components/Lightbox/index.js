import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import styles from './lightbox.module.sass'

export default (props) => (
  <span>
  {props.image &&
    <ReactCSSTransitionGroup
      transitionName={styles}
      transitionAppear={true}
      transitionAppearTimeout={300}
      transitionEnter={false}
      transitionLeaveTimeout={300}
    >
    <div className={styles.lightbox}>
      <button className={styles.closeButton} onClick={props.onClose}>
        <span className={`${styles.closeIcon} fa-layers fa-fw`}>
          <FontAwesomeIcon size="2x" transform="grow-2" icon="circle" color="white"/>
          <FontAwesomeIcon size="2x" icon={['fas', 'times']} transform="shrink-2 right-2" />
        </span>
      </button>
      <img
        className={styles.image}
        sizes={props.image.sizes.sizes}
        src={props.image.sizes.src}
        srcSet={props.image.sizes.srcSet}
      />
    </div>
    </ReactCSSTransitionGroup>
  }
  </span>
)
