import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import styles from './header.module.sass'

class HeaderImage extends React.PureComponent {

  constructor(props) {
    super(props);

    this.imageLoaded = this.imageLoaded.bind(this);

    this.state = { loaded: false };
  }

  componentDidMount() {
    this.refs.image.onload = this.imageLoaded;
  }

  imageLoaded() {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <div className={`${styles.image} ${!this.props.edge2edge ? styles.padded : ''}`}>
        <div className={styles.bigWrapper}>
          <img
            ref="image"
            className={this.state.loaded ? styles.bigLoaded : styles.big}
            src={this.props.sizes.src}
            srcSet={this.props.sizes.srcSet}
            sizes={this.props.sizes.sizes}
          />
        </div>
        {!this.state.loaded &&
          <div className={styles.loader}><FontAwesomeIcon icon={['fas', 'spinner']} size="3x" pulse /></div>
        }
        <img
          src={this.props.resize.src}
        />
      </div>
    )
  }
}



export default HeaderImage
