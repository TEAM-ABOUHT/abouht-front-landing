import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const SideBarWrap = styled.div`
  z-index: 5;
  padding: 12px;
  border-radius: 0 15px 15px 0;
  background-color: #e7e4e1;
  height: 100vh;
  width: 40vw;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  transform: translateX(-55vw);
  &.open {
  transform: translateX(0);
    transition: 0.5s ease;
  }
`

const Menu = styled.li`
  margin: 30px 8px;
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
        X
      </span>
      <ul>
        <Menu>Home</Menu>
        <Menu>Abouht</Menu>
        <Menu>Team</Menu>
        <Menu>신청하기</Menu>
        <Menu>로그인</Menu>
        <Menu>회원가입</Menu>
        <Menu>개인정보 처리방침</Menu>
        <Menu>이용약관</Menu>
        <Menu>상담하기[24시간]</Menu>
        <Menu>제휴문의</Menu>
      </ul>
    </SideBarWrap>
  );
}

export default Sidebar