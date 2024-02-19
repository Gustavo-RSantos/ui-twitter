import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

// Import de Componentes

//Import do routers
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

/**
Outra forma de Importar uma imagem de outra pasta =>
import home from "./assets/home.svg"
**/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
