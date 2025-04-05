import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './app.css'
import App from './App.tsx'
import CustomCursor from './components/CustomCursor/CustomCursor.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <CustomCursor /> 
      <App />
    </BrowserRouter>
  </StrictMode>,
)
