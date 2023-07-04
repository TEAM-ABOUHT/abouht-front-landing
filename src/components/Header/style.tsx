import { Link } from "react-router-dom"
import styled from "styled-components"

const DesktopNavBar = styled.div`
  width: calc(100% - 5.5rem);
  /* max-width: 1140px; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.75rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Logo = styled.div`
  width: 56px;
  height: 50px;
  font-size: 13px;
  text-align: center;
  line-height: 50px;
  color: #162840;
  background-color: #f6f5f2;
  @media screen and (max-width: 768px) {
    width: 38px;
    height: 34px;
    font-size: 8px;
    line-height: 34px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

const DesktopMenu = styled.div`
  display: flex;
  gap: 3rem;
`

const DesktopMenuItem = styled(Link)`
  font-size: 1.125rem;
  padding: 4px 12px;
  color: white;
  text-decoration: none;
`

export { DesktopNavBar, Logo, DesktopMenu, DesktopMenuItem }
