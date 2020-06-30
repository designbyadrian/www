import React from "react"
import tw, { styled } from "twin.macro"

import Layout from "@components/Layout"
import Wrapper from "@components/PageWrapper"
import SEO from "@components/SEO"

const wpm = 265

const HeadingBlock = styled.div`
  margin-bottom: 2rem;
`

const Meta = tw.small`block w-full text-gray-500`

const ArticlePage = ({ pageContext, ...rest1 }) => {
  const {
      body: {
        childMarkdownRemark: { html, wordCount },
      },
      createdAt,
      excerpt: { excerpt },
      slug,
      tags,
      title,
    } = pageContext,
    timeToRead = Math.ceil(wordCount.words / wpm)

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Wrapper>
        <HeadingBlock>
          <h1>{title}</h1>
          <Meta>
            {createdAt} • {timeToRead} min read
          </Meta>
        </HeadingBlock>
      </Wrapper>
    </Layout>
  )
}

export default ArticlePage
