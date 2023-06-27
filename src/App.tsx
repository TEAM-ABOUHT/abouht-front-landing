import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
