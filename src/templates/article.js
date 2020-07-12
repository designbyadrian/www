import React from "react"
import rehypeReact from "rehype-react"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ArticleFooter from "components/ArticleFooter"
import Anchor from "components/Link"
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

const Header = tw.div`mt-20`

const Meta = tw.small`block w-full text-gray-500`

const Tags = tw.div`relative z-10 w-full mt-3 mb-2`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: Anchor,
    column: Column,
    "years-since": YearsSince,
    feature: Feature,
    "font-awesome": FontAwesomeIcon,
    "key-feature": KeyFeature,
    page: Page,
    row: Row,
  },
}).Compiler

const ArticlePage = ({ pageContext }) => {
  const {
      body: {
        childMarkdownRemark: { htmlAst, wordCount },
      },
      createdAt,
      excerpt: { excerpt },
      heroMargins = false,
      hero,
      slug,
      tags,
      timestamp,
      title,
    } = pageContext,
    timeToRead = Math.ceil(wordCount.words / wpm)
  console.log("heroMargins?", heroMargins)
  return (
    <Layout>
      <SEO title={title} description={excerpt} image={hero.fixed} />
      {heroMargins ? (
        <PageWrapper>
          <Img fluid={hero.fluid} title={hero.title} alt={hero.description} />
        </PageWrapper>
      ) : (
        <Img fluid={hero.fluid} title={hero.title} alt={hero.description} />
      )}
      <Wrapper>
        <Page>
          <Header>
            <h1>{title}</h1>
            <Meta>
              {timestamp || createdAt} • {timeToRead} min read
            </Meta>
          </Header>
        </Page>
        {renderAst(htmlAst)}
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
