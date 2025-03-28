import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground.tsx';
import CustomCursor from './components/CustomCursor/CustomCursor.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <CustomCursor />
    <AnimatedBackground />  
      <App />
    </BrowserRouter>
  </StrictMode>,
)
