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
  font-size: 22px;
  text-align: center;
  color: var(--text-color);
  margin-top: 45px;
  margin-bottom: 35px;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 64px; */
  /* border-bottom: 1px solid rgba(112, 112, 112, 0.2); */
  padding: 8px 0;
  @media (max-width: 980px) {
    padding: 8px 1.5rem;
  }
`

const FormTitle = styled.span`
  color: var(--text-color);
  font-size: 14px;
  display: block;
`
const FormTitle1 = styled.span`
  width: 160px; 
  color: var(--text-color);
  font-size: 18px; 
  display:block;
`

const FormInput = styled.input`
  color: var(--text-color);
  background-color: var(--form-color);
  border-radius: 5px;
  border: none;
  /* width: 274px; */
  /* height: 25px; */
  font-family: var(--font-family);
  padding: 8px 12px;
  margin: 8px 0;
`

const FormAvailable = styled.span`
  font-size: 12px;
  color: var(--text-color);
  text-align: right;
  margin-left: auto;
`

const FormButton = styled.button`
  color: var(--text-color);
  background-color: var(--btn-color-dark);
  border-radius: 5px;
  border: none;
  margin-left: auto;
  font-family: var(--font-family);
  padding: 6px 10px;
`

const FormTextArea = styled.textarea`
  background-color: var(--btn-color-dark);
  border-radius: 5px;
  border: none;
  color: var(--text-color);
  font-size: 13px;
  padding: 8px;
  margin-top: 22px;
  font-family: var(--font-family);
`

const Apply = () => {
  return (
    <Container>
      <Title>작가 신청</Title>

      <FormItem>
        <FormTitle>이메일</FormTitle>
        <FormInput></FormInput>
        <FormAvailable>사용 가능 여부</FormAvailable>
      </FormItem>

      <FormItem>
        <FormTitle>비밀번호</FormTitle>
        <FormInput type="password"></FormInput>
        <FormAvailable>사용 가능 여부</FormAvailable>
      </FormItem>

      <FormItem>
        <FormTitle>이름</FormTitle>
        <FormInput></FormInput>
      </FormItem>

      <FormItem>
        <FormTitle>필명</FormTitle>
        <FormInput></FormInput>
      </FormItem>

      <FormItem>
        <FormTitle>생년월일</FormTitle>
        <FormInput></FormInput>
      </FormItem>

      <FormItem>
        <FormTitle>전화번호</FormTitle>
        <FormInput></FormInput>
        <FormButton>인증번호 발송하기</FormButton>
      </FormItem>

      <FormItem>
        <FormTitle>인증번호</FormTitle>
        <FormInput></FormInput>
      </FormItem>

      <FormItem>
        <FormTitle>성별</FormTitle>
        <FormInput></FormInput>
      </FormItem>
      
      <FormItem>
        <div>
      <FormTitle style={{ marginTop: "22px"}}>작가 한줄 소개</FormTitle>
      <span style={{ color: "#fff", fontSize: "11px"}}>200자 내외로 작가님을 소개해주세요!</span>
      </div>
      <FormTextArea></FormTextArea>
      </FormItem>

		  <FormItem style={{flexDirection: "row", marginTop: "24px"}}>
        <div>
          <FormTitle>작품 제출 </FormTitle>
          <span style={{ color: "#fff", fontSize: "11px"}}>작가님이 가지고 있는 작품을 보여주세요!</span>
        </div>
        <FormButton>제출하기</FormButton>
      </FormItem>

      <ImgButton href="/" style={{ width: "calc(100% - 3rem)", margin: "30px auto" }}>
        작가 신청하기
      </ImgButton>
    </Container>
  )
}


export default Apply
