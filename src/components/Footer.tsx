import { styled } from "styled-components"

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding-top: 4rem;
`

const FooterContents = styled.div`
  width: 980px;
  margin: 0 auto;
`

const SiteGroupList = styled.div`
  display: flex;
  padding-bottom: 50px;
`

const SiteGroup = styled.ul`
  width: 170px;
  color: var(--text-color);
  list-style: none;
  font-size: 13px;
  line-height: 20px;
  box-sizing: border-box;
`

const SiteGroupTitle = styled.div`
  padding-bottom: 5px;
  color: var(--text-color);
`

const SiteGroupItem = styled.li`
  a {
    display: block;
    text-decoration: none;
    color: var(--text-color);
  }
`

const Address = styled.address`
  color: var(--text-color);
  font-size: 13px;
  line-height: 20px;
  font-style: normal;
`

const AddressCompanyName = styled.strong`
  display: block;
  padding-bottom: 16px;
  color: var(--text-color);
  font-size: 13px;
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
    font-size: 13px;
    line-height: 18px;
    text-decoration: none;
    color: var(--text-color);
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        <div className="p-footer__inner">
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
              <a href="https://toss.im/docs/11567">
                마이데이터 서비스 이용약관
              </a>
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
              <a href="https://toss.im/tosscert/cps">
                토스 전자서명인증업무준칙
              </a>
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
      </FooterContents>
    </FooterContainer>
  )
}

export default Footer
