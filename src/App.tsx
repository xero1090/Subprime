import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import ApplicationForm from "./pages/ApplicationForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/application" element={<ApplicationForm />} />
    </Routes>
  );
}

export default App;
