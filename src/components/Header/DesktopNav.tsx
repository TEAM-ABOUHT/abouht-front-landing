import { Link } from "react-router-dom"
import { DesktopNavBar, Logo, DesktopMenu, DesktopMenuItem } from "./style"

const DesktopNav = () => {
  return (
    <DesktopNavBar>
      <Link to="/">
        <Logo>로고</Logo>
      </Link>
      <DesktopMenu>
        <DesktopMenuItem to="/team">
          <b>Abouht</b> Team
        </DesktopMenuItem>
        <DesktopMenuItem to="/service">
          <b>Abouht</b> Service
        </DesktopMenuItem>
        <DesktopMenuItem to="/preview">Preview</DesktopMenuItem>
        <DesktopMenuItem to="/about">
          About <b>Abouht</b>
        </DesktopMenuItem>
        <DesktopMenuItem to="/download">Download</DesktopMenuItem>
      </DesktopMenu>
    </DesktopNavBar>
  )
}

export default DesktopNav
