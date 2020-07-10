import React from "react"
import tw, { styled } from "twin.macro"
import { keyframes } from "@emotion/core"

import { theme } from "../../tailwind.config"

const ASide = styled.polygon`
  fill: ${theme.colors.gray["400"]};

  @media (prefers-color-scheme: dark) {
    fill: ${theme.colors.purple["400"]};
  }
`

const DSide = styled.path`
  fill: ${theme.colors.purple["600"]};

  @media (prefers-color-scheme: dark) {
    fill: ${theme.colors.purple["900"]};
  }
`

const DHole = styled.polygon`
  fill: ${theme.colors.white};

  @media (prefers-color-scheme: dark) {
    fill: ${theme.colors.purple["700"]};
  }
`

const sideA = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100px"
    height="100px"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
  >
    <ASide points="49.851,0 0,100 30.102,100 38.061,80 62.312,80 70.52,100 100,100" />
  </svg>
)

const sideD = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100px"
    height="100px"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
  >
    <DSide d="M49.851,0L0,100h100L49.851,0z" />
    <DHole points="50,50 58.208,70 42.041,70 " />
  </svg>
)

const spin = keyframes`
  0% {
    transform: rotateY(0deg)
  }

  100% {
    transform: rotateY(359deg)
  }
`

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 120px;
  height: 50px;
  transform: translate3d(20px, -10px, 0);
  perspective: 200;
`

const Box = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  transform-style: preserve-3d;

  animation: ${spin} 10s linear infinite;
`

const Side = styled.div`
  position: absolute;
  transform-origin: center bottom;
  z-index: 1;

  width: 50px;
  height: 50px;

  svg {
    width: 50px;
    height: 50px;
  }

  &:nth-of-type(1) {
    transform: translateZ(25px) rotateX(30deg);
  }

  &:nth-of-type(2) {
    transform: translateX(25px) rotateY(270deg) rotateX(-30deg);
  }

  &:nth-of-type(3) {
    transform: translateZ(-25px) rotateX(-30deg);
  }

  &:nth-of-type(4) {
    transform: translateX(-25px) rotateY(-270deg) rotateX(-30deg);
  }
`

const Logo = () => (
  <Container>
    <Box>
      <Side>{sideA}</Side>
      <Side>{sideD}</Side>
      <Side>{sideA}</Side>
      <Side>{sideD}</Side>
    </Box>
  </Container>
)

export default Logo