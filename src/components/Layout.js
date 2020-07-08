import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import tw from "twin.macro"

import Footer from "components/Footer"
import Header from "components/Header"

import "src/utils/fontawesome"

import * as font from "assets/fonts"

const Page = tw.div`flex flex-col min-h-screen`

const Main = tw.main`flex-grow`

const globalStyles = css`
  body {
    ${tw`font-sans text-gray-700 bg-white dark:text-gray-300 dark:bg-purple-800`};
  }

  h1 {
    ${tw`w-full font-display text-4xl md:text-5xl lg:text-6xl leading-none uppercase text-gray-800 dark:text-gray-100`}
  }

  h2 {
    ${tw`w-full font-display text-4xl leading-none uppercase text-gray-700 dark:text-gray-100`}
  }

  h3 {
    ${tw`w-full mt-10 mb-3 font-display text-5xl leading-none text-gray-600 dark:text-gray-500`}
  }

  h4 {
    ${tw`w-full font-display text-3xl leading-none text-gray-600 dark:text-gray-500`}
  }

  p {
    ${tw`my-6`}
  }

  @font-face {
    font-family: "Dense";
    font-style: normal;
    font-weight: normal;
    font-display: block;
    src: url('${font.Dense_woff}') format("woff"), url('${
  font.Dense_woff2
}') format("woff2");
  }
`

const Layout = ({ children }) => (
  <Page>
    <Global styles={globalStyles} />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Page>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
