import { styled } from "styled-components"

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const ArrowLeft = styled.div`
  background: linear-gradient(
    to top right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) calc(50% - 0.8px),
    #707070 50%,
    rgba(0, 0, 0, 0) calc(50% + 0.8px),
    rgba(0, 0, 0, 0) 100%
  );
  width: 3rem;
  height: 1.5rem;
`

const ArrowRight = styled.div`
  background: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) calc(50% - 0.8px),
    #707070 50%,
    rgba(0, 0, 0, 0) calc(50% + 0.8px),
    rgba(0, 0, 0, 0) 100%
  );
  width: 3rem;
  height: 1.5rem;
`

const Arrow = () => {
  return (
    <ArrowContainer>
      <ArrowLeft />
      <ArrowRight />
    </ArrowContainer>
  )
}

export default Arrow
