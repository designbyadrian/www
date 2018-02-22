/*
 * Because I'm shoe-horning HTML into my markdown content, I need
 * extra magic to have them responsive and render properly
 */

import React from 'react'
import Img from 'gatsby-image'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import styles from './image.module.sass'

class Image extends React.PureComponent {
  componentWillMount(props) {
    for (let i = 0; i < this.props.images.length; i++) {
      if (this.props.images[i].title === this.props.title) {
        this.setState({ image: this.props.images[i] });
        break;
      }
    }
  }

  zoom = () => {
    this.props.onZoom(this.state.image);
  }

  render() {
    const hideCaption = this.props.nocaption !== undefined && this.props.nocaption !== "true";

    const image = (
      <figure className={styles.figure}>
        <Img
          sizes={this.state.image.sizes}
          alt={this.state.image.description}
        />
        {!hideCaption &&
          <figcaption className={styles.caption}>{this.state.image.description}</figcaption>
        }
      </figure>
    );

    if (this.props.zoom !== undefined) {
      return (
        <button className={styles.imageButton} onClick={this.zoom}>
          <span className={`${styles.zoomIcon} fa-layers fa-fw`}>
            <FontAwesomeIcon size="2x" transform="grow-2" icon="circle" color="white"/>
            <FontAwesomeIcon size="2x" transform="shrink-4 right-1 down-1" icon={['fas', 'search-plus']} mask="circle"/>
          </span>
          {image}
        </button>)
    }

    return image;
  }
}

export default Image
