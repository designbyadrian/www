import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"

const Container = tw(Link)`
  w-full
  h-full
  bg-white
  dark:bg-purple-700
  rounded-lg
  shadow-xl
  flex
  flex-col
  hover:shadow-lg
  hover:transform
  hover:translate-y-1
  transition
  duration-200
  ease-in-out
  overflow-hidden
`

const Content = tw.div`
  px-5
  py-4
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

const Description = tw.p`flex-grow mt-3 sm:text-base md:text-sm text-gray-600 dark:text-gray-300`

const Card = ({ createdAt, excerpt, slug, thumbnail, timestamp, title }) => (
  <Container to={`/${slug}`}>
    {console.log("thumb", thumbnail?.fluid)}
    {thumbnail && (
      <Img
        fluid={thumbnail.fluid}
        title={`${thumbnail.title} – ${thumbnail.description}`}
      />
    )}
    <Content>
      <Header>
        <Title>{title}</Title>
        <Date>{timestamp || createdAt}</Date>
      </Header>
      <Description>{excerpt}</Description>
    </Content>
  </Container>
)

export default Card
