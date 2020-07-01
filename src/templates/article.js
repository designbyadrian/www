import React from "react"
import tw, { styled } from "twin.macro"

import Layout from "@components/Layout"
import Wrapper from "@components/PageWrapper"
import SEO from "@components/SEO"

const wpm = 265

const Page = tw.main`
  bg-white
  mt-6
  px-12
  pt-10
  pb-12
  rounded-sm
  shadow-sm
`

const Header = styled.div`
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
        <Page>
          <Header>
            <h1>{title}</h1>
            <Meta>
              {createdAt} • {timeToRead} min read
            </Meta>
          </Header>
          <section dangerouslySetInnerHTML={{ __html: html }} />
        </Page>
      </Wrapper>
    </Layout>
  )
}

export default ArticlePage
