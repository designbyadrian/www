import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Container = tw.div`
  w-full
  h-full
  px-2
  pt-4
  pb-6
  bg-white
  dark:bg-purple-900
  rounded-md
  shadow-md
`

const Icon = tw.div`
  text-gray-600
  dark:text-gray-600
  text-center
  my-3
`
const Title = tw.h4`
  text-center
  mt-0
  mb-3
`

const Body = tw.section`
  text-sm
  text-center
`

const Feature = ({ children, icon, title }) => (
  <Container>
    <Icon>
      <FontAwesomeIcon
        icon={icon}
        mask="circle"
        transform="shrink-6"
        size="3x"
      />
    </Icon>
    <Title>{title}</Title>
    <Body>{children}</Body>
  </Container>
)

Feature.defaultProps = {
  children: null,
  icon: "question",
}

Feature.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Feature
