import { styled } from "styled-components"
import { Link } from "react-router-dom"
import ImgButton from "../components/ImgButton"
import Arrow from "../components/Arrow"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import ScrollAnimationSection from "../components/ScrollAnimationSection"

const Container = styled.div`
  height: calc(100vh - 74px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 980px) {
    .logo {
    display: none;
    }
  }
 
`

const Title = styled.h1`
  font-size: 66px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: var(--text-color);

  @media (max-width: 980px) {
    font-size: 50px;
  }
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--line-color);
  margin: 2.75vh 0;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 3.5625rem;
  justify-content: center;
  margin: 2rem 0;
  @media (max-width: 980px) {
   gap: 10px;
   margin-bottom: 10px;
  }
`

const ApplyButton = styled.div`
 width: calc(212px * 2 + 3.5625rem);
            margin: 0 auto;
            margin-bottom: 2rem;
  height: 36px;
  background-color: var(--btn-color);
  box-shadow: 1px 1px 6px #00000029;
  border-radius: 5px;
  font-size: 15px;
  color: var(--bg-color);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 980px) {
    width: 328px;
    height: 27px;
  }
`

const Card = styled.div`
  width: 100%;
  height: 651px;
  max-height: 100%;
  background-color: var(--card-color);
  box-shadow: 1px 1px 6px #00000029;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 980px) {
    width: calc(100% - 48px);
    height: 75vh;
    margin: 0 24px;
  }
`

const CardTo = styled.span`
  display: block;
  font-size: 20px;
  position: absolute;
  left: 42px;
  top: 42px;
  font-weight: 300;
  @media (max-width: 980px) {
    font-size: 14px;
    top: 10px;
    left: 10px;
  }
`

const CardContents = styled.div`
  width: 582px;
  height: 150px;
  border-bottom: 1px solid var(--line-color);
  font-size: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 980px) {
    font-size: 30px;
    width: calc(100% - 48px);
  }
`

const CardFrom = styled.span`
  font-size: 20px;
  font-weight: 300;
  bottom: 42px;
  right: 42px;
  position: absolute;
  @media (max-width: 980px) {
    font-size: 14px;
    bottom: 10px;
    right: 10px;
  }
`

const SectionSubtitle = styled.span`
  font-size: 20px;
  font-weight: 300;
  color: var(--subtitle-color);
  margin-bottom: 20px;
  @media (max-width: 980px) {
    font-size: 13px;
	margin-bottom: 9px;
  }
`

const SectionTitle = styled.span`
  font-size: 40px;
  color: var(--text-color);
  margin-bottom: 30px;
  @media (max-width: 980px) {
    font-size: 25px;
	margin-bottom: 19px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  margin-top: 60px;
    @media (max-width: 980px) {
	margin-left: 36px;
	margin-top: 36px;
	}
`

const PagePreview = styled.div`
  aspect-ratio: 1 / 2;
  height: 70%;
  background-color: var(--card-color);
  box-shadow: 3px 10px 6px #00000029;
  border-radius: 45px;
  position: absolute;
  right: 60px;
  bottom: 168px;
  
  @media (max-width: 980px) {
    right: 0;
	  bottom: 36px;
    width: calc(100% - 48px);
    height: 50%;
    margin: 0 24px;
  }
`

const PagePreviewCaption = styled.span`
  font-size: 20px;
  font-weight: 300;
  color: var(--subtitle-color);
  text-align: right;
  position: absolute;
  right: 48px;
  bottom: 48px;
  @media (max-width: 980px) {
    font-size: 12px;
    color: var(--bg-color);
  }
`

const AuthorCard = styled.div`
  height: 332px;
  background-color: var(--card-color);
  box-shadow: 3px 10px 6px #00000029;
  border-radius: 45px;
  margin-bottom: 39px;
  margin-left: 35px;
  margin-right: 35px;
`

const Logo = styled.div`
  width: 56px;
  height: 50px;
  font-size: 13px;
  text-align: center;
  line-height: 50px;
  color: var(--bg-color);
  background-color: var(--text-color);
`

