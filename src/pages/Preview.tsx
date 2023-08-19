import { useState, useEffect, useRef } from "react"
import styled from "styled-components"

const Container = styled.div`
  height: calc(100vh - 7.75rem);
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 7.75rem);
  width: 980px;
  overflow: hidden;

  @media (max-width: 980px) {
    width: 100vw;
  }

  & div {
    transition: 0.1s all ease;
  }

  & .first {
    width: 224px;
    height: 448px;
    transform: translateX(-380px);
    z-index: 1;
    opacity: 0.7;
  }
  & .second {
    width: 283px;
    height: 567px;
    transform: translateX(-200px);
    z-index: 2;
    opacity: 0.9;
  }
  & .third {
    width: 353px;
    height: 708px;
    z-index: 3;
    box-shadow: 0px 10px 6px #00000029;
  }
  & .fourth {
    width: 283px;
    height: 567px;
    transform: translateX(200px);
    z-index: 2;
    opacity: 0.9;
  }
  & .fifth {
    width: 224px;
    height: 448px;
    transform: translateX(380px);
    z-index: 1;
    opacity: 0.7;
  }
`

const Card = styled.div`
  position: absolute;
  background-color: #f8f8f8;
  box-shadow: 3px 3px 6px #00000029;
  border-radius: 45px;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Preview = () => {
  const contents = ["1", "2", "3", "4", "5"]
  const [classNames, setClassNames] = useState<string[]>(["first", "second", "third", "fourth", "fifth"])
  const refClassNames = useRef<string[]>(["first", "second", "third", "fourth", "fifth"])
  
  useEffect(() => {
    setInterval(() => {
      let newClassNames = [...refClassNames.current]
      newClassNames.unshift(newClassNames.pop()!)
      setClassNames(newClassNames)
    }, 10)
  }, [])

  useEffect(() => {
    refClassNames.current = classNames
  }, [classNames])

  return (
    <>
      <Container>
        <CardContainer>
          {classNames.map((value, index) => {
            return <Card className={value}>{contents[index]}</Card>
          })}
        </CardContainer>
      </Container>
    </>
  )
}

export default Preview
