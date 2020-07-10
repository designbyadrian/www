import React from "react"
import tw from "twin.macro"

const Container = tw.div`w-full sm:w-1/2 md:w-1/3 pr-2 mb-3`

const Title = tw.h5`mb-2 text-sm`

const Description = tw.div`leading-snug text-sm text-gray-600 dark:text-gray-500`

const KeyFeature = ({ children, title }) => (
  <Container>
    <Title>{title}</Title>
    <Description>{children}</Description>
  </Container>
)

export default KeyFeature
