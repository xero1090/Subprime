import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import ApplicationForm from "./pages/ApplicationForm";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { CountryProvider } from './CountryContext';
import { JSX } from "react";

// A simple PrivateRoute component that checks for a JWT token in localStorage
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <CountryProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        {/* Optionally, redirect all unknown paths to Home or another page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </CountryProvider>
  );
}

export default App;
