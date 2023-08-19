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

  & div:nth-child(1) {
    width: 224px;
    height: 448px;
    transform: translateX(-380px);
    z-index: 1;
    opacity: 0.7;
  }
  & div:nth-child(2) {
    width: 283px;
    height: 567px;
    transform: translateX(-200px);
    z-index: 2;
    opacity: 0.9;
  }
  & div:nth-child(3) {
    width: 353px;
    height: 708px;
    z-index: 3;
    box-shadow: 0px 10px 6px #00000029;
  }
  & div:nth-child(4) {
    width: 283px;
    height: 567px;
    transform: translateX(200px);
    z-index: 2;
    opacity: 0.9;
  }
  & div:nth-child(5) {
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
`

const Preview = () => {
  const cardContents = ["1", "2", "3", "4", "5"]

  useEffect(() => {

  }, [cardContents])

  return (
    <>
      <Container>
        <CardContainer>
          {cardContents.map((value) => {
            return <Card>{value}</Card>
          })}
        </CardContainer>
      </Container>
    </>
  )
}

export default Preview
