import styled from "styled-components"
import FadeInSection from "../components/FadeInSection"

const Abouht = styled.div`
  font-size: 22px;
  text-align: center;
  color: var(--text-color);
  margin: 0 auto;
  display: flex; 
  flex-direction: column;
  @media (max-width: 980px) {
    width: 100%;
  }
`

const About = () => {
  return (
    <>
      <FadeInSection>
        이 세상에 누군가의 글을 나눌 수 있는 곳들은 너무 많습니다.
      </FadeInSection>
      <FadeInSection>
        하지만, 아직 세상이 발견하지 못한 작가님들을 위한 곳은 부족합니다.
      </FadeInSection>
      <FadeInSection>
        저희는 이러한 이야기들이 모두를 위한 이야기가 되고,
        <br />모두의 길이 되었으면 합니다.
      </FadeInSection>
      <FadeInSection>
        그동안 쉽게 나아갈 수 없었던 문학의 길을<br />조금 더 쉽게 만들고자 합니다.
      </FadeInSection>
      <FadeInSection>
        글을 작성하는 과정을 시각화하여 작가님들께 제공하고자 합니다.
      </FadeInSection>
      <FadeInSection>
      단순히 온라인으로 글을 투고하는 것과는 다르게,
      <br />
      작가님들의 이야기를 정성스럽게 묶어서<br/>E-book 형태로 출간해드리고자 합니다.
      </FadeInSection>
      <FadeInSection>
        더 나아가 아직 세상이 미처 발견하지 못한<br/>작가님들의 이야기를 위한 기회를 제공하고자 합니다.
      </FadeInSection>
    </>
  )
}
export default About
