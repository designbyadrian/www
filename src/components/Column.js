import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

const Column = styled.div(({ width }) => [
  tw`w-full flex-grow p-1`,
  width === "1/2" && tw`md:w-1/2`,
  width === "1/3" && tw`md:w-1/3`,
  width === "1/4" && tw`md:w-1/4`,
])

Column.defaultProps = {
  width: "1/3",
}

Column.propTypes = {
  width: PropTypes.string,
}

export default Column
