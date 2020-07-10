import React from "react"
import { Link as GatsbyLink } from "gatsby"
import tw, { styled } from "twin.macro"
import { Sticky } from "react-sticky"

import Logo from "components/Logo"
import Wrapper from "components/Wrapper"

const Container = styled.header`
  ${tw`pt-6 pb-4 z-40 bg-white dark:bg-purple-800 dark:border-purple-900 transition-shadow duration-300`}

  ${props => props.isSticky && tw`shadow-lg dark:border-b`};
`

const Content = styled.div`
  ${tw`flex flex-row items-center`}
`

const Brand = tw(GatsbyLink)`flex flex-row items-center`

const Title = styled.h1`
  ${tw`inline-block text-5xl leading-none uppercase text-gray-600`}

  span {
    ${tw`lowercase text-purple-700`}
  }
`

const Header = () => (
  <Sticky>
    {({ distanceFromTop, style }) => (
      <Container style={style} isSticky={distanceFromTop < 0}>
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
export default Header
