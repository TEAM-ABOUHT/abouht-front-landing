import { styled } from "styled-components"

const Card = styled.div`
  background-color: var(--card-color);
  text-align: center;
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-color-light);
  border-radius: 0.6rem;
  padding: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.375rem 0.625rem;
  margin-top: 110px;
`

const Profile = styled.img`
  width: 180px;
  height: 180px;
  margin-top: -110px;
  margin-bottom: 26px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5rem 1rem;
`

const Name = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const Content = styled.span`
  font-size: 14px;
  margin-bottom: 1rem;

  a {
    color: var(--text-color-light);
  }
`

type Props = {
  role: string
  profile: string
  name: string
  introduction: string
  email: string
  summary: string[]
}

const ProfileCard = (props: Props) => {
  return (
    <Card>
      <Profile src={props.profile}></Profile>
      <Name>{props.name}</Name>
      <Content>{props.role}</Content>
      <Title>소개</Title>
      <Content>{props.introduction}</Content>
      <Title>이메일</Title>
      <Content><a href={"mailto:" + props.email}>{props.email}</a></Content>
      <Title>약력</Title>
      {props.summary.map(i => {
        return <Content>{i}</Content>
      })}
    </Card>
  )
}

export default ProfileCard
