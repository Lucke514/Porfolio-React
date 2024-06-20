import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './Routes.tsx'
import {NextUIProvider} from '@nextui-org/react'
import { RouterProvider } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider className='dark text-foreground bg-background'>
        <RouterProvider router={Routes}/>
    </NextUIProvider>
  </React.StrictMode>,
)
