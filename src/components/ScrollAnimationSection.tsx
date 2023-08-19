import { styled } from "styled-components"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

const Section = styled.section`
  height: calc(100vh - 74px);
  display: flex;
  flex-direction: column;
  position: relative;
  // border: 1px solid #ff00ff;

  &.center {
    align-items: center;
    justify-content: center;
  }

  opacity: 0;
  transform: translate3d(0, 25%, 0);
  transition: 1s all cubic-bezier(0, 0, 0.2, 1);

  &.frame-in {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

type Props = {
  children: React.ReactNode
  isCenter?: boolean
}

const ScrollAnimationSection = (props: Props) => {
  const { ref, isInViewport } = useScrollAnimation()
  return (
    <Section
      ref={ref}
      className={
        (props.isCenter ? "center " : "") + (isInViewport ? "frame-in " : "")
      }
    >
      {props.children}
    </Section>
  )
}

export default ScrollAnimationSection
