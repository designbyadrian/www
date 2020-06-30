import React from "react"
import tw from "twin.macro"
import PropTypes from "prop-types"

import Card from "@components/Card"

const Container = tw.div`flex flex-row flex-wrap`

const Stack = ({ items }) => (
  <Container>
    {items.map(item => (
      <Card {...item} key={item.slug} />
    ))}
  </Container>
)

Stack.propTypes = {
  items: PropTypes.array,
}

export default Stack
