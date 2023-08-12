import { ReactNode } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Button = styled.div`
  width: 212px;
  height: 36px;
  background-color: var(--btn-color);
  box-shadow: 1px 1px 6px #00000029;
  border-radius: 5px;
  font-size: 15px;
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 980px) {
    width: 159px;
    height: 27px;
  }
`

const ButtonImg = styled.img`
  width: 1rem;
  margin-right: 0.375rem;
`

type Props = {
  src?: string
  href: string
  children: ReactNode
  style?: React.CSSProperties
}

const ImgButton = (props: Props) => {
  return (
    <Link to={props.href} style={{ textDecoration: "none" }}>
      <Button style={props.style}>
        {props.src ? <ButtonImg src={props.src} alt="" /> : <></>}
        {props.children}
      </Button>
    </Link>
  )
}

export default ImgButton
