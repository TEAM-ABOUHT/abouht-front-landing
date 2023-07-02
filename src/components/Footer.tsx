import React from "react"
import { styled } from "styled-components"

const SiteGroupList = styled.div`
  display: flex;
  padding-bottom: 50px;
`

const SiteGroup = styled.ul`
  width: 170px;
  color: #f6f5f2;
  list-style: none;
  font-size: 10px;
  line-height: 20px;
  box-sizing: border-box;
`

const SiteGroupTitle = styled.div`
  padding-bottom: 5px;
  color: #f6f5f2;
`

const SiteGroupItem = styled.li`
  a {
    display: block;
    text-decoration: none;
    color: #f6f5f2;
  }
`

const Address = styled.address`
  color: #f6f5f2;
  font-size: 10px;
  line-height: 20px;
  font-style: normal;
`

const AddressCompanyName = styled.strong`
  display: block;
  padding-bottom: 16px;
  color: #f6f5f2;
  font-size: 10px;
`

const TermWrapper = styled.ul`
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 34px;
  column-gap: 34px;
  grid-row-gap: 4px;
  row-gap: 4px;
  padding: 24px 0 30px;
  list-style: none;
`

const Term = styled.li`
  a {
    font-size: 10px;
    line-height: 18px;
    text-decoration: none;
    color: #f6f5f2;
  }
`

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="p-footer p-footer--dark">
      <div className="p-footer__inner">
        <SiteGroupList>
          <SiteGroup>
            <li>
              <SiteGroupTitle>서비스</SiteGroupTitle>
            </li>
            <SiteGroupItem>
              <a href="https://toss.im/notice">공지사항</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://support.toss.im/faq">자주 묻는 질문</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://toss.im/cert">공동인증서 관리</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="http://support.toss.im/suspend">계정 일시잠금</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://support.toss.im">고객센터</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://brand.toss.im/">브랜드 리소스센터</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://privacy.toss.im">토스의 개인정보 보호</a>
            </SiteGroupItem>
          </SiteGroup>
          <SiteGroup>
            <li>
              <SiteGroupTitle>회사</SiteGroupTitle>
            </li>
            <SiteGroupItem>
              <a href="https://toss.im/team">회사 소개</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://tosspayments.com/">토스페이먼츠</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://toss.im/insurance">토스인슈어런스</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://tossinvest.com/">토스증권</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://tosscx.com">토스씨엑스</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://www.tossbank.com/">토스뱅크</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://tossplace.com/?referrer=toss_recruit_footer">
                토스플레이스
              </a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://toss.im/career">채용</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://blog.toss.im/">블로그</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://toss.im/announcement">공고</a>
            </SiteGroupItem>
          </SiteGroup>
          <SiteGroup>
            <li>
              <SiteGroupTitle>문의</SiteGroupTitle>
            </li>
            <SiteGroupItem>
              <a href="mailto:partnership@toss.im">사업 제휴</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://tossshopping.oopy.io/">공동구매 입점문의</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://ads-platform.toss.im/login">광고 문의</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://toss.im/tosscert">인증 사업 문의</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="mailto:support@toss.im">마케팅·PR</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="mailto:ir@toss.im">IR</a>
            </SiteGroupItem>
          </SiteGroup>
          <SiteGroup>
            <li>
              <SiteGroupTitle>고객센터</SiteGroupTitle>
            </li>
            <SiteGroupItem>
              <a href="tel:1599-4905">전화: 1599-4905 (24시간 연중무휴)</a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="mailto:support@toss.im">
                이메일(고객전용): support@toss.im
              </a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="mailto:safe@toss.im">
                이메일(외부기관전용): safe@toss.im
              </a>
            </SiteGroupItem>
            <SiteGroupItem>
              <a href="https://support.toss.im/customer-complaint">민원 접수</a>
            </SiteGroupItem>
          </SiteGroup>
        </SiteGroupList>
        <Address>
          <AddressCompanyName>㈜비바리퍼블리카</AddressCompanyName>
          사업자 등록번호 : 120-88-01280 | 대표 : 이승건 <br />
          호스팅 서비스 : 주식회사 비바리퍼블리카 | 통신판매업 신고번호 :
          2014-서울강남-03377
          <a
            href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1208801280"
            className="css-1bbqdsm"
          >
            사업자정보확인
          </a>
          <br />
          06236 서울특별시 강남구 테헤란로 142, 12층 (역삼동, 아크플레이스){" "}
          <br />
          고객센터 : 서울특별시 강남구 테헤란로 133, 9층 (역삼동,
          한국타이어빌딩)
        </Address>
        <TermWrapper>
          <Term>
            <a href="https://toss.im/terms">서비스 이용약관</a>
          </Term>
          <Term>
            <a href="https://toss.im/docs/500">통합 금융정보 서비스 약관</a>
          </Term>
          <Term>
            <a href="https://toss.im/docs/11567">마이데이터 서비스 이용약관</a>
          </Term>
          <Term>
            <a href="https://static-docs.toss.im/privacy/safety">
              이용자의 권리 및 유의사항
            </a>
          </Term>
          <Term>
            <a href="https://toss.im/privacy-policy">
              <strong>개인정보 처리방침</strong>
            </a>
          </Term>
          <Term>
            <a href="https://toss.im/docs/11185">
              <strong>채용팀 개인정보 처리방침</strong>
            </a>
          </Term>
          <Term>
            <a href="https://toss.im/docs/11175">
              영상정보처리기기 운영 관리 방침
            </a>
          </Term>
          <Term>
            <a href="https://toss.im/agreement/locationInfo">
              위치기반서비스 이용약관
            </a>
          </Term>
          <Term>
            <a href="https://toss.im/docs/10290">가맹점 고지사항</a>
          </Term>
          <Term>
            <a href="https://toss.im/tosscert/cps">토스 전자서명인증업무준칙</a>
          </Term>
          <Term>
            <a href="https://toss.im/docs/49">토스 전자인증서비스 약관</a>
          </Term>
          <Term>
            <a href="https://toss.im/financial-consumer-protection">
              금융소비자보호
            </a>
          </Term>
        </TermWrapper>
      </div>
    </footer>
  )
}

export default Footer
