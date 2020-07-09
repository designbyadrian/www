import React from "react"
import tw from "twin.macro"

import Wrapper from "components/Wrapper"

const Container = tw.footer`
  mt-10
  bg-purple-800
  text-gray-100
  dark:bg-purple-900
  dark:text-gray-500
`

const Body = tw.footer`
  py-10
`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Body>Copyright © {new Date().getFullYear()}</Body>
      </Wrapper>
    </Container>
  )
}
export default Footer
