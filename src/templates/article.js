import React from "react"
import rehypeReact from "rehype-react"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ArticleFooter from "components/ArticleFooter"
import Anchor from "components/Link"
import Column from "components/Column"
import Experience from "components/Experience"
import Feature from "components/Feature"
import Layout from "components/Layout"
import Row from "components/Row"
import SEO from "components/SEO"
import Tag from "components/Tag"

// https://www.gatsbyjs.org/packages/gatsby-remark-images-contentful/

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    column: Column,
    experience: Experience,
    feature: Feature,
    "font-awesome": FontAwesomeIcon,
    a: Anchor,
    row: Row,
  },
}).Compiler

const wpm = 265

const Wrapper = tw.div`
  w-full
  md:w-11/12
  lg:w-10/12
  xl:w-9/12
  mx-auto
`

const Article = tw.article`
  max-w-3xl
  mt-6
  mx-auto
  overflow-hidden
  text-lg
  md:text-xl
`

const Body = tw.section`
  px-6
  pt-10
  md:px-0
`

const Header = styled.div`
  margin-bottom: 2rem;
`

const Meta = tw.small`block w-full text-gray-500`

const Tags = tw.div`relative z-10 w-full mt-3 mb-2`

const ArticlePage = ({ pageContext, ...rest1 }) => {
  const {
      body: {
        childMarkdownRemark: { htmlAst, wordCount },
      },
      createdAt,
      excerpt: { excerpt },
      hero,
      slug,
      tags,
      timestamp,
      title,
    } = pageContext,
    timeToRead = Math.ceil(wordCount.words / wpm)

  return (
    <Layout>
      <SEO title={title} description={excerpt} image={hero.fixed} />
      <Img fluid={hero.fluid} title={`${hero.title} – ${hero.description}`} />
      <Wrapper>
        <Article>
          <Body>
            <Header>
              <h1>{title}</h1>
              <Meta>
                {timestamp || createdAt} • {timeToRead} min read
              </Meta>
            </Header>
            {renderAst(htmlAst)}
            <ArticleFooter />
            <Tags>
              {tags.map(tag => (
                <Tag {...tag} key={tag.slug} />
              ))}
            </Tags>
          </Body>
        </Article>
      </Wrapper>
    </Layout>
  )
}

export default ArticlePage
