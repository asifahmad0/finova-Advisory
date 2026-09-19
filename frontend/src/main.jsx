import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Services from './componant/Services.jsx'
/*
const router =createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/services",
    element: <Services/>
  }
])
*/


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
