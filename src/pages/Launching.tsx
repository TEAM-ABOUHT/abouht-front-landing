import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ImgButton from '../components/ImgButton'
import Arrow from '../components/Arrow'

const Container = styled.div`
  background-color: var(--bg-color-light);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Logo = styled.div`
  width: 56px;
  height: 35px;
  font-size: 13px;
  text-align: center;
  line-height: 50px;
  color: var(--text-color-light);
  background-color: #162840;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--line-color);
  margin: 2.75vh 0;
`

const Title = styled.h1`
  font-size: 66px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: var(--text-color-light);

  @media (max-width: 980px) {
    font-size: 50px;
  }
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

type Props = {}

const Launching = (props: Props) => {
  return (
    <Container>
      <Link to="/" style={{ margin: "0 auto" }} className="logo">
        <Logo>로고</Logo>
      </Link>
      <div>
        {[...Array(3)].map((_, i) => (
          <Line key={i} />
        ))}
      </div>
      <Title>
        Abouht 런칭
        <br />
        0/00
      </Title>

      <ButtonContainer>
        <div>
          <Arrow />
          <ImgButton
            href="/userapply"
            style={{marginTop: "28px"}}
          >
            유저 사전 가입하기
          </ImgButton>
        </div>
        <div>
          <Arrow />
          <ImgButton
            href="/apply"
            style={{marginTop: "28px"}}
          >
            작가 사전 등록하기
          </ImgButton>
        </div>
        </ButtonContainer>
      <div>
        {[...Array(2)].map((_, i) => (
          <Line key={i} />
        ))}
      </div>
    </Container>
  )
}

export default Launching