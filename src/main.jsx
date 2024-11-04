import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EcommerceTemplate from './components/EcommerceTemplate'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <EcommerceTemplate basename= "/E-COM-PRO/" />
  </StrictMode>,
)
