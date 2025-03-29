import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
//import Careers from "./pages/Careers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Careers" element={<Careers />} />
    </Routes>
  );
}

export default App;
