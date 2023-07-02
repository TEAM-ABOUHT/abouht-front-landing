import { ReactNode } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Button = styled.div`
  width: 16rem;
  height: 2.6875rem;
  background-color: #f6f5f2;
  box-shadow: 1px 1px 6px #00000029;
  border-radius: 5px;
  font-size: 18px;
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ButtonImg = styled.img`
  width: 1rem;
  margin-right: 0.375rem;
`

type Props = {
  src: string
  href: string
  children: ReactNode
}

const ImgButton = (props: Props) => {
  return (
    <Link to={props.href} style={{ textDecoration: "none" }}>
      <Button>
        <ButtonImg src={props.src} alt="" />
        {props.children}
      </Button>
    </Link>
  )
}

export default ImgButton
