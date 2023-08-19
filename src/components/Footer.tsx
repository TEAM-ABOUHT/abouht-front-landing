import { Link } from "react-router-dom"
import { styled } from "styled-components"

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 3rem 0;
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
            <AddressCompanyName>㈜온보딩</AddressCompanyName>
            사업자 등록번호 : | 대표 : 민상연 <br />
            호스팅 서비스 : 주식회사 온보딩 | 통신판매업 신고번호 :
            <a
              href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1208801280"
              className="css-1bbqdsm"
            >
              사업자정보확인
            </a>
            <br />
          </Address>
          <TermWrapper>
            <Term>
              <Link to="/term">서비스 이용약관</Link>
            </Term>
            <Term>
              <Link to="/term">개인정보 처리방침</Link>
            </Term>
          </TermWrapper>
        </div>
      </FooterContents>
    </FooterContainer>
  )
}

export default Footer
