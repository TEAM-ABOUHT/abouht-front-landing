import { styled } from "styled-components"
import { Logo } from "./style"

const MobileNavBar = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 16.5px;
  display: flex;
  align-items: center;
  z-index: 50;
  @media (min-width: 769px) {
    display: none;
  }
`

const MobileNav = () => {
  return (
    <MobileNavBar>
      <div
        style={{
          width: "15.42px",
          height: "12.5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ backgroundColor: "#707070", width: "100%", height: "1px" }}
        />
        <div
          style={{ backgroundColor: "#707070", width: "100%", height: "1px" }}
        />
        <div
          style={{ backgroundColor: "#707070", width: "100%", height: "1px" }}
        />
      </div>
      <Logo>로고</Logo>
    </MobileNavBar>
  )
}

export default MobileNav
