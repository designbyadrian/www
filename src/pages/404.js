import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

import Layout from "components/Layout"
import SEO from "components/SEO"

const sortFunc = (a, b) => b.article?.length || 0 - a.article?.length || 0

const Page = styled.div`
  ${tw`w-full
  md:w-11/12
  lg:w-10/12
  xl:w-9/12
  mx-auto
  mt-20
  text-center
  dark:text-gray-600`}

  h1 {
    ${tw`mt-4 mb-0`}
  }

  h2 {
    ${tw`mt-20 mb-8 text-gray-600`}
  }

  p {
    ${tw`mt-0 text-gray-600`}
  }
`

const TagList = tw.ul`list-none`

const Tag = tw(
  Link
)`inline-block mb-1 mr-1 px-6 py-2 font-display text-3xl shadow-sm rounded-sm transition-colors duration-300 hover:text-white hover:bg-purple-500 dark:text-gray-200 dark:bg-purple-700`

const NotFoundPage = ({ data, location }) => {
  const {
      allContentfulTag: { nodes: tags },
      allContentfulCategory: { nodes: categories },
    } = data,
    { pathname } = location

  tags.sort(sortFunc)
  categories.sort(sortFunc)

  return (
    <Layout>
      <SEO title="404: Not found" />
      <Page>
        <FontAwesomeIcon
          icon="hamburger"
          mask="circle"
          transform="shrink-6"
          size="10x"
        />
        <h1>Bummer</h1>
        <p>
          We're currently out of <strong>“{pathname}”</strong>!<br />
          Can we interest you in something else from the menu?
        </p>

        <h2>How about something from these categories?</h2>

        <TagList>
          {categories.map(category => (
            <Tag to={`/${category.slug}`}>{category.title}</Tag>
          ))}
        </TagList>

        <h2>Or maybe something with one of the following ingredients?</h2>

        <TagList>
          {tags.map(tag => (
            <Tag to={`/${tag.slug}`}>{tag.title}</Tag>
          ))}
        </TagList>
      </Page>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulTag {
      nodes {
        slug
        article {
          id
        }
        title
      }
    }
    allContentfulCategory {
      nodes {
        title
        slug
        article {
          id
        }
      }
    }
  }
`

export default NotFoundPage
