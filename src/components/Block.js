import React from "react"
import tw from "twin.macro"

const Container = tw.div`w-full my-3 flex flex-wrap`

const Block = ({ children }) => <Container>{children}</Container>

export default Block
