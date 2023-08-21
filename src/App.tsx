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
import UserApply from "./pages/UserApply"
import Launching from "./pages/Launching"
import Term from "./pages/term/Term"
import Release from "./pages/Release"
import ScrollToTop from "./hooks/ScrollToTop"
import ChannelService from "./ChannelService";

const Container = styled.div`
  width: 980px;
  margin: 0 auto;

  @media (max-width: 980px) {
    width: 100%;
    margin: 0;
  }
`

const App = () => {
	ChannelService.loadScript();
	
	ChannelService.boot({
		pluginKey: "b53f3d16-fcec-46db-b538-21f2d5e41a13",
	});
	
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/launching" element={<Launching />} />
        <Route path="/release" element={<Release />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/userapply" element={<UserApply />} />
        <Route
          path="*"
          element={
            <>
              <Header />
              <Container>
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/preview" element={<Preview />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/term" element={<Term />} />
                </Routes>
              </Container>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
