import React from "react"
import tw, { styled } from "twin.macro"

const ArticleFooter = styled.div`
  ${tw`block w-full my-10 text-base text-center text-gray-300 dark:text-purple-600`}

  &::before,
  &::after {
    ${tw`mx-3`}
    content: "•";
    font-size: 0.8em;
  }
`

export default () => <ArticleFooter>•</ArticleFooter>
