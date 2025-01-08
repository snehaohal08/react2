import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
// import Profile from './componenets/Profile.jsx'
// import { Preactices } from './Practices.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   {/* <Preactices/> */}
   {/* <Profile/> */}
  </StrictMode>,
)
