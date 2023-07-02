import { styled } from "styled-components"
import { Link } from "react-router-dom"

const NavContainer = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  height: 7.75rem;
  top: 0;
  z-index: 100;
  /* background-color: #ff00ff; */
`

const Nav = styled.div`
  width: 100%;
  /* max-width: 1140px; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

const Logo = styled.div`
  width: 56px;
  height: 50px;
  font-size: 13px;
  text-align: center;
  line-height: 50px;
  color: #162840;
  background-color: #f6f5f2;
  margin-left: 2.75rem;
`

const Menu = styled.div`
  display: flex;
  gap: 3rem;
  margin-right: 2.75rem;
`

const MenuItem = styled(Link)`
  font-size: 1.125rem;
  padding: 4px 12px;
  color: white;
  text-decoration: none;
`

const Header = () => {
  return (
    <NavContainer>
      <Nav>
        <Link to="/">
          <Logo>로고</Logo>
        </Link>
        <Menu>
          <MenuItem to="/team">
            <b>Abouht</b> Team
          </MenuItem>
          <MenuItem to="/service">
            <b>Abouht</b> Service
          </MenuItem>
          <MenuItem to="/preview">Preview</MenuItem>
          <MenuItem to="/about">
            About <b>Abouht</b>
          </MenuItem>
          <MenuItem to="/download">Download</MenuItem>
        </Menu>
      </Nav>
    </NavContainer>
  )
}

export default Header
