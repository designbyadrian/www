import React from "react"
import tw from "twin.macro"

import Wrapper from "src/components/PageWrapper"

const Container = tw.footer`
`

const Footer = () => {
  return (
    <Wrapper>
      <footer>© {new Date().getFullYear()}</footer>
    </Wrapper>
  )
}
export default Footer
