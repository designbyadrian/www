import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import { Link as GatsbyLink } from "gatsby"

const Link = styled(GatsbyLink)`
  ${tw`inline-block mr-3 mb-2 relative px-3 py-0 rounded-sm shadow-sm font-display bg-white hover:bg-purple-600 hover:text-white transition-colors duration-200`}

  &::before,
  &::after {
    content: "";
    position: absolute;
    right: 2px;
    width: 40%;
    height: 10px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    z-index: -1;
    border-radius: 0.125rem;
  }

  &::before {
    top: 2px;
    transform: skew(-5deg) rotate(-5deg);
  }

  &::after {
    bottom: 1px;
    transform: skew(5deg) rotate(5deg);
  }
`

const Tag = ({ slug, title }) => <Link to={`/tags/${slug}`}>{title}</Link>

Tag.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Tag
