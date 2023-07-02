import { styled } from "styled-components"
import ImgButton from "../components/ImgButton"
import Arrow from "../components/Arrow"

const Container = styled.div`
  height: calc(100vh - 7.75rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: white;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #707070;
  margin: 29px 0;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 3.5625rem;
  justify-content: center;
  margin: 2rem 0;
`

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Card = styled.div`
  width: 1191px;
  height: 791px;
  background-color: #f8f8f8;
  box-shadow: 1px 1px 6px #00000029;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardTo = styled.span`
  display: block;
  font-size: 25px;
  position: absolute;
  left: 42px;
  top: 42px;
  font-weight: 300;
`

const CardContents = styled.div`
  width: 708px;
  height: 180px;
  border-bottom: 1px solid #707070;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardFrom = styled.span`
  font-size: 25px;
  font-weight: 300;
  bottom: 42px;
  right: 42px;
  position: absolute;
`

const SectionSubtitle = styled.span`
  font-size: 20px;
  font-weight: 300;
  color: #d3d3d3;
  margin-bottom: 20px;
`

const SectionTitle = styled.span`
  font-size: 40px;
  color: #f6f5f2;
`

const Landing = () => {
  return (
    <>
      <Container>
        <div>
          {[...Array(6)].map((_, i) => (
            <Line key={i} />
          ))}
        </div>
        <Title>
          Abouht에서
          <br />
          꿈을 써내다
        </Title>
        <ButtonContainer>
          <ImgButton
            src="https://img.freepik.com/free-icon/google-play_318-566073.jpg"
            href="https://google.com"
          >
            Google Play
          </ImgButton>
          <ImgButton
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/391px-Apple_logo_black.svg.png"
            href="https://apple.com"
          >
            App Store
          </ImgButton>
        </ButtonContainer>
        <div style={{ paddingBottom: "1.5625rem" }}>
          {[...Array(3)].map((_, i) => (
            <Line key={i} />
          ))}
          <Arrow />
        </div>
      </Container>
      <Section>
        <Card>
          <CardTo>To.</CardTo>
          <CardContents>
            당신의 글을
            <br />
            세상에 ——
          </CardContents>
          <CardFrom>From. Abouht</CardFrom>
        </Card>
      </Section>
      <Section>
        <SectionSubtitle>문학</SectionSubtitle>
        <SectionTitle>
          시 ∙ 소설
          <br />
          모든 글이 다 여기에
        </SectionTitle>
      </Section>
      <Section>
        <SectionSubtitle>비문학</SectionSubtitle>
        <SectionTitle>
          수필 ∙ 일기
          <br />
          모든 글이 다 여기에
        </SectionTitle>
      </Section>
    </>
  )
}

export default Landing
