import { styled } from "styled-components"

const Card = styled.div`
  width: 330px;
  padding: 53.5px 42.5px;
  text-align: center;
  font-family: "Apple SD Gothic Neo", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`

const Profile = styled.img`
  width: 179px;
  height: 229px;
  margin-bottom: 26px;
`

const Role = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`

const Content = styled.span`
  font-size: 14px;
  margin-bottom: 24px;
`

type Props = {
  role: string
  profile: string
  name: string
  introduction: string
  summary: string[]
}

const ProfileCard = (props: Props) => {
  return (
    <Card>
      <Role>{props.role}</Role>
      <Profile src={props.profile}></Profile>
      <Content style={{ marginBottom: "52px" }}>{props.name}</Content>
      <Content>소개</Content>
      <Content>{props.introduction}</Content>
      <Content>약력</Content>
      {props.summary.map(i => {
        return <Content>{i}</Content>
      })}
    </Card>
  )
}

export default ProfileCard
