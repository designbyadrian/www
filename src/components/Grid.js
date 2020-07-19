import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

export const Row = tw.div`flex flex-row flex-wrap py-4 mx--1`

export const Column = styled.div(({ width }) => [
  tw`w-full flex-grow p-1`,
  width === "1/2" && tw`md:max-w-1/2`,
  width === "1/3" && tw`md:max-w-1/3`,
  width === "1/4" && tw`md:max-w-1/4`,
])

Column.defaultProps = {
  width: "1/3",
}

Column.propTypes = {
  width: PropTypes.string,
}
