import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

const Container = tw(Link)`
  w-full
  h-full
  bg-white
  dark:bg-purple-900
  px-6
  py-4
  rounded-lg
  shadow-xl
  flex
  flex-col
  hover:shadow-lg
  transition-shadow
  duration-200
  ease-in-out
`

const Header = styled.div`
  min-height: 6rem;
`

const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const Date = tw.small`block text-gray-500`

const Description = tw.p`flex-grow mt-3 text-gray-600 dark:text-gray-300`

const Card = ({ createdAt, excerpt, slug, title }) => (
  <Container to={`/${slug}`}>
    <Header>
      <Title>{title}</Title>
      <Date>{createdAt}</Date>
    </Header>
    <Description>{excerpt}</Description>
  </Container>
)

export default Card
