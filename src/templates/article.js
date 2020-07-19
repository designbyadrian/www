import React from "react"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import countWords from "words-count"

import ArticleFooter from "components/ArticleFooter"
import Link from "components/Link"
import Feature from "components/Feature"
import { Column, Row } from "components/Grid"
import KeyFeature from "components/KeyFeature"
import Layout from "components/Layout"
import PageWrapper from "components/Wrapper"
import SEO from "components/SEO"
import Tag from "components/Tag"
import YearsSince from "components/YearsSince"

const wpm = 265

const Wrapper = tw.article`
  w-full
  md:w-11/12
  lg:w-10/12
  xl:w-9/12
  mx-auto
`

const Page = tw.div`
  max-w-3xl
  my-10
  mx-auto
  px-6
  md:px-0
  text-lg
  md:text-xl
`

const Header = tw.div`mt-10 md:mt-20`

const Meta = tw.small`block w-full text-gray-500`

const Tags = tw.div`relative z-10 w-full mt-3 mb-2`

const shortcodes = {
  Link,
  Column,
  YearsSince,
  Feature,
  FontAwesomeIcon,
  KeyFeature,
  Page,
  Row,
}

const ArticlePage = ({ pageContext }) => {
  const {
      body: {
        childMdx: { body, rawBody },
      },
      createdAt,
      excerpt: { excerpt },
      hero,
      media,
      slug,
      tags,
      timestamp,
      title,
    } = pageContext,
    numWords = countWords(rawBody),
    timeToRead = Math.ceil(numWords / wpm)

  return (
    <Layout>
      <SEO title={title} description={excerpt} image={hero.fixed} />
      <Img fluid={hero.fluid} title={hero.title} alt={hero.description} />
      <Wrapper>
        <Page>
          <Header>
            <h1>{title}</h1>
            <Meta>
              {timestamp || createdAt} • {timeToRead} min read
            </Meta>
          </Header>
        </Page>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        <Page>
          <ArticleFooter />
          <Tags>
            {tags.map(tag => (
              <Tag {...tag} key={tag.slug} />
            ))}
          </Tags>
        </Page>
      </Wrapper>
    </Layout>
  )
}

export default ArticlePage
