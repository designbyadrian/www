import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const linkStyle = css`
  ${tw`relative`}

  &:not(.gatsby-resp-image-link)::after {
    content: "";
    ${tw`absolute left-0 right-0 border-b border-gray-400 dark:border-gray-600 transition-colors duration-200`}
    bottom: -0.2em;
  }

  &:hover::after {
    ${tw`border-purple-600 dark:border-purple-500`}
  }
`

const Anchor = props =>
  props.href ? (
    <a css={linkStyle} {...props} target="_blank" rel="noopener noreferrer" />
  ) : (
    <Link css={linkStyle} {...props} />
  )

export default Anchor
