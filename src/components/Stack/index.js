import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card'

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
    <div className="row">
      {cards}
    </div>
  )
}



export default Stack
