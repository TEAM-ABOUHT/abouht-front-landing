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
  flex-direction: row;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.5);
  @media (max-width: 980px) {
    padding: 0 1.5rem;
  }
`

const FormTitle = styled.span`
  width: 120px;
  color: var(--text-color);
  font-size: 18px;
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
  width: 274px;
  height: 25px;
  font-family: var(--font-family);
  padding-left: 8px;
`

const FormAvailable = styled.span`
  font-size: 13px;
  color: var(--text-color);
  text-align: right;
  margin-left: auto;
`

const FormButton = styled.button`
  color: var(--text-color);
  background-color: var(--btn-color-dark);
  border-radius: 5px;
  border: none;
  width: 125px;
  height: 25px;
  margin-left: auto;
  font-family: var(--font-family);
`
const FormButton1= styled.button`
  color: var(--text-color);
  background-color: var(--btn-color-dark);
  border-radius: 0px;
  border: none;
  width: 125px;
  height: 25px;
  margin-left: auto;
  font-family: var(--font-family);
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

const UserApply = () => {
  return (
    <Container>
      <Title>독자 사전 가입</Title>

      <FormItem>
        <FormTitle>이름</FormTitle>
        <FormInput></FormInput>
      </FormItem>

      <FormItem>
        <FormTitle>닉네임</FormTitle>
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
    
    </Container>
  )
}

export default UserApply
