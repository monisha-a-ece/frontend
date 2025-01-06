import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apps from './back/Apps'
// import App from './App.jsx'
 //import Moni from './WEB/Moni.jsx'
 //import Hooks from './hooks'
import Propsdrill from './Props/Propsdrill'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Propsdrill /> */}
    <Apps/>
  </StrictMode>,
)
