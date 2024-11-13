// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CalculatorProvider from './providers/CalculatorProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <CalculatorProvider>
    <App />
  </CalculatorProvider>
  // </StrictMode>,
)
