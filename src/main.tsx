import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './Routes.tsx'
import { RouterProvider } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

//! -> Inicializamos la libreria de AOS
AOS.init()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={Routes}/>
  </React.StrictMode>,
)
