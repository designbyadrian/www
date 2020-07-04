import React from "react"
import rehypeReact from "rehype-react"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Column from "components/Column"
import Experience from "components/Experience"
import Feature from "components/Feature"
import Layout from "components/Layout"
import Row from "components/Row"
import SEO from "components/SEO"
import Tag from "components/Tag"
import Wrapper from "components/PageWrapper"

// https://www.gatsbyjs.org/packages/gatsby-remark-images-contentful/

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    column: Column,
    experience: Experience,
    feature: Feature,
    "font-awesome": FontAwesomeIcon,
    row: Row,
  },
}).Compiler

const wpm = 265

const Article = tw.article`
  bg-white
  dark:bg-purple-800
  max-w-5xl
  mt-6
  mx-auto
  rounded-sm
  shadow-2xl
  overflow-hidden
`

const Body = tw.section`
  px-3
  pt-10
  pb-12
  md:px-12
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
      <Wrapper>
        <Article>
          <Img fluid={hero.fluid} title={hero.title} />
          <Body>
            <Header>
              <h1>{title}</h1>
              <Meta>
                {timestamp || createdAt} • {timeToRead} min read
              </Meta>
              <Tags>
                {tags.map(tag => (
                  <Tag {...tag} key={tag.slug} />
                ))}
              </Tags>
            </Header>
            {renderAst(htmlAst)}
          </Body>
        </Article>
      </Wrapper>
    </Layout>
  )
}

export default ArticlePage
