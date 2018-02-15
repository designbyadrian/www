import React from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Card from '../Card'

import styles from './stack.module.sass'

const Stack = props => {

  const cards = [];

  if (props.cards) {
    props.cards.forEach(card => {
      if (props.hasCurrentTags(card.tags)) {
        cards.push(<div key={card.id} className="col-xs-12 col-sm-6 col-md-3" style={{ 'marginBottom': '1em' }}>
          <Card {...card} />
        </div>);
      }
    });
  }

  return (
    <ReactCSSTransitionGroup
      transitionName={styles}
      transitionAppear={true}
      transitionAppearTimeout={200}
      transitionEnterTimeout={200}
      transitionLeaveTimeout={100}
      component="div" className="row"
    >
      {cards}
    </ReactCSSTransitionGroup>
  )
}



export default Stack
