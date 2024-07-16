//? -> Importacion de los modulos de react y react-dom/client
import React from 'react'
import ReactDOM from 'react-dom/client'

//? -> Importacion de los estilos globales
import '@Styles/index.css'

//? -> Importacion de la libreria de AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

//* -> Inicializamos la libreria de AOS
AOS.init()

//? -> Importacion de los componentes de la aplicacion
import Routes from './Routes.tsx'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={Routes}/>
  </React.StrictMode>,
)
