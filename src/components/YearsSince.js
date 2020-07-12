import React from "react"
import PropTypes from "prop-types"

const YearsSince = ({ year }) => (
  <span>{new Date().getFullYear() - parseInt(year, 10)}</span>
)

YearsSince.propTypes = {
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

YearsSince.defaultProps = {
  year: 2006,
}

export default YearsSince
