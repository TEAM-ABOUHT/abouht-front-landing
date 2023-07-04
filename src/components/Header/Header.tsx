import { styled } from "styled-components"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const NavContainer = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  height: 7.75rem;
  top: 0;
  z-index: 100;
  @media screen and (max-width: 768px) {
    height: 4rem;
  }
`

const Header = () => {
  return (
    <NavContainer>
      <DesktopNav />
      <MobileNav />
    </NavContainer>
  )
}

export default Header
