import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Team from "./pages/Team"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Service from "./pages/Service"
import About from "./pages/About"
import Preview from "./pages/Preview"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/service" element={<Service />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
