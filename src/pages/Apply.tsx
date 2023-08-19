import { styled } from "styled-components"
import ImgButton from "../components/ImgButton"

const Container = styled.div`
  width: 535px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 980px) {
    width: 100%;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: var(--bg-color);
  margin-top: 45px;
  margin-bottom: 35px;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  @media (max-width: 980px) {
    padding: 8px 1.5rem;
  }
`

const FormTitle = styled.span`
  color: var(--bg-color);
  font-size: 1rem;
  display: block;
`

const FormInput = styled.input`
  color: var(--bg-color);
  background-color: var(--card-color);
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.375rem 0.625rem;
  border-radius: 0.4rem;
  font-size: 16px;
  font-family: var(--font-family);
  padding: 8px 12px;
  margin: 8px 0;
  transition: 0.2s all ease;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5rem 1rem;
    transition: 0.2s all ease;
  }
`

const FormAvailable = styled.span`
  font-size: 12px;
  color: var(--bg-color);
  text-align: right;
  margin-left: auto;
`

const FormButton = styled.button`
  color: var(--bg-color);
  background-color: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.4rem;
  margin-left: auto;
  font-family: var(--font-family);
  padding: 0.3rem 0.6rem;
  transition: 0.5s all ease;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`

const FormTextArea = styled.textarea`
  background-color: var(--card-color);
  border-radius: 5px;
  border: none;
  color: var(--bg-color);
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.375rem 0.625rem;
  padding: 8px;
  margin-top: 22px;
  font-family: var(--font-family);
  transition: 0.5s all ease;
`

const Apply = () => {
  return (
    <div style={{ backgroundColor: "var(--bg-color-light)" }}>
      <Container>
        <Title>작가 신청</Title>

        <FormItem>
          <FormInput placeholder="이메일"></FormInput>
          <FormAvailable>사용 가능 여부</FormAvailable>
        </FormItem>

        <FormItem>
          <FormInput type="password" placeholder="비밀번호"></FormInput>
          <FormAvailable>사용 가능 여부</FormAvailable>
        </FormItem>

        <FormItem>
          <FormInput placeholder="이름"></FormInput>
        </FormItem>

        <FormItem>
          <FormInput placeholder="필명"></FormInput>
        </FormItem>

        <FormItem>
          <FormInput placeholder="생년월일"></FormInput>
        </FormItem>

        <FormItem>
          <FormInput placeholder="전화번호"></FormInput>
          <FormButton>인증번호 발송하기</FormButton>
        </FormItem>

        <FormItem>
          <FormInput placeholder="인증번호"></FormInput>
        </FormItem>

        <FormItem>
          <FormInput placeholder="성별"></FormInput>
        </FormItem>

        <FormItem>
          <div>
            <FormTitle style={{ marginTop: "22px" }}>작가 한줄 소개</FormTitle>
            <span style={{ color: "#000", fontSize: "12px" }}>
              200자 내외로 작가님을 소개해주세요!
            </span>
          </div>
          <FormTextArea></FormTextArea>
        </FormItem>

        <FormItem style={{ flexDirection: "row", marginTop: "24px" }}>
          <div>
            <FormTitle>작품 제출 </FormTitle>
            <span style={{ color: "#000", fontSize: "12px" }}>
              작가님이 가지고 있는 작품을 보여주세요!
              <br />
              .PDF 또는.docx로 부탁드려요 :D{" "}
            </span>
          </div>
          <FormButton>제출하기</FormButton>
        </FormItem>

        <ImgButton
          href="/"
          style={{ width: "calc(100% - 3rem)", margin: "30px auto" }}
        >
          작가 신청하기
        </ImgButton>
      </Container>
    </div>
  )
}

export default Apply
