import React from "react"
import tw from "twin.macro"
import PropTypes from "prop-types"

import Card from "@components/Card"

const Container = tw.div`flex flex-row flex-wrap`

const Column = tw.div`
  w-full
  flex-grow
  md:w-1/2
  lg:w-1/3
  xl:w-1/5
  px-3
  mt-6
`

const Stack = ({ items }) => (
  <Container>
    {items.map(item => (
      <Column key={item.slug}>
        <Card {...item} />
      </Column>
    ))}
  </Container>
)

Stack.propTypes = {
  items: PropTypes.array,
}

export default Stack
