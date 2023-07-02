import React from "react"
import ProfileCard from "../components/ProfileCard"
import styled from "styled-components"

type Props = {}

interface Member {
  role: string
  profile: string
  name: string
  introduction: string
  summary: string[]
}

const members: Member[] = [
  {
    role: "Developer",
    profile:
      "https://ca.slack-edge.com/T05DJDV4ZCG-U05CE6VMQPR-36a38f0bf37f-512",
    name: "김수빈",
    introduction: "O",
    summary: ["O", "O"],
  },
  {
    role: "Developer",
    profile:
      "https://ca.slack-edge.com/T05DJDV4ZCG-U05CE6VMQPR-36a38f0bf37f-512",
    name: "민상연",
    introduction: "O",
    summary: ["O", "O"],
  },
  {
    role: "Developer",
    profile:
      "https://ca.slack-edge.com/T05DJDV4ZCG-U05CE6VMQPR-36a38f0bf37f-512",
    name: "이율원",
    introduction: "O",
    summary: ["O", "O"],
  },
  {
    role: "Designer",
    profile:
      "https://ca.slack-edge.com/T05DJDV4ZCG-U05CE6VMQPR-36a38f0bf37f-512",
    name: "이연서",
    introduction: "O",
    summary: ["O", "O"],
  },
]

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: calc(100vh - 7.75rem);
`

const Team = (props: Props) => {
  return (
    <ProfileContainer>
      {members.map(member => {
        return (
          <ProfileCard
            role={member.role}
            profile={member.profile}
            name={member.name}
            introduction={member.introduction}
            summary={member.summary}
          />
        )
      })}
    </ProfileContainer>
  )
}

export default Team