const Landing = () => {
  return (
    <>
      <Container>
        <Link to="/" style={{ margin: "0 auto" }} className="logo">
          <Logo>로고</Logo>
        </Link>
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
        <div>
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
        <Link to="/apply" style={{textDecoration: "none"}}>
        <ApplyButton>
          작가 등록 바로가기
        </ApplyButton>
        </Link>
        </div>
        <div style={{ paddingBottom: "1.5625rem" }}>
          {[...Array(3)].map((_, i) => (
            <Line key={i} />
          ))}
          <Arrow />
        </div>
      </Container>
      <ScrollAnimationSection isCenter={true}>
        <Card>
          <CardTo>To.</CardTo>
          <CardContents>
            당신의 글을
            <br />
            세상에 ——
          </CardContents>
          <CardFrom>From. Abouht</CardFrom>
        </Card>
      </ScrollAnimationSection>
      <ScrollAnimationSection>
        <div>
          <TitleContainer>
            <SectionSubtitle>문학</SectionSubtitle>
            <SectionTitle>
              시 ∙ 소설
              <br />
              모든 글이 다 여기에
            </SectionTitle>
            <SectionSubtitle>
            우리의 길이 되어줄 당신의 글<br/>
            세상이 발견하지 못했던 당신의 이야기를<br/>
            우리에게 마음껏 나누어주세요.<br/>
            하나의 이야기들이 모여<br/>
            하나의 작품으로 거듭날 수 있도록, 기다릴게요.<br/>              
            </SectionSubtitle>
          </TitleContainer>
        </div>
        <div>
          <PagePreview></PagePreview>
          <PagePreviewCaption style={{ textAlign: "right" }}>
            순수한 문학을 함께 나눌 수 있는 공간은 어디에 있을까요?<br/>
            Abouht을 통해 또 다른 당신의 모습을 보여주세요.

          </PagePreviewCaption>
        </div>
      </ScrollAnimationSection>
      <ScrollAnimationSection>
      <div>
		    <PagePreview></PagePreview>
        <PagePreviewCaption style={{ textAlign: "right"}}>
          세상을 울고 웃게 만들 이야기를<br/>
          우리에게 마음껏 나누어주세요.<br/>
          당신의 일상이 모두의 일상이 될 수 있을 그때까지.<br/>
          기다리고 있을게요.
        </PagePreviewCaption>
        </div>
        <TitleContainer>
          <SectionSubtitle>
            비문학
          </SectionSubtitle>
          <SectionTitle>
            수필 ∙ 일기
            <br />
            모든 글이 다 여기에
          </SectionTitle>
          
          <SectionSubtitle>순수한 문학을 함께 나눌 수 있는 공간은 어디에 있을까요?<br/>
          Abouht을 통해 또 다른 당신의 모습을 보여주세요.</SectionSubtitle>
        </TitleContainer>
        
      </ScrollAnimationSection>
      <ScrollAnimationSection>
        <TitleContainer>
          <SectionSubtitle>
            다른 카테고리
          </SectionSubtitle>
          <SectionTitle>
            이 곳엔 다른 강점들
            <br />
            적기
          </SectionTitle>
          <SectionSubtitle>
            글에서 빠질 수 없는 요소, 일러스트
            <br />
            작가가 되고, 작가를 찾아보세요 어쩌구
          </SectionSubtitle>
        </TitleContainer>
        <PagePreview></PagePreview>
        <PagePreviewCaption style={{ textAlign: "right" }}>
          여기엔 일러스트가 글에 왜 필요하고 중요한지
          <br />
          Or 왜 이 앱에 일러스트를 올려야하는지같은 간단한 부가적인 설명
        </PagePreviewCaption>
      </ScrollAnimationSection>
      <ScrollAnimationSection>
        <AuthorCard>asdf</AuthorCard>
        <AuthorCard>asdf</AuthorCard>
        <TitleContainer style={{ marginTop: "0" }}>
          <SectionTitle>
            이런 글들과 작가님들이
            <br />
            있어요옹
          </SectionTitle>
          <SectionSubtitle>비문학</SectionSubtitle>
        </TitleContainer>
      </ScrollAnimationSection>
    </>
  )
}

export default Landing
