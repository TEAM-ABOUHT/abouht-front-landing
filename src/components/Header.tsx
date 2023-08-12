import { styled } from "styled-components"
import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"
import { useState } from "react"

const NavContainer = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  height: 74px;
  top: 0;
  z-index: 100;
  background-color: var(--bg-color);
`

const Nav = styled.div`
  width: 100%;
  max-width: 980px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  &.mobile {
    display: none;
  }

  @media (max-width: 980px) {
    display: none;

    &.mobile {
      display: flex;
    }
  }
`

const Logo = styled.div`
  width: 56px;
  height: 50px;
  font-size: 13px;
  text-align: center;
  line-height: 50px;
  color: var(--bg-color);
  background-color: var(--text-color);
  margin: 0 auto;
`

const MenuItem = styled(Link)`
  padding: 4px 12px;
  color: var(--text-color);
  text-decoration: none;
`

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <NavContainer>
      <Nav className="desktop">
        <Link to="/">
          <Logo>로고</Logo>
        </Link>
        <MenuItem to="/team">
          <b>Abouht</b> Team
        </MenuItem>
        <MenuItem to="/preview">Preview</MenuItem>
        <MenuItem to="/about">
          About <b>Abouht</b>
        </MenuItem>
        <MenuItem to="/download">Download</MenuItem>
      </Nav>
      <Nav className="mobile">
        <span style={{color: "var(--text-color)", fontSize: "3rem", marginLeft: "1rem"}} onClick={() => setIsOpen(true)}>≡</span>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Link to="/">
          <Logo>로고</Logo>
        </Link>
      </Nav>
    </NavContainer>
  )
}

export default Header
