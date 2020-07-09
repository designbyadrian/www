import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import { Link as GatsbyLink } from "gatsby"

const Link = styled(GatsbyLink)`
  ${tw`inline-block mr-3 mb-2 relative px-3 py-0 rounded-sm shadow-md font-display text-2xl text-white dark:text-gray-400 hover:bg-purple-400 bg-purple-600 dark:hover:bg-purple-500 transition-colors duration-200`}
`

const Tag = ({ slug, title }) => <Link to={`/tags/${slug}`}>{title}</Link>

Tag.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Tag
