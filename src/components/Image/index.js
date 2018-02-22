/*
 * Because I'm shoe-horning HTML into my markdown content, I need
 * extra magic to have them responsive and render properly
 */

import React from 'react'
import Img from 'gatsby-image'

import styles from './image.module.sass'

const Image = props => {
  let image;

  const hideCaption = props.nocaption !== undefined && props.nocaption !== "true";

  props.images.forEach(img => {
    if(img.title === props.title) {
      image = (
        <figure className={styles.figure}>
          <Img
            sizes={img.sizes}
            alt={img.description}
          />
        {!hideCaption &&
          <figcaption className={styles.caption}>{img.description}</figcaption>
        }
      </figure>)
    }
  });

  return (<span>{image}</span>);
}

export default Image
