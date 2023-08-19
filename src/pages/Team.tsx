import ProfileCard from "../components/ProfileCard"
import styled from "styled-components"
import yulwon from "../assets/yulwon.jpg"

interface Member {
  role: string
  profile: string
  name: string
  introduction: string
  email: string
  summary: string[]
}

const members: Member[] = [
  {
    role: "Developer",
    profile:
      "https://ca.slack-edge.com/T05DJDV4ZCG-U05CE6VMQPR-36a38f0bf37f-512",
    name: "김수빈",
    introduction: "남자친구 구함",
    email: "dal5505@naver.com",
    summary: [
      "인지지능 자연어처리 연구실 학부연구생 (2022.03 - 2022.09)",
      "대학생 논문 경진 대회 - 논문 제출 및 발표 (2022)",
      "삼성 주니어 소프트웨어 창작 대회 2021 - 파이널리스트",
    ],
  },
  {
    role: "Developer",
    profile:
      "https://ca.slack-edge.com/T05DJDV4ZCG-U05CUJVLLGK-75d63d6aa478-512",
    name: "민상연",
    introduction: "",
    email: "judemin@konkuk.ac.kr",
    summary: [
      "2021 신사업창업사관학교 선발",
      "2021 OSC 팀 Euphony 소속",
      "건국대학교 온라인 AI 해커톤 대상",
    ],
  },
  {
    role: "Developer",
    profile: yulwon,
    name: "이율원",
    introduction: "여자친구 구함",
    email: "me@sterd.dev",
    summary: [
      "건국대학교 컴퓨터공학부 22학번 재학",
      "2019 삼성 주니어 소프트웨어 창작대회 고등부 최우수상 수상",
    ],
  },
  {
    role: "Designer",
    profile:
      "https://ca.slack-edge.com/T05DJDV4ZCG-U05N0DXUU03-831b18053d4e-512",
    name: "송정훈",
    introduction: "",
    email: "songjh4178@gmail.com",
    summary: [""],
  },
]

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  padding-bottom: 3rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.5rem;
    padding: 0 1rem 3rem 1rem;
  }
`

const Team = () => {
  return (
    <ProfileContainer>
      {members.map(member => {
        return (
          <ProfileCard
            role={member.role}
            profile={member.profile}
            name={member.name}
            introduction={member.introduction}
            email={member.email}
            summary={member.summary}
          />
        )
      })}
    </ProfileContainer>
  )
}

export default Team
