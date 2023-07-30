import { BrowserRouter, Routes, Route } from "react-router-dom"
import { styled } from "styled-components"
import Landing from "./pages/Landing"
import Team from "./pages/Team"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Service from "./pages/Service"
import About from "./pages/About"
import Preview from "./pages/Preview"
import Apply from "./pages/Apply"

const Container = styled.div`
  width: 980px;
  margin: 0 auto;

  @media (max-width: 980px) {
    width: 100%;
    margin: 0;
  }
`

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/service" element={<Service />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
