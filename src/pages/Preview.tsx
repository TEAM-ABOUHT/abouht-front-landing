import React from "react"
import styled from "styled-components"

type Props = {}

const Container = styled.div`
  height: calc(100vh - 7.75rem);
  display: flex;
  justify-content: center;
  align-items: center;
`

const GradientOverlay = styled.div`
  z-index: 2;
  position: absolute;
  top: 7.75rem;
  width: 100%;
  height: calc(100vh - 7.75rem);
  background: linear-gradient(
    90deg,
    #162940 0%,
    rgba(22, 41, 64, 0) 40%,
    rgba(22, 41, 64, 0) 60%,
    #162940 100%
  );
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 7.75rem);
  width: 1666px;
  overflow: hidden;
`

const Card = styled.div`
  background-color: #f8f8f8;
  box-shadow: 3px 10px 6px #00000029;
  border-radius: 45px;

  &.first {
    width: 374px;
    height: 750px;
    margin: 0 16px;
  }

  &.second {
    width: 300px;
    height: 600px;
    margin: 0 38px;
  }

  &.third {
    width: 254px;
    height: 506px;
  }
`

const Preview = (props: Props) => {
  return (
    <>
      <GradientOverlay />
      <Container>
        <CardContainer>
          <Card className="third" />
          <Card className="second" />
          <Card className="first" />
          <Card className="second" />
          <Card className="third" />
        </CardContainer>
      </Container>
    </>
  )
}

export default Preview
