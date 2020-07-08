import React from "react"
import tw from "twin.macro"

const Wrapper = tw.footer`
  mt-10
  bg-purple-800
  text-gray-100
  dark:bg-purple-900
  dark:text-gray-500
`

const Body = tw.footer`
  py-10
  px-6
  lg:px-10
`

const Footer = () => {
  return (
    <Wrapper>
      <Body>© {new Date().getFullYear()}</Body>
    </Wrapper>
  )
}
export default Footer
