import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Team from "./pages/Team"
import NavigationBar from "./components/NavigationBar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
