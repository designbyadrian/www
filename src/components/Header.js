import React, { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import tw, { styled } from "twin.macro"
import { Sticky } from "react-sticky"

import Logo from "components/Logo"
import ScrollCheck from "components/ScrollCheck"
import Wrapper from "components/Wrapper"

const Container = styled.header`
  ${tw`pt-3 pb-2 md:pt-5 md:pb-3 z-40 bg-white dark:bg-purple-800 dark:border-purple-900 transition-all duration-300 delay-300 transform`}

  ${props => props.isSticky && tw`shadow-lg dark:border-b`};
  ${props => props.foldUp && tw`-translate-y-full`};
`

const Content = styled.div`
  ${tw`flex flex-row items-center text-3xl md:text-4xl`}
`

const Brand = tw(GatsbyLink)`flex flex-row items-center`

const Title = styled.h1`
  ${tw`inline-block leading-none uppercase text-gray-600`}

  span {
    ${tw`lowercase text-purple-700`}
  }
`

const Header = () => {
  const [foldUp, setFoldUp] = useState(false),
    handleScrollChange = scrolledDown => {
      if (scrolledDown && !foldUp) {
        setFoldUp(true)
      } else if (!scrolledDown && foldUp) {
        setFoldUp(false)
      }
    }

  return (
    <Sticky>
      {({ distanceFromTop, isSticky, style: { transform, ...style } }) => (
        <Container style={style} isSticky={distanceFromTop < 0} foldUp={foldUp}>
          <ScrollCheck
            onChange={handleScrollChange}
            scrollY={distanceFromTop}
          />
          <Wrapper>
            <Content>
              <Brand to="/">
                <Logo />
                <Title>
                  Design<span>by</span>Adrian
                </Title>
              </Brand>
            </Content>
          </Wrapper>
        </Container>
      )}
    </Sticky>
  )
}

export default Header
