import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reusable.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
