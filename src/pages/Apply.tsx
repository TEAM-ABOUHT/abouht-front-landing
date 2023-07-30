import { styled } from 'styled-components'
import ImgButton from '../components/ImgButton'

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
  color: #F6F5F2;
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
  width: 105px;
  color: #f6f5f2;
  font-size: 18px;
  display: block;
`

const FormInput = styled.input`
  color: #f6f5f2;
  background-color: #142338;
  border-radius: 5px;
  border: none;
  width: 274px;
  height: 25px;
  font-family: "GmarketSans";
  padding-left: 8px;
`

const FormAvailable = styled.span`
  font-size: 13px;
  color: #f6f5f2;
  text-align: right;
  margin-left: auto;
`

const FormButton = styled.button`
  color: #f6f5f2;
  background-color: #101c2c;
  border-radius: 5px;
  border: none;
  width: 125px;
  height: 25px;
  margin-left: auto;
  font-family: "GmarketSans";
`

const FormTextArea = styled.textarea`
  background-color: #101c2c;
  border-radius: 5px;
  border: none;
  color: #f6f5f2;
  font-size: 13px;
  padding: 8px;
  margin-top: 22px;
  font-family: "GmarketSans";
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

      <FormTitle style={{marginTop: "22px"}}>작가 소개</FormTitle>
      <FormTextArea></FormTextArea>

      <ImgButton href="/" style={{width: "100%", margin: "32px 0"}}>작가 신청하기</ImgButton>

    </Container>
  )
}

export default Apply