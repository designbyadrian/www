import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import { Link as GatsbyLink } from "gatsby"

const StyledAnchor = styled.a`
  ${tw`relative`}

  &:not(.gatsby-resp-image-link)::after {
    content: "";
    ${tw`absolute left-0 right-0 border-b border-gray-300 dark:border-gray-600 transition-colors duration-200`}
    bottom: -0.25em;
  }

  &:hover::after {
    ${tw`border-purple-600 dark:border-purple-500`}
  }
`

const StyledLink = styled(GatsbyLink)`
  ${tw`relative`}

  &::after {
    content: "";
    ${tw`absolute left-0 right-0 border-b border-gray-300 dark:border-gray-600 transition-colors duration-200`}
    bottom: -0.25em;
  }

  &:hover::after {
    ${tw`border-purple-600 dark:border-purple-500`}
  }
`

const Anchor = props =>
  props.href ? (
    <StyledAnchor {...props} target="_blank" rel="noopener noreferrer" />
  ) : (
    <StyledLink {...props} />
  )

export default Anchor
