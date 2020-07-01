import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import tw from "twin.macro"

import Footer from "@components/Footer"
import Header from "@components/Header"

const Page = tw.div`px-3 flex flex-col min-h-screen`

const Main = tw.main`flex-grow`

const globalStyles = css`
  body {
    ${tw`font-sans text-purple-800 bg-gray-100 dark:text-white dark:bg-purple-800`};
  }

  h1 {
    ${tw`w-full font-display text-4xl md:text-5xl lg:text-6xl leading-none`}
  }

  h2 {
    ${tw`w-full font-display text-4xl leading-none`}
  }
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Page>
      <Global styles={globalStyles} />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Page>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
