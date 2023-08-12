import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SideBarWrap = styled.div`
  z-index: 5;
  padding: 12px;
  border-radius: 0 15px 15px 0;
  background-color: var(--bg-color-light);
  height: 100vh;
  width: 45vw;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  transform: translateX(-55vw);
  &.open {
  transform: translateX(0);
    transition: 0.5s ease;
  }
`

const MenuContainer = styled.ul`
  text-decoration: none;
`

const MenuLink = styled(Link)`
  text-decoration: none;
`

const Menu = styled.li`
  padding: 16px 12px;
  list-style: none;
  transition: 0.1s all ease;
  color: #777;

  &:hover {
    color: #000;
    /* font-weight: bold; */
  }
`

const ExitMenu = styled.span`
  position: absolute;
  bottom: 26px;
  font-size: 0.8rem;

  .mobile {
    display: none;
  }

  @media (max-width: 980px) {
    .mobile {
      display: block;
    }

    .desktop {
      display: none;
    }
  }
`

type Props = {
  isOpen: boolean,
  setIsOpen: any
}

const Sidebar = (props: Props) => {
  const outside = useRef<any>();
 
  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);
    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  });
 
  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };
 
  const toggleSide = () => {
    props.setIsOpen(false);
  };

  return (
    <SideBarWrap id="sidebar" ref={outside} className={props.isOpen ? 'open' : ''}>
      <span onClick={toggleSide}
        onKeyDown={toggleSide}
        style={{fontSize: "2rem"}}>
      </span>
      <MenuContainer>
        <MenuLink to={'/'}>
          <Menu>Home</Menu>
        </MenuLink>
        <MenuLink to={'/About'}>
          <Menu>Abouht</Menu>
        </MenuLink>
        <MenuLink to={'/team'}>
          <Menu>Team</Menu>
        </MenuLink>
        <MenuLink to={'/UserApply'}>
          <Menu>독자 사전 가입하기</Menu>
        </MenuLink>
        
        <Menu>로그인</Menu>
        <Menu>회원가입</Menu>
        <Menu>이벤트</Menu>
        <Menu>개인정보 처리방침</Menu>
        <MenuLink to={'/Term'}>
          <Menu>이용약관</Menu>
        </MenuLink>
        <Menu>상담하기[24시간]</Menu>
        <Menu>제휴문의</Menu>
      </MenuContainer>
    </SideBarWrap>
  );
}

export default Sidebar