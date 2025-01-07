import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
// import { Preactices } from './Practices.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   {/* <Preactices/> */}
  </StrictMode>,
)
