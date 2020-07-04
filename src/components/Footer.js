import React from "react"
import tw from "twin.macro"

import Wrapper from "src/components/PageWrapper"

const Container = tw.footer`
  mt-20
`

const Footer = () => {
  return (
    <Wrapper>
      <Container>© {new Date().getFullYear()}</Container>
    </Wrapper>
  )
}
export default Footer
