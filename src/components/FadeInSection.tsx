import { styled } from "styled-components"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

const Section = styled.section`
  height: calc(100vh - 74px);
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-evenly;
  opacity: 0;
  transition: 1s all cubic-bezier(0, 0, 0.2, 1);
  transform: translate3d(0, 25%, 0);
  color: var(--text-color);
  font-size: 1.5rem;
  text-align: center;
  &.frame-in {
    font-size: 1.5rem;
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .left {
    text-align: left;
  }

  .right {
    text-align: right;
  }
`

type Props = {
  children: React.ReactNode
}

const ScrollAnimationSection = (props: Props) => {
  const { ref, isInViewport } = useScrollAnimation()
  return (
    <Section ref={ref} className={isInViewport ? "frame-in " : ""}>
      {props.children}
    </Section>
  )
}

export default ScrollAnimationSection
